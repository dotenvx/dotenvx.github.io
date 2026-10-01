---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(convention: 'nextjs')"
description: Use convention in node.js code.
permalink: /docs/sdk/nodejs/config-convention/
redirect_from:
  - /docs/sdk/config-convention
  - /docs/sdk/config-convention/
  - /docs/advanced/config-convention
  - /docs/advanced/config-convention/
  - /docs/ref/sdk/config-convention
  - /docs/ref/sdk/config-convention/
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


Set a convention when using `dotenvx.config()`. This allows you to use the same file loading order as the CLI without needing to specify each file individually.

To load a convention from another directory, see [`config(path: directory, convention: 'nextjs')`](/docs/sdk/nodejs/config-path-directory-convention).

## Next.js convention

Load environment files using the Next.js convention:

```console
# Setup environment files
$ echo "HELLO=development local" > .env.development.local
$ echo "HELLO=local" > .env.local
$ echo "HELLO=development" > .env.development
$ echo "HELLO=env" > .env
```

{% capture sdk_code_1 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({ convention: 'nextjs' })

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_1 language="javascript" %}

```console
$ NODE_ENV=development node index.js
⟐ injected env (1) from .env.development.local, .env.local, .env.development, .env
Hello development local
```

This is equivalent to using `--convention=nextjs` with the CLI:

```console
$ dotenvx run --convention=nextjs -- node index.js
```

You can also set `DOTENV_CONFIG_CONVENTION=nextjs`.

```console
$ DOTENV_CONFIG_CONVENTION=nextjs node index.js
```

## Flow convention

Load environment files using the dotenv-flow convention:

```console
# Setup environment files
$ echo "HELLO=development local" > .env.development.local
$ echo "HELLO=development" > .env.development
$ echo "HELLO=local" > .env.local
$ echo "HELLO=env" > .env
```

{% capture sdk_code_6 %}
{% raw %}
// index.js
require('@dotenvx/dotenvx').config({ convention: 'flow' })

console.log(`Hello ${process.env.HELLO}`)
{% endraw %}
{% endcapture %}
{% include components/design-codeblock.html value=sdk_code_6 language="javascript" %}

```console
$ NODE_ENV=development node index.js
⟐ injected env (1) from .env.development.local, .env.development, .env.local, .env
Hello development local
```

You can also set `DOTENV_CONFIG_CONVENTION=flow`.

```console
$ NODE_ENV=development DOTENV_CONFIG_CONVENTION=flow node index.js
```
