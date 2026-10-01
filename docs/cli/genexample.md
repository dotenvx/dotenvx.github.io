---
layout: docs-cli
title: Genexample
description: Generate a .env.example file from your current .env file contents.
permalink: /docs/cli/genexample/
redirect_from:
  - /docs/advanced/genexample
  - /docs/advanced/genexample/
  - /docs/ref/cli/genexample
  - /docs/ref/cli/genexample/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "genexample -f"
    href: /docs/cli/genexample-f/
  - title: "genexample directory"
    href: /docs/cli/genexample-directory/
---

```console
$ echo "HELLO=World" > .env

dotenvx genexample
▣ generated (.env.example)
```
{: copy="echo \"HELLO=World\" > .env"}

```dotenv
# .env.example
HELLO=""
```
{: copy="false"}
