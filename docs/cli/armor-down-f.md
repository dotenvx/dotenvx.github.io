---
layout: "docs-cli"
title: "armor down -f"
description: "Path to your env file."
permalink: "/docs/cli/armor-down-f/"
command: "dotenvx armor down -f"
eyebrow: "dotenvx armor down"
eyebrow_href: "/docs/cli/armor/down/"
---

{% capture cli_example %}
$ dotenvx armor down -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx armor down -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
