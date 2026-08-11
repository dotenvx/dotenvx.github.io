---
layout: docs-cli
title: get KEY --strict
description: "Exit with code 1 if any errors are encountered - like a missing key, missing .env file, or decryption failure."
permalink: /docs/cli/get-key-strict/
redirect_from:
  - /docs/ref/cli/get-key-strict/
  - /docs/ref/cli/get-key-strict
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
{% capture cli_code_0 %}
$ dotenvx get DOES_NOT_EXIST --strict
[MISSING_KEY] missing key (DOES_NOT_EXIST)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx get DOES_NOT_EXIST --strict{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
