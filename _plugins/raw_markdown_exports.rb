require 'fileutils'
require 'yaml'

module RawMarkdownExports
  EXPORTS = {
    'docs/quickstart.md' => '/docs/quickstart.md',
    'docs/side-paths/quickstart-without-nodejs.md' => '/docs/quickstart/without-nodejs.md',
    'docs/side-paths/quickstart-protect.md' => '/docs/quickstart/protect.md',
    'docs/side-paths/quickstart-env-files.md' => '/docs/quickstart/env-files.md',
    'docs/side-paths/quickstart-install-alternatives.md' => '/docs/quickstart/install-alternatives.md',
    'docs/side-paths/quickstart-deploy.md' => '/docs/quickstart/deploy.md',
    'docs/github-actions.md' => '/docs/github-actions.md',
    'docs/express.md' => '/docs/express.md',
    'docs/side-paths/express-share-private-key.md' => '/docs/express/share-private-key.md',
    'docs/side-paths/express-deploy-private-key.md' => '/docs/express/deploy-private-key.md',
    'docs/cloudflare.md' => '/docs/cloudflare.md',
    'docs/side-paths/cloudflare-pages.md' => '/docs/cloudflare/pages.md',
    'docs/side-paths/cloudflare-runtime-decryption.md' => '/docs/cloudflare/runtime-decryption.md',
    'docs/side-paths/cloudflare-share-private-key.md' => '/docs/cloudflare/share-private-key.md',
    'docs/nodejs.md' => '/docs/nodejs.md',
    'docs/side-paths/nodejs-share-private-key.md' => '/docs/nodejs/share-private-key.md',
    'docs/side-paths/nodejs-deploy-private-key.md' => '/docs/nodejs/deploy-private-key.md',
    'docs/nextjs.md' => '/docs/nextjs.md',
    'docs/side-paths/nextjs-encrypted-text.md' => '/docs/nextjs/encrypted-text.md',
    'docs/side-paths/nextjs-share-private-key.md' => '/docs/nextjs/share-private-key.md',
    'docs/side-paths/nextjs-deploy-private-key.md' => '/docs/nextjs/deploy-private-key.md'
  }.freeze
  MARKDOWN_URLS = EXPORTS.values.to_h { |url| [url.sub(/\.md\z/, '/'), url] }.freeze

  # Attribute values can span lines and contain escaped quotes and braces.
  ATTRIBUTES = /\{:(?:[^"'}]|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')*\}/m
  FENCE = /^(`{3,}|~{3,})[^\n]*\n.*?^\1[ \t]*(?:\n|\z)/m

  def self.nextjs(source, site_url)
    front_matter = source[/\A---\s*\n(.*?)^---\s*\n/m, 1]
    metadata = front_matter ? YAML.safe_load(front_matter) : {}
    body = source.sub(/\A---\s*\n.*?^---\s*\n/m, '')
    output = +"# #{metadata.fetch('title', 'Next.js')}\n\n"
    if metadata['parent_url']
      output << prose("[← Back to #{metadata.fetch('parent_title')}](#{metadata['parent_url']})\n\n", site_url)
    end
    until body.empty?
      match = FENCE.match(body)
      unless match
        output << prose(body, site_url)
        break
      end

      output << prose(body[0...match.begin(0)], site_url)
      code = match[0]
      body = body[match.end(0)..]
      body = body.sub(/\A\{%\s*endraw\s*%\}[ \t]*(?:\n|\z)/, '')
      attributes = /\A#{ATTRIBUTES}[ \t]*(?:\n|\z)/m.match(body)
      if attributes
        labels = %w[package-manager label].filter_map do |key|
          attributes[0][/\b#{Regexp.escape(key)}="([^"]*)"/, 1]
        end
        output << "**#{labels.join(' — ')}**\n\n" unless labels.empty?
        body = body[attributes.end(0)..]
      end
      output << code
    end
    output.rstrip + "\n"
  end

  def self.prose(text, site_url)
    text.gsub(ATTRIBUTES, '')
      .gsub(/\{%\s*(?:raw|endraw)\s*%\}[ \t]*(?:\n|\z)/, '')
      .gsub(/\{%\s*include components\/design-browser\.html\s+url="([^"]*)"\s+text="([^"]*)"\s*%\}/) do
        "Browser response at [#{$1}](#{$1}):\n\n```text\n#{$2}\n```"
      end
      .gsub(/\{%\s*include components\/design-secrets-artifact\.html\s+(.*?)\s*%\}/m) do
        fields = $1.scan(/(\w+)="([^"]*)"/).to_h
        lines = ["#{fields.fetch('key')}=\"#{fields.fetch('value')}\""]
        lines << "DOTENV_FILE=\"#{fields['path']}\"" if fields['path']
        "Example deployment environment variables:\n\n```dotenv\n#{lines.join("\n")}\n```"
      end
      .gsub(/\]\((\/[^)]*)\)/) do
        path, suffix = $1.split(/(?=[?#])/, 2)
        "](#{site_url.chomp('/')}#{MARKDOWN_URLS.fetch(path, path)}#{suffix})"
      end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  source = File.join(site.source, 'md/index.md')
  FileUtils.cp(source, File.join(site.dest, 'index.md')) if File.file?(source)

  RawMarkdownExports::EXPORTS.each do |source_path, url|
    source = File.join(site.source, source_path)
    next unless File.file?(source)

    destination = File.join(site.dest, url.delete_prefix('/'))
    FileUtils.mkdir_p(File.dirname(destination))
    File.write(destination, RawMarkdownExports.nextjs(File.read(source), site.config.fetch('url')))
  end
end
