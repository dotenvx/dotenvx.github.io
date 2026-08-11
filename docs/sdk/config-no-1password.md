---
layout: docs-cli
title: "config(no1Password: true)"
description: Leave op:// values unresolved and avoid calling the 1Password CLI.
permalink: /docs/sdk/config-no-1password/
redirect_from:
  - /docs/advanced/config-no-1password
  - /docs/advanced/config-no-1password/
  - /docs/ref/sdk/config-no-1password
  - /docs/ref/sdk/config-no-1password/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: config
    href: /docs/sdk/config/
---
<p class="design-paragraph">By default, <code class="design-code">config()</code> resolves <code class="design-code">op://</code> values through the installed <a class="design-link" href="https://developer.1password.com/docs/cli/get-started/">1Password CLI</a>.</p>

{% capture sdk_code_0 %}
# .env
API_KEY=op://Personal/my_api_key/password
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

<p class="design-paragraph">Set <code class="design-code">no1Password</code> to leave the reference unresolved:</p>

{% capture sdk_code_1 %}
// index.js
require('@dotenvx/dotenvx').config({no1Password: true})

console.log(process.env.API_KEY)
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}
