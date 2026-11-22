---
title: 'config({ strict: ... })'
description: Throw on strict loading or parsing errors.
permalink: "/docs/sdk/nodejs/config-strict/"
redirect_from:
- "/docs/sdk/config-strict"
- "/docs/sdk/config-strict/"
- "/docs/advanced/config-strict"
- "/docs/advanced/config-strict/"
- "/docs/ref/sdk/config-strict"
- "/docs/ref/sdk/config-strict/"
doc_type: sdk
command: 'dotenvx.config({ path: ''.env.production'', strict: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---
Defaults to false. config throws before injecting any resolved values when loading is fatal. Fatal get errors and strict parse diagnostics also throw synchronously.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ path: '.env.production', strict: true })
```
