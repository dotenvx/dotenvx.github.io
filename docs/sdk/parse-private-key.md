---
layout: docs-cli
title: "parse(src, {privateKey:})"
description: Decrypt an encrypted .env string with privateKey.
permalink: /docs/sdk/parse-private-key/
redirect_from:
  - /docs/advanced/parse-private-key
  - /docs/advanced/parse-private-key/
  - /docs/ref/sdk/parse-private-key
  - /docs/ref/sdk/parse-private-key/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDK
    href: /docs/sdk
  - label: parse
    href: /docs/sdk/parse/
---
{% capture sdk_code_0 %}
{% raw %}
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const src = 'HELLO="encrypted:BE9Y7LKANx77X1pv1HnEoil93fPa5c9rpL/1ps48uaRT9zM8VR6mHx9yM+HktKdsPGIZELuZ7rr2mn1gScsmWitppAgE/1lVprNYBCqiYeaTcKXjDUXU5LfsEsflnAsDhT/kWG1l"'
const parsed = dotenvx.parse(src, { privateKey: 'a4547dcd9d3429615a3649bb79e87edb62ee6a74b007075e9141ae44f5fb412c' })
console.log(`Hello ${parsed.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_0 %}

{% capture sdk_code_1 %}
$ node index.js
Hello World
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 %}
