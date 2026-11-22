---
doc_type: sdk
title: derive
description: Derive a public key from a private key.
permalink: "/docs/sdk/rust/primitives/derive/"
command: dotenvx_primitives::derive
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Derives the compressed secp256k1 public key for a private key.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let public = dotenvx_primitives::derive(&pair.private_key)?;
assert_eq!(public, pair.public_key);
```
