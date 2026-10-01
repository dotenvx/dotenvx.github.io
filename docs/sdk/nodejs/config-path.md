---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(path: ['.env.local', '.env'])"
description: Specify path(s) to multiple .env files.
permalink: /docs/sdk/nodejs/config-path/
redirect_from:
  - /docs/sdk/config-path
  - /docs/sdk/config-path/
  - /docs/advanced/config-path
  - /docs/advanced/config-path/
  - /docs/ref/sdk/config-path
  - /docs/ref/sdk/config-path/
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
# .env.local
HELLO="Me"
```

```dotenv
# .env
HELLO="World"
```

{% capture sdk_code_2 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({path: ['.env.local', '.env']})

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_2 language="javascript" %}

```console
$ node index.js
⟐ injected env (1) from .env.local, .env
Hello Me
```

This is the equivalent of using `-f` from the command line.

To use a directory as the base for convention files, see [`config(path: directory, convention: 'nextjs')`](/docs/sdk/nodejs/config-path-directory-convention).
