---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "get(KEY, {mask: true})"
description: Programmatically return a masked environment variable value.
permalink: /docs/sdk/nodejs/get-mask/
redirect_from:
  - /docs/sdk/get-mask
  - /docs/sdk/get-mask/
  - /docs/advanced/get-mask/
  - /docs/advanced/get-mask
  - /docs/ref/sdk/get-mask/
  - /docs/ref/sdk/get-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
  - label: get
    href: /docs/sdk/nodejs/config-get-key/
---


By default, up to the first six characters are visible.

```javascript
// index.js
const dotenvx = require('@dotenvx/dotenvx')

async function main() {
  const maskedValue = await dotenvx.get('SECRET', { mask: true })

  console.log(maskedValue)
}

main()
```

```console
$ node index.js
abcdef******
```

Set `mask: 0` to fully mask values.
