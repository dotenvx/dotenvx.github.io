---
doc_type: sdk
title: upsert
description: Insert or replace dotenv assignments.
permalink: "/docs/sdk/rust/primitives/upsert/"
command: dotenvx_primitives::upsert
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Preserves surrounding source formatting, quote style, and line endings. Accepts a slice of replacement values so duplicate assignments can be retained.

```rust
use dotenvx_primitives::upsert;

let updated = upsert(
    "HELLO=one\nHELLO=two",
    "HELLO",
    &["uno", "dos"],
)?;

assert_eq!(updated, "HELLO=uno\nHELLO=dos");
```
