---
title: 'config({ cwd: ... })'
description: Choose the base directory for relative paths.
permalink: "/docs/sdk/nodejs/config-cwd/"
doc_type: sdk
command: 'dotenvx.config({ cwd: ''/srv/app'', path: ''.env.production'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to process.cwd(). Relative file and key paths are resolved by the shared loader from this directory.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ cwd: '/srv/app', path: '.env.production' })
```
