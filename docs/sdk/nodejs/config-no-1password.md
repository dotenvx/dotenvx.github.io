---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(no1Password: true)"
description: Leave op:// values unresolved and avoid calling the 1Password CLI.
permalink: /docs/sdk/nodejs/config-no-1password/
redirect_from:
  - /docs/sdk/config-no-1password
  - /docs/sdk/config-no-1password/
  - /docs/advanced/config-no-1password
  - /docs/advanced/config-no-1password/
  - /docs/ref/sdk/config-no-1password
  - /docs/ref/sdk/config-no-1password/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
  - label: config
    href: /docs/sdk/nodejs/config/
---


By default, `config()` resolves `op://` values through the installed [1Password CLI](https://developer.1password.com/docs/cli/get-started/).

```dotenv
# .env
API_KEY=op://Personal/my_api_key/password
```

Set `no1Password` to leave the reference unresolved:

```javascript
// index.js
require('@dotenvx/dotenvx').config({no1Password: true})

console.log(process.env.API_KEY)
```
