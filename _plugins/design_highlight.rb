# frozen_string_literal: true
require_relative "design_syntax"

module DesignHighlightFilter
  def design_highlight(source, language = nil, format = nil)
    DesignSyntax.highlight(source, language, format)
  end
end

Liquid::Template.register_filter(DesignHighlightFilter)
