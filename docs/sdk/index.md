---
description: "Use Dotenvx SDKs to load and manage encrypted environment variables directly in your application. Browse language references and encryption primitives."
title: SDKs
permalink: /docs/sdk/
redirect_from:
  - /docs/ref/sdk
  - /docs/ref/sdk/
  - /docs/sdk/introduction
  - /docs/sdk/introduction/
layout: radar
writer_layout: single
sdk_languages:
  - label: Node.js
    slug: nodejs
  - label: Next.js
    slug: nextjs
    writer_only: true
  - label: Python
    slug: python
  - label: Ruby
    slug: ruby
  - label: Go
    slug: go
    writer_only: true
  - label: Rust
    slug: rust
  - label: PHP
    slug: php
    writer_only: true
---

{% if writer_preview %}
> Load and manage encrypted env from your language.

<p><img class="writer-image" src="{{ '/sdk.png' | relative_url }}" alt="Power lines silhouetted against a sunset" width="768" height="307"></p>

## Languages

{% include writer-sdk-list.md languages=page.sdk_languages %}
{% else %}
{% include components/docs-hero.html
  eyebrow="Docs"
  title="SDKs"
  description="Load and manage encrypted env from your language."
  mark="<sdk/>"
%}

<section class="radar-section">
  <div class="armor-shell">
  <div class="design-content-width">
    <div class="docs-cli-lists">
      {% capture step_content %}
        <div class="docs-cli-cards">
          <p class="design-list-title">Languages</p>
          <div class="design-settings-grid">
            {% for sdk in page.sdk_languages %}
              {% unless sdk.writer_only %}
                {% assign sdk_path = sdk.slug | prepend: '/docs/sdk/' %}
                {% include components/design-settings-tile.html href=sdk_path label=sdk.label icon=sdk.slug %}
              {% endunless %}
            {% endfor %}
          </div>
        </div>
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>
  </div>
</div>
</section>
{% endif %}
