# Run with: bundle exec ruby scripts/test-design-syntax.rb
require_relative "../_plugins/design_syntax"

checks = 0
assert = ->(condition, message) { raise message unless condition; checks += 1 }
plain = ->(html) { CGI.unescapeHTML(html.gsub(/<\/?span\b[^>]*>/, "")) }

source = %(<script>alert("x")</script> & 'quoted')
[nil, "text", "unknown-language"].each do |language|
  html = DesignSyntax.highlight(source, language)
  assert.call(!html.include?("<script>"), "unsafe plain-text fallback")
  assert.call(plain.call(html) == source, "fallback changed source")
end

samples = {
  "javascript" => "// comment\nconst port = Number(process.env.PORT || 3000)\n",
  "json" => '{"private": true, "script": "<img src=x onerror=alert(1)>"}',
  "dotenv" => "# .env\nHELLO = \"Secret\"\nURL=postgres://${USER}@localhost\nKEY=\"line one\nline two\"\nLITERAL='${NO_EXPANSION}'\n",
  "bash" => "echo \"Hello $USER\"\n",
  "ruby" => 'puts ENV["HELLO"]',
  "python" => 'print(os.getenv("HELLO"))'
}
samples.each do |language, code|
  html = DesignSyntax.highlight(code, language)
  assert.call(html.include?('<span class="'), "no tokens for #{language}")
  assert.call(!html.include?("<img"), "unsafe highlighted markup")
  assert.call(plain.call(html) == code, "highlighting changed #{language} source")
end

env = DesignSyntax.highlight(samples.fetch("dotenv"), "dotenv")
assert.call(env.include?('<span class="nv">HELLO</span>'), "dotenv key not highlighted")
assert.call(env.include?('<span class="si">${USER}</span>'), "dotenv interpolation missing")
assert.call(!env.include?('<span class="si">${NO_EXPANSION}</span>'), "single-quoted dotenv value interpolated")
assert.call(env.include?("line one\nline two"), "multiline dotenv string split")

transcript = "$ echo \"Hello\" \\\n  \"world\"\n⟐ injected env (1) from .env\nconst output = '<script>'\n$ echo done\n"
html = DesignSyntax.highlight(transcript, nil, "cli")
assert.call(plain.call(html) == transcript, "transcript changed source")
assert.call(html.include?('<span class="gp">$ </span>'), "prompt not highlighted")
assert.call(html.include?('<span class="design-code-ok">'), "status missing")
assert.call(html.include?("const output = &#39;&lt;script&gt;&#39;"), "output must remain escaped plain text")
assert.call(DesignSyntax.highlight(transcript, "console") == html, "console alias differs")
assert.call(!html.include?('<script>'), "transcript contains unsafe markup")

puts "#{checks} syntax checks passed"
