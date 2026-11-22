---
doc_type: cli
title: get --convention
description: Load env files using the nextjs or flow naming convention.
permalink: "/docs/cli/get-convention/"
command: dotenvx get --convention
eyebrow: dotenvx get
eyebrow_href: "/docs/cli/get/"
---

Choose nextjs or flow. Convention files that do not exist are skipped unless strict mode is enabled.

```console
$ dotenvx get --convention nextjs HELLO
```
{: copy="dotenvx get --convention nextjs HELLO"}

```console
$ dotenvx get --convention flow HELLO
```
{: copy="dotenvx get --convention flow HELLO"}
