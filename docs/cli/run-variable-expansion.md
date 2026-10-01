---
layout: docs-cli
title: "Variable Expansion"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Reference and expand variables already on your machine for use in your .env file.
permalink: /docs/cli/run-variable-expansion/
redirect_from:
  - /docs/advanced/run-variable-expansion
  - /docs/advanced/run-variable-expansion/
  - /docs/ref/cli/run-variable-expansion
  - /docs/ref/cli/run-variable-expansion/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: cli-variable-expansion
---

```dotenv
# .env
USERNAME="username"
DATABASE_URL="postgres://${USERNAME}@localhost/my_database"
```
{: copy="# .env"}

```javascript
// index.js
console.log('DATABASE_URL', process.env.DATABASE_URL)
```
{: copy="// index.js"}

```console
$ dotenvx run --debug -- node index.js
⟐ injected env (2) from .env
DATABASE_URL postgres://username@localhost/my_database
```
{: copy="dotenvx run --debug -- node index.js"}

## Disabling
{: #disabling}

To disable variable expansion use single quotes like `PASSWORD='pa$$word@'` to get the result 'pa$$word@'.
