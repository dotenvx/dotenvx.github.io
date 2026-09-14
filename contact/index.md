---
title: "Contact"
layout: radar
body_class: home-page contact-page
---

<style>
  .contact-lists {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .design-content-width.contact-content { max-width: 23rem; }

  .contact-page .design-hero2-content { width: min(14rem, 100%); }

  .contact-hero-video {
    aspect-ratio: 4 / 3;
    background: #000;
    display: block;
    width: 100%;
    object-fit: cover;
  }
</style>

{% capture contact_hero_visual %}
    <video
      class="contact-hero-video"
      src="{{ site.data.videos['la-office-evening'].url }}"
      autoplay
      muted
      loop
      playsinline
      aria-label="dotenvx Los Angeles office"
    ></video>
{% endcapture %}
<div class="home-sections">
<section class="design-hero home-hero2" aria-label="Contact">
  <div class="armor-shell">
    {% include components/design-hero2.html
      compact=true
      secondary=true
      name="Contact"
      description="We are based in LA and keep an office in SF–visiting often."
      content=contact_hero_visual
    %}
  </div>
</section>

<section class="radar-section">
  <div class="armor-shell">
    {% capture contact_lists %}
    <div class="contact-lists">
      <div class="design-list">
        <p class="design-list-title">Offices</p>
        <ul class="design-list-items">
          <li>
            <a
              class="design-link"
              href="https://maps.google.com/?q=2450+Colorado+Ave+%23100,+Santa+Monica,+CA+90404"
              target="_blank"
              rel="noopener noreferrer"
            >Los Angeles</a>
            <p class="design-paragraph">2450 Colorado Ave #100, Santa Monica, CA 90404</p>
          </li>
          <li>
            <a
              class="design-link"
              href="https://maps.google.com/?q=1160+Battery+Street+East+%23100,+San+Francisco,+CA+94111"
              target="_blank"
              rel="noopener noreferrer"
            >San Francisco</a>
            <p class="design-paragraph">1160 Battery Street East #100, San Francisco, CA 94111</p>
          </li>
        </ul>
      </div>

      <div class="design-list">
        <p class="design-list-title">Email</p>
        <ul class="design-list-items">
          <li><a class="design-link" href="mailto:support@dotenvx.com">support@dotenvx.com</a></li>
          <li><a class="design-link" href="mailto:security@dotenvx.com">security@dotenvx.com</a></li>
        </ul>
      </div>
    </div>
    {% endcapture %}
    {% include components/design-content-width.html content=contact_lists class="contact-content" %}
  </div>
</section>
</div>
