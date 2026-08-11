---
title: Company
permalink: /company/
layout: radar
---

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Company"
  description="Open source, changelog, trust, and how to reach us."
  public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
  keysee_render_mode="wire"
%}

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
    {% include components/design-list.html
      title="Pages"
      items=company_items
    %}
  </div>
</section>
