---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
command: "dotenvx.set()"
title: set
description: Programmatically set an environment variable.
permalink: /docs/sdk/nodejs/config-set-key-value/
redirect_from:
  - /docs/sdk/config-set-key-value
  - /docs/sdk/config-set-key-value/
  - /docs/sdk/set
  - /docs/sdk/set/
  - /docs/advanced/config-set-key-value
  - /docs/advanced/config-set-key-value/
  - /docs/advanced/set
  - /docs/advanced/set/
  - /docs/ref/sdk/config-set-key-value
  - /docs/ref/sdk/config-set-key-value/
  - /docs/ref/sdk/set
  - /docs/ref/sdk/set/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
options_title: Advanced
options:
  - title: "set(KEY, value, {plain: true})"
    href: /docs/sdk/nodejs/config-set-key-value-plain/
---
{% capture sdk_code_0 %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')

async function main() {
  await dotenvx.set('HELLO', 'World', { path: '.env' })
}

main()
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}
