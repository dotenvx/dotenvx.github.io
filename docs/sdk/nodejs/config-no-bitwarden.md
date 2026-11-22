---
title: 'config({ noBitwarden: ... })'
description: Disable Bitwarden resolution for this call.
permalink: "/docs/sdk/nodejs/config-no-bitwarden/"
redirect_from:
- "/docs/sdk/config-no-bitwarden"
- "/docs/sdk/config-no-bitwarden/"
- "/docs/advanced/config-no-bitwarden"
- "/docs/advanced/config-no-bitwarden/"
- "/docs/ref/sdk/config-no-bitwarden"
- "/docs/ref/sdk/config-no-bitwarden/"
doc_type: sdk
command: 'dotenvx.config({ resolveReferences: true, noBitwarden: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Reference resolution itself is opt-in with resolveReferences. This option also selects the corresponding provider-disable setting for custody.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ resolveReferences: true, noBitwarden: true })
```
