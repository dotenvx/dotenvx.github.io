---
layout: "docs-cli"
title: "get --no-bitwarden"
description: "Disable Bitwarden secret reference resolution."
permalink: "/docs/cli/get-no-bitwarden/"
command: "dotenvx get --no-bitwarden"
eyebrow: "dotenvx get"
eyebrow_href: "/docs/cli/get/"
---

{% capture cli_example %}
$ dotenvx get HELLO --no-bitwarden
{% endcapture %}
{% capture cli_example_copy %}
dotenvx get HELLO --no-bitwarden
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
