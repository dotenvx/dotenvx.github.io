---
title: 'config({ token: ... })'
description: Supply an Armor token for delegated custody.
permalink: "/docs/sdk/nodejs/config-token/"
doc_type: sdk
command: 'dotenvx.config({ token: process.env.DOTENVX_ARMOR_TOKEN })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

The value is passed in the loader environment as DOTENVX_ARMOR_TOKEN. Stored-key lookup needs a compatible CLI with sdk and the required custody feature.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ token: process.env.DOTENVX_ARMOR_TOKEN })
```
