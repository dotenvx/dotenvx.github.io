---
title: Sitemap
permalink: /sitemap
layout: radar
---

<style>
  .sitemap-hero-ascii {
    align-items: center;
    color: var(--design-ink);
    display: flex;
    font-family: var(--design-font-mono);
    font-size: clamp(3rem, 8vw, 6rem);
    height: 100%;
    justify-content: center;
    line-height: 1;
    min-height: inherit;
    user-select: none;
    width: 100%;
  }
</style>

{% capture sitemap_hero_visual %}
  <div class="sitemap-hero-ascii" aria-hidden="true">┬</div>
{% endcapture %}

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Sitemap"
  description="Every public page on dotenvx.com, in one place."
  visual=sitemap_hero_visual
%}

{% capture sitemap_items %}
  <li><a class="design-link" href="{{ '/' | relative_url }}">Home</a></li>
  {% include components/design-list-tree.html nodes=site.data.sitemap_tree %}
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% include components/design-list.html
      title="Pages"
      items=sitemap_items
    %}
  </div>
</section>
