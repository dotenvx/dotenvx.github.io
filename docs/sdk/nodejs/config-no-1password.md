---
title: 'config({ no1Password: ... })'
description: Disable 1Password resolution for this call.
permalink: "/docs/sdk/nodejs/config-no-1password/"
redirect_from:
- "/docs/sdk/config-no-1password"
- "/docs/sdk/config-no-1password/"
- "/docs/advanced/config-no-1password"
- "/docs/advanced/config-no-1password/"
- "/docs/ref/sdk/config-no-1password"
- "/docs/ref/sdk/config-no-1password/"
doc_type: sdk
command: 'dotenvx.config({ resolveReferences: true, no1Password: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Reference resolution itself is opt-in with resolveReferences. This option also selects the corresponding provider-disable setting for custody.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ resolveReferences: true, no1Password: true })
```
