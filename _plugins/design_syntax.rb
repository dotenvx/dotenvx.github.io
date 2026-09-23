# frozen_string_literal: true

# Mirrored in Radar's lib/design_syntax.rb. Keep rendering and token classes identical.
require "rouge"
require "cgi"

module DesignSyntax
  # Dotenv permits whitespace around '=', unquoted values and multiline strings.
  # A dedicated lexer avoids treating those values as executable shell commands.
  class DotenvLexer < Rouge::RegexLexer
    title "Dotenv"
    tag "dotenv"

    state :root do
      rule /[ \t\r\n]+/, Text
      rule /#[^\n]*/, Comment
      rule /(export)([ \t]+)/ do
        groups Keyword, Text
      end
      rule /([a-zA-Z_][a-zA-Z0-9_]*)([ \t]*)(=)([ \t]*)/ do
        groups Name::Variable, Text, Operator, Text
        push :value
      end
      rule /[^\n]+/, Text
    end

    state :interpolation do
      rule /\$\{[^}]*\}|\$\([^)]*\)|\$[a-zA-Z_][a-zA-Z0-9_]*/, Str::Interpol
    end

    state :value do
      rule /\r?\n/, Text, :pop!
      rule /[ \t]+/, Text
      rule /#[^\n]*/, Comment, :pop!
      rule /"/, Str::Double, :double
      rule /'/, Str::Single, :single
      rule /`/, Str::Backtick, :backtick
      mixin :interpolation
      rule /[^\s#"'`$]+/, Str::Other
      rule /\$/, Str::Other
    end

    state :double do
      rule /"/, Str::Double, :pop!
      rule /\\./m, Str::Escape
      mixin :interpolation
      rule /[^"\\$]+/m, Str::Double
      rule /./m, Str::Double
    end

    state :single do
      rule /'/, Str::Single, :pop!
      rule /[^']+/m, Str::Single
    end

    state :backtick do
      rule /`/, Str::Backtick, :pop!
      mixin :interpolation
      rule /[^`$]+/m, Str::Backtick
      rule /\$/, Str::Backtick
    end
  end

  ALIASES = { "env" => "dotenv", "text" => "plaintext", "plain" => "plaintext" }.freeze

  def self.highlight(source, language = nil, format = nil)
    source = source.to_s
    return transcript(source) if format.to_s == "cli" || %w[console shell-session].include?(language.to_s)

    lexer = Rouge::Lexer.find(ALIASES.fetch(language.to_s, language.to_s))
    return CGI.escapeHTML(source) unless lexer

    Rouge::Formatters::HTML.new.format(lexer.new.lex(source))
  end

  # Only prompt-prefixed commands are code. Output must never be interpreted as shell.
  # Keep continuations together so strings and substitutions retain their lexer state.
  def self.transcript(source)
    lines = source.lines
    result = +""
    until lines.empty?
      line = lines.shift
      if (prompt = line.match(/\A([ \t]*\$ )/))
        command = line[prompt[0].length..]
        while command.end_with?("\\\n") && !lines.empty?
          command << lines.shift
        end
        result << %(<span class="gp">#{CGI.escapeHTML(prompt[0])}</span>)
        result << highlight(command, "shell")
      elsif line.match?(/\A[ \t]*[✔◈⟐▣]/)
        result << %(<span class="design-code-ok">#{CGI.escapeHTML(line)}</span>)
      else
        result << CGI.escapeHTML(line)
      end
    end
    result
  end
end
