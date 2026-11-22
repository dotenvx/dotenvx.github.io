---
title: resetEnv
description: Restore the initially captured environment.
permalink: "/docs/sdk/nextjs/reset-env/"
doc_type: sdk
command: resetEnv()
command_language: javascript
eyebrow: Next.js
eyebrow_href: "/docs/sdk/nextjs/"
---
Removes later values and restores the baseline, preserving Next.js private keys. It does not clear the loaded-file cache; use forceReload on the next loadEnvConfig call to reread files.

```javascript
const nextEnv = require('@dotenvx/next-env')
nextEnv.loadEnvConfig(process.cwd(), true)
nextEnv.resetEnv()
```
