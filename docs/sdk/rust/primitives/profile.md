---
doc_type: sdk
title: profile
description: Select env filenames from TOML profiles and explicit options.
permalink: "/docs/sdk/rust/primitives/profile/"
command: dotenvx_primitives::profile
command_language: rust
eyebrow: Rust primitives
eyebrow_href: "/docs/sdk/rust/primitives/"
---

ProfileOptions::default() snapshots the current process environment. Supply an empty process_env to ignore it. Explicit f takes precedence over profile, then file environment settings, then environment selectors. The default profile is development, falling back to .env.

```rust
use dotenvx_primitives::{profile, ProfileOptions};
let files = profile(
    "profiles.production = [\".env.production\", \".env\"]",
    &ProfileOptions {
        profile: Some("production".into()),
        process_env: std::collections::HashMap::new(),
        ..Default::default()
    },
)?;
assert_eq!(files, ".env.production,.env");
```

## Options

| Field | Purpose |
| --- | --- |
| profile | Explicit named profile. |
| f | Explicit comma-separated file selection; takes precedence over profile. |
| process_env | Environment used for profile and file selection. |
| environment_keys | Ordered environment-selector names. |
