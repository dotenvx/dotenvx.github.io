require "net/http"
require "uri"

class ChangelogSnippet < Jekyll::Generator
  priority :low
  def generate(site)
    url = "https://raw.githubusercontent.com/dotenvx/dotenvx/refs/heads/main/CHANGELOG.md"
    begin
      md = Net::HTTP.get(URI(url))

      parts = md.split("\n## ")

      # grab just the first 3 version sections, skipping the header
      sections = parts[1..4]

      # re-prefix each with "## " since split removed it
      raw_md = sections.map { |s| "## #{s.strip}" }.join("\n\n")

      # swap them for the ui
      adjusted = raw_md
        .gsub(/^### /, "#### ") # demote h3 -> h4
        .gsub(/^## /,  "### ")  # demote h2 -> h3
        .gsub(/^# /,   "## ")   # demote h1 -> h2

      # Render GitHub-flavored markdown to HTML
      html = Kramdown::Document.new(adjusted, input: "GFM").to_html

      # expose to templates
      site.data["changelog_raw"] = raw_md
      site.data["changelog_html"] = html
    rescue => e
      site.data["changelog_html"] = "<p class='text-xs text-zinc-500'>Changelog unavailable</p>"
      Jekyll.logger.warn "changelog", "fetch failed: #{e.class} #{e.message}"
    end
  end
end
