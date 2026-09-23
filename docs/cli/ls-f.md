---
layout: "docs-cli"
title: "ls -f"
description: "Path to your env file(s)."
permalink: "/docs/cli/ls-f/"
command: "dotenvx ls -f"
eyebrow: "dotenvx ls"
eyebrow_href: "/docs/cli/ls/"
---

{% capture cli_example %}
$ dotenvx ls -f '.env*'
{% endcapture %}
{% capture cli_example_copy %}
dotenvx ls -f '.env*'
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
