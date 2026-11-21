require "bundler/setup"
require "jekyll"
require "minitest/autorun"
require_relative "../_plugins/main_site"

class ShareImagesTest < Minitest::Test
  Page = Struct.new(:url, :data)
  Site = Struct.new(:config)

  def setup
    @site = Site.new({ "url" => "https://dotenvx.com", "baseurl" => "/" })
  end

  def image(content, data = {})
    page = Page.new("/blog/2026/post.html", { "title" => "Post title", "main_blog_post" => true }.merge(data))
    document = Kramdown::Document.new(content, input: "GFM")
    html, = MainMarkdown.convert(document.root, document.options)
    MainSite.new.send(:lead_share_image, @site, page, html)
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

  def test_text_only_post_has_no_share_image
    assert_nil image("Just text.")
  end

  def test_main_page_uses_first_lead_image_at_any_size
    @site.config["baseurl"] = "/preview"
    content = <<~HTML
      <img src="/badge.svg">
      <img class="main-image" src="/preview/newsletter.png" width="840" height="360" alt="Mug &amp; laptop">
      <img class="main-image" src="/preview/second.png" width="768" height="307">
    HTML
    assert_equal(
      { "path" => "/newsletter.png", "width" => 840, "height" => 360, "alt" => "Mug &amp; laptop" },
      image(content, "main_blog_post" => false)
    )
  end

  def test_main_page_without_a_lead_image
    assert_nil image('<img src="/badge.svg">', "main_blog_post" => false)
  end

  def test_image_selection_can_be_disabled
    assert_nil image("![First](/first.jpg)", "og_image" => false)
  end
end
