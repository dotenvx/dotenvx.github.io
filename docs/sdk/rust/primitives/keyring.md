---
doc_type: sdk
title: keyring
description: Build a public-to-private-key map.
permalink: "/docs/sdk/rust/primitives/keyring/"
command: dotenvx_primitives::keyring
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Defaults snapshot process environment keys and read .env.keys. Override key_files, or pass an empty vector to disable file reads. Missing or unreadable key files are ignored.

```rust
let pair = dotenvx_primitives::keypair(None)?;
let ring = dotenvx_primitives::keyring(&dotenvx_primitives::KeyringOptions {
    process_env: std::collections::HashMap::new(),
    ring: std::collections::HashMap::from([(pair.public_key.clone(), pair.private_key)]),
    key_files: vec![],
})?;
assert!(ring.contains_key(&pair.public_key));
```

## Options

| Field | Purpose |
| --- | --- |
| process_env | Environment containing private keys. |
| ring | Existing public-to-private-key entries. |
| key_files | Private-key file paths. |
