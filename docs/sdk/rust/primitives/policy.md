---
doc_type: sdk
title: policy
description: Compile validation and redaction rules from Dotenv.toml.
permalink: "/docs/sdk/rust/primitives/policy/"
command: dotenvx_primitives::policy
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Compiles TOML in memory without reading env files or changing process environment. None selects .env; pass a filename to select its file-specific rules. Malformed source returns Error with a stable code and optional source location.

```rust
use dotenvx_primitives::{policy, ValueType};

let rules = policy(r#"
strict = true

[env.TOKEN]

[env.PORT]
type = "port"
redacted = false

[files.".env.production".env.TOKEN]
min = 20
"#, Some(".env.production,.env"))?;
assert_eq!(rules.keys["PORT"].env.r#type, ValueType::Port);
assert_eq!(rules.keys["TOKEN"].env.min.as_deref(), Some("20"));
```
