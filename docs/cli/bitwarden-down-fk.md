---
layout: "docs-cli"
title: "bitwarden down -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/bitwarden-down-fk/"
command: "dotenvx bitwarden down -fk"
eyebrow: "dotenvx bitwarden down"
eyebrow_href: "/docs/cli/bitwarden-down/"
---

{% capture cli_example %}
$ dotenvx bitwarden down -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden down -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
