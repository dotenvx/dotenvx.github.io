---
title: 'config({ envKeysFile: ... })'
description: Choose files containing private keys.
permalink: "/docs/sdk/nodejs/config-env-keys-file/"
redirect_from:
- "/docs/sdk/config-env-keys-file"
- "/docs/sdk/config-env-keys-file/"
- "/docs/advanced/config-env-keys-file"
- "/docs/advanced/config-env-keys-file/"
- "/docs/ref/sdk/config-env-keys-file"
- "/docs/ref/sdk/config-env-keys-file/"
doc_type: sdk
command: 'dotenvx.config({ envKeysFile: ''../../.env.keys'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Accepts a path, file URL, or an array of either. keyFiles is an alias. If both are supplied, envKeysFile takes precedence. Matching environment private keys are considered before local key files.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ envKeysFile: '../../.env.keys' })
```
