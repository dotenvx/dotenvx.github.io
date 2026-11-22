---
title: updateInitialEnv
description: Change the environment baseline used for resets.
permalink: "/docs/sdk/nextjs/update-initial-env/"
doc_type: sdk
command: updateInitialEnv(newEnv)
command_language: javascript
eyebrow: Next.js
eyebrow_href: "/docs/sdk/nextjs/"
---
Has no effect before the initial environment has been captured. undefined removes a baseline key. It does not directly update process.env.

```javascript
const nextEnv = require('@dotenvx/next-env')
nextEnv.loadEnvConfig(process.cwd(), true)
nextEnv.updateInitialEnv({ APP_MODE: 'production' })
nextEnv.resetEnv()
```
