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


Sometimes, you want to run `parse` without it accessing `process.env`. (You can pass a fake `processEnv` this way as well - sometimes useful.)

{% capture sdk_code_0 %}
{% raw %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const src = 'USER=Me'
const parsed = dotenvx.parse(src, { processEnv: {} })
console.log(`Hello ${parsed.USER}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 language="javascript" %}

```console
$ node index.js
Hello Me
```
