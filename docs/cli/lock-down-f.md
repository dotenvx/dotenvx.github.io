---
layout: "docs-cli"
title: "lock down -f"
description: "Path to your env file."
permalink: "/docs/cli/lock-down-f/"
command: "dotenvx lock down -f"
eyebrow: "dotenvx lock down"
eyebrow_href: "/docs/cli/lock/down/"
---

{% capture cli_example %}
$ dotenvx lock down -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx lock down -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
