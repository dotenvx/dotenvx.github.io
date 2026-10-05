---
layout: docs-cli
title: Strictness
description: Stop your command when configuration breaks your rules.
permalink: "/docs/envfile/strict/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: strict true
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
`dotenvx spec` generates `strict true` at the top of each Envfile. This stops startup when validation fails. Set `strict false` to warn instead. Existing files that omit `strict` continue to warn. Set strictness once at the root or per file block. `strict` is the only root-level setting; it is not an `env` option. Encryption and redaction are per-variable options only; there is no root or file-level `encrypted false` or `redacted false` setting.

```ruby
strict true

env "DATABASE_URL", type: "url"
```

For `dotenvx run`, strict rules stop the command on validation failure. Without strictness, validation failures warn. CLI `--strict` also stops on loading errors. `dotenvx check` reports validation failures with a nonzero exit status regardless of the Envfile strictness setting.
