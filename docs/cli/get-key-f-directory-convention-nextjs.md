---
layout: docs-cli
title: "-f directory + nextjs"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return an environment variable using the Next.js convention from a directory. This is useful with monorepos.
permalink: /docs/cli/get-key-f-directory-convention-nextjs/
redirect_from:
  - /docs/advanced/get-key-f-directory-convention-nextjs
  - /docs/advanced/get-key-f-directory-convention-nextjs/
  - /docs/ref/cli/get-key-f-directory-convention-nextjs
  - /docs/ref/cli/get-key-f-directory-convention-nextjs/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
The directory becomes the base for every file in the convention:

```console
$ cd apps/web

dotenvx get HELLO -f ../.. --convention=nextjs
development local
```
{: copy="cd apps/web"}
