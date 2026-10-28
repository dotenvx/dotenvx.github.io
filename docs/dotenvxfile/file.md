---
layout: docs-cli
title: File overrides
description: Apply different rules to specific environment files.
permalink: "/docs/dotenvxfile/file/"
redirect_from:
  - /docs/envfile/file
  - /docs/envfile/file/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: file ".env.production" do
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Group file-specific overrides inside `file ".env.production" do` … `end`. They inherit root rules and apply when that file is selected.

```ruby
env "NODE_ENV", enum: ["development", "test", "production"]
env "SENTRY_DSN", optional: true

file ".env.production" do
  env "NODE_ENV", enum: ["production"]
  env "SENTRY_DSN", optional: false
  strict true
end
```

Paths are relative to the Dotenvxfile and must name exact files; globs are not supported. An override changes only the options it specifies. It can also introduce a variable that applies only to that file.

When multiple selected files have overrides, earlier files in the selected list take precedence for explicitly specified options. Unspecified options inherit the root rules. File blocks can set `strict`, `required`, and `storage` defaults.
