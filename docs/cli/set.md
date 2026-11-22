---
doc_type: cli
title: Set
description: Set an environment variable in an env file.
permalink: "/docs/cli/set/"
redirect_from:
- "/docs/ref/cli/set/"
- "/docs/ref/cli/set"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: set --file
  href: "/docs/cli/set-key-value-f/"
- title: set --keys-file
  href: "/docs/cli/set-key-value-fk/"
- title: set --token
  href: "/docs/cli/set-token/"
- title: set --encrypt
  href: "/docs/cli/set-key-value-encrypt/"
- title: set --plain
  href: "/docs/cli/set-key-value-plain/"
- title: set --no-create
  href: "/docs/cli/set-key-value-no-create/"
- title: set KEY value
  href: "/docs/cli/set-key-value/"
- title: set KEY_PLAIN value
  href: "/docs/cli/set-key-plain-suffix/"
- title: set KEY "value with spaces"
  href: "/docs/cli/set-key-value-with-spaces/"
- title: set KEY -- "- + * ÷"
  href: "/docs/cli/set-key-value-with-leading-dash/"
command: dotenvx set
global_options: true
---

```console
$ dotenvx set HELLO World
◈ encrypted HELLO (.env)
```
{: copy="dotenvx set HELLO World"}
