---
title: "Rust"
social_title: "Encrypt a .env file in Rust"
description: "Encrypt a .env file in Rust with dotenvx, commit it safely, and decrypt its secrets with dotenvx-official."
icon: rust
permalink: /docs/rust/
redirect_from:
  - /docs/languages/rust
  - /docs/languages/rust/
  - /docs/secrets-in-rust/
  - /docs/secrets-in-rust
markdown_url: /docs/rust.md
agent_prompt: Set up Dotenvx with the Rust dotenvx-official crate for me.
---

## Prerequisites

Install [Rust and Cargo](https://www.rust-lang.org/tools/install). Start with a Rust app, or create one:

```console
$ cargo new hello-rust
$ cd hello-rust
```
{: copy="cargo new hello-rust
cd hello-rust"}

## Install

Add the Rust SDK:

```console
$ cargo add dotenvx-official
```
{: copy="cargo add dotenvx-official"}

Install the Dotenvx CLI to encrypt files and manage keys:

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

The compiled app loads configuration through [dotenvx_official::load](/docs/sdk/rust/load/); it does not need the CLI for file-based private keys.

## Encrypt

Start with a demonstration value in .env at your project root:

```dotenv
# .env
HELLO="Secret"
```
{: copy="HELLO=\"Secret\""}

Encrypt it:

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

When prompted, choose **Classic (.env.keys)** and store the key in .env.keys. The Rust SDK will read that file.

The value becomes ciphertext:

```dotenv
# .env
DOTENV_PUBLIC_KEY="DOTENV-PUBLIC-KEY-3-SECP256K1-0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
```
{: class="design-codeblock--nowrap"}

## Commit

Commit your encrypted .env file with your code. Keep .env.keys out of git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}

## Ship

Read and decrypt the file in your app:

```rust
// src/main.rs
fn main() -> std::io::Result<()> {
    let values = dotenvx_official::load()?;
    let hello = values.get("HELLO").expect("HELLO is required");
    println!("Hello {hello}");
    Ok(())
}
```

Run it:

```console
$ cargo run
Hello Secret
```
{: copy="cargo run"}

The SDK returns decrypted values in a map; it does not modify the process environment. Loading is strict: missing files and decryption errors stop this example before it uses the returned values. Existing process values take precedence by default.

HELLO is a demonstration value. Use real secrets in your application without printing them; load does not automatically redact output.

[**Use the CLI** Alternative →](/docs/rust/cli/){: .side-path}

## Share

Give your teammate the encrypted file through git and the private key through your team's approved private channel.

Retrieve the key:

```console
$ dotenvx keypair
```
{: copy="dotenvx keypair"}

Share only the DOTENV_PRIVATE_KEY value. Your teammate puts it in .env.keys at the project root:

```dotenv
# .env.keys
DOTENV_PRIVATE_KEY="your-shared-private-key"
```

They can then run:

```console
$ cargo run
Hello Secret
```
{: copy="cargo run"}

Keep .env.keys out of git. Anyone retaining a copy of the key can decrypt the file; removing repository access does not revoke that copy.

## Production

Create a separate production file:

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it. Choose **Classic (.env.keys)** and store the key in .env.keys:

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

Retrieve its private key:

```console
$ dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
```
{: copy="dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production"}

Set DOTENV_PRIVATE_KEY_PRODUCTION to that value in your deployment environment's secret settings. Keep .env.keys on your local machine.

Commit the encrypted file:

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Build for your deployment platform:

```console
$ cargo build --release
```
{: copy="cargo build --release"}

Deploy target/release/hello-rust and .env.production together. Use your package's binary name if different, and hello-rust.exe on Windows. The build does not need the private key.

From that directory, run:

```console
$ DOTENV_FILE=.env.production ./hello-rust
Hello Production
```
{: copy="DOTENV_FILE=.env.production ./hello-rust"}

The SDK reads the injected key and decrypts .env.production at runtime. No CLI or .env.keys file is needed on the server.

[**Multiple environment files** Alternative →](/docs/rust/env-files/){: .side-path}

## Conclusion

You've encrypted your configuration, shared a local key, and decrypted production values with the Rust SDK. Encrypted files travel with your code; private keys stay out of git.
