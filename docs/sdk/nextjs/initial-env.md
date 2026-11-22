---
title: initialEnv
description: Read the captured initial environment.
permalink: "/docs/sdk/nextjs/initial-env/"
doc_type: sdk
command: initialEnv
command_language: javascript
eyebrow: Next.js
eyebrow_href: "/docs/sdk/nextjs/"
---
A getter, not a function. Undefined before the initial environment is captured by loading. Use updateInitialEnv to change the baseline.

```javascript
const nextEnv = require('@dotenvx/next-env')
nextEnv.loadEnvConfig(process.cwd(), true)
const baseline = nextEnv.initialEnv
```
