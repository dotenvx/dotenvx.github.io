---
layout: docs-cli
title: directory
eyebrow: "dotenvx genexample"
eyebrow_href: /docs/cli/genexample/
description: Generate a .env.example file inside the specified directory. Useful for monorepos.
permalink: /docs/cli/genexample-directory/
redirect_from:
  - /docs/advanced/genexample-directory
  - /docs/advanced/genexample-directory/
  - /docs/ref/cli/genexample-directory
  - /docs/ref/cli/genexample-directory/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Genexample
    href: /docs/cli/genexample/
---

```console
$ echo "HELLO=World" > .env
mkdir -p apps/backend
echo "HELLO=Backend" > apps/backend/.env

dotenvx genexample apps/backend
▣ generated (.env.example)
```
{: copy="echo \"HELLO=World\" > .env"}

```dotenv
# apps/backend/.env.example
HELLO=""
```
{: copy="false"}
