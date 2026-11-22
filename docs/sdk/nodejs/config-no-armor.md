---
title: 'config({ noArmor: ... })'
description: Disable Armor lookups for this call.
permalink: "/docs/sdk/nodejs/config-no-armor/"
redirect_from:
- "/docs/sdk/config-no-armor"
- "/docs/sdk/config-no-armor/"
- "/docs/advanced/config-no-armor"
- "/docs/advanced/config-no-armor/"
- "/docs/ref/sdk/config-no-armor"
- "/docs/ref/sdk/config-no-armor/"
doc_type: sdk
command: 'dotenvx.config({ noArmor: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Local key files and matching environment private keys remain available. SDK loading does not automatically send Armor activity events.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ noArmor: true })
```
