---
layout: "docs-cli"
title: "native down -f"
description: "Path to your env file."
permalink: "/docs/cli/native-down-f/"
command: "dotenvx native down -f"
eyebrow: "dotenvx native down"
eyebrow_href: "/docs/cli/native/down/"
---

{% capture cli_example %}
$ dotenvx native down -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx native down -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
