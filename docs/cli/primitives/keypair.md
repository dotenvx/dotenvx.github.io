---
layout: docs-cli
permalink: /docs/cli/primitives/keypair/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "primitives keypair"
command: "dotenvx primitives keypair"
description: "Generate a key pair without reading or writing env files."
options_title: Options
options:
  - title: "primitives keypair <privateKey>"
    href: /docs/cli/primitives/keypair-private-key/
  - title: "primitives keypair --stdin"
    href: /docs/cli/primitives/keypair-stdin/
---
Generate a key pair without reading or writing env files.

```console
$ dotenvx primitives keypair
{"publicKey":"<publicKey>","privateKey":"<privateKey>"}
```
{: copy="dotenvx primitives keypair"}
