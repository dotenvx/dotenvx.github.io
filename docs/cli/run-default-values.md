---
layout: docs-cli
title: "Default Values"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Use default values when environment variables are unset or empty.
permalink: /docs/cli/run-default-values/
redirect_from:
  - /docs/advanced/run-default-values
  - /docs/advanced/run-default-values/
  - /docs/ref/cli/run-default-values
  - /docs/ref/cli/run-default-values/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```dotenv
# .env
# Default value syntax: use value if set, otherwise use default
DATABASE_HOST=${DB_HOST:-localhost}
DATABASE_PORT=${DB_PORT:-5432}

# Alternative syntax (no colon): use value if set, otherwise use default
API_URL=${API_BASE_URL-https://api.example.com}
```
{: copy="# .env"}

```javascript
// index.js
console.log('DATABASE_HOST', process.env.DATABASE_HOST)
console.log('DATABASE_PORT', process.env.DATABASE_PORT)
console.log('API_URL', process.env.API_URL)
```
{: copy="// index.js"}

```console
$ dotenvx run --debug -- node index.js
⟐ injected env (3) from .env
DATABASE_HOST localhost
DATABASE_PORT 5432
API_URL https://api.example.com
```
{: copy="dotenvx run --debug -- node index.js"}
