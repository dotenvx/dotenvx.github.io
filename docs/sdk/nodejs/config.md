---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
command: "dotenvx.config()"
title: config
description: Use directly in node.js code.
permalink: /docs/sdk/nodejs/config/
redirect_from:
  - /docs/sdk/config
  - /docs/sdk/config/
  - /docs/advanced/config
  - /docs/advanced/config/
  - /docs/ref/sdk/config
  - /docs/ref/sdk/config/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
options_title: Advanced
options:
  - title: "config(path: ['.env.local', '.env'])"
    href: /docs/sdk/nodejs/config-path/
  - title: "config(overload: true)"
    href: /docs/sdk/nodejs/config-overload/
  - title: "config(mask: true)"
    href: /docs/sdk/nodejs/config-mask/
  - title: "config(quiet: true)"
    href: /docs/sdk/nodejs/config-quiet/
  - title: "config(strict: true)"
    href: /docs/sdk/nodejs/config-strict/
  - title: "config(ignore: ['.env.missing', '.env'])"
    href: /docs/sdk/nodejs/config-ignore/
  - title: "config(envKeysFile: '../../.env.keys')"
    href: /docs/sdk/nodejs/config-env-keys-file/
  - title: "config(convention: 'nextjs')"
    href: /docs/sdk/nodejs/config-convention/
  - title: "config(path: directory, convention: 'nextjs')"
    href: /docs/sdk/nodejs/config-path-directory-convention/
  - title: "config(noArmor: true)"
    href: /docs/sdk/nodejs/config-no-armor/
  - title: "config(no1Password: true)"
    href: /docs/sdk/nodejs/config-no-1password/
  - title: "config(noBitwarden: true)"
    href: /docs/sdk/nodejs/config-no-bitwarden/
---
{% capture sdk_code_0 %}
# .env
HELLO="World"
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config()
// or import '@dotenvx/dotenvx/config' if you're using esm

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

<p class="design-paragraph">It defaults to looking for a <code class="design-code">.env</code> file.</p>
