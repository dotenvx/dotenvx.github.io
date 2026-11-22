---
title: 'get(undefined, { all: true })'
description: Include existing environment values in the result.
permalink: "/docs/sdk/nodejs/get-all/"
doc_type: sdk
command: 'dotenvx.get(undefined, { all: true })'
command_language: javascript
eyebrow: Node.js get
eyebrow_href: "/docs/sdk/nodejs/get/"
---
The default result contains resolved source values. all: true includes the existing environment as well. Neither form mutates the environment.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const result = dotenvx.get(undefined, { all: true })
```
