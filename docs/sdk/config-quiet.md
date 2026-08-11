---
layout: docs-cli
title: "config(quiet: true)"
description: Suppress all output (except errors).
permalink: /docs/sdk/config-quiet/
redirect_from:
  - /docs/advanced/config-quiet
  - /docs/advanced/config-quiet/
  - /docs/ref/sdk/config-quiet
  - /docs/ref/sdk/config-quiet/
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
require('@dotenvx/dotenvx').config({path: ['.env.missing', '.env'], quiet: true})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

{% capture sdk_code_2 %}
$ node index.js
Error: [MISSING_ENV_FILE] missing .env.missing file (/path/to/.env.missing)
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}

<p class="design-paragraph">You can also set <code class="design-code">DOTENV_CONFIG_QUIET=true</code>.</p>

{% capture sdk_code_3 %}
$ DOTENV_CONFIG_QUIET=true node index.js
Error: [MISSING_ENV_FILE] missing .env.missing file (/path/to/.env.missing)
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_3 %}
