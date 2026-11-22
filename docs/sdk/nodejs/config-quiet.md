---
title: 'config({ quiet: ... })'
description: Suppress the injection summary.
permalink: "/docs/sdk/nodejs/config-quiet/"
redirect_from:
- "/docs/sdk/config-quiet"
- "/docs/sdk/config-quiet/"
- "/docs/advanced/config-quiet"
- "/docs/advanced/config-quiet/"
- "/docs/ref/sdk/config-quiet"
- "/docs/ref/sdk/config-quiet/"
doc_type: sdk
command: 'dotenvx.config({ quiet: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Does not silence diagnostic errors. DOTENV_QUIET=true also enables quiet mode; DOTENV_CONFIG_QUIET remains an accepted alias.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ quiet: true })
```
