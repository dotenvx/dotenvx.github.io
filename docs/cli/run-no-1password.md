---
layout: "docs-cli"
title: "run --no-1password"
description: "Disable 1Password secret reference resolution."
permalink: "/docs/cli/run-no-1password/"
command: "dotenvx run --no-1password"
eyebrow: "dotenvx run"
eyebrow_href: "/docs/cli/run/"
---

{% capture cli_example %}
$ dotenvx run --no-1password -- node index.js
{% endcapture %}
{% capture cli_example_copy %}
dotenvx run --no-1password -- node index.js
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
