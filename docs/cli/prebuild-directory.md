---
layout: docs-cli
title: prebuild directory
description: Prevent .env files from being built into your docker containers for a specified directory. Useful for monorepos.
permalink: /docs/cli/prebuild-directory/
redirect_from:
  - /docs/advanced/prebuild-directory
  - /docs/advanced/prebuild-directory/
  - /docs/ref/cli/prebuild-directory
  - /docs/ref/cli/prebuild-directory/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Prebuild
    href: /docs/cli/prebuild/
---
Add it to your Dockerfile.

{% capture cli_code_0 %}
# Dockerfile
RUN curl -fsS https://dotenvx.sh | sh

...

RUN dotenvx prebuild apps/backend
CMD ["dotenvx", "run", "--", "node", "apps/backend/index.js"]
{% endcapture %}
{% capture cli_code_0_copy %}# Dockerfile{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
