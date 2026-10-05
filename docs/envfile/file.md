---
layout: docs-cli
title: File overrides
description: Apply different rules to specific environment files.
permalink: "/docs/envfile/file/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: file ".env.production" do
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
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

Paths are relative to the Envfile and must name exact files; globs are not supported. An override changes only the options it specifies. It can also introduce a variable that applies only to that file.

When multiple selected files have rules, each active policy must hold. Conflicting proxy domains for the same variable are an error. A redaction requirement from any active policy takes precedence over an allowance to display the value.
