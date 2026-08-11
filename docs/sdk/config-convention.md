---
layout: docs-cli
title: "config(convention: 'nextjs')"
description: Use convention in node.js code.
permalink: /docs/sdk/config-convention/
redirect_from:
  - /docs/advanced/config-convention
  - /docs/advanced/config-convention/
  - /docs/ref/sdk/config-convention
  - /docs/ref/sdk/config-convention/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: config
    href: /docs/sdk/config/
---
<p class="design-paragraph">Set a convention when using <code class="design-code">dotenvx.config()</code>. This allows you to use the same file loading order as the CLI without needing to specify each file individually.</p>

<p class="design-paragraph">To load a convention from another directory, see <a class="design-link" href="/docs/sdk/config-path-directory-convention"><code class="design-code">config(path: directory, convention: 'nextjs')</code></a>.</p>

<h2 class="design-list-title">Next.js convention</h2>

<p class="design-paragraph">Load environment files using the Next.js convention:</p>

{% capture sdk_code_0 %}
# Setup environment files
$ echo "HELLO=development local" > .env.development.local
$ echo "HELLO=local" > .env.local
$ echo "HELLO=development" > .env.development
$ echo "HELLO=env" > .env
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({ convention: 'nextjs' })

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}

{% capture sdk_code_2 %}
$ NODE_ENV=development node index.js
⟐ injected env (1) from .env.development.local, .env.local, .env.development, .env
Hello development local
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 %}

<p class="design-paragraph">This is equivalent to using <code class="design-code">--convention=nextjs</code> with the CLI:</p>

{% capture sdk_code_3 %}
$ dotenvx run --convention=nextjs -- node index.js
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_3 %}

<p class="design-paragraph">You can also set <code class="design-code">DOTENV_CONFIG_CONVENTION=nextjs</code>.</p>

{% capture sdk_code_4 %}
$ DOTENV_CONFIG_CONVENTION=nextjs node index.js
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_4 %}

<h2 class="design-list-title">Flow convention</h2>

<p class="design-paragraph">Load environment files using the dotenv-flow convention:</p>

{% capture sdk_code_5 %}
# Setup environment files
$ echo "HELLO=development local" > .env.development.local
$ echo "HELLO=development" > .env.development
$ echo "HELLO=local" > .env.local
$ echo "HELLO=env" > .env
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_5 %}

{% capture sdk_code_6 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({ convention: 'flow' })

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_6 %}

{% capture sdk_code_7 %}
$ NODE_ENV=development node index.js
⟐ injected env (1) from .env.development.local, .env.development, .env.local, .env
Hello development local
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_7 %}

<p class="design-paragraph">You can also set <code class="design-code">DOTENV_CONFIG_CONVENTION=flow</code>.</p>

{% capture sdk_code_8 %}
$ NODE_ENV=development DOTENV_CONFIG_CONVENTION=flow node index.js
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_8 %}
