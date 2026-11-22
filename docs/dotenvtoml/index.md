---
doc_type: cli
title: Dotenv.toml
description: Define the rules for your environment variables.
permalink: "/docs/dotenvtoml/"
eyebrow: Advanced
eyebrow_href: "/docs/advanced/"
command: Dotenv.toml
command_prompt: false
options_title: Reference
options:
- title: Declarations
  href: "/docs/dotenvtoml/env/"
- title: Strictness
  href: "/docs/dotenvtoml/strict/"
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
- title: File overrides
  href: "/docs/dotenvtoml/file/"
- title: Syntax
  href: "/docs/dotenvtoml/syntax/"
- title: Commands
  href: "/docs/dotenvtoml/commands/"
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
A Dotenv.toml contains variable names and rules. Values stay in your `.env` files or other environment sources. It is safe to commit.

Start with the [Dotenv.toml quickstart](/docs/dotenvtoml/quickstart/), then explore each declaration and setting below.

```toml
strict = true

[env.DATABASE_URL]
type = "url"
required = true
storage = "encrypted"
redacted = true

[env.PORT]
type = "port"
storage = "plaintext"
redacted = false
```
