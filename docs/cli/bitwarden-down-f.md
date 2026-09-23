---
layout: "docs-cli"
title: "bitwarden down -f"
description: "Path to your env file."
permalink: "/docs/cli/bitwarden-down-f/"
command: "dotenvx bitwarden down -f"
eyebrow: "dotenvx bitwarden down"
eyebrow_href: "/docs/cli/bitwarden-down/"
---

{% capture cli_example %}
$ dotenvx bitwarden down -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden down -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
