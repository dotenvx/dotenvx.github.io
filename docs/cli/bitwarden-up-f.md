---
layout: "docs-cli"
title: "bitwarden up -f"
description: "Path to your env file."
permalink: "/docs/cli/bitwarden-up-f/"
command: "dotenvx bitwarden up -f"
eyebrow: "dotenvx bitwarden up"
eyebrow_href: "/docs/cli/bitwarden-up/"
---

{% capture cli_example %}
$ dotenvx bitwarden up -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden up -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
