---
doc_type: cli
title: Strictness
description: Stop your command when configuration breaks your rules.
permalink: "/docs/dotenvxtoml/strict/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: strict = true
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Use `strict = true` to stop your command when a configured value-validation rule fails. The default is `strict = false`, which reports warnings.

```toml
strict = true

[env.DATABASE_URL]
type = "url"
required = true
```

Set strictness at the root, in a file table, or for an individual variable. Set required and storage rules separately. CLI `--strict` also stops on loading errors.
