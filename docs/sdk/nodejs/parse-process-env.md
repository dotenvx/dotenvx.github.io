---
title: parse processEnv
description: Supply expansion values without changing the environment.
permalink: "/docs/sdk/nodejs/parse-process-env/"
redirect_from:
- "/docs/sdk/parse-process-env"
- "/docs/sdk/parse-process-env/"
- "/docs/advanced/parse-process-env"
- "/docs/advanced/parse-process-env/"
- "/docs/ref/sdk/parse-process-env"
- "/docs/ref/sdk/parse-process-env/"
doc_type: sdk
command: 'dotenvx.parse(source, { processEnv: environment })'
command_language: javascript
eyebrow: Node.js parse
eyebrow_href: "/docs/sdk/nodejs/parse/"
---

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const environment = { NAME: 'World' }
const parsed = dotenvx.parse('HELLO=$NAME', { processEnv: environment })
console.log(parsed.HELLO) // World
console.log(environment.HELLO) // undefined
```
