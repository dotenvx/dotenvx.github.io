---
doc_type: sdk
title: keypair
description: Generate or restore a secp256k1 keypair.
permalink: "/docs/sdk/rust/primitives/keypair/"
command: dotenvx_primitives::keypair
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Generates a new 3.0 keypair or restores a pair from an existing private key. The result contains private_key and public_key strings. New keys use the DOTENV-PRIVATE-KEY-3-SECP256K1 and DOTENV-PUBLIC-KEY-3-SECP256K1 prefixes.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let restored = dotenvx_primitives::keypair(Some(&pair.private_key))?;
assert_eq!(pair.public_key, restored.public_key);
```
