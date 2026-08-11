---
layout: docs-cli
title: "set(KEY, value, {plain: true})"
description: Programmatically set a plaintext environment variable.
permalink: /docs/sdk/config-set-key-value-plain/
redirect_from:
  - /docs/advanced/config-set-key-value-plain
  - /docs/advanced/config-set-key-value-plain/
  - /docs/ref/sdk/config-set-key-value-plain
  - /docs/ref/sdk/config-set-key-value-plain/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: set
    href: /docs/sdk/config-set-key-value/
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
