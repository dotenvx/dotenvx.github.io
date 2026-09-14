---
title: Legal
permalink: /legal/
layout: radar
body_class: home-page
---

<style>
  .legal-hero-key { aspect-ratio: 4 / 3; width: 100%; }
</style>

{% capture legal_visual %}
  {% include components/keysee-viewer.html
    public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
    render_mode="wire"
    class="legal-hero-key relative min-h-0 overflow-hidden bg-transparent"
  %}
{% endcapture %}

<div class="home-sections">
<section class="design-hero home-hero2" aria-label="Legal">
  <div class="armor-shell">
    {% include components/design-hero2.html
      compact=true
      secondary=true
      name="Legal"
      description="Privacy, terms, and trust."
      content=legal_visual
    %}
  </div>
</section>

{% capture legal_items %}
  <li>
    <a class="design-link" href="/privacy">Privacy</a>
    <span class="design-list-meta">privacy policy</span>
  </li>
  <li>
    <a class="design-link" href="/terms">Terms</a>
    <span class="design-list-meta">terms of service</span>
  </li>
  <li>
    <a class="design-link" href="https://trust.dotenvx.com" target="_blank" rel="noopener noreferrer">Trust</a>
    <span class="design-list-meta">trust center</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% capture legal_content %}
      {% include components/design-list.html title="Pages" items=legal_items %}
    {% endcapture %}
    {% include components/design-content-width.html content=legal_content %}
  </div>
</section>

</div>
