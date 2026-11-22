---
doc_type: sdk
title: matches
description: Match one value against include and ignore patterns.
permalink: "/docs/sdk/rust/primitives/matches/"
command: dotenvx_primitives::matches
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

The direct boolean helper uses the same glob matching rules as r#match.

```rust
assert!(dotenvx_primitives::matches("PUBLIC_NAME", &["PUBLIC_*"], &[]));
```
