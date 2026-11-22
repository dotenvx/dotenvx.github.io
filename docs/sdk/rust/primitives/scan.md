---
doc_type: sdk
title: scan
description: Scan assignments and comments without expansion or decryption.
permalink: "/docs/sdk/rust/primitives/scan/"
command: dotenvx_primitives::scan
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Scans dotenv assignments without applying expansion or decryption. Duplicate
values and their comments are preserved in source order.

```rust
use dotenvx_primitives::{scan, ScanOptions};

let result = scan(
    "HELLO=first\nHELLO=second # optional",
    &ScanOptions::default(),
);

assert_eq!(result.scanned["HELLO"], vec!["first", "second"]);
assert_eq!(
    result.comments["HELLO"],
    vec![None, Some("optional".to_owned())]
);
```

## Options

| Field | Purpose |
| --- | --- |
| include_keys | Include glob patterns. |
| exclude_keys | Exclude glob patterns. |
