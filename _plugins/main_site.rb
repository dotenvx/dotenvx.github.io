require_relative 'raw_markdown_exports'
require_relative 'design_codeblock'
require 'kramdown-parser-gfm'
require 'nokogiri'
require_relative 'main_markdown_export'
require 'addressable/uri'
require 'cgi'
require 'json'

class MainMarkdown < Kramdown::Converter::Html
  private

  def marker(text, class_name = 'main-markdown-syntax')
    %(<span class="#{class_name}" aria-hidden="true">#{escape_html(text)}</span>)
  end

  def convert_header(element, indent)
    level = element.options.fetch(:level)
    class_name = level <= 2 ? 'main-markdown-syntax' : 'main-markdown-detail'
    super.sub(/<h[1-6]\b[^>]*>/) { |tag| tag + marker('#' * level + ' ', class_name) }
  end

  def convert_a(element, indent)
    label = marker('[') + %(<span class="main-link-label">#{inner(element, indent)}</span>) + marker(']')
    destination = element.attr.fetch('href').gsub(/[\\()]/) { |character| "\\#{character}" }
    format_as_span_html('a', element.attr, label + marker("(#{destination})", 'main-markdown-detail'))
  end

  def convert_em(element, indent)
    syntax = marker(element.type == :strong ? '**' : '*', 'main-markdown-detail')
    format_as_span_html(element.type, element.attr, syntax + inner(element, indent) + syntax)
  end
  alias convert_strong convert_em

  def convert_codespan(element, indent)
    fence = '`' * (element.value.scan(/`+/).map(&:length).max.to_i + 1)
    fence = "#{fence} " if element.value.start_with?('`')
    closing = fence.strip
    closing = " #{closing}" if element.value.end_with?('`')
    marker(fence) + super + marker(closing)
  end

  def convert_codeblock(element, indent)
    html = super
    return html unless element.options[:fenced]

    language = element.options[:lang] || extract_code_language(element.attr)
    fence = '`' * [3, element.value.scan(/^`+/).map(&:length).max.to_i + 1].max
    html.sub('<code>', "#{marker(fence)}#{marker(language.to_s, 'main-markdown-detail')}\n<code>")
      .sub('</code>', "</code>\n#{marker(fence)}")
  end
end

class MainSite < Jekyll::Generator
  priority :lowest # Use the canonical URLs, aliases, and metadata prepared by the other generators.

  def generate(site)
    links = canonical_links(site)
    home = site.pages.find { |page| page.url == '/' }
    source = File.read(site.in_source_dir('index.md'))
    markdown = RawMarkdownExports.homepage_markdown(source, site)
    publish(site, home, "# Dotenvx\n\n#{markdown}", links)

    %w[pricing about armor opensource corporate legal privacy terms changelog blog newsletter pricing-old docs/install docs/quickstart docs/advanced docs/cli docs/sdk docs/guides docs careers careers/agent-engineer careers/corporate-sponsorships members/watt members/supermemory search sitemap 404.html].each do |slug|
      page = site.pages.find { |candidate| candidate.url.delete_suffix('/') == "/#{slug}" && candidate.data['layout'] != 'redirect' }
      content = render_source(site, page, page.content)
      publish(site, page, titled_markdown(page, content), links)
    end

    docs_pages = site.pages.select do |page|
      page.url.start_with?('/docs/') && page.output_ext == '.html' &&
        page.data['layout'] != 'redirect' && !page.data['main_markdown'] && !page.data['redirect_to']
    end
    cli_pages = docs_pages.select { |page| page.url.start_with?('/docs/cli/') }
    sdk_pages = docs_pages.select { |page| page.url.start_with?('/docs/sdk/') }
    custody_pages = docs_pages.select { |page| page.url.start_with?('/docs/custody/') }
    toml_pages = docs_pages.select { |page| page.url.start_with?('/docs/dotenv-toml/') }
    guide_index = site.pages.find { |page| page.url == '/docs/guides/' }
    guide_pages = guide_reference_pages(guide_index, docs_pages)
    reference_pages = cli_pages + sdk_pages + custody_pages + toml_pages + guide_pages
    resource_urls = site.data.fetch('docs_resources').map { |resource| resource.fetch('href') }
    resource_pages = (docs_pages - reference_pages).select do |page|
      page.url == '/docs/resources/' || resource_urls.include?(page.url)
    end

    publish_docs(site, cli_pages, links, 'main-cli-reference.md')
    publish_docs(site, sdk_pages, links, 'main-cli-reference.md', frame_context: { 'sdk_reference' => true })
    publish_docs(site, custody_pages, links, 'main-custody.md')
    publish_docs(site, toml_pages, links, 'main-cli-reference.md', frame_context: { 'toml_reference' => true })
    publish_docs(site, guide_pages, links, 'main-guide.md', metadata: { 'main_guide' => true })
    publish_docs(site, resource_pages, links, 'main-guide.md')

    publish_blog_posts(site, links)
    (site.pages + site.docs_to_write).dup.each do |page|
      next unless page.output_ext == '.html' && !page.data['main_markdown']
      next if page.data['layout'] == 'redirect' || page.data['redirect_to']

      content = render_source(site, page, page.content)
      publish(site, page, titled_markdown(page, content), links)
    end
    redirect_preview_urls(site)
  end

  private

  def render_source(site, page, source)
    site.liquid_renderer.file(page.path).parse(source).render!(
      { 'page' => page.to_liquid, 'site' => site.site_payload['site'] },
      registers: { site: site, page: page.to_liquid }
    )
  end

  def titled_markdown(page, content)
    title = page.data['main_title'] || page.data.fetch('title')
    "# #{CGI.escapeHTML(title)}\n\n#{content.strip}"
  end

  def guide_reference_pages(index, docs_pages)
    roots = index.data.fetch('guide_sections').flat_map do |section|
      section.fetch('links').map { |link| link.fetch('href').delete_suffix('/') }
    end.uniq
    roots.delete('/docs/quickstart') # Quickstart has its own main content.
    docs_pages.select do |page|
      parent = page.data['parent_url'].to_s.split(/(?=[?#])/, 2).first&.delete_suffix('/')
      url = page.url.delete_suffix('/')
      roots.include?(parent) || roots.any? { |root| url == root || url.start_with?("#{root}/") }
    end
  end

  def canonical_links(site)
    links = {}
    (site.pages + site.docs_to_write).each do |page|
      next if page.output_ext != '.html' || page.data['layout'] == 'redirect' || page.data['redirect_to']

      links[page.url] = page.url
      next if page.url == '/' || File.extname(page.url) != ''

      slug = page.url.delete_suffix('/')
      links[slug] = links["#{slug}/"] = page.url
    end

    origin = site.config.fetch('url').delete_suffix('/')
    base = site.config.fetch('baseurl', '').to_s.delete_suffix('/')
    site.pages.each do |page|
      target = page.data.dig('redirect', 'to')
      next unless target&.start_with?("#{origin}#{base}/")

      path, suffix = target.delete_prefix("#{origin}#{base}").split(/(?=[?#])/, 2)
      destination = links[path]
      links[page.url] = "#{destination}#{suffix}" if destination
    end
    links
  end

  def publish_docs(site, pages, links, frame_file, frame_context: {}, metadata: {})
    frame = site.liquid_renderer.file(frame_file).parse("{% include #{frame_file} %}")
    shared_context = { 'site' => site.site_payload['site'] }.merge(frame_context)
    pages.each do |page|
      context = shared_context.merge('page' => page.to_liquid, 'docs_body' => render_source(site, page, page.content))
      content = frame.render!(context, registers: { site: site, page: context['page'] })
      publish(site, page, titled_markdown(page, content), links, metadata: metadata)
    end
  end

  def publish_blog_posts(site, links)
    frame = site.liquid_renderer.file('main blog post').parse('{% include components/blog/main-post.html %}')
    site.categories.fetch('blog', []).reject { |post| post.data['draft'] == true }.each do |post|
      context = {
        'page' => post.to_liquid, 'site' => site.site_payload['site'],
        'post_content' => render_source(site, post, post.content)
      }
      content = frame.render!(context, registers: { site: site, page: context['page'] })
      publish(site, post, titled_markdown(post, content), links, metadata: { 'main_blog_post' => true, 'main_layout' => 'single' })
    end
  end

  def remap_links(html, links, site)
    origin = site.config.fetch('url').delete_suffix('/')
    base = site.config.fetch('baseurl', '').to_s.delete_suffix('/')
    document = Nokogiri::HTML.fragment(html)
    document.css('a[href]').each do |link|
      path, suffix = link['href'].delete_prefix(origin).split(/(?=[?#])/, 2)
      next unless path&.start_with?('/')
      path = path.delete_prefix(base) if path.start_with?("#{base}/")
      destination = links[path]
      next unless destination

      dest_path, dest_suffix = destination.split(/(?=[?#])/, 2)
      href = "#{base}#{dest_path}#{suffix || dest_suffix}"
      link['href'] = href
      marker = link.element_children.last
      marker.content = "(#{href.gsub(/[\\()]/) { |character| "\\#{character}" }})" if marker&.[]('class') == 'main-markdown-detail'
    end
    document.to_html
  end

  def redirect_preview_urls(site)
    pages = (site.pages + site.docs_to_write).select { |page| page.data['main_markdown'] && page.url != '/404.html' }
    redirects = pages.map do |page|
      path = page.url
      path = "#{path}/" if !path.end_with?('/') && File.extname(path).empty?
      page.data['main_previous_url'] = "/v2#{path}"
      JekyllRedirectFrom::RedirectPage.from_paths(site, page.data.fetch('main_previous_url'), page.url)
    end
    site.pages.concat(redirects)
    index = site.pages.find { |page| page.url == '/redirects.json' }
    if index
      aliases = redirects.to_h { |page| [page.redirect_from, page.redirect_to] }
      index.content = JSON.parse(index.content).merge(aliases).to_json
    end
  end

  def strip_description_period(document)
    description = document.root.children.drop(1).find { |element| element.type != :blank }
    description = description.children.last if description&.type == :blockquote
    return unless description&.type == :p

    text = description.children.last
    return unless text&.type == :text

    text.value = text.value.sub(/(?<!\.)\.\z/, '')
  end

  def lead_share_image(site, page, html)
    return if page.data['og_image'] == false || !html.match?(/<img\b/i)

    selector = page.data['main_blog_post'] ? 'img[src]' : 'img.main-image[src]'
    image = Nokogiri::HTML.fragment(html).css(selector).find do |node|
      node['src'].strip.match?(%r{\A(?:https?://[^/?#\s]|[^:?#]+(?:[/?#]|\z))}i)
    end
    return unless image

    path = image['src'].strip
    if path.start_with?('//')
      path = "#{Addressable::URI.parse(site.config.fetch('url')).scheme}:#{path}"
    elsif path.start_with?('/')
      baseurl = site.config.fetch('baseurl', '').to_s.delete_suffix('/')
      path = path.delete_prefix(baseurl) if path.start_with?("#{baseurl}/")
    elsif !path.match?(%r{\Ahttps?://}i)
      origin = site.config.fetch('url').delete_suffix('/')
      path = Addressable::URI.join("#{origin}#{page.url}", path).request_uri
    end
    metadata = { 'path' => path }
    %w[width height].each do |dimension|
      value = image[dimension].to_s
      metadata[dimension] = value.to_i if value.match?(/\A[1-9]\d*\z/)
    end
    alt = image['alt'].to_s.strip
    alt = page.data['title'].to_s if alt.empty? && page.data['main_blog_post']
    metadata['alt'] = CGI.escapeHTML(alt) unless alt.empty?
    metadata
  end

  def publish(site, source, markdown, links, metadata: {})
    permalink = source.url
    document = Kramdown::Document.new(markdown, site.config.fetch('kramdown'))
    if source.data['cli_heading']
      # Keep the original heading's anchor while changing its displayed text.
      heading = document.root.children.first
      heading.children.replace([Kramdown::Element.new(:text, source.data['cli_heading'])])
    end
    if metadata['main_blog_post']
      document.root.children.drop(1).each do |element|
        element.options[:level] = element.options[:level].clamp(2, 3) if element.type == :header
      end
    else
      strip_description_period(document)
    end
    export_html, = MainMarkdownExport::Html.convert(document.root, document.options)
    html, = MainMarkdown.convert(document.root, document.options)
    html = remap_links(html, links, site)
    heading = html[/\A\s*<h1\b.*?<\/h1>/m]
    html = html.delete_prefix(heading) if heading
    markdown_url = "/#{MainMarkdownExport.paths_for(permalink).first}"
    main_layout = metadata['main_layout'] || source.data.fetch('main_layout', 'columns')
    unless %w[single two-columns columns wide].include?(main_layout)
      raise ArgumentError, "Unknown main_layout #{main_layout.inspect} for #{permalink}"
    end

    if source.is_a?(Jekyll::Document)
      page = source
      # Leave the original post body available to Jekyll Feed.
      page.data['main_page_content'] = html
    else
      path = permalink.delete_prefix('/')
      directory, filename = permalink.end_with?('/') ? [path.delete_suffix('/'), 'index.html'] : File.split(path)
      filename = "#{filename}.html" unless filename.end_with?('.html')
      page = Jekyll::PageWithoutAFile.new(site, site.source, directory, filename)
      page.data = source.data.dup
      page.content = html
      page.data['render_with_liquid'] = false
      site.pages[site.pages.index(source)] = page
    end

    page.data.merge!(
      'layout' => 'default',
      'main_layout' => main_layout,
      'main_markdown' => MainMarkdownExport.convert(remap_links(export_html, links, site)),
      'main_heading' => heading,
      'main_markdown_url' => markdown_url,
      'permalink' => permalink
    ).merge!(metadata)
    share_image = lead_share_image(site, page, html)
    page.data['image'] = share_image if share_image
    page
  end
end
