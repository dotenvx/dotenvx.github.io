---
title: Primitives
description: Low-level encryption primitives for Rust.
permalink: "/docs/sdk/rust/primitives/"
eyebrow: Rust
eyebrow_href: "/docs/sdk/rust"
icon: rust
---

Low-level synchronous primitives for dotenv text, encryption, Dotenvx.toml policies, and source editing. For application loading, use [dotenvx_official::load](/docs/sdk/rust/load/).

## Install

```console
$ cargo add dotenvx-primitives
```
{: copy="cargo add dotenvx-primitives"}

## Functions

| Function | Purpose |
| --- | --- |
| [injectsummary](/docs/sdk/rust/primitives/injectsummary/) | Format an injection summary without logging it. |
| [check](/docs/sdk/rust/primitives/check/) | Validate resolved environment values against a policy. |
| [parsedotenvxfile](/docs/sdk/rust/primitives/parsedotenvxfile/) | List keys declared in Dotenvx.toml. |
| [policy](/docs/sdk/rust/primitives/policy/) | Compile validation and redaction rules from Dotenvx.toml. |
| [storagepolicy](/docs/sdk/rust/primitives/storagepolicy/) | Compile storage rules for a selected env file. |
| [storagecheck](/docs/sdk/rust/primitives/storagecheck/) | Validate original stored values against storage rules. |
| [profile](/docs/sdk/rust/primitives/profile/) | Select env filenames from TOML profiles and explicit options. |
| [redact](/docs/sdk/rust/primitives/redact/) | Replace literal secret values in one complete string. |
| [decrypt](/docs/sdk/rust/primitives/decrypt/) | Decrypt an encrypted value with a private key. |
| [derive](/docs/sdk/rust/primitives/derive/) | Derive a public key from a private key. |
| [encrypt](/docs/sdk/rust/primitives/encrypt/) | Encrypt a value for a public key. |
| [encrypted](/docs/sdk/rust/primitives/encrypted/) | Detect the encrypted: prefix. |
| [evaluate](/docs/sdk/rust/primitives/evaluate/) | Evaluate shell command substitutions. |
| [expand](/docs/sdk/rust/primitives/expand/) | Expand environment variable expressions. |
| [keypair](/docs/sdk/rust/primitives/keypair/) | Generate or restore a secp256k1 keypair. |
| [keyring](/docs/sdk/rust/primitives/keyring/) | Build a public-to-private-key map. |
| [match](/docs/sdk/rust/primitives/match/) | Create a glob-pattern matcher. |
| [matches](/docs/sdk/rust/primitives/matches/) | Match one value against include and ignore patterns. |
| [parse](/docs/sdk/rust/primitives/parse/) | Parse, expand, and decrypt dotenv source text. |
| [parsearrays](/docs/sdk/rust/primitives/parsearrays/) | Parse while preserving duplicate assignments. |
| [publickeys](/docs/sdk/rust/primitives/publickeys/) | Extract public-key metadata from dotenv source. |
| [scan](/docs/sdk/rust/primitives/scan/) | Scan assignments and comments without expansion or decryption. |
| [sealed](/docs/sdk/rust/primitives/sealed/) | Check whether stored values satisfy the encryption policy. |
| [remove](/docs/sdk/rust/primitives/remove/) | Remove assignments by key. |
| [upsert](/docs/sdk/rust/primitives/upsert/) | Insert or replace dotenv assignments. |


## Supporting helpers

- [private_key_hex](/docs/sdk/rust/primitives/private_key_hex/): Extract the hexadecimal payload from a private key.
- [public_key_hex](/docs/sdk/rust/primitives/public_key_hex/): Extract the hexadecimal payload from a public key.
- [public_key_metadata](/docs/sdk/rust/primitives/public_key_metadata/): Separate public-key identity from its custody hint.
- [public_key_display](/docs/sdk/rust/primitives/public_key_display/): Format a short public-key identifier for display.
- [injectsummary_sources](/docs/sdk/rust/primitives/injectsummary_sources/): Format public source metadata for injection summaries.
- [injectsummary_with_metadata](/docs/sdk/rust/primitives/injectsummary_with_metadata/): Format an injection summary with public source metadata.
- [decrypted_replacements](/docs/sdk/rust/primitives/decrypted_replacements/): Validate decrypted source and map ciphertext to plaintext.
- [parse_decrypted_source](/docs/sdk/rust/primitives/parse_decrypted_source/): Parse original source using validated decrypted replacements.
