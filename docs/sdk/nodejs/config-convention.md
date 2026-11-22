---
title: 'config({ convention: ... })'
description: Load files using a naming convention.
permalink: "/docs/sdk/nodejs/config-convention/"
redirect_from:
- "/docs/sdk/config-convention"
- "/docs/sdk/config-convention/"
- "/docs/advanced/config-convention"
- "/docs/advanced/config-convention/"
- "/docs/ref/sdk/config-convention"
- "/docs/ref/sdk/config-convention/"
doc_type: sdk
command: 'dotenvx.config({ convention: ''nextjs'', environment: ''production'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Supported conventions are nextjs, flow, and rails. Use environment to select a specific environment. Missing convention files are skipped unless strict mode applies.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ convention: 'nextjs', environment: 'production' })
```
