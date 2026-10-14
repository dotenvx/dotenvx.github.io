---
title: Node.js
description: Load and manage encrypted env from Node.js.
permalink: /docs/sdk/nodejs/
layout: docs-markdown
eyebrow: "SDKs"
eyebrow_href: "/docs/sdk"
icon: "nodejs"
---

## Packages

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

## Install

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

## Usage

```javascript
require('@dotenvx/dotenvx').config()
```

See the [Node.js quickstart](/docs/nodejs/) or [Next.js quickstart](/docs/nextjs/) for a full walkthrough.

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
