---
title: 'config({ overload: ... })'
description: Allow loaded values to replace existing environment values.
permalink: "/docs/sdk/nodejs/config-overload/"
redirect_from:
- "/docs/sdk/config-overload"
- "/docs/sdk/config-overload/"
- "/docs/advanced/config-overload"
- "/docs/advanced/config-overload/"
- "/docs/ref/sdk/config-overload"
- "/docs/ref/sdk/config-overload/"
doc_type: sdk
command: 'dotenvx.config({ overload: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Applies to config, get, and parse. The override option is an alias; overload takes precedence when both are supplied.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ overload: true })
```
