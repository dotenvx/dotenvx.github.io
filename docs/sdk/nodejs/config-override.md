---
title: 'config({ override: ... })'
description: Use the override alias for overload.
permalink: "/docs/sdk/nodejs/config-override/"
doc_type: sdk
command: 'dotenvx.config({ override: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Applies to config, get, and parse. If both options are supplied, overload wins.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ override: true })
```
