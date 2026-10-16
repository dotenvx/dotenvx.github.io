require 'minitest/autorun'
require 'jekyll'
require_relative '../_plugins/raw_markdown_exports'

class RawMarkdownExportsTest < Minitest::Test
  def test_nextjs_export_keeps_examples_and_removes_template_syntax
    source = File.read(File.expand_path('../docs/nextjs.md', __dir__))
    result = RawMarkdownExports.nextjs(source, 'https://dotenvx.com')
    assert result.start_with?("# Next.js\n\n")
    refute_match(/\{%|\{:|layout:|permalink:/, result)
    assert_includes result, '**npm — package.json**'
    assert_includes result, '**pnpm — pnpm-workspace.yaml**'
    assert_includes result, "```text\nHello Production\n```"
    assert_includes result, '(https://dotenvx.com/docs/nextjs/deploy-private-key.md)'
    original_blocks = source.to_enum(:scan, RawMarkdownExports::FENCE).map { Regexp.last_match[0].strip }
    exported_blocks = result.to_enum(:scan, RawMarkdownExports::FENCE).map { Regexp.last_match[0].strip }
    original_blocks.each { |block| assert_includes exported_blocks, block }
  end

  def test_side_paths_export_titles_back_links_and_examples
    RawMarkdownExports::EXPORTS.each_key do |path|
      next unless path.include?('side-paths')

      source = File.read(File.expand_path('../' + path, __dir__))
      result = RawMarkdownExports.nextjs(source, 'https://dotenvx.com')
      title = source[/^title: (.*)$/, 1]
      assert result.start_with?("# #{title}\n\n")
      refute_match(/\{%|\{:|layout:|permalink:/, result)
      parent_url = source[/^parent_url: (.*)$/, 1].sub('/#', '.md#')
      assert_includes result, "(https://dotenvx.com#{parent_url})"
      source.to_enum(:scan, RawMarkdownExports::FENCE).each do
        assert_includes result, Regexp.last_match[0].strip
      end
      if path.include?('deploy-private-key')
        assert_includes result, 'DOTENV_PRIVATE_KEY_PRODUCTION="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015"'
      end
    end
  end

  def test_template_like_text_inside_code_is_untouched
    code = "```text\n{: .example}\n{% literal %}\n[example](/path/)\n```\n"
    assert_includes RawMarkdownExports.nextjs(code, 'https://dotenvx.com'), code
  end
end
