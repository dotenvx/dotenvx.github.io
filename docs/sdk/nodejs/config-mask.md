---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(mask: true)"
description: Inject and return masked values.
permalink: /docs/sdk/nodejs/config-mask/
redirect_from:
  - /docs/sdk/config-mask
  - /docs/sdk/config-mask/
  - /docs/advanced/config-mask
  - /docs/advanced/config-mask/
  - /docs/ref/sdk/config-mask
  - /docs/ref/sdk/config-mask/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
  - label: config
    href: /docs/sdk/nodejs/config/
---
<p class="design-paragraph">By default, up to the first six characters are visible.</p>

{% capture sdk_code_0 %}
# .env
SECRET="abcdefghijkl"
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const result = dotenvx.config({ mask: true, quiet: true })

console.log(process.env.SECRET)
console.log(result.parsed.SECRET)
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

{% capture sdk_code_2 %}
$ node index.js
abcdef******
abcdef******
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}

<p class="design-paragraph">Set <code class="design-code">mask: 0</code> to fully mask values.</p>
