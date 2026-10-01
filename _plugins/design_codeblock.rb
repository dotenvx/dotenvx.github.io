# frozen_string_literal: true

require_relative "design_syntax"
require "kramdown"
require "kramdown/converter/html"

# Shared by Liquid components and Markdown fences, including markdownify in steps.
module DesignCodeblock
  COPY_BUTTON = <<~HTML.strip.freeze
    <button type="button" class="design-codeblock-copy" data-design-codeblock-copy aria-label="Copy code"><svg class="design-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><svg class="design-copy-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg><span class="design-copy-status" data-design-codeblock-label aria-live="polite">Copy</span></button>
  HTML

  def self.render(source, language: nil, format: nil, copy: true, copy_text: nil,
                  class_name: nil, label: nil, attributes: {})
    code = source.to_s.strip
    classes = ["design-codeblock", class_name].compact.reject(&:empty?).join(" ")
    attrs = attributes.merge("class" => classes)
    attrs["aria-label"] = label if label
    serialized = attrs.map { |name, value| %( #{name}="#{CGI.escapeHTML(value.to_s)}") }.join
    pre = "<pre#{serialized}><code>#{DesignSyntax.highlight(code, language, format)}</code></pre>"
    return pre + "\n" if copy == false || copy == "false"

    copied = copy_text.to_s.strip
    copy_attr = copied.empty? ? "" : %( data-copy="#{CGI.escapeHTML(copied)}")
    %(<div class="design-codeblock-wrap" data-design-codeblock#{copy_attr}>\n#{COPY_BUTTON}\n#{pre}\n</div>\n)
  end
end

module DesignCodeblockFilter
  def design_codeblock(source, options)
    DesignCodeblock.render(source,
      language: options["language"], format: options["format"],
      copy: options["copy"], copy_text: options["copy_text"],
      class_name: options["class"], label: options["label"])
  end
end

Liquid::Template.register_filter(DesignCodeblockFilter)

module DesignMarkdownCodeblocks
  def convert_codeblock(element, indent)
    return super unless element.options[:fenced]

    attributes = element.attr.dup
    language = extract_code_language!(attributes)
    copy = attributes.delete("copy")
    class_name = attributes.delete("class")
    label = attributes.delete("label")
    DesignCodeblock.render(element.value,
      language: element.options[:lang] || language,
      format: language == "cli" ? "cli" : nil,
      copy: copy != "false", copy_text: copy == "false" ? nil : copy,
      class_name: class_name, label: label, attributes: attributes)
  end
end

Kramdown::Converter::Html.prepend(DesignMarkdownCodeblocks)
