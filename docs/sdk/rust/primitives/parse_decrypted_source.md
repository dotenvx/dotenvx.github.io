---
doc_type: sdk
title: parse_decrypted_source
description: Parse original source using validated decrypted replacements.
permalink: "/docs/sdk/rust/primitives/parse_decrypted_source/"
command: dotenvx_primitives::parse_decrypted_source
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns ParseResult after validating the response with decrypted_replacements. Returned plaintext is treated as data rather than shell source.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let ciphertext = dotenvx_primitives::encrypt(&pair.public_key, "World")?;
let original = format!("HELLO={}", ciphertext);
let options = dotenvx_primitives::ParseOptions {
    process_env: std::collections::HashMap::new(),
    key_files: vec![],
    ..Default::default()
};
let values = dotenvx_primitives::parse_decrypted_source(&original, "HELLO=World", &options)?;
assert_eq!(values.parsed["HELLO"], "World");
```
