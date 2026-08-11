---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(ignore: ['.env.missing', '.env'])"
description: Use ignore to suppress specific errors like MISSING_ENV_FILE.
permalink: /docs/sdk/nodejs/config-ignore/
redirect_from:
  - /docs/sdk/config-ignore
  - /docs/sdk/config-ignore/
  - /docs/advanced/config-ignore
  - /docs/advanced/config-ignore/
  - /docs/ref/sdk/config-ignore
  - /docs/ref/sdk/config-ignore/
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
require('@dotenvx/dotenvx').config({path: ['.env.missing', '.env'], ignore: ['MISSING_ENV_FILE']})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

{% capture sdk_code_2 %}
$ node index.js
⟐ injected env (1) from .env
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}

<p class="design-paragraph">You can also set <code class="design-code">DOTENV_CONFIG_IGNORE</code>. Its value is a comma-separated list.</p>

{% capture sdk_code_3 %}
$ DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER node index.js
⟐ injected env (1) from .env
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_3 %}
