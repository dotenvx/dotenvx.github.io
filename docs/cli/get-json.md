---
layout: docs-cli
title: "(json)"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return a json response of all key/value pairs in a .env file.
permalink: /docs/cli/get-json/
redirect_from:
  - /docs/advanced/get-json
  - /docs/advanced/get-json/
  - /docs/ref/cli/get-json
  - /docs/ref/cli/get-json/
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

dotenvx get
{"HELLO":"World"}
```
{: copy="echo \"HELLO=World\" > .env"}
