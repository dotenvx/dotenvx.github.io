---
doc_type: sdk
title: private_key_hex
description: Extract the hexadecimal payload from a private key.
permalink: "/docs/sdk/rust/primitives/private_key_hex/"
command: dotenvx_primitives::private_key_hex
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns Option<&str>. Recognizes the 3.0 private-key prefix and checks the hexadecimal payload shape.

```rust
let pair = dotenvx_primitives::keypair(None)?;
assert!(dotenvx_primitives::private_key_hex(&pair.private_key).is_some());
```
