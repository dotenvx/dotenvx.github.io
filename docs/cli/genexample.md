---
doc_type: cli
title: Genexample
description: Generate an .env.example file.
permalink: "/docs/cli/genexample/"
redirect_from:
- "/docs/advanced/genexample"
- "/docs/advanced/genexample/"
- "/docs/ref/cli/genexample"
- "/docs/ref/cli/genexample/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: genexample --file
  href: "/docs/cli/genexample-f/"
- title: genexample directory
  href: "/docs/cli/genexample-directory/"
command: dotenvx genexample
global_options: true
---

```console
$ echo "HELLO=World" > .env

$ dotenvx genexample
▣ generated (.env.example)
```
{: copy="echo \"HELLO=World\" > .env
dotenvx genexample"}

```dotenv
# .env.example
HELLO=""
```
{: copy="false"}

Requires the genexample build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
