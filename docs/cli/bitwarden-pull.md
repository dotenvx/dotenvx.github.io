---
layout: "docs-cli"
title: "bitwarden pull"
description: "Copy key from Bitwarden into .env.keys."
permalink: "/docs/cli/bitwarden-pull/"
command: "dotenvx bitwarden pull"
eyebrow: "dotenvx bitwarden"
eyebrow_href: "/docs/cli/bitwarden/"
---

{% capture cli_example %}
$ dotenvx bitwarden pull
{% endcapture %}
{% capture cli_example_copy %}
dotenvx bitwarden pull
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
