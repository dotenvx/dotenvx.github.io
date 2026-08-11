---
layout: docs-cli
title: Version
description: Print the installed dotenvx version.
permalink: /docs/cli/version/
redirect_from:
  - /docs/ref/cli/version/
  - /docs/ref/cli/version
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
---
{% capture cli_code_0 %}
$ dotenvx --version
X.X.X
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx --version{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

The short `-V` flag is equivalent:

{% capture cli_code_1 %}
$ dotenvx -V
X.X.X
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx -V{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
