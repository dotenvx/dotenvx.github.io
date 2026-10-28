---
layout: docs-cli
title: "run with a Dotenvxfile"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "When a Dotenvxfile is present, run automatically validates the resolved environment before starting your command. No validation flag is needed."
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
When a `Dotenvxfile` is present, `run` validates resolved values before starting your command. No validation flag is needed.

```ruby
# Dotenvxfile
strict true

env "DATABASE_URL", type: "url", required: true, redacted: true
env "API_KEY", required: true, redacted: true
env "SENTRY_DSN", optional: true
```

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Missing required values report `INVALID_ENV`. With `strict true`, validation failures stop the command. Files that omit `strict` or set `strict false` warn instead. CLI `--strict` also stops on loading errors.
