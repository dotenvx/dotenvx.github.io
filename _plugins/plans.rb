require "json"
require "net/http"
require "uri"

# Uses committed _data/plans.json by default.
# Set PLANS_API_URL to pull from Radar instead (e.g. production sync).
class Plans < Jekyll::Generator
  priority :high

  def generate(site)
    url = ENV["PLANS_API_URL"]

    if url && !url.empty?
      payload = fetch_plans(url)
      if payload && retention_priced?(payload)
        site.data["plans"] = payload
        Jekyll.logger.info "plans", "loaded from #{url}"
        return
      end

      reason = payload ? "API missing retention pricing fields" : "fetch failed"
      if site.data["plans"]
        Jekyll.logger.warn "plans", "using committed _data/plans.json (#{reason})"
        return
      end

      Jekyll.logger.abort_with "plans", "no plan data available from #{url} or _data/plans.json"
    end

    if site.data["plans"]
      Jekyll.logger.info "plans", "loaded from _data/plans.json"
    else
      Jekyll.logger.abort_with "plans", "no plan data available from _data/plans.json"
    end
  end

  private

  def retention_priced?(payload)
    features = payload["features"] || payload[:features] || []
    features.any? { |feature| (feature["id"] || feature[:id]) == "audit_retention" }
  end

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
