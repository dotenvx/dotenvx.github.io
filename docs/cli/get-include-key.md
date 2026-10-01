---
layout: docs-cli
title: "-ik"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Include only keys that match a glob pattern.
permalink: /docs/cli/get-include-key/
redirect_from:
  - /docs/ref/cli/get-include-key/
  - /docs/ref/cli/get-include-key
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
Pass `--include-key`, or its `-ik` alias. Glob patterns are supported.

```console
$ echo "HELLO=World\nHOLA=Mundo\nGOODBYE=World" > .env

$ dotenvx get -ik "H*"
{"HELLO":"World","HOLA":"Mundo"}
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\nGOODBYE=World\" > .env
dotenvx get -ik \"H*\""}
