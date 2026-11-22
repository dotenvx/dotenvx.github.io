---
doc_type: sdk
title: decrypt
description: Decrypt an encrypted value with a private key.
permalink: "/docs/sdk/rust/primitives/decrypt/"
command: dotenvx_primitives::decrypt
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Decrypts a recognized Dotenvx ciphertext with its matching private key. Plain values are returned unchanged. Errors expose stable codes through Error::code().

```rust
let pair = dotenvx_primitives::keypair(None)?;
let ciphertext = dotenvx_primitives::encrypt(&pair.public_key, "World")?;
let value = dotenvx_primitives::decrypt(&pair.private_key, &ciphertext)?;
assert_eq!(value, "World");
```
