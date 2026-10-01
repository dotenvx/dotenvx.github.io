---
layout: docs-cli
title: "--convention=flow"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value using the dotenv-flow convention."
permalink: /docs/cli/get-key-convention-flow/
redirect_from:
  - /docs/advanced/get-key-convention-flow
  - /docs/advanced/get-key-convention-flow/
  - /docs/ref/cli/get-key-convention-flow
  - /docs/ref/cli/get-key-convention-flow/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ echo "HELLO=development local" > .env.development.local
echo "HELLO=development" > .env.development
echo "HELLO=local" > .env.local
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx get HELLO --convention=flow
development local
```
{: copy="echo \"HELLO=development local\" > .env.development.local"}

You can also set `DOTENV_CONFIG_CONVENTION=flow`.

```console
$ DOTENV_CONFIG_CONVENTION=flow dotenvx get HELLO
development local
```
{: copy="DOTENV_CONFIG_CONVENTION=flow dotenvx get HELLO"}
