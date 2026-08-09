---
title: Features
permalink: /features/
layout: radar
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
    font-size: var(--design-text-size);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.35;
    margin: 0;
    text-align: left;
    user-select: none;
    white-space: pre;
  }

  @media (min-width: 900px) {
    .features-hero-ascii {
      height: 100%;
      min-height: inherit;
    }
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

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Features"
  description="A secure dotenv—with encryption, redaction, and the workflow extras teams actually use."
  visual=features_hero_visual
%}

{% include components/home-features.html hide_title=true %}
