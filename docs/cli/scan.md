---
layout: docs-cli
title: Scan
description: Scan for leaked secrets.
permalink: /docs/cli/scan/
redirect_from:
  - /docs/advanced/scan
  - /docs/advanced/scan/
  - /docs/ref/cli/scan
  - /docs/ref/cli/scan/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
---
{% capture cli_code_0 %}
$ dotenvx ext scan
100 commits scanned.
no leaks found
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx ext scan{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Uses [gitleaks](https://gitleaks.io) under the hood.
