---
layout: docs-cli
title: "Command Substitution"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Add the output of a command to one of your variables in your .env file.
permalink: /docs/cli/run-command-substitution/
redirect_from:
  - /docs/advanced/run-command-substitution
  - /docs/advanced/run-command-substitution/
  - /docs/ref/cli/run-command-substitution
  - /docs/ref/cli/run-command-substitution/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: cli-command-substitution
---

```dotenv
# .env
DATABASE_URL="postgres://$(whoami)@localhost/my_database"
```
{: copy="# .env"}

```javascript
// index.js
console.log('DATABASE_URL', process.env.DATABASE_URL)
```
{: copy="// index.js"}

```console
$ dotenvx run --debug -- node index.js
⟐ injected env (1) from .env
DATABASE_URL postgres://yourusername@localhost/my_database
```
{: copy="dotenvx run --debug -- node index.js"}
