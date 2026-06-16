Jekyll::Hooks.register :site, :post_write do |site|
  exports = {
    'md/index.md' => 'index.md'
  }

  exports.each do |source_path, destination_path|
    source = File.join(site.source, source_path)
    next unless File.file?(source)

    destination = File.join(site.dest, destination_path)
    FileUtils.mkdir_p(File.dirname(destination))
    FileUtils.cp(source, destination)
  end
end
