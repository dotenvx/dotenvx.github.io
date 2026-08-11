---
title: SDKs
permalink: /docs/sdk/
redirect_from:
  - /docs/ref/sdk
  - /docs/ref/sdk/
  - /docs/sdk/introduction
  - /docs/sdk/introduction/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="SDKs"
  description="Load and manage encrypted env from your language."
  mark="<sdk/>"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-cli-lists">
      {% capture step_content %}
        <div class="docs-cli-cards">
          <p class="design-list-title">Languages</p>
          <div class="design-settings-grid">
            {% include components/design-settings-tile.html href="/docs/sdk/nodejs" label="Node" icon="nodejs" %}
            {% include components/design-settings-tile.html href="/docs/sdk/python" label="Python" icon="python" %}
            {% include components/design-settings-tile.html href="/docs/sdk/ruby" label="Ruby" icon="ruby" %}
            {% include components/design-settings-tile.html href="/docs/sdk/rust" label="Rust" icon="rust" %}
          </div>
        </div>
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>
  </div>
</section>
