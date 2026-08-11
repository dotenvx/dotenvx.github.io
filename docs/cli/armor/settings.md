---
layout: docs-cli
title: settings
description: Inspect and manage local Dotenvx Armor settings.
permalink: /docs/cli/armor/settings/
redirect_from:
  - /docs/ref/cli/armor/settings/
  - /docs/ref/cli/armor/settings
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
---
These advanced commands let you inspect the active Armor identity and control whether Armor is enabled.

| Command | Description |
| --- | --- |
| `dotenvx armor settings username` | Print your username. |
| `dotenvx armor settings token` | Print your masked access token. |
| `dotenvx armor settings device` | Print your masked device public key. |
| `dotenvx armor settings hostname` | Print the Armor hostname. |
| `dotenvx armor settings path` | Print the path to the settings file. |
| `dotenvx armor settings on` | Turn Armor on. |
| `dotenvx armor settings off` | Turn Armor off. |

## Reveal complete values

Access tokens and device public keys are masked by default. Use `--unmask` only when you explicitly need the complete value.

{% capture cli_code_0 %}
$ dotenvx armor settings token --unmask
$ dotenvx armor settings device --unmask
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx armor settings token --unmask
dotenvx armor settings device --unmask{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
