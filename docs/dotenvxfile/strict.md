---
layout: docs-cli
title: Strictness
description: Stop your command when configuration breaks your rules.
permalink: "/docs/dotenvxfile/strict/"
redirect_from:
  - /docs/envfile/strict
  - /docs/envfile/strict/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: strict true
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Use `strict true` to stop your command when a configured value-validation rule fails. The default is `strict false`, which reports warnings.

```ruby
strict true

env "DATABASE_URL", type: "url", required: true
```

Strictness can be set at the root, inside a file block, or for an individual declaration. It does not make variables required or encrypted automatically. CLI `--strict` also stops on loading errors.
