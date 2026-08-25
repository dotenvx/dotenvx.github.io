---
title: Resources
description: Guides and references for dotenvx files, install, platforms, and more.
permalink: /docs/resources/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Resources"
  description="Guides and references for dotenvx files, install, platforms, and more."
  mark="docs"
%}

{% capture resources_items %}
  <li>
    <a class="design-link" href="/docs/env-file">.env</a>
    <span class="design-list-meta">separates secrets from code</span>
  </li>
  <li>
    <a class="design-link" href="/docs/env-keys-file">.env.keys</a>
    <span class="design-list-meta">private decryption keys</span>
  </li>
  <li>
    <a class="design-link" href="/docs/learn/installing">Installing</a>
    <span class="design-list-meta">curl, npm, brew, more</span>
  </li>
  <li>
    <a class="design-link" href="/docs/platforms">Platforms</a>
    <span class="design-list-meta">Vercel, Fly, Heroku, more</span>
  </li>
  <li>
    <a class="design-link" href="/docs/errors">Errors</a>
    <span class="design-list-meta">Dotenvx and Armor error codes</span>
  </li>
  <li>
    <a class="design-link" href="/docs/events">Events</a>
    <span class="design-list-meta">Armor activity event names</span>
  </li>
  <li>
    <a class="design-link" href="/docs/stats">Stats</a>
    <span class="design-list-meta">download stats</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-intro-lists">
      {% include components/design-list.html
        title="Resources"
        items=resources_items
      %}
    </div>
  </div>
</section>
