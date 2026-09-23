---
layout: "docs-cli"
title: "init -f"
description: "File to read variable names from."
permalink: "/docs/cli/init-f/"
command: "dotenvx init -f"
eyebrow: "dotenvx init"
eyebrow_href: "/docs/cli/init/"
---

{% capture cli_example %}
$ dotenvx init -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx init -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
