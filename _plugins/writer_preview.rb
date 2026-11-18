require_relative 'raw_markdown_exports'
require_relative 'design_codeblock'
require 'kramdown-parser-gfm'

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

  def convert_ul(element, indent)
    super.gsub(/<li\b[^>]*>(?:\s*<p\b[^>]*>)?/) do |tag|
      following = Regexp.last_match.post_match
      following.start_with?('<span class="writer-markdown-syntax"') ? tag : tag + marker('- ')
    end
  end

  def convert_codeblock(element, indent)
    html = super
    return html unless element.options[:fenced]

    language = element.options[:lang] || extract_code_language(element.attr)
    fence = '`' * [3, element.value.scan(/^`+/).map(&:length).max.to_i + 1].max
    copy = html_attributes('data-copy' => element.value.strip)
    html.sub(/data-design-codeblock(?=>)/) { |attribute| attribute + copy }
      .sub('<code>', "#{marker(fence)}#{marker(language.to_s, 'writer-markdown-detail')}\n<code>")
      .sub('</code>', "</code>\n#{marker(fence)}")
  end
end

class WriterPreview < Jekyll::Generator
  def generate(site)
    source = File.read(site.in_source_dir('index.md'))
    markdown = "# Dotenvx\n\n#{RawMarkdownExports.homepage_markdown(source, site, writer_preview: true)}"
    add_preview(site, '/v2/', 'Dotenvx · v2 preview', markdown)

    agents = site.pages.find { |page| page.url == '/agents' }
    title = agents.data.fetch('title')
    add_preview(site, '/v2/agents/', title, "# #{title}\n\n#{agents.content}")
    pricing = File.read(site.in_source_dir('_includes/writer-pricing.md'))
    add_preview(site, '/v2/pricing/', 'Pricing', pricing)
  end

  private

  def add_preview(site, permalink, title, markdown)
    preview = Jekyll::PageWithoutAFile.new(site, site.source, permalink.delete_prefix('/').delete_suffix('/'), 'index.html')
    document = Kramdown::Document.new(markdown, site.config.fetch('kramdown'))
    preview.content, = WriterMarkdown.convert(document.root, document.options)
    preview.data.merge!(
      'layout' => 'writer',
      'title' => title,
      'permalink' => permalink,
      'render_with_liquid' => false,
      'sitemap' => false
    )
    site.pages << preview
  end
end
