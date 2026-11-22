---
doc_type: sdk
title: injectsummary_with_metadata
description: Format an injection summary with public source metadata.
permalink: "/docs/sdk/rust/primitives/injectsummary_with_metadata/"
command: dotenvx_primitives::injectsummary_with_metadata
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Accepts an injected-variable count and InjectSummaryFile rows. It does not print or inspect environment values.

```rust
let rows = [dotenvx_primitives::InjectSummaryFile {
    filepath: ".env".into(),
    ..Default::default()
}];
assert_eq!(dotenvx_primitives::injectsummary_with_metadata(1, &rows), "⟐ injected env (1) from .env");
```
