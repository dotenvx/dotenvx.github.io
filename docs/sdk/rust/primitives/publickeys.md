---
doc_type: sdk
title: publickeys
description: Extract public-key metadata from dotenv source.
permalink: "/docs/sdk/rust/primitives/publickeys/"
command: dotenvx_primitives::publickeys
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Extracts the final value of every `DOTENV_PUBLIC_KEY*` assignment while
preserving key order.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let source = format!("DOTENV_PUBLIC_KEY=\"{}\"", pair.public_key);
assert_eq!(dotenvx_primitives::publickeys(&source), vec![pair.public_key]);
```
