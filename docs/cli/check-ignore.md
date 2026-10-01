---
layout: docs-cli
title: "check --ignore"
eyebrow: "dotenvx check"
eyebrow_href: /docs/cli/check/
description: "Ignore specific loading or value-validation errors:"
permalink: /docs/cli/check-ignore/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Check
    href: /docs/cli/check/
command: "dotenvx check --ignore"
redirect_from:
  - /docs/ref/cli/validate-ignore/
  - /docs/ref/cli/validate-ignore
  - /docs/cli/validate-ignore/
  - /docs/cli/validate-ignore
---
Ignore specific loading or value-validation errors:

```console
$ dotenvx check --ignore=MISSING_ENV_FILE
$ dotenvx check --ignore=MISSING_ENV_FILE INVALID_ENV
$ DOTENV_IGNORE=MISSING_ENV_FILE dotenvx check
```
{: copy="dotenvx check --ignore=MISSING_ENV_FILE
dotenvx check --ignore=MISSING_ENV_FILE INVALID_ENV
DOTENV_IGNORE=MISSING_ENV_FILE dotenvx check"}



An Envfile is still required, even when errors are ignored.
