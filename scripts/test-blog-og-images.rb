require "bundler/setup"
require "jekyll"
require "minitest/autorun"
require_relative "../_plugins/og_images"

class BlogOgImagesTest < Minitest::Test
  Page = Struct.new(:content, :url, :data)

  def setup
    @site = Jekyll::Site.new(Jekyll.configuration("source" => File.expand_path("..", __dir__)))
  end

  def image(content)
    OgImages.new.first_post_image(@site, Page.new(content, "/blog/2026/post.html", { "title" => "Post title" }))
  end

  def test_first_image_in_document_order
    assert_equal({ "path" => "/first.jpg", "alt" => "First" }, image('![First](/first.jpg)' + "\n\n" + '<img src="/second.jpg">'))
  end

  def test_html_and_external_images
    assert_equal "https://example.com/photo.jpg", image('<a><img src="https://example.com/photo.jpg"></a>').fetch("path")
  end

  def test_reference_images
    assert_equal "/photo.jpg", image("![Photo][photo]\n\n[photo]: /photo.jpg").fetch("path")
  end

  def test_relative_images
    assert_equal "/blog/2026/photo.jpg", image('![Photo](photo.jpg)').fetch("path")
  end

  def test_code_examples_are_ignored
    assert_nil image("```html\n<img src=\"/example.jpg\">\n```")
  end

  def test_no_images_keeps_fallback
    assert_nil image("Just text.")
  end
end
