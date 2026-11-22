---
doc_type: cli
title: "--debug"
description: Show loading, precedence, and custody details on stderr.
permalink: "/docs/cli/debug/"
command: dotenvx --debug
eyebrow: CLI
eyebrow_href: "/docs/cli/"
redirect_from:
- "/docs/cli/run-debug/"
- "/docs/advanced/run-debug"
- "/docs/advanced/run-debug/"
- "/docs/ref/cli/run-debug"
- "/docs/ref/cli/run-debug/"
---

Show loading, precedence, and custody details on stderr.

```console
$ dotenvx --debug run -- node index.js
```
{: copy="dotenvx --debug run -- node index.js"}

The -d alias is equivalent. Diagnostics omit secret values and include the child executable for run. This option applies to every command.
