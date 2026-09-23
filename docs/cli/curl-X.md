---
layout: "docs-cli"
title: "curl -X"
description: "HTTP request method."
permalink: "/docs/cli/curl-X/"
command: "dotenvx curl -X"
eyebrow: "dotenvx curl"
eyebrow_href: "/docs/cli/curl/"
---

{% capture cli_example %}
$ dotenvx curl "https://armor.dotenvx.com/api/account" -X GET
{% endcapture %}
{% capture cli_example_copy %}
dotenvx curl "https://armor.dotenvx.com/api/account" -X GET
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
