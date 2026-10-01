---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(noArmor: true)"
description: Turn off Dotenvx Armor features.
permalink: /docs/sdk/nodejs/config-no-armor/
redirect_from:
  - /docs/sdk/config-no-armor
  - /docs/sdk/config-no-armor/
  - /docs/advanced/config-no-armor
  - /docs/advanced/config-no-armor/
  - /docs/ref/sdk/config-no-armor
  - /docs/ref/sdk/config-no-armor/
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

```javascript
// index.js
require('@dotenvx/dotenvx').config({noArmor: true})
```

Use `noArmor` when you do not want `config()` to communicate with [Dotenvx Armor](https://dotenvx.com/armor).
