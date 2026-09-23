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

{% capture cli_code_0 %}
$ printf '%s\n' "$PRIVATE_KEY" | dotenvx primitives keypair --stdin
{"publicKey":"<publicKey>","privateKey":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}printf '%s\n' "$PRIVATE_KEY" | dotenvx primitives keypair --stdin{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
