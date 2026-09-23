---
layout: docs-cli
permalink: /docs/cli/primitives/keypair-private-key/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "primitives keypair <privateKey>"
command: "dotenvx primitives keypair <privateKey>"
description: "Restore a key pair from a private key."
---
Restore a key pair from a private key.

{% capture cli_code_0 %}
$ dotenvx primitives keypair <privateKey>
{"publicKey":"<publicKey>","privateKey":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx primitives keypair <privateKey>{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
