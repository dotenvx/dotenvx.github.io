---
doc_type: sdk
title: remove
description: Remove assignments by key.
permalink: "/docs/sdk/rust/primitives/remove/"
command: dotenvx_primitives::remove
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Removes every assignment for the key while preserving unrelated source lines. Returns the source unchanged if the key is absent.

```rust
use dotenvx_primitives::remove;

let updated = remove(
    "HELLO=one\nFOO=bar\nHELLO=two\n",
    "HELLO",
);

assert_eq!(updated, "FOO=bar\n");
```
