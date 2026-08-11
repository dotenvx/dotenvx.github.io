---
title: Flask
description: Use dotenvx with Flask.
permalink: /docs/flask/
layout: radar
redirect_from:
  - /docs/frameworks/flask
  - /docs/frameworks/flask/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Flask"
  description="Use dotenvx with Flask."
  icon="flask"
%}

{% capture flask_platforms_items %}
  <li>
    <a class="design-link" href="/docs/docker">Docker</a>
    <span class="design-list-meta">dotenvx, Flask, and Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/heroku">Heroku</a>
    <span class="design-list-meta">dotenvx, Flask, and Heroku</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% include components/design-list.html
      title="Platforms"
      items=flask_platforms_items
    %}
  </div>
</section>
