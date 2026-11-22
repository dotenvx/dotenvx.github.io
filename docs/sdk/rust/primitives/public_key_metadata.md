---
doc_type: sdk
title: public_key_metadata
description: Separate public-key identity from its custody hint.
permalink: "/docs/sdk/rust/primitives/public_key_metadata/"
command: dotenvx_primitives::public_key_metadata
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns (core_public_key, optional_custody). The 3.0 custody hint is a query parameter on the public-key header.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let tagged = format!("{}?custody=armor", pair.public_key);
let (core, custody) = dotenvx_primitives::public_key_metadata(&tagged);
assert_eq!(core, pair.public_key);
assert_eq!(custody, Some("armor"));
```
