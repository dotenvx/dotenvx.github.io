---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(mask: true)"
description: Inject and return masked values.
permalink: /docs/sdk/nodejs/config-mask/
redirect_from:
  - /docs/sdk/config-mask
  - /docs/sdk/config-mask/
  - /docs/advanced/config-mask
  - /docs/advanced/config-mask/
  - /docs/ref/sdk/config-mask
  - /docs/ref/sdk/config-mask/
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


By default, up to the first six characters are visible.

```dotenv
# .env
SECRET="abcdefghijkl"
```

```javascript
// index.js
const dotenvx = require('@dotenvx/dotenvx')
const result = dotenvx.config({ mask: true, quiet: true })

console.log(process.env.SECRET)
console.log(result.parsed.SECRET)
```

```console
$ node index.js
abcdef******
abcdef******
```

Set `mask: 0` to fully mask values.
