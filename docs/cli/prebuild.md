---
layout: docs-cli
title: Prebuild
description: Prevent .env files from being built into your docker containers.
permalink: /docs/cli/prebuild/
redirect_from:
  - /docs/advanced/prebuild
  - /docs/advanced/prebuild/
  - /docs/ref/cli/prebuild
  - /docs/ref/cli/prebuild/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "prebuild directory"
    href: /docs/cli/prebuild-directory/
video: cli-prebuild
---
Add it to your Dockerfile.

{% capture cli_code_0 %}
# Dockerfile
RUN curl -fsS https://dotenvx.sh | sh

...

RUN dotenvx prebuild
CMD ["dotenvx", "run", "--", "node", "index.js"]
{% endcapture %}
{% capture cli_code_0_copy %}# Dockerfile{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
