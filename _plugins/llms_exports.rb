require 'uri'

# Build the expanded agent reference from the same resolved Markdown as the site.
module LlmsExports
  FIRST_PAGES = %w[/ /docs/ /docs/install/ /docs/quickstart/ /docs/custody/ /armor/ /pricing/ /about/].freeze
  FENCE = /^(`{3,}|~{3,})[^\n]*\n.*?^\1[ \t]*(?:\n|\z)/m

  def self.page_content(markdown, source_url)
    blocks = []
    text = markdown.gsub(FENCE) do |block|
      blocks << block
      "LLMS_FENCED_BLOCK_#{blocks.length - 1}\n"
    end
    # Preserve literal examples; only resolve document links outside code blocks.
    text = text.gsub(/\]\(((?:\/(?!\/)|#)[^\s)]*)\)/) do
      "](#{URI.join(source_url, Regexp.last_match(1))})"
    end
    text = text.gsub(/^\#{1,5} /) { |heading| "#" + heading }
    blocks.each_with_index { |block, i| text = text.sub("LLMS_FENCED_BLOCK_#{i}\n") { block } }
    text
  end

  def self.render(by_url, site_url, index)
    missing = FIRST_PAGES.reject { |url| by_url.key?(url) }
    raise ArgumentError, "Missing current pages for llms-full.txt: #{missing.join(', ')}" unless missing.empty?

    urls = FIRST_PAGES + by_url.keys.select { |url| url.start_with?('/docs/') }.sort
    sections = urls.uniq.map do |url|
      source_url = URI.join(site_url, url).to_s
      "Source: #{source_url}\n\n#{page_content(by_url.fetch(url), source_url).strip}"
    end
    index.strip + "\n\n---\n\n# Current page contents\n\n" + sections.join("\n\n---\n\n") + "\n"
  end
end
