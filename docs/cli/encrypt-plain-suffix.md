---
layout: docs-cli
title: KEY_PLAIN
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Skip encryption for keys ending in _PLAIN.
permalink: /docs/cli/encrypt-plain-suffix/
redirect_from:
  - /docs/ref/cli/encrypt-plain-suffix/
  - /docs/ref/cli/encrypt-plain-suffix
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---

```console
$ echo "HELLO=World\nHELLO_PLAIN=visible" > .env

dotenvx encrypt
◈ encrypted (.env)
```
{: copy="echo \"HELLO=World\nHELLO_PLAIN=visible\" > .env"}

`HELLO` is encrypted. `HELLO_PLAIN` stays plaintext.
