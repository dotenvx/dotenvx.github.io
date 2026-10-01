---
layout: docs-cli
permalink: /docs/cli/primitives/keypair-stdin/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "primitives keypair --stdin"
command: "dotenvx primitives keypair --stdin"
description: "Restore a key pair from a private key on stdin."
---
Restore a key pair from a private key on stdin.

```console
$ printf '%s\n' "$PRIVATE_KEY" | dotenvx primitives keypair --stdin
{"publicKey":"<publicKey>","privateKey":"<privateKey>"}
```
{: copy="printf '%s\n' \"$PRIVATE_KEY\" | dotenvx primitives keypair --stdin"}
