---
layout: "docs-cli"
title: "run --no-bitwarden"
description: "Disable Bitwarden secret reference resolution."
permalink: "/docs/cli/run-no-bitwarden/"
command: "dotenvx run --no-bitwarden"
eyebrow: "dotenvx run"
eyebrow_href: "/docs/cli/run/"
---

{% capture cli_example %}
$ dotenvx run --no-bitwarden -- node index.js
{% endcapture %}
{% capture cli_example_copy %}
dotenvx run --no-bitwarden -- node index.js
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
