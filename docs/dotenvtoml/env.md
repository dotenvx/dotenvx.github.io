---
doc_type: cli
title: Declarations
description: Declare variable names and the rules they must follow.
permalink: "/docs/dotenvtoml/env/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: '[env.DATABASE_URL]'
command_prompt: false
options_title: Settings
options:
- title: Required
  href: "/docs/dotenvtoml/required/"
- title: Optional
  href: "/docs/dotenvtoml/optional/"
- title: Types
  href: "/docs/dotenvtoml/type/"
- title: Choices
  href: "/docs/dotenvtoml/enum/"
- title: Minimum
  href: "/docs/dotenvtoml/min/"
- title: Maximum
  href: "/docs/dotenvtoml/max/"
- title: Encryption
  href: "/docs/dotenvtoml/encrypted/"
- title: Redaction
  href: "/docs/dotenvtoml/redacted/"
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
Save the file as `Dotenv.toml` in your project directory. It contains names and rules. Values stay in `.env` or your other environment sources.

Declare each variable as a table such as `[env.DATABASE_URL]`. Variable names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Comments begin with `#`.

```toml
# Dotenv.toml
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
