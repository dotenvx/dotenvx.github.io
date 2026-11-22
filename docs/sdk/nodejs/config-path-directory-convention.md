---
title: config with a convention directory
description: Resolve a naming convention relative to a directory.
permalink: "/docs/sdk/nodejs/config-path-directory-convention/"
redirect_from:
- "/docs/sdk/config-path-directory-convention"
- "/docs/sdk/config-path-directory-convention/"
- "/docs/advanced/config-path-directory-convention"
- "/docs/advanced/config-path-directory-convention/"
- "/docs/ref/sdk/config-path-directory-convention"
- "/docs/ref/sdk/config-path-directory-convention/"
doc_type: sdk
command: 'dotenvx.config({ path: ''apps/web'', convention: ''nextjs'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ path: 'apps/web', convention: 'nextjs', environment: 'production' })
```

The directory is the base for convention file discovery. Without a convention, a directory selects its .env file.
