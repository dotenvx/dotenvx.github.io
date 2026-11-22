---
title: loadEnvConfig
description: Load and cache Next.js env files.
permalink: "/docs/sdk/nextjs/load-env-config/"
doc_type: sdk
command: loadEnvConfig(dir, dev, log = console, forceReload = false, onReload)
command_language: javascript
eyebrow: Next.js
eyebrow_href: "/docs/sdk/nextjs/"
---
Selects test when NODE_ENV=test, otherwise development when dev is true and production when false. Precedence is .env.<mode>.local, .env.local (except test), .env.<mode>, then .env. Existing environment values win. Returns { combinedEnv, parsedEnv, loadedEnvFiles }. forceReload=true bypasses the cache.

```javascript
const { loadEnvConfig } = require('@dotenvx/next-env')
const result = loadEnvConfig(process.cwd(), true)
```
