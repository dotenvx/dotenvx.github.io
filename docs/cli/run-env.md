---
layout: docs-cli
title: "--env HELLO=String"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Set environment variables as a simple KEY=value string pair.
permalink: /docs/cli/run-env/
redirect_from:
  - /docs/advanced/run-env
  - /docs/advanced/run-env/
  - /docs/ref/cli/run-env
  - /docs/ref/cli/run-env/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ echo "HELLO=World" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run --env HELLO=String -f .env -- node index.js
⟐ injected env (1) from .env, and --env flag
Hello String
```
{: copy="echo \"HELLO=World\" > .env"}
