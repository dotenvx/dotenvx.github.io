---
doc_type: sdk
title: match
description: Create a glob-pattern matcher.
permalink: "/docs/sdk/rust/primitives/match/"
command: dotenvx_primitives::r#match
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Use the Rust raw identifier r#match. The returned matcher supports * and ? and excludes ignored patterns.

```rust
use dotenvx_primitives::r#match;

let is_allowed = r#match(&["DOTENV_*"], &["DOTENV_PRIVATE_*"]);

assert!(is_allowed("DOTENV_PUBLIC_KEY"));
assert!(!is_allowed("DOTENV_PRIVATE_KEY"));
```
