---
layout: docs-cli
title: set
description: Programmatically set an environment variable.
permalink: /docs/sdk/config-set-key-value/
redirect_from:
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
  - label: SDK
    href: /docs/sdk
options_title: Advanced
options:
  - title: "set(KEY, value, {plain: true})"
    href: /docs/sdk/config-set-key-value-plain/
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
