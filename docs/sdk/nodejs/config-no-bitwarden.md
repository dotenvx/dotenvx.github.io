---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(noBitwarden: true)"
description: Leave bw:// values unresolved and avoid calling the Bitwarden CLI.
permalink: /docs/sdk/nodejs/config-no-bitwarden/
redirect_from:
  - /docs/sdk/config-no-bitwarden
  - /docs/sdk/config-no-bitwarden/
  - /docs/advanced/config-no-bitwarden
  - /docs/advanced/config-no-bitwarden/
  - /docs/ref/sdk/config-no-bitwarden
  - /docs/ref/sdk/config-no-bitwarden/
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
<p class="design-paragraph">By default, <code class="design-code">config()</code> resolves <code class="design-code">bw://</code> values through the installed <a class="design-link" href="https://bitwarden.com/help/cli/">Bitwarden Password Manager CLI</a>.</p>

{% capture sdk_code_0 %}
# .env
API_KEY="bw://My GitHub Account/password"
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

<p class="design-paragraph">Set <code class="design-code">noBitwarden</code> to leave the reference unresolved:</p>

{% capture sdk_code_1 %}
// index.js
require('@dotenvx/dotenvx').config({noBitwarden: true})

console.log(process.env.API_KEY)
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}
