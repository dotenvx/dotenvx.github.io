---
title: Platforms
description: Use dotenvx on your hosting platform.
permalink: /docs/platforms/
layout: radar
redirect_from:
  - /docs/guides/
  - /docs/guides
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Platforms"
  description="Use dotenvx on your hosting platform."
  mark="deploy"
%}

{% capture platforms_items %}
  <li>
    <a class="design-link" href="/docs/platforms/aws-lambda">AWS Lambda</a>
    <span class="design-list-meta">function.zip</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/cloudflare">Cloudflare</a>
    <span class="design-list-meta">Workers &amp; Pages</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/digital-ocean">DigitalOcean</a>
    <span class="design-list-meta">Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/docker">Docker</a>
    <span class="design-list-meta">Dockerfile</span>
  </li>
  <li>
    <a class="design-link" href="/docs/docker-compose">Docker Compose</a>
    <span class="design-list-meta">compose.yml</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/fly">Fly</a>
    <span class="design-list-meta">flyctl secrets</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/heroku">Heroku</a>
    <span class="design-list-meta">buildpack</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/netlify">Netlify</a>
    <span class="design-list-meta">env:set</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/railway">Railway</a>
    <span class="design-list-meta">Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/render">Render</a>
    <span class="design-list-meta">Docker</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms/vercel">Vercel</a>
    <span class="design-list-meta">env add</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% include components/design-list.html
      title="Guides"
      items=platforms_items
    %}
  </div>
</section>
