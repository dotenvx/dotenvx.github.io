---
layout: docs-cli
permalink: /docs/cli/primitives/derive/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "primitives derive"
command: "dotenvx primitives derive"
description: "Derive a public key without reading or writing env files."
options_title: Options
options:
  - title: "primitives derive --stdin"
    href: /docs/cli/primitives/derive-stdin/
---
Derive a public key without reading or writing env files.

{% capture cli_code_0 %}
$ dotenvx primitives derive <privateKey>
<publicKey>
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx primitives derive <privateKey>{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
