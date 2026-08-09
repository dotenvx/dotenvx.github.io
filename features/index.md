---
title: Features
permalink: /features/
layout: radar
---

<style>
  .features-hero-tbd {
    align-items: center;
    color: var(--design-secondary, var(--design-dim));
    display: flex;
    font-family: var(--design-font-mono);
    font-size: var(--design-text-compact);
    font-weight: 500;
    height: 100%;
    justify-content: center;
    letter-spacing: 0.08em;
    min-height: inherit;
    text-transform: uppercase;
    user-select: none;
    width: 100%;
  }
</style>

{% capture features_hero_visual %}
  <div class="features-hero-tbd" aria-hidden="true">TBD</div>
{% endcapture %}

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Features"
  description="A secure dotenv—with encryption, redaction, and the workflow extras teams actually use."
  visual=features_hero_visual
%}

{% include components/home-features.html hide_title=true %}
