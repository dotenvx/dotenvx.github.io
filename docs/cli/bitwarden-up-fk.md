---
layout: "docs-cli"
title: "bitwarden up -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/bitwarden-up-fk/"
command: "dotenvx bitwarden up -fk"
eyebrow: "dotenvx bitwarden up"
eyebrow_href: "/docs/cli/bitwarden-up/"
---

{% capture cli_example %}
$ dotenvx bitwarden up -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden up -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
