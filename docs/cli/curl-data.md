---
layout: "docs-cli"
title: "curl --data"
description: "JSON request body."
permalink: "/docs/cli/curl-data/"
command: "dotenvx curl --data"
eyebrow: "dotenvx curl"
eyebrow_href: "/docs/cli/curl/"
---

{% capture cli_example %}
$ dotenvx curl "https://armor.dotenvx.com/api/armor/keypairs/PUBLIC_KEY/name" --data '{"name":"Production"}'
{% endcapture %}
{% capture cli_example_copy %}
dotenvx curl "https://armor.dotenvx.com/api/armor/keypairs/PUBLIC_KEY/name" --data '{"name":"Production"}'
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
