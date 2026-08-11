---
layout: docs-cli
title: "config(envKeysFile: '../../.env.keys')"
description: Use envKeysFile to customize the path to your .env.keys file. This is useful with monorepos.
permalink: /docs/sdk/config-env-keys-file/
redirect_from:
  - /docs/advanced/config-env-keys-file
  - /docs/advanced/config-env-keys-file/
  - /docs/ref/sdk/config-env-keys-file
  - /docs/ref/sdk/config-env-keys-file/
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
// index.js
require('@dotenvx/dotenvx').config({path: ['.env'], envKeysFile: '../../.env.keys'})
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}
