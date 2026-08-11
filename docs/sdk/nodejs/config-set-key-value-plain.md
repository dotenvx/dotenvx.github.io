---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "set(KEY, value, {plain: true})"
description: Programmatically set a plaintext environment variable.
permalink: /docs/sdk/nodejs/config-set-key-value-plain/
redirect_from:
  - /docs/sdk/config-set-key-value-plain
  - /docs/sdk/config-set-key-value-plain/
  - /docs/advanced/config-set-key-value-plain
  - /docs/advanced/config-set-key-value-plain/
  - /docs/ref/sdk/config-set-key-value-plain
  - /docs/ref/sdk/config-set-key-value-plain/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
  - label: set
    href: /docs/sdk/nodejs/config-set-key-value/
---
{% capture sdk_code_0 %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')

async function main() {
  await dotenvx.set('HELLO', 'World', { plain: true })
}

main()
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}
