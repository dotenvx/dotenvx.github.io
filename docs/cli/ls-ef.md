---
layout: "docs-cli"
title: "ls -ef"
description: "Path to exclude from your env file(s) (default: none)."
permalink: "/docs/cli/ls-ef/"
command: "dotenvx ls -ef"
eyebrow: "dotenvx ls"
eyebrow_href: "/docs/cli/ls/"
---

{% capture cli_example %}
$ dotenvx ls -ef '.env.local'
{% endcapture %}
{% capture cli_example_copy %}
dotenvx ls -ef '.env.local'
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
