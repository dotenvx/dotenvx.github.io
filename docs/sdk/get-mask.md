---
layout: docs-cli
title: "get(KEY, {mask: true})"
description: Programmatically return a masked environment variable value.
permalink: /docs/sdk/get-mask/
redirect_from:
  - /docs/advanced/get-mask/
  - /docs/advanced/get-mask
  - /docs/ref/sdk/get-mask/
  - /docs/ref/sdk/get-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: get
    href: /docs/sdk/config-get-key/
---
<p class="design-paragraph">By default, up to the first six characters are visible.</p>

{% capture sdk_code_0 %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')

async function main() {
  const maskedValue = await dotenvx.get('SECRET', { mask: true })

  console.log(maskedValue)
}

main()
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
$ node index.js
abcdef******
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

<p class="design-paragraph">Set <code class="design-code">mask: 0</code> to fully mask values.</p>
