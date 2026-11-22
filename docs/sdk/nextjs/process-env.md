---
title: processEnv
description: Resolve already-read env file contents.
permalink: "/docs/sdk/nextjs/process-env/"
doc_type: sdk
command: processEnv(loadedEnvFiles, dir, log, forceReload, onReload, onResolved)
command_language: javascript
eyebrow: Next.js
eyebrow_href: "/docs/sdk/nextjs/"
---
Accepts loadedEnvFiles entries containing path and contents, a directory, an optional logger, forceReload, onReload, and onResolved. Updates process.env and each loaded file’s env field. Returns [combinedEnv, parsedEnv?]. Normally Next.js calls this helper for you.

```javascript
const nextEnv = require('@dotenvx/next-env')
const [environment, parsed] = nextEnv.processEnv(
  [{ path: '.env', contents: 'HELLO=World' }],
  process.cwd(),
  console,
  true
)
```
