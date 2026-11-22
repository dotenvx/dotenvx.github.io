---
doc_type: sdk
title: parsedotenvxfile
description: List keys declared in Dotenvx.toml.
permalink: "/docs/sdk/rust/primitives/parsedotenvxfile/"
command: dotenvx_primitives::parsedotenvxfile
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

`parsedotenvxfile(source, file)` returns declared keys with empty string values
as an `IndexMap<String, String>`. `None` selects `.env`.

```rust
use dotenvx_primitives::parsedotenvxfile;

let parsed = parsedotenvxfile("[env.PORT]\n[env.TOKEN]", None)?;
assert_eq!(parsed["PORT"], "");
assert_eq!(parsed["TOKEN"], "");
```
