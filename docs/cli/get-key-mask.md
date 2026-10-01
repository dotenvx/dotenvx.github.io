---
layout: docs-cli
title: "KEY --mask"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return a masked environment variable value.
permalink: /docs/cli/get-key-mask/
redirect_from:
  - /docs/ref/cli/get-key-mask/
  - /docs/ref/cli/get-key-mask
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
By default, up to the first six characters are visible.

```console
$ echo "SECRET=abcdefghijkl" > .env

$ dotenvx get SECRET --mask
abcdef******
```
{: copy="echo \"SECRET=abcdefghijkl\" > .env
dotenvx get SECRET --mask"}



Pass a number to control how many characters are visible.

```console
$ dotenvx get SECRET --mask 0
************
```
{: copy="dotenvx get SECRET --mask 0"}
