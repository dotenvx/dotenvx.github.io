---
layout: docs-cli
title: "--strict"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Exit with code 1 if any errors are encountered - like a missing .env file or decryption failure.
permalink: /docs/cli/run-strict/
redirect_from:
  - /docs/advanced/run-strict
  - /docs/advanced/run-strict/
  - /docs/ref/cli/run-strict
  - /docs/ref/cli/run-strict/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.missing --strict -- node index.js
[MISSING_ENV_FILE] missing file (/path/to/.env.missing). fix: [echo "HELLO=World" > .env.missing]
```
{: copy="echo \"console.log('Hello ' + process.env.HELLO)\" > index.js"}
