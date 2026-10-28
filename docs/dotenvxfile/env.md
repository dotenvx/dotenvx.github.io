---
layout: docs-cli
title: Declarations
description: Declare variable names and the rules they must follow.
permalink: "/docs/dotenvxfile/env/"
redirect_from:
  - /docs/envfile/env
  - /docs/envfile/env/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: 'env "DATABASE_URL", type: "url"'
command_prompt: false
options_title: Settings
options:
- title: Required
  href: "/docs/dotenvxfile/required/"
- title: Optional
  href: "/docs/dotenvxfile/optional/"
- title: Types
  href: "/docs/dotenvxfile/type/"
- title: Choices
  href: "/docs/dotenvxfile/enum/"
- title: Minimum
  href: "/docs/dotenvxfile/min/"
- title: Maximum
  href: "/docs/dotenvxfile/max/"
- title: Encryption
  href: "/docs/dotenvxfile/encrypted/"
- title: Redaction
  href: "/docs/dotenvxfile/redacted/"
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Save the file as `Dotenvxfile` in your project directory. It contains names and rules. Values stay in `.env` or your other environment sources.

Variable names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Use single or double quotes. Comments begin with `#`. Blank lines are ignored.

```ruby
# Dotenvxfile
strict true

env "DATABASE_URL", type: "url", required: true, storage: "encrypted", redacted: true
env 'SENTRY_DSN', optional: true
```

Variables are optional by default. The default type is `"string"`, storage is `"any"`, and redaction is off. Set rules explicitly or use root settings to change the defaults.

Options can continue on the next line after a comma:

```ruby
env "PORT",
  type: "port",
  storage: "plaintext",
  redacted: false
```
