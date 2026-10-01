---
layout: docs-cli
title: "KEY_PLAIN value"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set a plaintext key/value by ending the key with _PLAIN.
permalink: /docs/cli/set-key-plain-suffix/
redirect_from:
  - /docs/ref/cli/set-key-plain-suffix/
  - /docs/ref/cli/set-key-plain-suffix
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---

```console
$ touch .env

dotenvx set HELLO_PLAIN World
◇ set HELLO_PLAIN (.env)
```
{: copy="touch .env"}

Keys ending in `_PLAIN` are not encrypted by `dotenvx set` or `dotenvx encrypt`.
