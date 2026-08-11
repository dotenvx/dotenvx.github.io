---
layout: docs-cli
title: "config(path: ['.env.local', '.env'])"
description: Specify path(s) to multiple .env files.
permalink: /docs/sdk/config-path/
redirect_from:
  - /docs/advanced/config-path
  - /docs/advanced/config-path/
  - /docs/ref/sdk/config-path
  - /docs/ref/sdk/config-path/
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
require('@dotenvx/dotenvx').config({path: ['.env.local', '.env']})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}

{% capture sdk_code_3 %}
$ node index.js
⟐ injected env (1) from .env.local, .env
Hello Me
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_3 %}

<p class="design-paragraph">This is the equivalent of using <code class="design-code">-f</code> from the command line.</p>

<p class="design-paragraph">To use a directory as the base for convention files, see <a class="design-link" href="/docs/sdk/config-path-directory-convention"><code class="design-code">config(path: directory, convention: 'nextjs')</code></a>.</p>
