---
doc_type: sdk
title: sealed
description: Check whether stored values satisfy the encryption policy.
permalink: "/docs/sdk/rust/primitives/sealed/"
command: dotenvx_primitives::sealed
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Returns true when stored values are ciphertext, blank, secret references, or otherwise allowed plaintext under the storage rules and _PLAIN convention. Checks all duplicate assignments. Secret-reference prefixes are recognized but not resolved. Pass Some(&storage_policy) to apply per-file storage rules.

```rust
use dotenvx_primitives::sealed;

assert!(sealed("HELLO=encrypted:abc123", None));
assert!(!sealed("HELLO=World", None));
```
