---
title: 'config({ resolveReferences: ... })'
description: Opt in to resolving secret references.
permalink: "/docs/sdk/nodejs/config-resolve-references/"
doc_type: sdk
command: 'dotenvx.config({ resolveReferences: true })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Defaults to false. Resolves supported op:// and bw:// values through the shared loader and available provider tooling. Stored-private-key custody is a separate mechanism.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ resolveReferences: true })
```
