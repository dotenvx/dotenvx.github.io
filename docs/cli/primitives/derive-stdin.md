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

{% capture cli_code_0 %}
$ printf '%s\n' "$PRIVATE_KEY" | dotenvx primitives derive --stdin
<publicKey>
{% endcapture %}
{% capture cli_code_0_copy %}printf '%s\n' "$PRIVATE_KEY" | dotenvx primitives derive --stdin{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
