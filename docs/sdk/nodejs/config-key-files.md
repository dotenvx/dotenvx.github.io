---
title: 'config({ keyFiles: ... })'
description: Use the keyFiles alias for envKeysFile.
permalink: "/docs/sdk/nodejs/config-key-files/"
doc_type: sdk
command: 'dotenvx.config({ keyFiles: [''.env.keys'', ''.env.production.keys''] })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Accepts paths and file URLs. An empty array disables configured key-file reads. envKeysFile takes precedence when both aliases are supplied.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ keyFiles: ['.env.keys', '.env.production.keys'] })
```
