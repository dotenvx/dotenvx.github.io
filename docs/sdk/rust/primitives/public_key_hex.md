---
doc_type: sdk
title: public_key_hex
description: Extract the hexadecimal payload from a public key.
permalink: "/docs/sdk/rust/primitives/public_key_hex/"
command: dotenvx_primitives::public_key_hex
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns Option<&str>. Removes 3.0 prefix and custody metadata and recognizes supported compressed or uncompressed hexadecimal shapes.

```rust
let pair = dotenvx_primitives::keypair(None)?;
assert!(dotenvx_primitives::public_key_hex(&pair.public_key).is_some());
```
