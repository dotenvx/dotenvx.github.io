---
layout: docs-cli
title: "--convention=nextjs"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value using the Next.js convention."
permalink: /docs/cli/get-key-convention-nextjs/
redirect_from:
  - /docs/advanced/get-key-convention-nextjs
  - /docs/advanced/get-key-convention-nextjs/
  - /docs/ref/cli/get-key-convention-nextjs
  - /docs/ref/cli/get-key-convention-nextjs/
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
echo "HELLO=local" > .env.local
echo "HELLO=development" > .env.development
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx get HELLO --convention=nextjs
development local
```
{: copy="echo \"HELLO=development local\" > .env.development.local"}

You can also set `DOTENV_CONFIG_CONVENTION=nextjs`.

```console
$ DOTENV_CONFIG_CONVENTION=nextjs dotenvx get HELLO
development local
```
{: copy="DOTENV_CONFIG_CONVENTION=nextjs dotenvx get HELLO"}
