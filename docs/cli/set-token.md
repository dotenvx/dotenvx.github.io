---
doc_type: cli
title: set --token
description: Supply an Armor access token for this command.
permalink: "/docs/cli/set-token/"
command: dotenvx set --token
eyebrow: dotenvx set
eyebrow_href: "/docs/cli/set/"
---

Supply an Armor access token for this command.

Set DOTENVX_ARMOR_TOKEN to your access token before running the example. This option requires an Armor-enabled build.

```console
$ dotenvx set HELLO World --token "$DOTENVX_ARMOR_TOKEN"
```
{: copy="dotenvx set HELLO World --token \"$DOTENVX_ARMOR_TOKEN\""}
