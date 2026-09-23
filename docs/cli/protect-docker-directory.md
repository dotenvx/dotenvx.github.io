---
layout: docs-cli
permalink: /docs/cli/protect-docker-directory/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "protect --docker directory"
command: "dotenvx protect --docker directory"
description: "Check env files in a specific directory during a Docker build."
---
Check env files in a specific directory during a Docker build.

{% capture cli_code_0 %}
RUN dotenvx protect --docker apps/backend
{% endcapture %}
{% capture cli_code_0_copy %}RUN dotenvx protect --docker apps/backend{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy language="docker" %}
