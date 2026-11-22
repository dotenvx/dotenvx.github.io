---
title: 'config({ envs: ... })'
description: Resolve ordered file and inline sources.
permalink: "/docs/sdk/nodejs/config-envs/"
doc_type: sdk
command: 'dotenvx.config({ envs: [{ type: ''envFile'', value: ''.env'' }, { type:
  ''env'', value: ''HELLO=World'' }] })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Explicit envs replace path selection. envFile values accept a path or file URL; env values accept a string or Buffer.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ envs: [{ type: 'envFile', value: '.env' }, { type: 'env', value: 'HELLO=World' }] })
```
