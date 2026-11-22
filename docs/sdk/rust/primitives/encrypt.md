---
doc_type: sdk
title: encrypt
description: Encrypt a value for a public key.
permalink: "/docs/sdk/rust/primitives/encrypt/"
command: dotenvx_primitives::encrypt
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Encrypts a UTF-8 value for a public key. A 3.0 public key produces a versioned DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM value. Encryption is randomized.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let ciphertext = dotenvx_primitives::encrypt(&pair.public_key, "World")?;
assert!(dotenvx_primitives::encrypted(&ciphertext));
```
