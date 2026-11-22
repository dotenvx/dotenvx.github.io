---
title: get
description: Resolve values synchronously without mutating the environment.
permalink: "/docs/sdk/nodejs/get/"
doc_type: sdk
command: dotenvx.get(key, options)
command_language: javascript
eyebrow: Node.js
eyebrow_href: "/docs/sdk/nodejs/"
options:
- title: get all
  href: "/docs/sdk/nodejs/get-all/"
- title: get format
  href: "/docs/sdk/nodejs/get-format/"
redirect_from:
- "/docs/sdk/nodejs/config-get-key/"
- "/docs/sdk/config-get-key"
- "/docs/sdk/config-get-key/"
- "/docs/sdk/get"
- "/docs/sdk/get/"
- "/docs/advanced/config-get-key"
- "/docs/advanced/config-get-key/"
- "/docs/advanced/get"
- "/docs/advanced/get/"
- "/docs/ref/sdk/config-get-key"
- "/docs/ref/sdk/config-get-key/"
- "/docs/ref/sdk/get"
- "/docs/ref/sdk/get/"
---
Resolve values synchronously without changing the environment. get(key, options) returns a string or undefined. With no key, get(undefined, options) returns a resolved object. File and custody lookups block. Fatal or strict loading errors throw synchronously; nonfatal diagnostics are reported while remaining values can still be returned. get does not return a Promise.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const value = dotenvx.get('HELLO')
const values = dotenvx.get()
```

Accepts the [config options](/docs/sdk/nodejs/config/), plus all and format.
