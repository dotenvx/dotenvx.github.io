---
doc_type: cli
title: Declarations
description: Declare variable names and the rules they must follow.
permalink: "/docs/dotenvxtoml/env/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: '[env.DATABASE_URL]'
command_prompt: false
options_title: Settings
options:
- title: Required
  href: "/docs/dotenvxtoml/required/"
- title: Optional
  href: "/docs/dotenvxtoml/optional/"
- title: Types
  href: "/docs/dotenvxtoml/type/"
- title: Choices
  href: "/docs/dotenvxtoml/enum/"
- title: Minimum
  href: "/docs/dotenvxtoml/min/"
- title: Maximum
  href: "/docs/dotenvxtoml/max/"
- title: Encryption
  href: "/docs/dotenvxtoml/encrypted/"
- title: Redaction
  href: "/docs/dotenvxtoml/redacted/"
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Save the file as `Dotenvx.toml` in your project directory. It contains names and rules. Values stay in `.env` or your other environment sources.

Declare each variable as a table such as `[env.DATABASE_URL]`. Variable names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Comments begin with `#`.

```toml
# Dotenvx.toml
strict = true

[env.DATABASE_URL]
type = "url"
required = true
storage = "encrypted"
redacted = true

[env.SENTRY_DSN]
optional = true
```

Variables are optional by default. The default type is `"string"`, storage is `"any"`, and redaction is off. Set rules explicitly or use root settings to change the defaults.

Put each setting on its own line within the table.

```toml
[env.PORT]
type = "port"
storage = "plaintext"
redacted = false
```
