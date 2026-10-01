---
layout: docs-cli
title: "-f directory + nextjs"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Run a command using the Next.js convention from a directory. This is useful with monorepos.
permalink: /docs/cli/run-f-directory-convention-nextjs/
redirect_from:
  - /docs/advanced/run-f-directory-convention-nextjs
  - /docs/advanced/run-f-directory-convention-nextjs/
  - /docs/ref/cli/run-f-directory-convention-nextjs
  - /docs/ref/cli/run-f-directory-convention-nextjs/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
The directory becomes the base for every file in the convention:

```console
$ cd apps/web

dotenvx run -f ../.. --convention=nextjs -- node index.js
⟐ injected env (1) from ../../.env.development.local, ../../.env.local, ../../.env.development, ../../.env
Hello development local
```
{: copy="cd apps/web"}
