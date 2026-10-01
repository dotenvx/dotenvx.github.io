---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(noBitwarden: true)"
description: Leave bw:// values unresolved and avoid calling the Bitwarden CLI.
permalink: /docs/sdk/nodejs/config-no-bitwarden/
redirect_from:
  - /docs/sdk/config-no-bitwarden
  - /docs/sdk/config-no-bitwarden/
  - /docs/advanced/config-no-bitwarden
  - /docs/advanced/config-no-bitwarden/
  - /docs/ref/sdk/config-no-bitwarden
  - /docs/ref/sdk/config-no-bitwarden/
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


By default, `config()` resolves `bw://` values through the installed [Bitwarden Password Manager CLI](https://bitwarden.com/help/cli/).

```dotenv
# .env
API_KEY="bw://My GitHub Account/password"
```

Set `noBitwarden` to leave the reference unresolved:

```javascript
// index.js
require('@dotenvx/dotenvx').config({noBitwarden: true})

console.log(process.env.API_KEY)
```
