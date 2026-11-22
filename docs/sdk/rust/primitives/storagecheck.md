---
doc_type: sdk
title: storagecheck
description: Validate original stored values against storage rules.
permalink: "/docs/sdk/rust/primitives/storagecheck/"
command: dotenvx_primitives::storagecheck
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Accepts a StoragePolicy and a map of key to original value arrays, such as ScanResult.scanned. Returns checked values and diagnostics without mutating inputs.

```rust
use dotenvx_primitives::{scan, storagepolicy, storagecheck, ScanOptions};
let rules = storagepolicy("[env.PORT]\nstorage = \"plaintext\"", None)?;
let values = scan("PORT=3000", &ScanOptions::default());
let checked = storagecheck(&rules, &values.scanned);
assert!(checked.errors.is_empty());
```
