---
layout: "docs-cli"
title: "get --format"
description: "Format of the output (json, shell, colon, eval, eval-export)."
permalink: "/docs/cli/get-format/"
command: "dotenvx get --format"
eyebrow: "dotenvx get"
eyebrow_href: "/docs/cli/get/"
---

{% capture cli_example %}
$ dotenvx get --format shell
{% endcapture %}
{% capture cli_example_copy %}
dotenvx get --format shell
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
