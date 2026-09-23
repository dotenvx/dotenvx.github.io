---
layout: "docs-cli"
title: "curl --token"
description: "Set token."
permalink: "/docs/cli/curl-token/"
command: "dotenvx curl --token"
eyebrow: "dotenvx curl"
eyebrow_href: "/docs/cli/curl/"
---

{% capture cli_example %}
$ dotenvx curl "https://armor.dotenvx.com/api/account" --token "$DOTENVX_TOKEN"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx curl "https://armor.dotenvx.com/api/account" --token "$DOTENVX_TOKEN"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
