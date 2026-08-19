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
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    height: 100%;
    justify-content: center;
    line-height: 1.2;
    margin: 0;
    min-height: inherit;
    user-select: none;
    white-space: pre;
    width: 100%;
  }
</style>

{% capture sitemap_hero_visual %}
  <pre class="sitemap-hero-ascii" aria-hidden="true">--.     .--.     .--X
   `---'    `---'</pre>
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
