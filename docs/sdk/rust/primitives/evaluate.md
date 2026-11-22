---
doc_type: sdk
title: evaluate
description: Evaluate shell command substitutions.
permalink: "/docs/sdk/rust/primitives/evaluate/"
command: dotenvx_primitives::evaluate
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Evaluates shell command substitutions and removes trailing newlines from
command output.

```rust
use dotenvx_primitives::{evaluate, EvaluateOptions};

let value = evaluate(
    "HELLO=$(printf World)",
    &EvaluateOptions::default(),
)?;

assert_eq!(value, "HELLO=World");
```

## Options

| Field | Purpose |
| --- | --- |
| process_env | Environment values supplied to substitutions. |
| running_parsed | Previously parsed values available to substitutions. |
