---
layout: docs-cli
title: "--all --pretty-print"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Make the output more readable - pretty print it.
permalink: /docs/cli/get-all-pretty-print/
redirect_from:
  - /docs/advanced/get-all-pretty-print
  - /docs/advanced/get-all-pretty-print/
  - /docs/ref/cli/get-all-pretty-print
  - /docs/ref/cli/get-all-pretty-print/
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

dotenvx get --all --pretty-print
{
  "PWD": "/some/filepath",
  "USER": "username",
  "LIBRARY_PATH": "/usr/local/lib",
  ...,
  "HELLO": "World"
}
```
{: copy="echo \"HELLO=World\" > .env"}
