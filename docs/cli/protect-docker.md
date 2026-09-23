---
layout: docs-cli
permalink: /docs/cli/protect-docker/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "protect --docker"
command: "dotenvx protect --docker"
description: "Check env files during a Docker build. Use .dockerignore to exclude files from the build context."
---
Check env files during a Docker build. Use `.dockerignore` to exclude files from the build context.

{% capture cli_code_0 %}
RUN dotenvx protect --docker
{% endcapture %}
{% capture cli_code_0_copy %}RUN dotenvx protect --docker{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy language="docker" %}
