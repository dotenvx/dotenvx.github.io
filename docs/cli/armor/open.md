---
layout: docs-cli
title: open
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: Open an armored key in your browser.
permalink: /docs/cli/armor/open/
redirect_from:
  - /docs/ref/cli/armor/open/
  - /docs/ref/cli/armor/open
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
video: cli-armor-open
---
{% capture cli_code_0 %}
$ dotenvx armor open
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor open{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Open the armored key for a specific env file.

{% capture cli_code_1 %}
$ dotenvx armor open -f .env.production
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx armor open -f .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
