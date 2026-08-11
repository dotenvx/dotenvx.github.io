---
title: Node.js
description: Load and manage encrypted env from Node.js.
permalink: /docs/sdk/nodejs/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="SDKs"
  eyebrow_href="/docs/sdk"
  title="Node.js"
  description="Load and manage encrypted env from Node.js."
  icon="nodejs"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Packages</h2>
    <div class="design-list">
      <ul class="design-list-items">
        <li>
          <a class="design-link" href="https://www.npmjs.com/package/@dotenvx/dotenvx" target="_blank" rel="noopener noreferrer">@dotenvx/dotenvx</a>
          <span class="design-list-meta">npm</span>
        </li>
        <li>
          <a class="design-link" href="https://www.npmjs.com/package/@dotenvx/next-env" target="_blank" rel="noopener noreferrer">@dotenvx/next-env</a>
          <span class="design-list-meta">Next.js</span>
        </li>
        <li>
          <a class="design-link" href="/docs/sdk/nodejs/primitives/">@dotenvx/primitives</a>
          <span class="design-list-meta">primitives</span>
        </li>
      </ul>
    </div>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    {% capture sdk_node_install %}
$ npm install @dotenvx/dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_node_install copy_text="npm install @dotenvx/dotenvx" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Usage</h2>
    {% capture sdk_node_usage %}
require('@dotenvx/dotenvx').config()
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_node_usage copy_text="require('@dotenvx/dotenvx').config()" %}

    <p class="design-paragraph">See the <a class="design-link" href="/docs/nodejs/">Node.js quickstart</a> or <a class="design-link" href="/docs/nextjs/">Next.js quickstart</a> for a full walkthrough.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    {% capture sdk_methods_items %}
      <li><a class="design-link" href="/docs/sdk/nodejs/config/">config</a></li>
      <li><a class="design-link" href="/docs/sdk/nodejs/parse/">parse</a></li>
      <li><a class="design-link" href="/docs/sdk/nodejs/config-set-key-value/">set</a></li>
      <li><a class="design-link" href="/docs/sdk/nodejs/config-get-key/">get</a></li>
    {% endcapture %}
    {% include components/design-list.html
      title="Methods"
      items=sdk_methods_items
    %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
