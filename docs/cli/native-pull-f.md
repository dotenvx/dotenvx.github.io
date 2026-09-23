---
layout: "docs-cli"
title: "native pull -f"
description: "Path to your env file."
permalink: "/docs/cli/native-pull-f/"
command: "dotenvx native pull -f"
eyebrow: "dotenvx native pull"
eyebrow_href: "/docs/cli/native/pull/"
---

{% capture cli_example %}
$ dotenvx native pull -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx native pull -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
