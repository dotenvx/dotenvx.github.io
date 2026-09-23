---
layout: "docs-cli"
title: "armor move -f"
description: "Path to your env file."
permalink: "/docs/cli/armor-move-f/"
command: "dotenvx armor move -f"
eyebrow: "dotenvx armor move"
eyebrow_href: "/docs/cli/armor/move/"
---

{% capture cli_example %}
$ dotenvx armor move -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx armor move -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
