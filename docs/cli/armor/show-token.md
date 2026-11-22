---
doc_type: cli
title: armor show --token
description: Supply an Armor access token for this command.
permalink: "/docs/cli/armor/show-token/"
command: dotenvx armor show --token
eyebrow: dotenvx armor show
eyebrow_href: "/docs/cli/armor/show/"
---

Supply an Armor access token for this command.

Set DOTENVX_ARMOR_TOKEN to your access token before running the example. This option requires an Armor-enabled build.

```console
$ dotenvx armor show "$DOTENV_PUBLIC_KEY" --token "$DOTENVX_ARMOR_TOKEN"
```
{: copy="dotenvx armor show \"$DOTENV_PUBLIC_KEY\" --token \"$DOTENVX_ARMOR_TOKEN\""}
