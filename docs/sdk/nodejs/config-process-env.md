---
title: 'config({ processEnv: ... })'
description: Choose the environment object to read and populate.
permalink: "/docs/sdk/nodejs/config-process-env/"
doc_type: sdk
command: 'dotenvx.config({ envs: [{ type: ''env'', value: ''HELLO=World'' }], processEnv:
  target })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

config reads and updates this object instead of process.env. get and parse read it for resolution without modifying it. Include PATH and provider settings when delegated custody is needed.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const target = {}
dotenvx.config({ envs: [{ type: 'env', value: 'HELLO=World' }], processEnv: target })
```
