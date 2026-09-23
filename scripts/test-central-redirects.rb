require "bundler/setup"
require "jekyll"
require "json"
require "tmpdir"
require "fileutils"
require_relative "../_plugins/central_redirects"

Dir.mktmpdir("central-redirects-test-") do |root|
  source = File.join(root, "source")
  destination = File.join(root, "output")
  FileUtils.mkdir_p(File.join(source, "_data"))
  File.write(File.join(source, "new.md"), "---\npermalink: /new/\nredirect_from: /existing-alias/\n---\nNew page\n")
  routes = {
    "/old/" => "/new/",
    "/old.html" => "/new/#example",
    "/external/" => "https://example.com/page?view=docs"
  }
  File.write(File.join(source, "_data", "redirects.yml"), routes.to_yaml)
  site = Jekyll::Site.new(Jekyll.configuration(
    "source" => source, "destination" => destination,
    "url" => "https://test.example", "baseurl" => "/preview",
    "plugins" => ["jekyll-redirect-from"], "quiet" => true
  ))
  site.process
  expected = {
    "old/index.html" => "https://test.example/preview/new/",
    "old.html" => "https://test.example/preview/new/#example",
    "external/index.html" => "https://example.com/page?view=docs",
    "existing-alias/index.html" => "https://test.example/preview/new/"
  }
  expected.each do |file, target|
    html = File.read(File.join(destination, file))
    raise "Missing redirect target in #{file}" unless html.include?(target)
    raise "Missing refresh in #{file}" unless html.include?('http-equiv="refresh"')
  end
  generated = JSON.parse(File.read(File.join(destination, "redirects.json")))
  raise "Central redirects absent from redirects.json" unless routes.keys.all? { |path| generated.key?(path) }

  [ {"/new/" => "/elsewhere/"}, {"/loop/" => "/loop/"}, {"/a/" => "/b/", "/b/" => "/new/"} ].each do |invalid|
    site.reset
    site.read
    site.data["redirects"] = invalid
    begin
      CentralRedirects.new.generate(site)
      raise "Invalid redirect map was accepted: #{invalid}"
    rescue Jekyll::Errors::FatalException
      # Conflicting pages, self redirects, and chains must fail clearly.
    end
  end
end
puts "Central redirects passed: paths, fragments, external URLs, baseurl, existing aliases, and invalid maps."
