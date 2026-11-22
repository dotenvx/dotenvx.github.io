---
doc_type: sdk
title: injectsummary_sources
description: Format public source metadata for injection summaries.
permalink: "/docs/sdk/rust/primitives/injectsummary_sources/"
command: dotenvx_primitives::injectsummary_sources
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Accepts InjectSummaryFile rows containing filepath, public_keys, and key_custodies. Returns InjectSummarySources with formatted files and suffix fields. Supply public metadata only.

```rust
let rows = [dotenvx_primitives::InjectSummaryFile {
    filepath: ".env".into(),
    ..Default::default()
}];
let sources = dotenvx_primitives::injectsummary_sources(&rows);
assert_eq!(sources.files, vec![".env"]);
```
