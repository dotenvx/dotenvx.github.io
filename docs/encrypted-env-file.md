---
title: ".env (encrypted)"
description: "The .env file you can commit."
permalink: /docs/encrypted-env-file/
hero_include: "components/logo.html"
hero_class: "docs-dotenvx-logo"
guide_class: "docs-env-file-body"
---

## Format
{: #format}

An encrypted .env file keeps the same `KEY=value` format. Variable names stay readable; secret values become ciphertext.

```dotenv
# .env
DOTENV_PUBLIC_KEY="DOTENV-PUBLIC-KEY-3-SECP256K1-0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
```
{: copy="false"}

The filename stays `.env`. The `DOTENV-CIPHERTEXT-3-` prefix tells dotenvx which values need decryption. This example shows the format; encrypt your own file to generate its matching key pair.

## Keys
{: #keys}

Environment variable names follow the same rules as a [plain .env file](/docs/env-file/#keys). Encryption does not hide names such as `DATABASE_URL` or `API_KEY`.

## Values
{: #values}

Each encrypted value starts with `DOTENV-CIPHERTEXT-3-`, and includes the algorithm, key identifier, and encrypted payload. Let dotenvx generate the value rather than adding the prefix yourself.

```dotenv
HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
```
{: copy="false"}

A file can contain both encrypted and plaintext values. Any value left in plaintext remains readable.

## Public and private keys
{: #public-and-private-keys}

Dotenvx uses public-key encryption with a secp256k1 key pair.

`DOTENV_PUBLIC_KEY` belongs in the encrypted .env file. It encrypts new values, but cannot decrypt them.

`DOTENV_PRIVATE_KEY` decrypts the values. Keep it separate from the encrypted file. For local file-based storage, dotenvx saves it in [.env.keys](/docs/env-keys-file/). Do not commit that file.

## Comments
{: #comments}

Comments and blank lines still work. Comments are not encrypted, so keep secrets in values rather than comments.

```dotenv
# Database credentials
HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
```
{: copy="false"}

## Encrypt
{: #encrypt}

Start with a plaintext .env file. [Install dotenvx](/docs/install/) if needed.

{% capture plaintext %}
HELLO="Secret"
{% endcapture %}
{% include components/design-codeblock.html value=plaintext copy_text=plaintext language="dotenv" %}

Run this in the directory containing the file:

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

Dotenvx replaces the values with ciphertext and adds the public key.

## Update
{: #update}

Set a new value without decrypting the whole file:

```console
$ dotenvx set HELLO "Updated secret"
```
{: copy="dotenvx set HELLO \"Updated secret\""}

Dotenvx encrypts the new value using the file's public key.

## Commit
{: #commit}

Commit the encrypted .env file with your code. Check that any values left in plaintext are suitable for the repository.

```console
$ git add -f .env
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git commit -m \"encrypt .env\""}

Keep `.env.keys` in `.gitignore`. Share the private key separately with the people or systems that need to run the app.

## Run
{: #run}

Your application reads normal environment variables. For example, in `index.js`:

```javascript
console.log(process.env.HELLO)
```

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

With the matching private key available, the app prints `Secret`. Decryption happens at runtime; the .env file stays encrypted.

Locally, dotenvx can read the private key from `.env.keys`. In deployment, supply `DOTENV_PRIVATE_KEY` through your platform's secret settings.

## Multiple environments
{: #multiple-environments}

Use a separate encrypted file and key pair for each environment.

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

`.env.production` uses `DOTENV_PUBLIC_KEY_PRODUCTION` and `DOTENV_PRIVATE_KEY_PRODUCTION`.

```console
$ dotenvx run -f .env.production -- node index.js
```
{: copy="dotenvx run -f .env.production -- node index.js"}
