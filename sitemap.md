---
title: Sitemap
permalink: /sitemap
layout: radar
body_class: home-page
---

<style>
  .sitemap-hero-ascii {
    align-items: center;
    color: var(--design-ink);
    display: flex;
    font-family: var(--design-font-mono);
    font-size: clamp(0.55rem, 1.1vw, 0.8rem);
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

<div class="home-sections">
<section class="design-hero-section home-hero" aria-label="Sitemap">
  <div class="armor-shell">
    {% include components/design-hero.html
      compact=true
      secondary=true
      name="Sitemap"
      description="Every public page on dotenvx.com, in one place."
      content=sitemap_hero_visual
    %}
  </div>
</section>

{% capture sitemap_items %}
  <li><a class="design-link" href="{{ '/' | relative_url }}">Home</a></li>
  {% include components/design-list-tree.html nodes=site.data.sitemap_tree %}
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% capture sitemap_content %}
      {% include components/design-list.html title="Pages" items=sitemap_items %}
    {% endcapture %}
    {% include components/design-content-width.html content=sitemap_content %}
  </div>
</section>

</div>
