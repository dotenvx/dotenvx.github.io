---
doc_type: cli
title: "--verbose"
description: Show loading details on stderr.
permalink: "/docs/cli/verbose/"
command: dotenvx --verbose
eyebrow: CLI
eyebrow_href: "/docs/cli/"
redirect_from:
- "/docs/cli/run-verbose/"
- "/docs/advanced/run-verbose"
- "/docs/advanced/run-verbose/"
- "/docs/ref/cli/run-verbose"
- "/docs/ref/cli/run-verbose/"
---

Show loading details on stderr.

```console
$ dotenvx --verbose run -- node index.js
```
{: copy="dotenvx --verbose run -- node index.js"}

The -v alias is equivalent. Diagnostics omit secret values. This option applies to every command.
