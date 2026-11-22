---
title: 'get(undefined, { format: ... })'
description: Format all resolved values as a string.
permalink: "/docs/sdk/nodejs/get-format/"
doc_type: sdk
command: 'dotenvx.get(undefined, { format: ''eval-export'' })'
command_language: javascript
eyebrow: Node.js get
eyebrow_href: "/docs/sdk/nodejs/get/"
---
Supported formats are eval, eval-export, shell, and colon. Omit the key to use formatting; a supplied key returns its value directly. Omit format to receive an object.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const result = dotenvx.get(undefined, { format: 'eval-export' })
```
