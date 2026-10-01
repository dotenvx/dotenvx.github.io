# Run with: bundle exec ruby scripts/test-design-codeblocks.rb
require 'liquid'
require 'kramdown-parser-gfm'
require 'nokogiri'
require_relative '../_plugins/design_codeblock'

checks = 0
assert = ->(condition, message) { raise message unless condition; checks += 1 }
render = ->(markdown) { Nokogiri::HTML.fragment(Kramdown::Document.new(markdown, input: 'GFM').to_html) }

plain = render.call("```ruby\nenv \"KEY\"\n```\n")
assert.call(plain.at_css('pre.design-codeblock code').text == 'env "KEY"', 'fence changed code')
assert.call(plain.css('[data-design-codeblock-copy]').size == 1, 'copy button missing')
assert.call(plain.at_css('[data-design-codeblock]')['data-copy'].nil?, 'default copy should use displayed code')
assert.call(plain.at_css('code span'), 'Ruby highlighting missing')

console = render.call("```console\n$ dotenvx encrypt\n◈ encrypted (.env)\n```\n{: copy=\"dotenvx encrypt\"}\n")
assert.call(console.at_css('[data-design-codeblock]')['data-copy'] == 'dotenvx encrypt', 'custom copy lost')
assert.call(console.at_css('code').text == "$ dotenvx encrypt\n◈ encrypted (.env)", 'transcript changed')
assert.call(console.at_css('.gp').text == '$ ', 'console prompt highlighting missing')
assert.call(console.at_css('.design-code-ok'), 'console output highlighting missing')

multiline = render.call(<<~'MD')
  ```console
  $ echo "hello"
  $ printf '\n'
  ```
  {: copy="echo \"hello\"
  printf '\n'"}
MD
assert.call(multiline.at_css('[data-design-codeblock]')['data-copy'] == "echo \"hello\"\nprintf '\\n'", 'multiline copy or escaping changed')

braces = render.call(<<~'MD')
  ```javascript
  console.log(`Hello ${process.env.HELLO}`)
  ```
  {: copy="console.log(`Hello ${process.env.HELLO\}`)"}
MD
assert.call(braces.at_css('[data-copy]')['data-copy'] == 'console.log(`Hello ${process.env.HELLO}`)', 'closing brace in copy text changed')
assert.call(braces.css('p').empty?, 'copy attributes leaked into visible prose')

no_copy = render.call("```text\nexample\n```\n{: copy=\"false\" .design-codeblock--nowrap #example label=\"Example output\"}\n")
assert.call(no_copy.css('button').empty?, 'copy=false still renders a button')
assert.call(no_copy.at_css('pre#example.design-codeblock--nowrap')['aria-label'] == 'Example output', 'fence attributes lost')

unsafe = render.call("```unknown-language\n<script>alert(1)</script> & \"quoted\"\n```\n{: copy=\"<img src=x onerror=alert(1)>\"}\n")
assert.call(unsafe.css('script,img').empty?, 'code or copy attribute injected markup')
assert.call(unsafe.at_css('code').text == '<script>alert(1)</script> & "quoted"', 'escaped code changed')
assert.call(unsafe.at_css('[data-copy]')['data-copy'] == '<img src=x onerror=alert(1)>', 'copy text not preserved')

nested = render.call("<section markdown=\"block\">\n\n```dotenv\nHELLO=\"World\"\n```\n\n</section>\n")
assert.call(nested.at_css('section pre.design-codeblock'), 'Markdown inside guide wrapper failed')
second_pass = render.call(plain.to_html)
assert.call(second_pass.css('pre.design-codeblock').size == 1, 'Markdown rendered twice duplicated code')
assert.call(second_pass.at_css('code').text == 'env "KEY"', 'second Markdown pass changed code')
assert.call(render.call("    indented code\n").css('.design-codeblock').empty?, 'indented blocks should use standard renderer')

component = Liquid::Template.parse(File.read(File.expand_path('../_includes/components/design-codeblock.html', __dir__))).render!(
  'include' => {'value' => '$ dotenvx encrypt', 'format' => 'cli', 'copy_text' => 'dotenvx encrypt'}
)
component = Nokogiri::HTML.fragment(component)
assert.call(component.at_css('[data-copy]')['data-copy'] == 'dotenvx encrypt', 'Liquid component copy regressed')
assert.call(component.at_css('.gp').text == '$ ', 'Liquid component highlighting regressed')

puts "#{checks} codeblock checks passed"
