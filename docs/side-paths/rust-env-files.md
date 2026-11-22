---
doc_type: side-path
title: Multiple environment files
description: Select an encrypted file or merge configuration explicitly.
permalink: /docs/rust/env-files/
markdown_url: /docs/rust/env-files.md
parent_url: /docs/rust/#production
parent_title: Rust
side_path_kind: Alternative
---

The SDK reads DOTENV_FILE to select a file. Create and encrypt .env.ci first, then supply its key through .env.keys or DOTENV_PRIVATE_KEY_CI:

```console
$ DOTENV_FILE=.env.ci cargo run
```
{: copy="DOTENV_FILE=.env.ci cargo run"}

Use a comma-separated list to load multiple files:

```console
$ DOTENV_FILE=.env.production,.env cargo run
```
{: copy="DOTENV_FILE=.env.production,.env cargo run"}

Existing process variables win, followed by the first file, then the second. Each file is decrypted using its public-key metadata and available private keys. Loading is strict, so every selected file must exist and decrypt successfully.

[load](/docs/sdk/rust/load/) returns the resolved environment as a map, including existing process values. Pass individual values to your application; do not print the map.
