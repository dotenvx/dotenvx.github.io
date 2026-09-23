---
layout: "docs-cli"
title: "1password up -f"
description: "Path to your env file."
permalink: "/docs/cli/1password-up-f/"
command: "dotenvx 1password up -f"
eyebrow: "dotenvx 1password up"
eyebrow_href: "/docs/cli/1password-up/"
---

{% capture cli_example %}
$ dotenvx 1password up -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password up -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
