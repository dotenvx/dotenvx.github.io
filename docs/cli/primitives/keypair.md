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

{% capture cli_code_0 %}
$ dotenvx primitives keypair
{"publicKey":"<publicKey>","privateKey":"<privateKey>"}
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx primitives keypair{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
