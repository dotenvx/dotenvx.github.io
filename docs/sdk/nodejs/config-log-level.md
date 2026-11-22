---
title: 'config({ logLevel: ... })'
description: Control SDK diagnostic output.
permalink: "/docs/sdk/nodejs/config-log-level/"
doc_type: sdk
command: 'dotenvx.config({ logLevel: ''silent'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Accepted values are error, warn, info, and silent. error and warn suppress the summary; silent suppresses diagnostic output as well. Applies to config, get, and parse.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ logLevel: 'silent' })
```
