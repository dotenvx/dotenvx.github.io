---
doc_type: cli
title: "--log-level"
description: Choose the diagnostic log level.
permalink: "/docs/cli/log-level/"
command: dotenvx --log-level
eyebrow: CLI
eyebrow_href: "/docs/cli/"
redirect_from:
- "/docs/cli/run-log-level/"
- "/docs/advanced/run-log-level"
- "/docs/advanced/run-log-level/"
- "/docs/ref/cli/run-log-level"
- "/docs/ref/cli/run-log-level/"
---

Choose the diagnostic log level.

```console
$ dotenvx --log-level warn run -- node index.js
```
{: copy="dotenvx --log-level warn run -- node index.js"}

Accepted levels are error, warn, info, verbose, and debug. The -l alias is equivalent. This option applies to every command.
