---
layout: "docs-cli"
title: "1password pull -f"
description: "Path to your env file."
permalink: "/docs/cli/1password-pull-f/"
command: "dotenvx 1password pull -f"
eyebrow: "dotenvx 1password pull"
eyebrow_href: "/docs/cli/1password-pull/"
---

{% capture cli_example %}
$ dotenvx 1password pull -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password pull -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
