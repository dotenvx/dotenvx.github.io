---
doc_type: sdk
title: decrypted_replacements
description: Validate decrypted source and map ciphertext to plaintext.
permalink: "/docs/sdk/rust/primitives/decrypted_replacements/"
command: dotenvx_primitives::decrypted_replacements
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns a map from original ciphertexts to literal plaintext. Source and response assignments must match in order and count; unchanged plaintext assignments must remain unchanged. Invalid responses return BAD_REQUEST.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let ciphertext = dotenvx_primitives::encrypt(&pair.public_key, "World")?;
let original = format!("HELLO={}", ciphertext);
let replacements = dotenvx_primitives::decrypted_replacements(&original, "HELLO=World")?;
assert_eq!(replacements[&ciphertext], "World");
```
