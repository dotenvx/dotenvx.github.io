---
layout: docs-cli
title: "Contextual Help"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Unlike other dotenv libraries, dotenvx attempts to unblock you with contextual help."
permalink: /docs/cli/run-contextual-help/
redirect_from:
  - /docs/advanced/run-contextual-help
  - /docs/advanced/run-contextual-help/
  - /docs/ref/cli/run-contextual-help
  - /docs/ref/cli/run-contextual-help/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: cli-contextual-help
---
For example, when missing a custom .env file:

```console
$ dotenvx run -f .env.missing -- sh -c 'echo $HELLO'
[MISSING_ENV_FILE] missing file (/Users/scottmotte/Code/dotenvx/playground/apr-16/.env.missing). fix: [echo "HELLO=World" > .env.missing]
```
{: copy="dotenvx run -f .env.missing -- sh -c 'echo $HELLO'"}

or when missing a KEY:

```console
$ echo "HELLO=World" > .env
dotenvx get GOODBYE
[MISSING_KEY] missing key (GOODBYE)
```
{: copy="echo \"HELLO=World\" > .env"}
