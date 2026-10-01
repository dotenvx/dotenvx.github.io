---
layout: docs-cli
title: "KEY --overload"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value where each found value is overloaded."
permalink: /docs/cli/get-key-overload/
redirect_from:
  - /docs/advanced/get-key-overload
  - /docs/advanced/get-key-overload/
  - /docs/ref/cli/get-key-overload
  - /docs/ref/cli/get-key-overload/
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
echo "HELLO=production" > .env.production

dotenvx get HELLO -f .env.production --env HELLO=String -f .env --overload
World
```
{: copy="echo \"HELLO=World\" > .env"}
