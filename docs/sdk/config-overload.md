---
layout: docs-cli
title: "config(overload: true)"
description: Use overload to overwrite the prior set value.
permalink: /docs/sdk/config-overload/
redirect_from:
  - /docs/advanced/config-overload
  - /docs/advanced/config-overload/
  - /docs/ref/sdk/config-overload
  - /docs/ref/sdk/config-overload/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: config
    href: /docs/sdk/config/
---
{% capture sdk_code_0 %}
# .env.local
HELLO="Me"
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
# .env
HELLO="World"
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

{% capture sdk_code_2 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({path: ['.env.local', '.env'], overload: true})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}

{% capture sdk_code_3 %}
$ node index.js
⟐ injected env (1) from .env.local, .env
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_3 %}
