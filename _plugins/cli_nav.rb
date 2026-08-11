# Precompute CLI prev/next order once per build.
# The previous Liquid implementation rescanned site.pages for every CLI page
# (O(pages × commands × pages)) and dominated render time.
module DocsCliNav
  module_function

  def normalize_url(url)
    return nil if url.nil? || url.to_s.empty?

    u = url.to_s
    u.end_with?("/") ? u : "#{u}/"
  end

  def pages_by_url(site)
    map = {}
    site.pages.each do |page|
      url = normalize_url(page.url)
      map[url] = page if url

      permalink = normalize_url(page.data["permalink"])
      map[permalink] = page if permalink
    end
    map
  end

  def build(site)
    commands = site.data.dig("docs", "cli_commands") || []
    by_url = pages_by_url(site)
    nav = []

    commands.each do |cmd_href|
      cmd_url = normalize_url(cmd_href)
      cmd_page = by_url[cmd_url]
      next unless cmd_page

      nav << {
        "label" => cmd_page.data["title"].to_s,
        "href" => cmd_url
      }

      Array(cmd_page.data["options"]).each do |opt|
        next unless opt.is_a?(Hash)

        opt_url = normalize_url(opt["href"])
        next unless opt_url

        opt_page = by_url[opt_url]
        opt_label = if opt_page && opt_page.data["title"]
                      opt_page.data["title"]
                    else
                      opt["title"]
                    end

        nav << {
          "label" => opt_label.to_s,
          "href" => opt_url
        }

        next unless opt_page

        Array(opt_page.data["options"]).each do |nested|
          next unless nested.is_a?(Hash)

          nested_url = normalize_url(nested["href"])
          next unless nested_url

          nested_page = by_url[nested_url]
          nested_label = if nested_page && nested_page.data["title"]
                           nested_page.data["title"]
                         else
                           nested["title"]
                         end

          nav << {
            "label" => nested_label.to_s,
            "href" => nested_url
          }
        end
      end
    end

    nav
  end
end

Jekyll::Hooks.register :site, :pre_render do |site|
  site.data["cli_nav"] = DocsCliNav.build(site)
end
