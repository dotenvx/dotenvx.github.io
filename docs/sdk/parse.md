---
layout: docs-cli
title: parse
description: Parse a .env string directly in node.js code.
permalink: /docs/sdk/parse/
redirect_from:
  - /docs/advanced/parse
  - /docs/advanced/parse/
  - /docs/ref/sdk/parse
  - /docs/ref/sdk/parse/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
options_title: Advanced
options:
  - title: "parse(src, {processEnv:})"
    href: /docs/sdk/parse-process-env/
  - title: "parse(src, {privateKey:})"
    href: /docs/sdk/parse-private-key/
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
