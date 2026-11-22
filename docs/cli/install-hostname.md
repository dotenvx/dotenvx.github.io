---
doc_type: cli
title: install --hostname
description: Choose the hostname used for Dotenvx install requests.
permalink: "/docs/cli/install-hostname/"
command: dotenvx install --hostname
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass the install service URL to --hostname. For example:

```console
$ dotenvx install --hostname https://armor.example.com
```
{: copy="dotenvx install --hostname https://armor.example.com"}

Replace https://armor.example.com with your install service URL. The default service is https://armor.dotenvx.com; configured Armor session settings or DOTENVX_ARMOR_HOSTNAME can also select the host.

You can combine --hostname with the other install options.
