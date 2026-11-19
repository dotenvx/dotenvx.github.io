require_relative 'raw_markdown_exports'
require_relative 'design_codeblock'
require 'kramdown-parser-gfm'
require 'nokogiri'
require_relative 'writer_markdown_export'
require_relative 'cli_nav'
require 'cgi'

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

    docs_pages = site.pages.select do |page|
      page.url.start_with?('/docs/') && page.output_ext == '.html' &&
        page.data['layout'] != 'redirect' && !page.data['redirect_to']
    end
    cli_pages = docs_pages.select { |page| page.url.start_with?('/docs/cli/') && page.url != '/docs/cli/' }
    sdk_pages = docs_pages.select { |page| page.url.start_with?('/docs/sdk/') && page.url != '/docs/sdk/' }
    custody_pages = docs_pages.select { |page| page.url.start_with?('/docs/custody/') }
    toml_pages = docs_pages.select { |page| page.url.start_with?('/docs/dotenvxtoml/') }
    guide_pages = guide_reference_pages(docs_pages)
    reference_pages = cli_pages + sdk_pages + custody_pages + toml_pages + guide_pages
    resource_urls = site.data.fetch('docs_resources').map { |resource| resource.fetch('href') }
    resource_pages = (docs_pages - reference_pages).select do |page|
      page.url == '/docs/resources/' || resource_urls.include?(page.url)
    end
    reference_links = docs_reference_links(site, reference_pages + resource_pages)

    %w[about opensource corporate legal privacy terms changelog blog newsletter docs/install docs/quickstart docs/advanced docs/cli docs/sdk docs/guides docs careers careers/agent-engineer careers/corporate-sponsorships members/watt members/supermemory search sitemap].each do |slug|
      source_url = slug == 'docs' ? '/docs/introduction' : "/#{slug}"
      page = site.pages.find { |candidate| candidate.url.delete_suffix('/') == source_url }
      title = page.data.fetch('title')
      writer_include = page.data['writer_include']
      template_source = writer_include ? "{% include #{writer_include} %}" : page.content
      template = site.liquid_renderer.file(page.path).parse(template_source)
      context = { 'writer_preview' => true, 'page' => page.to_liquid, 'site' => site.site_payload['site'] }
      context['preview_links'] = preview_links(site.pages).merge(reference_links) if %w[docs docs/guides docs/sdk sitemap].include?(slug)
      content = template.render!(context, registers: { site: site })
      link_map = case slug
                 when 'docs/advanced', 'docs/cli'
                   reference_links
                 when 'changelog'
                   reference_links.select { |_, target| target.start_with?('/v2/docs/custody/') }
                 end
      add_preview(site, "/v2/#{slug}/", title, "# #{title}\n\n#{content.strip}", page.data.fetch('writer_layout', 'auto'), links: link_map)
    end

    links = preview_links(site.pages).merge(reference_links)
    links.merge!('/docs/introduction' => '/v2/docs/', '/docs/introduction/' => '/v2/docs/')
    add_docs_previews(site, cli_pages, links, 'writer-cli-reference.md', frame_context: { 'cli_nav' => DocsCliNav.build(site) })
    add_docs_previews(site, sdk_pages, links, 'writer-cli-reference.md', frame_context: { 'sdk_reference' => true })
    add_docs_previews(site, custody_pages, links, 'writer-custody.md')
    add_docs_previews(site, toml_pages, links, 'writer-cli-reference.md', frame_context: { 'toml_reference' => true })
    add_docs_previews(site, guide_pages, links, 'writer-guide.md', metadata: { 'writer_guide' => true })
    add_docs_previews(site, resource_pages, links, 'writer-guide.md', metadata: { 'writer_resource' => true })

    site.data['writer_search_urls'] = preview_links(site.pages).merge('/docs/introduction/' => '/v2/docs/')
  end

  private

  def guide_reference_pages(docs_pages)
    index = docs_pages.find { |page| page.url == '/docs/guides/' }
    roots = index.data.fetch('guide_sections').flat_map do |section|
      section.fetch('links').map { |link| link.fetch('href').delete_suffix('/') }
    end.uniq
    roots.delete('/docs/quickstart') # The Guides list already points to the custom v2 Quickstart.
    docs_pages.select do |page|
      parent = page.data['parent_url'].to_s.split(/(?=[?#])/, 2).first&.delete_suffix('/')
      url = page.url.delete_suffix('/')
      roots.include?(parent) || roots.any? { |root| url == root || url.start_with?("#{root}/") }
    end
  end

  def docs_reference_links(site, pages)
    links = pages.to_h { |page| [page.url.delete_suffix('/'), "/v2#{page.url}"] }
    links['/docs/cli'] = '/v2/docs/cli/'
    links['/docs/sdk'] = '/v2/docs/sdk/'
    site_url = site.config.fetch('url').delete_suffix('/')
    site.pages.each do |page|
      next unless (target = page.data.dig('redirect', 'to'))

      destination = links[target.delete_prefix(site_url).delete_suffix('/')]
      links[page.url.delete_suffix('/')] = destination if destination
    end
    links.each_with_object({}) do |(source, target), variants|
      variants[source] = variants["#{source}/"] = target
    end
  end

  def add_docs_previews(site, pages, links, frame_file, frame_context: {}, metadata: {})
    frame = site.liquid_renderer.file(frame_file).parse("{% include #{frame_file} %}")
    shared_context = { 'writer_preview' => true, 'site' => site.site_payload['site'] }.merge(frame_context)
    pages.each do |page|
      context = shared_context.merge('page' => page.to_liquid)
      registers = { site: site, page: context['page'] }
      template = site.liquid_renderer.file(page.path).parse(page.content)
      context['docs_body'] = template.render!(context, registers: registers)
      content = frame.render!(context, registers: registers)
      title = page.data.fetch('title')
      preview = add_preview(site, "/v2#{page.url}", title, "# #{CGI.escapeHTML(title)}\n\n#{content.strip}", 'columns', links: links)
      preview.data.merge!(metadata)
    end
  end

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
      add_preview(site, links.fetch(post.url), title, "# #{title}\n\n#{body.strip}", 'columns', links: links, blog_post: true)
    end
  end

  def remap_links(html, links, site_url)
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

  def preview_links(pages)
    pages.each_with_object({}) do |page, links|
      url = page.url
      next unless url.start_with?('/v2/')

      path = url.delete_prefix('/v2').delete_suffix('/')
      links[path] = url
      links["#{path}/"] = url
    end
  end

  def add_preview(site, permalink, title, markdown, writer_layout = 'auto', links: nil, blog_post: false)
    path = permalink.delete_prefix('/')
    directory, filename = path.end_with?('/') ? [path.delete_suffix('/'), 'index.html'] : File.split(path)
    preview = Jekyll::PageWithoutAFile.new(site, site.source, directory, filename)
    document = Kramdown::Document.new(markdown, site.config.fetch('kramdown'))
    if blog_post
      document.root.children.drop(1).each do |element|
        element.options[:level] = element.options[:level].clamp(2, 3) if element.type == :header
      end
    end
    export_html, = WriterMarkdownExport::Html.convert(document.root, document.options)
    preview.content, = WriterMarkdown.convert(document.root, document.options)
    if links
      site_url = site.config.fetch('url').delete_suffix('/')
      export_html = remap_links(export_html, links, site_url)
      preview.content = remap_links(preview.content, links, site_url)
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
      'writer_blog_post' => blog_post,
      'title' => title,
      'permalink' => permalink,
      'render_with_liquid' => false,
      'sitemap' => false
    )
    site.pages << preview
    preview
  end

end
