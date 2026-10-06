# Keep concise on-page headings while giving search results enough context.
module Jekyll
  class SeoMetadata < Generator
    priority :normal

    def generate(site)
      documents = site.pages + site.docs_to_write
      public_pages = documents.select do |page|
        page.output_ext == ".html" && !page.data["redirect_to"]
      end
      by_url = public_pages.to_h { |page| [normalize(page.url), page] }

      public_pages.each do |page|
        page.data["sitemap"] = false if page.data["noindex"]
        next unless page.url.start_with?("/docs/")

        title = page.data["title"].to_s
        parents = parents_for(page, by_url)
        unless page.data["seo_title"]
          context = if page.url.start_with?("/docs/cli/")
            eyebrow = page.data["eyebrow"].to_s
            if eyebrow.start_with?("dotenvx")
              title.start_with?(eyebrow) ? title : "#{eyebrow} #{title}"
            elsif normalize(page.url) == "/docs/cli"
              "CLI reference"
            else
              "dotenvx #{title.downcase}"
            end
          elsif page.url.start_with?("/docs/sdk/")
            ([title] + parents.reverse.reject { |p| ["/docs/introduction", "/docs/sdk"].include?(normalize(p.url)) }.map { |p| p.data["title"] } + ["SDK"]).uniq.join(" · ")
          elsif page.url.start_with?("/docs/custody/") && normalize(page.url) != "/docs/custody"
            "#{title} · Key custody"
          else
            title
          end
          page.data["seo_title"] = "#{context} · Dotenvx Docs"
        end
        page.data["seo_breadcrumbs"] = (parents + [page]).map do |item|
          { "name" => item.data["title"], "url" => item.url }
        end
      end
    end

    private

    def normalize(url)
      url.to_s.sub(%r{/index\.html$}, "/").sub(%r{/$}, "")
    end

    def parents_for(page, by_url)
      paths = ["/docs/introduction/"]
      segments = page.url.split("/").reject(&:empty?)
      (2...segments.length).each { |length| paths << "/#{segments.first(length).join('/')}" }
      Array(page.data["crumbs"]).each { |crumb| paths << crumb["href"] }
      paths << page.data["eyebrow_href"]
      paths.compact.filter_map { |path| by_url[normalize(path)] }
        .reject { |parent| parent == page || parent.data["noindex"] }
        .uniq
    end
  end
end
