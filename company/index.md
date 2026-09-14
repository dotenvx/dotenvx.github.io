---
title: Company
permalink: /company/
layout: radar
body_class: home-page
---

<style>
  .company-hero-key { aspect-ratio: 4 / 3; width: 100%; }
</style>

{% capture company_visual %}
  {% include components/keysee-viewer.html
    public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
    render_mode="wire"
    class="company-hero-key relative min-h-0 overflow-hidden bg-transparent"
  %}
{% endcapture %}

<div class="home-sections">
<section class="design-hero home-hero2" aria-label="Company">
  <div class="armor-shell">
    {% include components/design-hero2.html
      compact=true
      secondary=true
      name="Company"
      description="Open source, changelog, trust, and how to reach us."
      content=company_visual
    %}
  </div>
</section>

{% capture company_items %}
  <li>
    <a class="design-link" href="/search">Search</a>
    <span class="design-list-meta">docs &amp; site</span>
  </li>
  <li>
    <a class="design-link" href="/opensource">Open Source</a>
    <span class="design-list-meta">projects &amp; talks</span>
  </li>
  <li>
    <a class="design-link" href="/changelog">Changelog</a>
    <span class="design-list-meta">what shipped</span>
  </li>
  <li>
    <a class="design-link" href="/contact">Contact</a>
    <span class="design-list-meta">LA &amp; SF</span>
  </li>
  <li>
    <a class="design-link" href="https://trust.dotenvx.com" target="_blank" rel="noopener noreferrer">Trust</a>
    <span class="design-list-meta">trust center</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% capture company_content %}
      {% include components/design-list.html title="Pages" items=company_items %}
    {% endcapture %}
    {% include components/design-content-width.html content=company_content %}
  </div>
</section>

</div>
