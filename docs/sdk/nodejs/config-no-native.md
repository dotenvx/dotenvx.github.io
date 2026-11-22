---
title: 'config({ noNative: ... })'
description: Disable OS secret-store custody for this call.
permalink: "/docs/sdk/nodejs/config-no-native/"
doc_type: sdk
command: 'dotenvx.config({ noNative: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Local key files and matching environment private keys remain available.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ noNative: true })
```
