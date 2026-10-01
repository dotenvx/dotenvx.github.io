---
layout: docs-cli
title: KEY
eyebrow: "dotenvx del"
eyebrow_href: /docs/cli/del/
description: Delete a single key from your .env file.
permalink: /docs/cli/del-key/
redirect_from:
  - /docs/ref/cli/del-key/
  - /docs/ref/cli/del-key
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Del
    href: /docs/cli/del/
---

```console
$ echo "HELLO=World" > .env

dotenvx del HELLO
◇ removed HELLO (.env)
```
{: copy="echo \"HELLO=World\" > .env"}
