---
title: Legal
permalink: /legal/
layout: radar
---

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Legal"
  description="Privacy, terms, and trust."
  public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
  keysee_render_mode="wire"
%}

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
    {% include components/design-list.html
      title="Pages"
      items=legal_items
    %}
  </div>
</section>
