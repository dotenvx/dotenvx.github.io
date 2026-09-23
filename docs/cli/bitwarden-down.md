---
layout: "docs-cli"
title: "bitwarden down"
description: "Move key from Bitwarden to .env.keys."
permalink: "/docs/cli/bitwarden-down/"
command: "dotenvx bitwarden down"
eyebrow: "dotenvx bitwarden"
eyebrow_href: "/docs/cli/bitwarden/"
---

{% capture cli_example %}
$ dotenvx bitwarden down
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden down
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
