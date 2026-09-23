---
layout: "docs-cli"
title: "bitwarden pull -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/bitwarden-pull-fk/"
command: "dotenvx bitwarden pull -fk"
eyebrow: "dotenvx bitwarden pull"
eyebrow_href: "/docs/cli/bitwarden-pull/"
---

{% capture cli_example %}
$ dotenvx bitwarden pull -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden pull -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
