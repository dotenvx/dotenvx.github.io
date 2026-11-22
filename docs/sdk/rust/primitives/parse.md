---
doc_type: sdk
title: parse
description: Parse, expand, and decrypt dotenv source text.
permalink: "/docs/sdk/rust/primitives/parse/"
command: dotenvx_primitives::parse
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

ParseOptions::default() captures the process environment and considers .env.keys. Use an empty process_env and key_files: vec![] for isolated in-memory parsing. The result separates parsed, injected, existed, and errors. The caller decides how to handle errors; no environment variables are mutated.

```rust
use dotenvx_primitives::{parse, ParseOptions};
use std::collections::HashMap;

let result = parse(
    "A=file\nB=$A\nHELLO=World",
    &ParseOptions {
        process_env: HashMap::new(),
        ..Default::default()
    },
);

assert_eq!(
    result.parsed["B"],
    "file"
);
```

## Options

| Field | Purpose |
| --- | --- |
| process_env | Environment values for expansion, precedence, and key discovery. |
| overload | Let parsed values replace existing environment values. |
| include_keys | Include glob patterns. |
| exclude_keys | Exclude glob patterns. |
| ring | Explicit public-to-private-key map. |
| key_files | Private-key file paths; an empty vector disables file reads. |
