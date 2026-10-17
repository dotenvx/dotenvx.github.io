---
layout: docs-side-path
title: Multiple environment files
description: Select an encrypted file or merge configuration explicitly.
permalink: /docs/rust/env-files/
markdown_url: /docs/rust/env-files.md
parent_url: /docs/rust/#production
parent_title: Rust
side_path_kind: Alternative
---

The main example accepts a filename. For example:

```console
$ cargo run -- .env.ci
```
{: copy="cargo run -- .env.ci"}

Create and encrypt .env.ci first, and supply its key through .env.keys or DOTENV_PRIVATE_KEY_CI. The example finds .env.keys beside the selected file.

parse handles one source string at a time. To combine files, parse each separately and pass the accumulated values through process_env:

```rust
use dotenvx_primitives::{parse, ParseOptions};
use std::{collections::HashMap, error::Error, fs};

fn load_files(files: &[&str]) -> Result<HashMap<String, String>, Box<dyn Error>> {
    let mut values = ParseOptions::default().process_env;
    for file in files {
        let source = fs::read_to_string(file)?;
        let result = parse(&source, &ParseOptions {
            process_env: values.clone(),
            ..Default::default()
        });
        if let Some(error) = result.errors.into_iter().next() {
            return Err(error.into());
        }
        values.extend(result.parsed);
    }
    Ok(values)
}
```

For files at the project root, call load_files(&[".env.production", ".env"]). Existing process variables win, followed by the first file, then the second. Each file is decrypted using its own public-key metadata and the available keyring.

This function returns the merged map, including existing process values. Pass individual values to your application; do not print the map.
