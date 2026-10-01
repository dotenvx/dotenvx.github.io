---
layout: docs-cli
title: "--all"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return preset machine envs as well.
permalink: /docs/cli/get-all/
redirect_from:
  - /docs/advanced/get-all
  - /docs/advanced/get-all/
  - /docs/ref/cli/get-all
  - /docs/ref/cli/get-all/
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

dotenvx get --all
{"PWD":"/some/file/path","USER":"username","LIBRARY_PATH":"/usr/local/lib", ..., "HELLO":"World"}
```
{: copy="echo \"HELLO=World\" > .env"}
