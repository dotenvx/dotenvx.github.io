---
layout: "docs-cli"
title: "bitwarden pull -f"
description: "Path to your env file."
permalink: "/docs/cli/bitwarden-pull-f/"
command: "dotenvx bitwarden pull -f"
eyebrow: "dotenvx bitwarden pull"
eyebrow_href: "/docs/cli/bitwarden-pull/"
---

{% capture cli_example %}
$ dotenvx bitwarden pull -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden pull -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
