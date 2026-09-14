# Regenerate after adding or moving docs: ruby scripts/build-docs-navigation.rb
require 'yaml'
require 'json'
require 'date'
root = File.expand_path('..', __dir__)
pages = Dir[File.join(root, 'docs/**/*.md')].filter_map do |file|
  front = File.read(file)[/\A---\s*\n(.*?)\n---/m, 1]
  next unless front
  data = YAML.safe_load(front, permitted_classes: [Date, Time], aliases: true)
  next if data['redirect_to'] || data['sitemap'] == false
  next if data['title'].to_s.match?(/deprecat|old format/i)
  url = data['permalink'] || '/' + file.delete_prefix(root + '/').sub(/index\.md$/, '').sub(/\.md$/, '/')
  url += '/' unless url.end_with?('/')
  data.merge('url' => url)
end
pages = pages.uniq { |p| p['url'] }
by_url = pages.to_h { |p| [p['url'], p] }
nodes = pages.to_h { |p| [p['url'], {'label' => p['title'], 'href' => p['url'], 'children' => []}] }
parents = {}
pages.each do |p|
  Array(p['options']).each do |option|
    url = option['href'].to_s.sub(%r{/$}, '') + '/'
    parents[url] ||= p['url'] if by_url[url] && url != p['url']
  end
end
pages.each do |p|
  next if parents[p['url']]
  explicit = p['eyebrow_href'].to_s.sub(%r{/$}, '') + '/'
  if by_url[explicit] && explicit != p['url'] && p['layout'] == 'docs-cli'
    parents[p['url']] = explicit
  elsif p['url'].start_with?('/docs/cli/', '/docs/sdk/')
    ancestor = by_url.keys.select { |url| url != p['url'] && p['url'].start_with?(url) }.max_by(&:length)
    parents[p['url']] = ancestor if ancestor && !['/docs/cli/', '/docs/sdk/'].include?(ancestor)
  end
end
# Guard against accidental cycles in cross-linked option lists.
parents.keys.each do |url|
  seen = [url]; cursor = parents[url]
  while cursor
    if seen.include?(cursor)
      parents.delete(url); break
    end
    seen << cursor; cursor = parents[cursor]
  end
end
parents.each { |url, parent| nodes[parent]['children'] << nodes[url] }
groups = ['Start here', 'Quickstarts', 'CLI reference', 'SDKs', 'Guides & deployment', 'Files & reference'].to_h { |label| [label, []] }
pages.each do |p|
  next if parents[p['url']]
  url = p['url']
  group = if ['/docs/introduction/', '/docs/quickstarts/', '/docs/learn/installing/'].include?(url) then 'Start here'
    elsif p['layout'] == 'docs-quickstart' then 'Quickstarts'
    elsif url.start_with?('/docs/cli/') then 'CLI reference'
    elsif url.start_with?('/docs/sdk/') then 'SDKs'
    elsif url.match?(%r{/docs/(learn|platforms|armor|quickstart|package-managers|process-managers|background-jobs)/}) then 'Guides & deployment'
    else 'Files & reference' end
  groups[group] << nodes[url]
end
sort_nodes = lambda do |items|
  items.sort_by! { |n| n['label'].to_s.downcase }
  items.each { |n| sort_nodes.call(n['children']) }
end
groups.each_value { |items| sort_nodes.call(items) }
output = groups.map { |label, children| {'label' => label, 'children' => children} }
File.write(File.join(root, '_data/docs_navigation.json'), JSON.pretty_generate(output) + "\n")
puts "Grouped #{pages.size} docs pages"
