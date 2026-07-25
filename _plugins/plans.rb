require "json"
require "net/http"
require "uri"

# Fetches plan catalog from Radar at build time so dotenvx.com/pricing
# stays in sync with armor.dotenvx.com. Falls back to _data/plans.json.
class Plans < Jekyll::Generator
  priority :high

  DEFAULT_URL = "https://armor.dotenvx.com/public/plans".freeze

  def generate(site)
    url = ENV.fetch("PLANS_API_URL", DEFAULT_URL)
    payload = fetch_plans(url)

    if payload
      site.data["plans"] = payload
      Jekyll.logger.info "plans", "loaded from #{url}"
    elsif site.data["plans"]
      Jekyll.logger.warn "plans", "using committed _data/plans.json (fetch failed)"
    else
      Jekyll.logger.abort_with "plans", "no plan data available from #{url} or _data/plans.json"
    end
  end

  private

  def fetch_plans(url)
    uri = URI(url)
    response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == "https", open_timeout: 5, read_timeout: 10) do |http|
      request = Net::HTTP::Get.new(uri)
      request["Accept"] = "application/json"
      request["User-Agent"] = "dotenvx.github.io-jekyll"
      http.request(request)
    end

    return nil unless response.is_a?(Net::HTTPSuccess)

    JSON.parse(response.body)
  rescue StandardError => e
    Jekyll.logger.warn "plans", "fetch failed: #{e.class} #{e.message}"
    nil
  end
end
