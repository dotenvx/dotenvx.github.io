---
title: Corporate Support
description: "Steward the next chapter of .env."
permalink: /corporate
og_image:
  template: mark
  image: assets/img/corporate-cube.png
  alt: Silver desk cube engraved with .ENV
layout: radar
body_class: home-page corporate-page
---

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Corporate Support">
    <div class="armor-shell">
      {% capture corporate_art %}
        {% include components/env-slab.html cube=true %}
      {% endcapture %}
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description content=corporate_art %}
    </div>
  </section>

  <section class="radar-section" aria-label="Shape the future of .env">
    <div class="armor-shell">
      {% capture corporate_story %}
        <div class="design-prose">
          <p>We’re looking for companies that care about the future of .env and want to help steward it.</p>
          <p>Meet with the maintainers, see work in progress, and share perspectives with other companies backing the future of Dotenv and Dotenvx—for humans and agents.</p>
          <p>Your contribution sustains the open-source work: maintaining the foundation, exploring new ideas, and developing patterns the whole software community can use.</p>
          <p class="text-center">{% include components/design-link.html href="/ai" label="Explore the next chapter of .env →" %}</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=corporate_story %}
    </div>
  </section>

  <section class="radar-section" aria-label="Corporate support tiers">
    <div class="armor-shell">
      {% include components/design-page-title.html title="Shape .env." heading_tag="h2" title_class="text-center" %}
      <div class="corporate-tier-picker">
        <div class="corporate-tiers" aria-label="Choose a corporate support tier">
          {% for tier in site.data.corporate_tiers %}
            <div class="corporate-tier" data-tier-name="{{ tier.name | escape }}" data-tier-price="{{ tier.price | escape }}" data-tier-description="{{ tier.description | escape }}">
              <div class="corporate-tier-art">
                {% include components/env-slab.html cube=true scale=tier.scale decorative=true %}
                <button class="corporate-tier-select" type="button" aria-label="Show {{ tier.name }} details" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="corporate-tier-details"><span>{{ tier.name }}</span></button>
              </div>
            </div>
          {% endfor %}
        </div>
        {% assign first_tier = site.data.corporate_tiers | first %}
        {% capture tier_details %}
          <div id="corporate-tier-details" class="corporate-tier-details" aria-live="polite" aria-atomic="true">
            <div class="corporate-tier-details-heading">
              <h3 data-tier-detail-name>{{ first_tier.name }}</h3>
              <p data-tier-detail-price>{{ first_tier.price }}</p>
            </div>
            <p data-tier-detail-description>{{ first_tier.description }}</p>
            {% capture contact_href %}mailto:scott@dotenvx.com?subject={{ first_tier.name | url_encode }}%20corporate%20support{% endcapture %}
            <div class="corporate-tier-contact">
              {% include components/design-btn.html label="Start the Conversation" href=contact_href class="corporate-tier-contact-link" %}
            </div>
          </div>
        {% endcapture %}
        {% include components/design-card.html class="corporate-tier-details-card" content=tier_details %}
      </div>
      <script src="/assets/js/corporate-tiers.js?v={{ site.time | date: '%s' }}" defer></script>
    </div>
  </section>

  <section class="radar-section" aria-label="Build an open foundation together">
    <div class="armor-shell">
      {% capture corporate_invitation %}
        <div class="design-prose">
          <h2 class="design-list-title text-center">A shared future.</h2>
          <p>Supporters get a meaningful voice in what comes next. Maintainers retain final technical decisions, and improvements developed through the program remain open for everyone to use.</p>
          <p>It starts with a conversation about what matters to your team and how we might work together.</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=corporate_invitation %}
    </div>
  </section>
</div>
