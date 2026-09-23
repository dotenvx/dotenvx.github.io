---
layout: "docs-cli"
title: "get --no-1password"
description: "Disable 1Password secret reference resolution."
permalink: "/docs/cli/get-no-1password/"
command: "dotenvx get --no-1password"
eyebrow: "dotenvx get"
eyebrow_href: "/docs/cli/get/"
---

{% capture cli_example %}
$ dotenvx get HELLO --no-1password
{% endcapture %}
{% capture cli_example_copy %}
dotenvx get HELLO --no-1password
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
