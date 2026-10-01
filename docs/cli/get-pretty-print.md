---
layout: docs-cli
title: "--pretty-print"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Make JSON output more readable.
permalink: /docs/cli/get-pretty-print/
redirect_from:
  - /docs/ref/cli/get-pretty-print/
  - /docs/ref/cli/get-pretty-print
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ echo "HELLO=World" > .env
dotenvx get --pretty-print
{
  "HELLO": "World"
}
```
{: copy="echo \"HELLO=World\" > .env"}
