---
layout: docs-cli
permalink: /docs/cli/primitives/derive-stdin/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "primitives derive --stdin"
command: "dotenvx primitives derive --stdin"
description: "Derive a public key from a private key on stdin."
---
Derive a public key from a private key on stdin.

```console
$ printf '%s\n' "$PRIVATE_KEY" | dotenvx primitives derive --stdin
<publicKey>
```
{: copy="printf '%s\n' \"$PRIVATE_KEY\" | dotenvx primitives derive --stdin"}
