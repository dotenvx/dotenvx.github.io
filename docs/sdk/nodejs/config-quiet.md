---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(quiet: true)"
description: Suppress all output (except errors).
permalink: /docs/sdk/nodejs/config-quiet/
redirect_from:
  - /docs/sdk/config-quiet
  - /docs/sdk/config-quiet/
  - /docs/advanced/config-quiet
  - /docs/advanced/config-quiet/
  - /docs/ref/sdk/config-quiet
  - /docs/ref/sdk/config-quiet/
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

```dotenv
# .env
HELLO="World"
```

{% capture sdk_code_1 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({path: ['.env.missing', '.env'], quiet: true})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 language="javascript" %}

```console
$ node index.js
Error: [MISSING_ENV_FILE] missing .env.missing file (/path/to/.env.missing)
Hello World
```

You can also set `DOTENV_CONFIG_QUIET=true`.

```console
$ DOTENV_CONFIG_QUIET=true node index.js
Error: [MISSING_ENV_FILE] missing .env.missing file (/path/to/.env.missing)
Hello World
```
