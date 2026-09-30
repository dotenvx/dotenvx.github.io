# Validate the actual production HTML, including pages added in the future.
# Run after JEKYLL_ENV=production bundle exec jekyll build.
require "bundler/setup"
require "nokogiri"
require "json"
require "uri"
require "yaml"

root = File.expand_path(ARGV.fetch(0, "_site"))
config = YAML.safe_load(File.read(File.expand_path("../_config.yml", __dir__)))
origin = config.fetch("url")
errors = []
titles = Hash.new { |hash, key| hash[key] = [] }
canonicals = {}
indexable = []
noindex_urls = []
files = Dir[File.join(root, "**/*.html")]
abort "No built HTML found in #{root}" if files.empty?
sitemap = Nokogiri::XML(File.read(File.join(root, "sitemap.xml"))) { |options| options.strict }
locations = sitemap.xpath("//*[local-name()='loc']").map(&:text)
errors << "Duplicate sitemap URLs" unless locations.uniq == locations

files.each do |file|
  path = file.delete_prefix(root)
  html = Nokogiri::HTML(File.read(file))
  canonical = html.at_css('link[rel="canonical"]')&.[]("href")
  if html.at_css('meta[http-equiv="refresh"]')
    errors << "#{path}: redirect canonical must be absolute" unless canonical.to_s.match?(%r{\Ahttps?://})
    next
  end
  if html.at_css('meta[name="robots"]')&.[]("content").to_s.include?("noindex")
    noindex_urls << canonical
    next
  end
  indexable << path
  {
    "head > title" => "text",
    'meta[name="description"]' => "content",
    'meta[property="og:title"]' => "content",
    'meta[property="og:description"]' => "content",
    'meta[property="og:image"]' => "content",
    'meta[name="twitter:title"]' => "content",
    'meta[name="twitter:description"]' => "content",
    'link[rel="canonical"]' => "href"
  }.each do |selector, attribute|
    nodes = html.css(selector)
    value = attribute == "text" ? nodes.first&.text : nodes.first&.[](attribute)
    errors << "#{path}: expected one nonempty #{selector}" unless nodes.size == 1 && !value.to_s.strip.empty?
  end
  title = html.at_css("head > title")&.text.to_s
  titles[title] << path
  errors << "#{path}: expected one H1" unless html.css("h1").size == 1
  errors << "#{path}: generic description" if html.at_css('meta[name="description"]')&.[]("content") == config["description"]
  errors << "#{path}: canonical must use production origin" unless canonical.to_s.start_with?("#{origin}/")
  errors << "#{path}: canonical contains index.html" if canonical.to_s.end_with?("/index.html")
  errors << "#{path}: missing from sitemap" unless locations.include?(canonical)
  errors << "#{path}: duplicate canonical with #{canonicals[canonical]}" if canonicals.key?(canonical)
  canonicals[canonical] = path
  schemas = html.css('script[type="application/ld+json"]').filter_map do |script|
    JSON.parse(script.text)
  rescue JSON::ParserError => error
    errors << "#{path}: invalid JSON-LD: #{error.message}"
    nil
  end
  errors << "#{path}: missing structured data" if schemas.empty?
  breadcrumb = schemas.find { |schema| schema["@type"] == "BreadcrumbList" }
  if path.start_with?("/docs/") && path != "/docs/introduction/index.html"
    errors << "#{path}: missing breadcrumb schema" unless breadcrumb
  end
  if breadcrumb
    errors << "#{path}: missing visible breadcrumb navigation" unless html.at_css('nav[aria-label="Breadcrumb"]')
    items = breadcrumb.fetch("itemListElement")
    errors << "#{path}: invalid breadcrumb positions" unless items.map { |item| item["position"] } == (1..items.size).to_a
    errors << "#{path}: breadcrumb must end at canonical" unless items.last["item"] == canonical
    errors << "#{path}: duplicate breadcrumbs" unless items.map { |item| item["item"] }.uniq.size == items.size
    items.each do |item|
      errors << "#{path}: breadcrumb target absent from sitemap: #{item['item']}" unless locations.include?(item["item"])
    end
  end
end

titles.each { |title, paths| errors << "Duplicate title #{title.inspect}: #{paths.join(', ')}" if paths.size > 1 }
noindex_urls.each { |url| errors << "Noindex URL in sitemap: #{url}" if locations.include?(url) }
locations.each do |url|
  errors << "Non-production sitemap URL: #{url}" unless url.start_with?("#{origin}/")
  errors << "Sitemap contains a redirect or missing page: #{url}" unless canonicals.key?(url) || (URI(url).path.end_with?(".pdf") && File.file?(File.join(root, URI(url).path)))
end
robots = File.read(File.join(root, "robots.txt"))
errors << "robots.txt must advertise production sitemap" unless robots.include?("Sitemap: #{origin}/sitemap.xml")
errors << "robots.txt blocks entire site" if robots.match?(%r{^Disallow:\s*/\s*$})
%w[/404.html /search/index.html /banner.html].each do |path|
  html = Nokogiri::HTML(File.read(File.join(root, path)))
  errors << "#{path}: expected noindex" unless html.at_css('meta[name="robots"]')&.[]("content").to_s.include?("noindex")
end
abort errors.join("\n") unless errors.empty?
puts "SEO passed: #{indexable.size} indexable pages; unique titles and canonicals, descriptions, H1s, social metadata, structured data, sitemap, robots, and noindex rules."
