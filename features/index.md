---
title: Features
permalink: /features/
layout: radar
body_class: home-page
---

<style>
  .features-hero-ascii {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .features-hero-ascii-art {
    color: var(--design-ink);
    font-family: var(--design-font-mono);
    font-size: clamp(0.55rem, 1.1vw, 0.8rem);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.2;
    margin: 0;
    text-align: left;
    user-select: none;
    white-space: pre;
  }

</style>

{% capture features_hero_visual %}
  <div class="features-hero-ascii" aria-hidden="true">
    <pre class="features-hero-ascii-art">    ●       ●

        ◉

  ●         ●
       ●</pre>
  </div>
{% endcapture %}

<div class="home-sections">
  <section class="design-hero home-hero2" aria-label="Features">
    <div class="armor-shell">
      {% include components/design-hero2.html
        compact=true
        secondary=true
        name="Features"
        description="A secure dotenv—with encryption, redaction, and the workflow extras teams actually use."
        content=features_hero_visual
      %}
    </div>
  </section>

  <section class="radar-section" aria-label="Features list">
    <div class="armor-shell">
      {% capture features_content %}
        {% include components/home-features.html data="features_page" hide_title=true embedded=true %}
      {% endcapture %}
      {% include components/design-content-width.html content=features_content %}
    </div>
  </section>
</div>
