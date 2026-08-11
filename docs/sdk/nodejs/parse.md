---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
command: "parse()"
title: parse
description: Parse a .env string directly in node.js code.
permalink: /docs/sdk/nodejs/parse/
redirect_from:
  - /docs/sdk/parse
  - /docs/sdk/parse/
  - /docs/advanced/parse
  - /docs/advanced/parse/
  - /docs/ref/sdk/parse
  - /docs/ref/sdk/parse/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
options_title: Advanced
options:
  - title: "parse(src, {processEnv:})"
    href: /docs/sdk/nodejs/parse-process-env/
  - title: "parse(src, {privateKey:})"
    href: /docs/sdk/nodejs/parse-private-key/
---
{% capture sdk_code_0 %}
{% raw %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const src = 'HELLO=World'
const parsed = dotenvx.parse(src)
console.log(`Hello ${parsed.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
$ node index.js
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}
