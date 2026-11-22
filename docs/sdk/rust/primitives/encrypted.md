---
doc_type: sdk
title: encrypted
description: Recognize Dotenvx ciphertext prefixes.
permalink: "/docs/sdk/rust/primitives/encrypted/"
command: dotenvx_primitives::encrypted
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Recognizes versioned DOTENV-CIPHERTEXT- values and the supported encrypted: format. This checks the prefix rather than cryptographic validity.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let ciphertext = dotenvx_primitives::encrypt(&pair.public_key, "World")?;
assert!(dotenvx_primitives::encrypted(&ciphertext));
assert!(!dotenvx_primitives::encrypted("World"));
```
