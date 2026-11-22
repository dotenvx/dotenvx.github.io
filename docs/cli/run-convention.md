---
doc_type: cli
title: run --convention
description: Load env files using the nextjs or flow naming convention.
permalink: "/docs/cli/run-convention/"
command: dotenvx run --convention
eyebrow: dotenvx run
eyebrow_href: "/docs/cli/run/"
---

Choose nextjs or flow. Convention files that do not exist are skipped unless strict mode is enabled.

```console
$ dotenvx run --convention nextjs -- node index.js
```
{: copy="dotenvx run --convention nextjs -- node index.js"}

```console
$ dotenvx run --convention flow -- node index.js
```
{: copy="dotenvx run --convention flow -- node index.js"}
