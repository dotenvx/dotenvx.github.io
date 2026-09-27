---
layout: docs-cli
permalink: /docs/cli/check-strict/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "check --strict"
command: "dotenvx check --strict"
description: "Fail on missing env files as well as other loading and validation errors."
redirect_from:
  - /docs/cli/validate-strict/
  - /docs/cli/validate-strict
---
Fail on missing env files as well as other loading and validation errors.

{% capture cli_code_0 %}
$ dotenvx check --strict
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx check --strict{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
