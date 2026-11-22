---
doc_type: sdk
title: parsearrays
description: Parse while preserving duplicate assignments.
permalink: "/docs/sdk/rust/primitives/parsearrays/"
command: dotenvx_primitives::parsearrays
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns ParseResult<Vec<String>> rather than ParseResult<String>. Supports the same ParseOptions as parse.

```rust
use dotenvx_primitives::{parsearrays, ParseOptions};

let result = parsearrays("HELLO=World\nHELLO=Rust", &ParseOptions::default());
assert_eq!(result.parsed["HELLO"], vec!["World", "Rust"]);
```
