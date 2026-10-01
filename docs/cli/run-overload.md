---
layout: docs-cli
title: "--overload"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Override existing env variables. These can be variables already on your machine or variables loaded as files consecutively. The last variable seen will win."
permalink: /docs/cli/run-overload/
redirect_from:
  - /docs/advanced/run-overload
  - /docs/advanced/run-overload/
  - /docs/ref/cli/run-overload
  - /docs/ref/cli/run-overload/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ echo "HELLO=local" > .env.local
echo "HELLO=World" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.local,.env --overload -- node index.js
⟐ injected env (1) from .env.local, .env
Hello World
```
{: copy="echo \"HELLO=local\" > .env.local"}

Note that with `--overload` subsequent files DO override pre-existing variables defined in previous files.
