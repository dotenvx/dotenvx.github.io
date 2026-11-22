require_relative 'llms_exports'
require 'nokogiri'

# Convert the resolved page content, including shared HTML components, to Markdown.
module MainMarkdownExport
  RETIRED_QUICKSTART_PAGES = %w[deploy install-alternatives protect without-nodejs].freeze

  def self.paths_for(url)
    return ['index.md'] if url == '/'

    path = url.delete_prefix('/')
    destinations = ["#{path.delete_suffix('/').delete_suffix('.html')}.md"]
    destinations << "#{path}index.md" if path.end_with?('/')
    destinations
  end

  class Html < Kramdown::Converter::Html
    def convert_codeblock(element, indent)
      language = element.options[:lang] || extract_code_language(element.attr)
      %(<pre data-export-language="#{escape_html(language.to_s)}"><code>#{escape_html(element.value)}</code></pre>)
    end
  end

  def self.convert(html)
    document = Nokogiri::HTML.fragment(html)
    document.css('script, style, button, .membership-section-mobile, .pricing-plan-label-short, .sr-only, .spec-tip-panel, [data-env-slab]').remove
    blocks = document.css('pre').map.with_index do |node, index|
      block = render(node)
      node.replace("<p>MAIN_CODE_BLOCK_#{index}</p>")
      block.strip
    end
    output = render(document).gsub(/[ \t]+\n/, "\n").gsub(/\n{3,}/, "\n\n").strip
    blocks.each_with_index { |block, index| output = output.sub("MAIN_CODE_BLOCK_#{index}", block) }
    output + "\n"
  end

  def self.children(node)
    node.children.map { |child| render(child) }.join
  end

  def self.inline(node)
    children(node).gsub(/\s+/, ' ').strip
  end

  def self.render(node)
    if node.text?
      text = node.text.gsub(/\s+/, ' ')
      return text.gsub('<', '&lt;') if text.include?('<') && node.ancestors('a').any?

      return text
    end
    return '' if node.comment?

    case node.name
    when 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
      "\n\n#{'#' * node.name[1].to_i} #{inline(node)}\n\n"
    when 'pre'
      code = node.at_css('code')
      text = (code || node).text.sub(/\n\z/, '')
      language = node['data-export-language'] || (node['class'].to_s + ' ' + code&.[]('class').to_s)[/language-([\w+-]+)/, 1]
      fence = '`' * [3, text.scan(/`+/).map(&:length).max.to_i + 1].max
      "\n\n#{fence}#{language}\n#{text}\n#{fence}\n\n"
    when 'code'
      fence = '`' * [1, node.text.scan(/`+/).map(&:length).max.to_i + 1].max
      "#{fence}#{node.text}#{fence}"
    when 'a'
      label = inline(node)
      label.empty? ? '' : "[#{label}](#{node['href']})"
    when 'img'
      "![#{node['alt']}](#{node['src']})"
    when 'iframe'
      href = node['src']
      href.to_s.empty? ? '' : "\n\n[View embedded document](#{href})\n\n"
    when 'strong', 'b' then "**#{inline(node)}**"
    when 'em', 'i' then "*#{inline(node)}*"
    when 'br'
      node.ancestors('li').empty? ? "\n" : "<br>\n"
    when 'hr' then "\n\n---\n\n"
    when 'ul', 'ol'
      items = node.element_children.select { |child| child.name == 'li' }
      lines = items.each_with_index.map do |item, index|
        marker = node.name == 'ol' ? "#{index + 1}. " : '- '
        text = children(item).strip.gsub(/<br>\n */, "<br>\n").gsub("\n", "\n#{' ' * marker.length}")
        "#{marker}#{text}\n"
      end
      "\n\n#{lines.join}\n"
    when 'table'
      title_row = node.at_css('thead > tr.main-table-title')
      title = "**#{inline(title_row)}**\n\n" if title_row
      title_row&.remove
      rows = node.css('tr').map do |row|
        row.element_children.select { |cell| %w[th td].include?(cell.name) }.map { |cell| inline(cell).gsub('|', '\\|') }
      end
      width = rows.map(&:length).max || 0
      return '' if width.zero?
      rows.each { |row| row.fill('', row.length...width) }
      rows.insert(1, Array.new(width, '---'))
      "\n\n#{title}" + rows.map { |row| "| #{row.join(' | ')} |" }.join("\n") + "\n\n"
    when 'svg' then ''
    when 'span'
      return " #{children(node)}" if node['class'].to_s.split.include?('membership-plan-price')
      node['class'].to_s.split.include?('design-check') ? '✓' : children(node)
    when 'blockquote'
      "\n\n" + children(node).strip.split("\n", -1).map { |line| line.empty? ? '>' : "> #{line}" }.join("\n") + "\n\n"
    when 'form'
      href = node['data-markdown-href']
      href ? "\n\n[Subscribe](#{href})\n\n" : children(node)
    when 'section'
      if node.matches?('.design-secrets-artifact')
        fields = node.css('.design-secret-pair').map do |row|
          name = row.at_css('.design-secret-key')['value']
          value = row.at_css('.design-secret-value')['value']
          "#{name}=#{value.inspect}"
        end
        "\n\n```dotenv\n#{fields.join("\n")}\n```\n\n"
      else
        "\n\n#{children(node)}\n\n"
      end
    when 'p', 'div', 'figure'
      "\n\n#{children(node)}\n\n"
    else children(node)
    end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  by_url = {}
  files = {}
  (site.pages + site.docs_to_write).each do |page|
    next unless (markdown = page.data['main_markdown'])

    by_url[page.url] = markdown
    [page.url, page.data['main_previous_url']].compact.each do |url|
      MainMarkdownExport.paths_for(url).each { |path| files[path] = markdown }
    end
  end

  redirects = site.data.fetch('redirects', {})
  MainMarkdownExport::RETIRED_QUICKSTART_PAGES.each do |slug|
    url = "/docs/quickstart/#{slug}/"
    destination = redirects[url]&.split('#', 2)&.first
    files[MainMarkdownExport.paths_for(url).first] = by_url[destination] if by_url.key?(destination)
  end

  files.each do |relative_path, markdown|
    path = File.join(site.dest, relative_path)
    FileUtils.mkdir_p(File.dirname(path))
    RawMarkdownExports.write(path, markdown)
  end

  index = File.read(site.in_source_dir('llms.txt'))
  full = LlmsExports.render(by_url, site.config.fetch('url'), index)
  RawMarkdownExports.write(File.join(site.dest, 'llms-full.txt'), full)
end
