module Jekyll
  class SitemapTreeGenerator < Generator
    safe true
    priority :low

    def generate(site)
      root = {}
      documents = site.pages.select { |page| page.output_ext == ".html" } + site.posts.docs

      documents.each do |document|
        next if document.data["redirect_to"]
        next if document.data["sitemap"] == false
        next if ["/", "/404.html", "/sitemap"].include?(document.url)

        segments = document.url.split("/").reject(&:empty?)
        blog_post = document.respond_to?(:collection) && document.collection.label == "posts"
        if blog_post
          segments = ["blog", document.url]
        end
        branch = root

        segments.each_with_index do |segment, index|
          branch[segment] ||= {
            "label" => segment.tr("-_", "  ").split.map(&:capitalize).join(" "),
            "children" => {}
          }
          node = branch[segment]

          if index == segments.length - 1
            node["label"] = if blog_post
              "#{document.date.strftime('%Y-%m-%d')} — #{document.data['title']}"
            else
              title = document.data["title"].to_s.strip
              title.empty? ? node["label"] : title
            end
            node["href"] = document.url
          end

          branch = node["children"]
        end
      end

      site.data["sitemap_tree"] = serialize(root)
    end

    private

    def serialize(nodes)
      nodes.values
        .sort_by { |node| [node["label"].to_s.downcase, node["href"].to_s] }
        .map do |node|
          node.merge("children" => serialize(node["children"]))
        end
    end
  end
end
