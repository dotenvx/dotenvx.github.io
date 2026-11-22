---
doc_type: sdk
title: expand
description: Expand environment variable expressions.
permalink: "/docs/sdk/rust/primitives/expand/"
command: dotenvx_primitives::expand
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Expands `$NAME`, `${NAME}`, default-value expressions, and alternate-value
expressions.

```rust
use dotenvx_primitives::{expand, ExpandOptions};
use std::collections::HashMap;

let options = ExpandOptions {
    process_env: HashMap::from([
        ("USER".to_owned(), "scott".to_owned()),
        ("PASS".to_owned(), "secret".to_owned()),
    ]),
    ..Default::default()
};

assert_eq!(
    expand("postgres://${USER}:$PASS@localhost", &options),
    "postgres://scott:secret@localhost"
);
```

## Options

| Field | Purpose |
| --- | --- |
| process_env | Existing environment values. |
| running_parsed | Values already parsed from source. |
| overload | Let progressively parsed values take precedence. |
