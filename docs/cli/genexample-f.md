---
layout: docs-cli
title: "-f"
eyebrow: "dotenvx genexample"
eyebrow_href: /docs/cli/genexample/
description: Pass multiple .env files to generate your .env.example file from the combination of their contents.
permalink: /docs/cli/genexample-f/
redirect_from:
  - /docs/advanced/genexample-f
  - /docs/advanced/genexample-f/
  - /docs/ref/cli/genexample-f
  - /docs/ref/cli/genexample-f/
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
echo "DB_HOST=example.com" > .env.production

dotenvx genexample -f .env,.env.production
▣ generated (.env.example)
```
{: copy="echo \"HELLO=World\" > .env"}

```dotenv
# .env.example
HELLO=""
DB_HOST=""
```
{: copy="false"}
