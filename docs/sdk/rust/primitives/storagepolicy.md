---
doc_type: sdk
title: storagepolicy
description: Compile storage rules for a selected env file.
permalink: "/docs/sdk/rust/primitives/storagepolicy/"
command: dotenvx_primitives::storagepolicy
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Compiles storage rules for original stored strings. Pass a single filename to select file-specific rules. Use policy and check for resolved values instead.

```rust
use dotenvx_primitives::storagepolicy;
let rules = storagepolicy("[env.PORT]\nstorage = \"plaintext\"", None)?;
```
