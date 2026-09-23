---
layout: "docs-cli"
title: "bitwarden push"
description: "Copy key from .env.keys into Bitwarden."
permalink: "/docs/cli/bitwarden-push/"
command: "dotenvx bitwarden push"
eyebrow: "dotenvx bitwarden"
eyebrow_href: "/docs/cli/bitwarden/"
---

{% capture cli_example %}
$ dotenvx bitwarden push
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden push
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
