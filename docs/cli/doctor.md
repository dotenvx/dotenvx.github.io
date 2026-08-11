---
layout: docs-cli
title: Doctor
description: Scan for dotenv loaders.
permalink: /docs/cli/doctor/
redirect_from:
  - /docs/advanced/doctor
  - /docs/advanced/doctor/
  - /docs/ref/cli/doctor
  - /docs/ref/cli/doctor/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
---
{% capture cli_code_0 %}
$ dotenvx doctor
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx doctor{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Scan the current directory for existing dotenv loaders.

{% capture cli_code_1 %}
$ dotenvx doctor apps/backend
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx doctor apps/backend{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
