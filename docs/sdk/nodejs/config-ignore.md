---
title: 'config({ ignore: ... })'
description: Ignore diagnostic codes, rather than filenames.
permalink: "/docs/sdk/nodejs/config-ignore/"
redirect_from:
- "/docs/sdk/config-ignore"
- "/docs/sdk/config-ignore/"
- "/docs/advanced/config-ignore"
- "/docs/advanced/config-ignore/"
- "/docs/ref/sdk/config-ignore"
- "/docs/ref/sdk/config-ignore/"
doc_type: sdk
command: 'dotenvx.config({ path: [''.env.missing'', ''.env''], ignore: [''MISSING_ENV_FILE'']
  })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Accepts a code, a comma-separated string of codes, or an array of codes. Applies to config, get, and parse. The default is an empty list.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ path: ['.env.missing', '.env'], ignore: ['MISSING_ENV_FILE'] })
```
