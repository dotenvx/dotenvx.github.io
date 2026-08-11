---
layout: docs-cli
title: "config(noArmor: true)"
description: Turn off Dotenvx Armor features.
permalink: /docs/sdk/config-no-armor/
redirect_from:
  - /docs/advanced/config-no-armor
  - /docs/advanced/config-no-armor/
  - /docs/ref/sdk/config-no-armor
  - /docs/ref/sdk/config-no-armor/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: config
    href: /docs/sdk/config/
---
{% capture sdk_code_0 %}
// index.js
require('@dotenvx/dotenvx').config({noArmor: true})
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

<p class="design-paragraph">Use <code class="design-code">noArmor</code> when you do not want <code class="design-code">config()</code> to communicate with <a class="design-link" href="https://dotenvx.com/armor">Dotenvx Armor</a>.</p>
