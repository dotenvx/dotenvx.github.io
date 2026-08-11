---
title: Primitives
description: Low-level encryption primitives for Node.js.
permalink: /docs/sdk/nodejs/primitives/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Node"
  eyebrow_href="/docs/sdk/nodejs"
  title="Primitives"
  description="Low-level encryption primitives for Node.js."
  icon="nodejs"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Package</h2>
    <div class="design-list">
      <ul class="design-list-items">
        <li>
          <a class="design-link" href="https://www.npmjs.com/package/@dotenvx/primitives" target="_blank" rel="noopener noreferrer">@dotenvx/primitives</a>
          <span class="design-list-meta">npm</span>
        </li>
      </ul>
    </div>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    {% capture sdk_node_primitives_install %}
$ npm install @dotenvx/primitives
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_node_primitives_install copy_text="npm install @dotenvx/primitives" %}

    <p class="design-paragraph">Use this when you need the crypto building blocks without the full <a class="design-link" href="/docs/sdk/nodejs/"><code class="design-code">@dotenvx/dotenvx</code></a> runtime.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
