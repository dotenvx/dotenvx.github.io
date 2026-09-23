---
layout: "docs-cli"
title: "bitwarden push -f"
description: "Path to your env file."
permalink: "/docs/cli/bitwarden-push-f/"
command: "dotenvx bitwarden push -f"
eyebrow: "dotenvx bitwarden push"
eyebrow_href: "/docs/cli/bitwarden-push/"
---

{% capture cli_example %}
$ dotenvx bitwarden push -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden push -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
