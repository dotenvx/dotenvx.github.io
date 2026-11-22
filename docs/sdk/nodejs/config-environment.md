---
title: 'config({ environment: ... })'
description: Choose the environment for a naming convention.
permalink: "/docs/sdk/nodejs/config-environment/"
doc_type: sdk
command: 'dotenvx.config({ convention: ''rails'', environment: ''production'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Use with convention. This selects the convention environment without changing process.env.NODE_ENV or RAILS_ENV.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ convention: 'rails', environment: 'production' })
```
