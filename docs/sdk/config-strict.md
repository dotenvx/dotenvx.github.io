---
layout: docs-cli
title: "config(strict: true)"
description: Exit with code 1 if any errors are encountered - like a missing .env file or decryption failure.
permalink: /docs/sdk/config-strict/
redirect_from:
  - /docs/advanced/config-strict
  - /docs/advanced/config-strict/
  - /docs/ref/sdk/config-strict
  - /docs/ref/sdk/config-strict/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: config
    href: /docs/sdk/config/
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
