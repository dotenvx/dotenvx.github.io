---
doc_type: cli
title: get --token
description: Supply an Armor access token for this command.
permalink: "/docs/cli/get-token/"
command: dotenvx get --token
eyebrow: dotenvx get
eyebrow_href: "/docs/cli/get/"
---

Supply an Armor access token for this command.

Set DOTENVX_ARMOR_TOKEN to your access token before running the example. This option requires an Armor-enabled build.

```console
$ dotenvx get HELLO --token "$DOTENVX_ARMOR_TOKEN"
```
{: copy="dotenvx get HELLO --token \"$DOTENVX_ARMOR_TOKEN\""}
