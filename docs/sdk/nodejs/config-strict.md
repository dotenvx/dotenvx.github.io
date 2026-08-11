---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(strict: true)"
description: Exit with code 1 if any errors are encountered - like a missing .env file or decryption failure.
permalink: /docs/sdk/nodejs/config-strict/
redirect_from:
  - /docs/sdk/config-strict
  - /docs/sdk/config-strict/
  - /docs/advanced/config-strict
  - /docs/advanced/config-strict/
  - /docs/ref/sdk/config-strict
  - /docs/ref/sdk/config-strict/
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
{% capture sdk_code_0 %}
# .env
HELLO="World"
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({path: ['.env.missing', '.env'], strict: true})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

{% capture sdk_code_2 %}
$ node index.js
Error: [MISSING_ENV_FILE] missing .env.missing file (/path/to/.env.missing)
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}
