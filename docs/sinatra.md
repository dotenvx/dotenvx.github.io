---
title: Sinatra
description: Use dotenvx with Sinatra.
permalink: /docs/sinatra/
layout: radar
redirect_from:
  - /docs/frameworks/sinatra
  - /docs/frameworks/sinatra/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Sinatra"
  description="Use dotenvx with Sinatra."
  icon="sinatra"
%}

{% capture sinatra_platforms_items %}
  <li>
    <a class="design-link" href="/docs/docker">Docker</a>
    <span class="design-list-meta">dotenvx, Sinatra, and Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/heroku">Heroku</a>
    <span class="design-list-meta">dotenvx, Sinatra, and Heroku</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% include components/design-list.html
      title="Platforms"
      items=sinatra_platforms_items
    %}
  </div>
</section>
