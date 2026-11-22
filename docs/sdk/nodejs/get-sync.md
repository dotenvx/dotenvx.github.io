---
title: getSync
description: Use the synchronous alias of get.
permalink: "/docs/sdk/nodejs/get-sync/"
doc_type: sdk
command: dotenvx.getSync(key, options)
command_language: javascript
eyebrow: Node.js
eyebrow_href: "/docs/sdk/nodejs/"
related:
- title: get
  href: "/docs/sdk/nodejs/get/"
---
getSync is the same function as get: getSync === get. It accepts the same arguments, returns the same direct values, and throws synchronously.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const value = dotenvx.getSync('HELLO')
```
