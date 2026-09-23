---
layout: "docs-cli"
title: "get --lock-password"
description: "Password to unlock private keys (defaults to DOTENVX_LOCK_PASSWORD)."
permalink: "/docs/cli/get-lock-password/"
command: "dotenvx get --lock-password"
eyebrow: "dotenvx get"
eyebrow_href: "/docs/cli/get/"
---

{% capture cli_example %}
$ dotenvx get HELLO --lock-password "$DOTENVX_LOCK_PASSWORD"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx get HELLO --lock-password "$DOTENVX_LOCK_PASSWORD"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
