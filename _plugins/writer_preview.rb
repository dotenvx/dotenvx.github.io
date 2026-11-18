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
  def generate(site)
    source = File.read(site.in_source_dir('index.md'))
    markdown = "# Dotenvx\n\n#{RawMarkdownExports.homepage_markdown(source, site, writer_preview: true)}"
    home = site.pages.find { |page| page.path == 'index.md' }
    add_preview(site, '/v2/', 'Dotenvx · v2 preview', markdown, home&.data&.fetch('writer_layout', 'auto'))

    agents = site.pages.find { |page| page.url == '/agents' }
    title = agents.data.fetch('title')
    add_preview(site, '/v2/agents/', title, "# #{title}\n\n#{agents.content}", agents.data.fetch('writer_layout', 'auto'))
    pricing = File.read(site.in_source_dir('_includes/writer-pricing.md'))
    pricing = site.liquid_renderer.file('_includes/writer-pricing.md').parse(pricing).render!(
      { 'writer_preview' => true, 'site' => site.site_payload['site'] }, registers: { site: site }
    )
    pricing_page = site.pages.find { |page| page.url.delete_suffix('/') == '/pricing' }
    add_preview(site, '/v2/pricing/', 'Pricing', pricing, pricing_page.data.fetch('writer_layout', 'wide'))

    %w[about corporate legal privacy terms changelog contact careers careers/agent-engineer careers/corporate-sponsorships].each do |slug|
      page = site.pages.find { |candidate| candidate.url.delete_suffix('/') == "/#{slug}" }
      title = page.data.fetch('title')
      template = site.liquid_renderer.file(page.path).parse(page.content)
      content = template.render!({ 'writer_preview' => true, 'page' => page.to_liquid, 'site' => site.site_payload['site'] }, registers: { site: site })
      add_preview(site, "/v2/#{slug}/", title, "# #{title}\n\n#{content.strip}", page.data.fetch('writer_layout', 'auto'))
    end
  end

  private

  def add_preview(site, permalink, title, markdown, writer_layout = 'auto')
    markdown = markdown.gsub('Dotenvxfile', 'Dotenvx.toml')
    title = title.gsub('Dotenvxfile', 'Dotenvx.toml')
    preview = Jekyll::PageWithoutAFile.new(site, site.source, permalink.delete_prefix('/').delete_suffix('/'), 'index.html')
    document = Kramdown::Document.new(markdown, site.config.fetch('kramdown'))
    export_html, = WriterMarkdownExport::Html.convert(document.root, document.options)
    raw_markdown = WriterMarkdownExport.convert(export_html)
    preview.content, = WriterMarkdown.convert(document.root, document.options)
    heading = preview.content[/\A\s*<h1\b.*?<\/h1>/m]
    preview.content = preview.content.delete_prefix(heading) if heading
    markdown_url = permalink == '/v2/' ? '/v2/index.md' : permalink.delete_suffix('/') + '.md'
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
      'title' => title,
      'permalink' => permalink,
      'render_with_liquid' => false,
      'sitemap' => false
    )
    site.pages << preview
  end
end
