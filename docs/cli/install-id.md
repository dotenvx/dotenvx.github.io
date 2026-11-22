---
doc_type: cli
title: install --id
description: Use an existing Dotenvx install request.
permalink: "/docs/cli/install-id/"
command: dotenvx install --id
eyebrow: dotenvx install
eyebrow_href: "/docs/cli/install/"
---

Pass an existing install request ID to --id. Install request IDs start with ins_. Replace ins_YOUR_REQUEST_ID with your request ID:

```console
$ dotenvx install --id ins_YOUR_REQUEST_ID
```
{: copy="dotenvx install --id ins_YOUR_REQUEST_ID"}

You can use [--directory](/docs/cli/install-directory/) to choose the destination.

--id cannot be combined with --build, --version, --os, --arch, --add, or --remove.
