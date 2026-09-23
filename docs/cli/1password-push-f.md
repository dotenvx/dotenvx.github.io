---
layout: "docs-cli"
title: "1password push -f"
description: "Path to your env file."
permalink: "/docs/cli/1password-push-f/"
command: "dotenvx 1password push -f"
eyebrow: "dotenvx 1password push"
eyebrow_href: "/docs/cli/1password-push/"
---

{% capture cli_example %}
$ dotenvx 1password push -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password push -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
