---
layout: "docs-cli"
title: "bitwarden push -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/bitwarden-push-fk/"
command: "dotenvx bitwarden push -fk"
eyebrow: "dotenvx bitwarden push"
eyebrow_href: "/docs/cli/bitwarden-push/"
---

{% capture cli_example %}
$ dotenvx bitwarden push -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden push -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
