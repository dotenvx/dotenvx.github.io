---
title: 'config({ encoding: ... })'
description: Read UTF-8 environment files.
permalink: "/docs/sdk/nodejs/config-encoding/"
doc_type: sdk
command: 'dotenvx.config({ encoding: ''utf8'' })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Only utf8 and utf-8 are accepted. Other encoding values throw TypeError.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ encoding: 'utf8' })
```
