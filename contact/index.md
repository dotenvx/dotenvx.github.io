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

  .contact-hero-office {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    min-height: inherit;
  }

  .contact-hero-office .radar-nav-office {
    flex: 0 0 auto;
    width: min(22rem, 100%);
  }
</style>

{% capture contact_hero_visual %}
  <div class="contact-hero-office">
    <a
      href="https://maps.google.com/?q=2450+Colorado+Ave+%23100,+Santa+Monica,+CA+90404"
      target="_blank"
      rel="noopener noreferrer"
      class="radar-nav-office"
    >
      <img
        src="/dotenvx-la-office-evening-dither.gif"
        alt="dotenvx Los Angeles office"
        class="radar-nav-office-image"
        loading="lazy"
      />
      <span class="radar-nav-office-copy">
        <span class="radar-nav-office-label">Office</span>
        <span class="radar-nav-office-line">2450 Colorado Ave #100</span>
        <span class="radar-nav-office-line radar-nav-office-line--dim">Santa Monica, CA 90404</span>
      </span>
    </a>
  </div>
{% endcapture %}
{% include components/design-hero.html
  eyebrow="Company"
  title="Contact"
  description="Offices, support, and how to reach the dotenvx team."
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
