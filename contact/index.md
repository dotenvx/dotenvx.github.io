---
title: "Contact"
layout: radar
---

<style>
  .contact-lists {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 36rem;
  }

  .contact-hero-media {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .contact-hero-video {
    aspect-ratio: 4 / 3;
    background: #000;
    display: block;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    width: min(22rem, 100%);
  }

  @media (min-width: 900px) {
    .contact-hero-media {
      justify-content: flex-end;
    }
  }
</style>

{% capture contact_hero_visual %}
  <div class="contact-hero-media">
    <video
      class="contact-hero-video"
      src="/dotenvx-la-office-evening.mp4"
      autoplay
      muted
      loop
      playsinline
      aria-label="dotenvx Los Angeles office"
    ></video>
  </div>
{% endcapture %}
{% include components/design-hero.html
  eyebrow="Dotenvx"
  title="Contact"
  description="We are based in LA and are back and forth often to SF."
  visual=contact_hero_visual
%}

<section class="radar-section">
  <div class="armor-shell">
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
            <span class="design-list-meta">2450 Colorado Ave #100, Santa Monica, CA 90404</span>
          </li>
          <li>
            <a
              class="design-link"
              href="https://maps.google.com/?q=1160+Battery+Street+East+%23100,+San+Francisco,+CA+94111"
              target="_blank"
              rel="noopener noreferrer"
            >San Francisco</a>
            <span class="design-list-meta">1160 Battery Street East #100, San Francisco, CA 94111</span>
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
  </div>
</section>

<section class="radar-section" aria-label="Enterprise sales">
  <div class="armor-shell">
    <a class="design-cta-message" href="mailto:scott@dotenvx.com">
      Work with the founder — enterprise inquiries go straight through.
    </a>
  </div>
</section>
