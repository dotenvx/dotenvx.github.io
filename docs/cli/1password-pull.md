---
layout: "docs-cli"
title: "1password pull"
description: "Copy key from 1Password into .env.keys."
permalink: "/docs/cli/1password-pull/"
command: "dotenvx 1password pull"
eyebrow: "dotenvx 1password"
eyebrow_href: "/docs/cli/1password/"
---

{% capture cli_example %}
$ dotenvx 1password pull
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password pull
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
