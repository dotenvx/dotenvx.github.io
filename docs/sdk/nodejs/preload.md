---
title: preload
description: Load environment values before application modules execute.
permalink: "/docs/sdk/nodejs/preload/"
doc_type: sdk
command: import '@dotenvx/dotenvx/config'
command_language: javascript
eyebrow: Node.js
eyebrow_href: "/docs/sdk/nodejs/"
---
Load before application modules execute. CommonJS and ESM are both supported.

```console
$ node --require @dotenvx/dotenvx/config app.cjs
```
{: copy="node --require @dotenvx/dotenvx/config app.cjs"}

```console
$ node --import @dotenvx/dotenvx/config app.mjs
```
{: copy="node --import @dotenvx/dotenvx/config app.mjs"}

```javascript
import '@dotenvx/dotenvx/config'
```

DOTENV_CONFIG_PATH selects a preload path when DOTENV_FILE and DOTENV_PATH are absent. Use DOTENV_QUIET=true to suppress the summary.
