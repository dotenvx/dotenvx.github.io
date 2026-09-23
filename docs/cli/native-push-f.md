---
layout: "docs-cli"
title: "native push -f"
description: "Path to your env file."
permalink: "/docs/cli/native-push-f/"
command: "dotenvx native push -f"
eyebrow: "dotenvx native push"
eyebrow_href: "/docs/cli/native/push/"
---

{% capture cli_example %}
$ dotenvx native push -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx native push -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
