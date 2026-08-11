---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
command: "get()"
title: get
description: Programmatically get an environment variable at access/runtime.
permalink: /docs/sdk/nodejs/config-get-key/
redirect_from:
  - /docs/sdk/config-get-key
  - /docs/sdk/config-get-key/
  - /docs/sdk/get
  - /docs/sdk/get/
  - /docs/advanced/config-get-key
  - /docs/advanced/config-get-key/
  - /docs/advanced/get
  - /docs/advanced/get/
  - /docs/ref/sdk/config-get-key
  - /docs/ref/sdk/config-get-key/
  - /docs/ref/sdk/get
  - /docs/ref/sdk/get/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
options_title: Options
options:
  - title: "get(KEY, {mask: true})"
    href: /docs/sdk/nodejs/get-mask/
---
{% capture sdk_code_0 %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')

async function main() {
  const decryptedValue = await dotenvx.get('HELLO')

  console.log(decryptedValue)
}

main()
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

<p class="design-paragraph">This is known as <em>Decryption at Access</em> and is written about in <a class="design-link" href="https://dotenvx.com/dotenvx.pdf">the whitepaper</a>.</p>
