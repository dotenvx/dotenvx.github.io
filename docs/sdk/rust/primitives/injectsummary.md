---
doc_type: sdk
title: injectsummary
description: Format an injection summary without logging it.
permalink: "/docs/sdk/rust/primitives/injectsummary/"
command: dotenvx_primitives::injectsummary
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Supply the count and filenames explicitly. The function does not inspect environment values or print. injectsummary_with_metadata accepts InjectSummaryFile rows; injectsummary_sources groups those rows, and public_key_display formats public-key metadata.

```rust
use dotenvx_primitives::injectsummary;

assert_eq!(injectsummary(2, &[".env"]), "⟐ injected env (2) from .env");
```
