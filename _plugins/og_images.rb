require "json"
require "open3"
require "cgi"

# Runs for both `jekyll build` and `jekyll serve`. Images are cached outside
# the watched source and registered as static files before Jekyll writes them.
class OgImages < Jekyll::Generator
  priority :low

  def generate(site)
    pages = (site.posts.docs + site.pages).select do |page|
      page.data["og_image"] != false && (page.data["layout"] == "blog" || page.data["og_image"].is_a?(Hash))
    end
    return if pages.empty?

    entries = pages.map do |page|
      options = page.data["og_image"].is_a?(Hash) ? page.data["og_image"] : {}
      {
        key: page.url,
        template: options.fetch("template", "blog"),
        title: CGI.unescapeHTML(options.fetch("title", page.data["title"]).to_s.gsub(/<[^>]*>/, "")),
        author: page.data["author"] || "Scott Motte",
        date: page.respond_to?(:date) ? page.date.strftime("%B %-d, %Y") : nil,
        logo: options["logo"],
        image: options["image"]
      }
    end
    cache = File.join(site.source, ".jekyll-cache", "og-images")
    output, error, status = Open3.capture3(
      "node", File.join(site.source, "scripts/build-og-images.mjs"),
      stdin_data: JSON.generate(entries: entries, cacheDir: cache)
    )
    unless status.success?
      raise Jekyll::Errors::FatalException, "OG image generation failed. Run npm ci to install image dependencies.\n#{error}"
    end

    images = JSON.parse(output).to_h { |image| [image.fetch("key"), image] }
    pages.each do |page|
      image = images.fetch(page.url)
      options = page.data["og_image"].is_a?(Hash) ? page.data["og_image"] : {}
      page.data["image"] = {
        "path" => image.fetch("url"), "width" => image.fetch("width"), "height" => image.fetch("height"),
        "alt" => options["alt"] || page.data["title"]
      }
      site.static_files << Jekyll::StaticFile.new(site, cache, File.dirname(image["url"]), File.basename(image["url"]))
    end
    Jekyll.logger.info "OG images:", "#{images.size} ready (#{images.values.count { |image| image['cached'] }} cached)"
  rescue Errno::ENOENT => error
    raise Jekyll::Errors::FatalException, "OG images require Node.js and npm ci. #{error.message}"
  end
end
