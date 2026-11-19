---
title: Rocket
description: Use dotenvx with Rocket.
permalink: /docs/rocket/
layout: radar
redirect_from:
  - /docs/frameworks/rocket
  - /docs/frameworks/rocket/
---

{% capture rocket_platforms_items %}
  <li>
    <a class="design-link" href="/docs/docker">Docker</a>
    <span class="design-list-meta">dotenvx, Rocket, and Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/heroku">Heroku</a>
    <span class="design-list-meta">dotenvx, Rocket, and Heroku</span>
  </li>
{% endcapture %}

{% if writer_preview %}
## Platforms

<ul>{{ rocket_platforms_items }}</ul>
{% else %}
{% include components/docs-hero.html
  eyebrow="Docs"
  title="Rocket"
  description="Use dotenvx with Rocket."
  icon="rocket"
%}

<section class="radar-section">
  <div class="armor-shell">
  <div class="design-content-width">
    {% include components/design-list.html
      title="Platforms"
      items=rocket_platforms_items
    %}
  </div>
</div>
</section>
{% endif %}
