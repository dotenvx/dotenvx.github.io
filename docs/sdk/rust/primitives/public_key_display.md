---
doc_type: sdk
title: public_key_display
description: Format a short public-key identifier for display.
permalink: "/docs/sdk/rust/primitives/public_key_display/"
command: dotenvx_primitives::public_key_display
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns an uppercase identifier formed from the first six hexadecimal characters, grouped as three characters and three characters. It never needs a private key.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let short = dotenvx_primitives::public_key_display(&pair.public_key);
assert_eq!(short.len(), 7);
```
