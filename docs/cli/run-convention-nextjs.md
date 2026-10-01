---
layout: docs-cli
title: "--convention=nextjs"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Load envs using the Next.js convention.
permalink: /docs/cli/run-convention-nextjs/
redirect_from:
  - /docs/advanced/run-convention-nextjs
  - /docs/advanced/run-convention-nextjs/
  - /docs/ref/cli/run-convention-nextjs
  - /docs/ref/cli/run-convention-nextjs/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ echo "HELLO=development local" > .env.development.local
echo "HELLO=local" > .env.local
echo "HELLO=development" > .env.development
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run --convention=nextjs -- node index.js
⟐ injected env (1) from .env.development.local, .env.local, .env.development, .env
Hello development local
```
{: copy="echo \"HELLO=development local\" > .env.development.local"}

You can also set `DOTENV_CONFIG_CONVENTION=nextjs`.

```console
$ DOTENV_CONFIG_CONVENTION=nextjs dotenvx run -- node index.js
⟐ injected env (1) from .env.development.local, .env.local, .env.development, .env
Hello development local
```
{: copy="DOTENV_CONFIG_CONVENTION=nextjs dotenvx run -- node index.js"}

[Next.js env load order](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#environment-variable-load-order)
