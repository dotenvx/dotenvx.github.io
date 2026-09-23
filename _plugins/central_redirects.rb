# Feed the central map into jekyll-redirect-from before its generator runs.
class CentralRedirects < Jekyll::Generator
  priority :high

  def generate(site)
    redirects = site.data.fetch("redirects", {})
    unless redirects.is_a?(Hash)
      raise Jekyll::Errors::FatalException, "_data/redirects.yml must map old URLs to destinations"
    end

    occupied = site.pages.map(&:url) + site.docs_to_write.map(&:url)
    redirects.each do |from, to|
      unless from.is_a?(String) && from.start_with?("/") &&
          to.is_a?(String) && to.match?(%r{\A(?:/(?!/)|https?://)})
        raise Jekyll::Errors::FatalException, "Invalid central redirect: #{from.inspect} => #{to.inspect}"
      end
      if occupied.include?(from)
        raise Jekyll::Errors::FatalException, "Redirect would replace an existing page: #{from}"
      end
      if redirects.key?(to) || from == to
        raise Jekyll::Errors::FatalException, "Redirect must point to its final destination: #{from} => #{to}"
      end

      page = Jekyll::PageWithoutAFile.new(site, site.source, "", "redirect.html")
      page.data = { "permalink" => from, "redirect_to" => to, "sitemap" => false }
      site.pages << page
    end
  end
end
