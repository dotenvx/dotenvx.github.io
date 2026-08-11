---
title: Echo
description: Use dotenvx with Echo.
permalink: /docs/echo/
layout: radar
redirect_from:
  - /docs/frameworks/echo
  - /docs/frameworks/echo/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Echo"
  description="Use dotenvx with Echo."
  mark="echo"
%}

{% capture echo_platforms_items %}
  <li>
    <a class="design-link" href="/docs/docker">Docker</a>
    <span class="design-list-meta">dotenvx, Echo, and Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/heroku">Heroku</a>
    <span class="design-list-meta">dotenvx, Echo, and Heroku</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% include components/design-list.html
      title="Platforms"
      items=echo_platforms_items
    %}
  </div>
</section>
