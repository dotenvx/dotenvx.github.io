---
layout: docs-cli
title: login
description: Log in to Dotenvx Armor.
permalink: /docs/cli/armor/login/
redirect_from:
  - /docs/ref/cli/armor/login/
  - /docs/ref/cli/armor/login
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
---
{% capture cli_code_0 %}
$ dotenvx armor login
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor login{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

After authentication, dotenvx first attempts to store your access token in your operating system's native secret store: macOS Keychain, Windows Credential Manager, or Linux Secret Service.

If native secure storage is unavailable, dotenvx falls back to its [settings file](/docs/cli/armor/settings). This follows a common CLI credential-storage pattern: prefer protected OS storage when available while remaining usable in headless or minimal environments.
