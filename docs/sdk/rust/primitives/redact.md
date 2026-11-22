---
doc_type: sdk
title: redact
description: Replace literal secret values in one complete string.
permalink: "/docs/sdk/rust/primitives/redact/"
command: dotenvx_primitives::redact
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Uses case-sensitive literal replacement. Empty secrets are ignored and overlapping matches are merged. It processes one complete string; stream buffering belongs to the caller.

```rust
use dotenvx_primitives::redact;

assert_eq!(redact("token=abc123", &["abc123"]), "token=[REDACTED]");
```
