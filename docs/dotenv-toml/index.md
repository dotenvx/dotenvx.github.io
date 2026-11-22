---
doc_type: cli
title: Dotenv.toml
description: Define the rules for your environment variables.
permalink: "/docs/dotenv-toml/"
eyebrow: Advanced
eyebrow_href: "/docs/advanced/"
command: Dotenv.toml
command_prompt: false
options_title: Reference
options:
- title: Declarations
  href: "/docs/dotenv-toml/env/"
- title: Strictness
  href: "/docs/dotenv-toml/strict/"
- title: Required
  href: "/docs/dotenv-toml/required/"
- title: Optional
  href: "/docs/dotenv-toml/optional/"
- title: Types
  href: "/docs/dotenv-toml/type/"
- title: Choices
  href: "/docs/dotenv-toml/enum/"
- title: Minimum
  href: "/docs/dotenv-toml/min/"
- title: Maximum
  href: "/docs/dotenv-toml/max/"
- title: Encryption
  href: "/docs/dotenv-toml/encrypted/"
- title: Redaction
  href: "/docs/dotenv-toml/redacted/"
- title: File overrides
  href: "/docs/dotenv-toml/file/"
- title: Syntax
  href: "/docs/dotenv-toml/syntax/"
- title: Commands
  href: "/docs/dotenv-toml/commands/"
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenv-toml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenv-toml/spec/"
---
A Dotenv.toml contains variable names and rules. Values stay in your `.env` files or other environment sources. It is safe to commit.

Start with the [Dotenv.toml quickstart](/docs/dotenv-toml/quickstart/), then explore each declaration and setting below.

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
