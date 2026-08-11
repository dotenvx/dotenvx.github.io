---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "parse(src, {processEnv:})"
description: Parse a .env string directly in node.js code without accessing process.env.
permalink: /docs/sdk/nodejs/parse-process-env/
redirect_from:
  - /docs/sdk/parse-process-env
  - /docs/sdk/parse-process-env/
  - /docs/advanced/parse-process-env
  - /docs/advanced/parse-process-env/
  - /docs/ref/sdk/parse-process-env
  - /docs/ref/sdk/parse-process-env/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
  - label: parse
    href: /docs/sdk/nodejs/parse/
---
<p class="design-paragraph">Sometimes, you want to run <code class="design-code">parse</code> without it accessing <code class="design-code">process.env</code>. (You can pass a fake <code class="design-code">processEnv</code> this way as well - sometimes useful.)</p>

{% capture sdk_code_0 %}
{% raw %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const src = 'USER=Me'
const parsed = dotenvx.parse(src, { processEnv: {} })
console.log(`Hello ${parsed.USER}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
$ node index.js
Hello Me
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}
