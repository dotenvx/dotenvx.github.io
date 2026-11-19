---
layout: docs-cli
title: File overrides
description: Apply different rules to specific environment files.
permalink: "/docs/dotenvxtoml/file/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[files.".env.production"]'
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Use `[files.".env.production"]` for file-wide settings and `[files.".env.production".env.NAME]` for individual variables. These settings inherit root rules and apply when that file is selected.

```toml
[env.NODE_ENV]
enum = ["development", "test", "production"]

[env.SENTRY_DSN]
optional = true

[files.".env.production"]
strict = true

[files.".env.production".env.NODE_ENV]
enum = ["production"]

[files.".env.production".env.SENTRY_DSN]
required = true
```

Use literal filenames relative to your project. An override changes only the options it specifies and can introduce a variable that applies only to that file.

When multiple selected files have overrides, earlier files in the selected list take precedence for explicitly specified options. Unspecified options inherit the root rules. File blocks can set `strict`, `required`, and `storage` defaults.
