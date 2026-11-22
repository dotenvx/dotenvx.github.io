require 'minitest/autorun'
require 'yaml'
require_relative '../_plugins/llms_exports'

class LlmsExportsTest < Minitest::Test
  def test_resolves_page_links_without_changing_code_examples
    code = "```markdown\n# Literal heading\n[example](/keep-this-literal/)\n```\n"
    text = "# Guide\n\n[Install](/docs/install/)\n[Section](#setup)\n\n#{code}"
    result = LlmsExports.page_content(text, 'https://dotenvx.com/docs/example/')
    assert_includes result, '## Guide'
    assert_includes result, '[Install](https://dotenvx.com/docs/install/)'
    assert_includes result, '[Section](https://dotenvx.com/docs/example/#setup)'
    assert_includes result, code
  end

  def test_uses_current_pages_in_order_and_excludes_historical_articles
    pages = LlmsExports::FIRST_PAGES.to_h { |url| [url, "# #{url}\n\nCurrent copy\n"] }
    pages['/docs/sdk/'] = "# SDKs\n\nCurrent SDK copy\n"
    pages['/blog/old/'] = '# Historical tutorial'
    result = LlmsExports.render(pages, 'https://dotenvx.com', '# Agent index')
    assert_operator result.index('Source: https://dotenvx.com/docs/install/'), :<, result.index('Source: https://dotenvx.com/docs/sdk/')
    assert_includes result, 'Current SDK copy'
    refute_includes result, 'Historical tutorial'
    assert_equal 1, result.scan('Source: https://dotenvx.com/docs/install/').length
    assert_raises(ArgumentError) { LlmsExports.render({}, 'https://dotenvx.com', '') }
  end

  def test_index_uses_the_current_cli_install_command_first
    root = File.expand_path('..', __dir__)
    index = File.read(File.join(root, 'llms.txt'))
    methods = YAML.safe_load(File.read(File.join(root, '_data/install_methods.yml')))
    cli = methods.find { |method| method.fetch('name') == 'CLI' }.fetch('command')
    assert_equal cli, index[/```bash\n(.*?)\n```/m, 1]
    assert_includes index, 'https://dotenvx.com/docs/quickstart.md'
    assert_includes index, 'https://dotenvx.com/docs.md'
  end
end
