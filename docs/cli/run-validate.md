---
layout: docs-cli
title: "run with an Envfile"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "When an Envfile is present, run automatically validates the resolved environment before starting your command. No validation flag is needed."
permalink: /docs/cli/run-validate/
redirect_from:
  - /docs/ref/cli/run-validate/
  - /docs/ref/cli/run-validate
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
command: "dotenvx run -- node index.js"
---
When an `Envfile` is present, `run` automatically validates the resolved environment before starting your command. No validation flag is needed.

```ruby
# Envfile
strict true

env "DATABASE_URL", type: "url"
env "API_KEY"
env "SENTRY_DSN", optional: true
```

```console
$ dotenvx run -- node index.js
[INVALID_ENV] DATABASE_URL is required; API_KEY is required
```
{: copy="dotenvx run -- node index.js"}

`dotenvx spec` generates `strict true`, so validation failures stop the command. Files that omit `strict` or set `strict false` warn instead. Other loading errors require `--strict` to stop execution.
