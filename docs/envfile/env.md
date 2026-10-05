---
layout: docs-cli
title: Declarations
description: Declare variable names and the rules they must follow.
permalink: "/docs/envfile/env/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "DATABASE_URL", type: "url"'
command_prompt: false
options_title: Settings
options:
- title: Required
  href: "/docs/envfile/required/"
- title: Optional
  href: "/docs/envfile/optional/"
- title: Types
  href: "/docs/envfile/type/"
- title: Choices
  href: "/docs/envfile/enum/"
- title: Minimum
  href: "/docs/envfile/min/"
- title: Maximum
  href: "/docs/envfile/max/"
- title: Encryption
  href: "/docs/envfile/encrypted/"
- title: Redaction
  href: "/docs/envfile/redacted/"
- title: Proxy
  href: "/docs/envfile/proxy/"
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
Save the file as `Envfile` in your project directory. It contains names and rules. Values stay in `.env` or your other environment sources.

Variable names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Use single or double quotes. Comments begin with `#`. Blank lines are ignored.

```ruby
# Envfile
strict true

env "DATABASE_URL", type: "url"
env 'SENTRY_DSN', optional: true
```

Every declaration is required, encrypted, and redacted by default. Proxying is off. There is no default type, enum, or range.

Options can continue on the next line after a comma:

```ruby
env "PORT",
  type: "port",
  encrypted: false,
  redacted: false
```
