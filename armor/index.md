---
title: "Dotenvx Armor for Security Teams"
social_title: "Dotenvx Armor for Security Teams"
description: "Hardened Dotenvx for security teams with full access control of your secrets–govern every unlock and see every access."
image: "/assets/img/og-image-armor.png"
layout: radar
---

{% capture armor_hero_container %}
  {% include components/armor/hero-container.html %}
{% endcapture %}

{% capture armor_hero_description %}
  {{ page.description }}
{% endcapture %}
{% capture armor_hero_actions %}
  {% include components/design-btn.html label="Sign Up" href="/signup" data_umami_event="Armor Hero Signup button" %}
  {% include components/design-btn.html label="Pricing" href="/pricing" data_umami_event="Armor Hero Pricing button" %}
{% endcapture %}

<div class="armor-page">
  <div class="home-sections armor-intro">
  {% include components/home-hero.html
    compact=true
    name=page.title
    actions=armor_hero_actions
    content=armor_hero_container
    description=armor_hero_description
  %}

    {% include components/armor/logo-cloud.html %}
  </div>

  {% include components/faq-yes.html %}

  <section class="radar-section" aria-label="Next step">
    <div class="armor-shell">
      <div class="home-cta">
        {% include components/design-cta-message.html
          text="Once the private key isn't on the machine, encrypted .env finally feels finished. That's Armor."
        %}
        {% include components/design-btn.html
          label="Sign Up Free ›"
          href="https://armor.dotenvx.com/signup"
        %}
      </div>
    </div>
  </section>

  {% comment %}
  {% include components/armor/lightning.html %}
  {% include components/armor/hero.html %}
  {% include components/armor/keys.html %}
  {% include components/armor/grant.html %}
  {% include components/armor/cta.html %}
  {% endcomment %}
</div>
