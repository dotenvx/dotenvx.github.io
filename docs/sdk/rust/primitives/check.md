---
doc_type: sdk
title: check
description: Validate resolved environment values against a policy.
permalink: "/docs/sdk/rust/primitives/check/"
command: dotenvx_primitives::check
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

Accepts a Policy and resolved string values. Returns CheckResult { checked, errors } without mutating inputs. Strictness is reported in diagnostics for the caller to enforce.

```rust
use dotenvx_primitives::{check, policy};
use std::collections::HashMap;

let rules = policy("redacted = true\n[env.TOKEN]", None)?;
let env = HashMap::from([("TOKEN".into(), "abc123".into())]);
let result = check(&rules, &env);
assert_eq!(result.checked["TOKEN"], "[REDACTED]");
assert!(result.errors.is_empty());
```
