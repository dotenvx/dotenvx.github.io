require_relative 'raw_markdown_exports'
require_relative 'design_codeblock'
require 'kramdown-parser-gfm'
require 'nokogiri'
require_relative 'writer_markdown_export'

class WriterMarkdown < Kramdown::Converter::Html
  private

  def marker(text, class_name = 'writer-markdown-syntax')
    %(<span class="#{class_name}" aria-hidden="true">#{escape_html(text)}</span>)
  end

  def convert_header(element, indent)
    level = element.options.fetch(:level)
    class_name = level <= 2 ? 'writer-markdown-syntax' : 'writer-markdown-detail'
    super.sub(/<h[1-6]\b[^>]*>/) { |tag| tag + marker('#' * level + ' ', class_name) }
  end

  def convert_a(element, indent)
    label = marker('[') + %(<span class="writer-link-label">#{inner(element, indent)}</span>) + marker(']')
    destination = element.attr.fetch('href').gsub(/[\\()]/) { |character| "\\#{character}" }
    format_as_span_html('a', element.attr, label + marker("(#{destination})", 'writer-markdown-detail'))
  end

  def convert_em(element, indent)
    syntax = marker(element.type == :strong ? '**' : '*', 'writer-markdown-detail')
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
    html.sub('<code>', "#{marker(fence)}#{marker(language.to_s, 'writer-markdown-detail')}\n<code>")
      .sub('</code>', "</code>\n#{marker(fence)}")
  end
end

class WriterPreview < Jekyll::Generator
  priority :lowest # The sitemap consumes the tree built by SitemapTreeGenerator.

  def generate(site)
    source = File.read(site.in_source_dir('index.md'))
    markdown = "# Dotenvx\n\n#{RawMarkdownExports.homepage_markdown(source, site, writer_preview: true)}"
    home = site.pages.find { |page| page.path == 'index.md' }
    add_preview(site, '/v2/', 'Dotenvx · v2 preview', markdown, home&.data&.fetch('writer_layout', 'auto'))

    agents = site.pages.find { |page| page.url == '/agents' }
    title = agents.data.fetch('title')
    agents_intro = site.liquid_renderer.file('v2 agents hero').parse(
      "{{ description }}\n\n{% include components/agents-proof.html %}"
    ).render!(
      { 'description' => agents.data.fetch('description'), 'writer_preview' => true, 'site' => site.site_payload['site'] },
      registers: { site: site }
    )
    add_preview(site, '/v2/agents/', title, "# #{title}\n\n#{agents_intro}\n\n#{agents.content}", agents.data.fetch('writer_layout', 'auto'))
    pricing = File.read(site.in_source_dir('_includes/writer-pricing.md'))
    pricing = site.liquid_renderer.file('_includes/writer-pricing.md').parse(pricing).render!(
      { 'writer_preview' => true, 'site' => site.site_payload['site'] }, registers: { site: site }
    )
    pricing_page = site.pages.find { |page| page.url.delete_suffix('/') == '/pricing' }
    add_preview(site, '/v2/pricing/', 'Pricing', pricing, pricing_page.data.fetch('writer_layout', 'wide'))

    add_blog_posts(site)

    %w[about corporate legal privacy terms changelog blog careers careers/agent-engineer careers/corporate-sponsorships members/watt members/supermemory sitemap].each do |slug|
      page = site.pages.find { |candidate| candidate.url.delete_suffix('/') == "/#{slug}" }
      title = page.data.fetch('title')
      template = site.liquid_renderer.file(page.path).parse(page.content)
      context = { 'writer_preview' => true, 'page' => page.to_liquid, 'site' => site.site_payload['site'] }
      context['sitemap_links'] = sitemap_links(site.pages) if slug == 'sitemap'
      content = template.render!(context, registers: { site: site })
      add_preview(site, "/v2/#{slug}/", title, "# #{title}\n\n#{content.strip}", page.data.fetch('writer_layout', 'auto'))
    end
  end

  private

  def add_blog_posts(site)
    posts = site.categories.fetch('blog', []).reject { |post| post.data['draft'] == true }
    links = { '/blog' => '/v2/blog/', '/blog/' => '/v2/blog/' }
    posts.each { |post| links[post.url] = "/v2#{post.url}" }

    frame = site.liquid_renderer.file('v2 blog post').parse('{% include components/blog/writer-post.html %}')
    posts.each do |post|
      context = { 'writer_preview' => true, 'page' => post.to_liquid, 'site' => site.site_payload['site'] }
      registers = { site: site, page: context['page'] }
      template = site.liquid_renderer.file(post.relative_path).parse(post.content)
      context['post_content'] = template.render!(context, registers: registers)
      title = post.data.fetch('title')
      body = frame.render!(context, registers: registers)
      add_preview(site, links.fetch(post.url), title, "# #{title}\n\n#{body.strip}", 'single', blog_links: links)
    end
  end

  def remap_blog_links(html, links, site_url)
    document = Nokogiri::HTML.fragment(html)
    document.css('a[href]').each do |link|
      path, suffix = link['href'].delete_prefix(site_url).split(/(?=[?#])/, 2)
      destination = links[path]
      next unless destination

      href = "#{destination}#{suffix}"
      link['href'] = href
      marker = link.element_children.last
      marker.content = "(#{href.gsub(/[\\()]/) { |character| "\\#{character}" }})" if marker&.[]('class') == 'writer-markdown-detail'
    end
    document.to_html
  end

  def sitemap_links(pages)
    pages.each_with_object({}) do |page, links|
      url = page.url
      next unless url.start_with?('/v2/')

      path = url.delete_prefix('/v2').delete_suffix('/')
      links[path] = url
      links["#{path}/"] = url
    end
  end

  def add_preview(site, permalink, title, markdown, writer_layout = 'auto', blog_links: nil)
    unless blog_links
      markdown = markdown.gsub('Dotenvxfile', 'Dotenvx.toml')
      title = title.gsub('Dotenvxfile', 'Dotenvx.toml')
    end
    path = permalink.delete_prefix('/')
    directory, filename = path.end_with?('/') ? [path.delete_suffix('/'), 'index.html'] : File.split(path)
    preview = Jekyll::PageWithoutAFile.new(site, site.source, directory, filename)
    document = Kramdown::Document.new(markdown, site.config.fetch('kramdown'))
    if blog_links
      document.root.children.drop(1).each do |element|
        element.options[:level] = element.options[:level].clamp(2, 3) if element.type == :header
      end
    end
    export_html, = WriterMarkdownExport::Html.convert(document.root, document.options)
    preview.content, = WriterMarkdown.convert(document.root, document.options)
    if blog_links
      site_url = site.config.fetch('url').delete_suffix('/')
      export_html = remap_blog_links(export_html, blog_links, site_url)
      preview.content = remap_blog_links(preview.content, blog_links, site_url)
    end
    raw_markdown = WriterMarkdownExport.convert(export_html)
    heading = preview.content[/\A\s*<h1\b.*?<\/h1>/m]
    preview.content = preview.content.delete_prefix(heading) if heading
    markdown_url = permalink == '/v2/' ? '/v2/index.md' : "#{permalink.delete_suffix('/').delete_suffix('.html')}.md"
    unless %w[auto single columns wide].include?(writer_layout)
      raise ArgumentError, "Unknown writer_layout #{writer_layout.inspect} for #{permalink}"
    end
    if writer_layout == 'auto'
      content = Nokogiri::HTML.fragment(preview.content)
      content.css('script, style, .writer-markdown-syntax, .writer-markdown-detail').remove
      words = content.text.split.length
      writer_layout = words < 250 ? 'single' : 'columns'
    end
    preview.data.merge!(
      'layout' => 'writer',
      'writer_layout' => writer_layout,
      'writer_markdown' => raw_markdown,
      'writer_heading' => heading,
      'writer_markdown_url' => markdown_url,
      'writer_blog_post' => !blog_links.nil?,
      'title' => title,
      'permalink' => permalink,
      'render_with_liquid' => false,
      'sitemap' => false
    )
    site.pages << preview
  end

end
