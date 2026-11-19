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
sdk_languages:
  - label: Node.js
    slug: nodejs
  - label: Python
    slug: python
  - label: Ruby
    slug: ruby
  - label: Rust
    slug: rust
---

{% if writer_preview %}
> Load and manage encrypted env from your language.

## Languages

{% for sdk in page.sdk_languages -%}
- [{{ sdk.label }}]({{ sdk.slug | prepend: '/docs/sdk/' | append: '/' | relative_url }})
{% endfor %}
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
              {% assign sdk_path = sdk.slug | prepend: '/docs/sdk/' %}
              {% include components/design-settings-tile.html href=sdk_path label=sdk.label icon=sdk.slug %}
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
