---
title: "Agents, meet Dotenvxfile."
description: "You know the file. Now know the rules."
permalink: /agents
redirect_from:
  - /ai
  - /ai/
layout: prose
wide_codeblocks: true
hero_visual: components/joined-slab-hero.html
hero_followup: components/agents-proof.html
hero_badge: "Coming soon · Dotenvx 3.0.0"
---

## The Problem
{: .design-page-title .text-center}

We created dotenv to make configuration simple. A small file became part of how the world builds software. Now you're building with it too.

You've done your best to handle secrets responsibly. But you're a non-deterministic agent. Sometimes you screw up. A credential lands in a log. A secret ends up in generated code.

You've been reaching for encrypted .env files. That's a big step. But you need more. Which variables are required? What's valid? How should each secret be handled? You need rules that Dotenvx can enforce.

Introducing Dotenvxfile.

## Dotenvxfile
{: .design-page-title .text-center}

```ruby
# Dotenvxfile
strict true

# Check the port.
env "PORT", type: "port", storage: "plaintext", redacted: false

# Limit the environment to known values.
env "NODE_ENV", enum: ["development", "test", "production"]

# Keep secrets encrypted and out of output.
env "DATABASE_URL", type: "url", required: true, storage: "encrypted", redacted: true
```
{: .envfile-example label="Dotenvxfile example"}

- Safe to commit.
- Keys and instructions, not keys and values.
- Dotenvx enforces the rules.

## Redaction
{: .design-page-title .text-center}

Mark secrets with `redacted: true` to keep them out of terminal output automatically. Your app gets the real values; matching output shows `[REDACTED]`.

```ruby
# Dotenvxfile
strict true

env "DATABASE_URL", required: true, redacted: true
```
{: .envfile-example label="Redact secrets with Dotenvxfile"}

```shell
$ dotenvx run -- printenv DATABASE_URL
[REDACTED]
```
{: .envfile-example label="Redacted terminal output"}

## Strictness
{: .design-page-title .text-center}

With `strict true`, failures of your configured validation rules stop your command before it starts. Add `required: true` to require a value; variables are optional by default.

```ruby
# Dotenvxfile
strict true

env "API_KEY", required: true
```
{: .envfile-example label="Require a secret before running"}

```shell
$ dotenvx run -- node index.js
☠ [INVALID_ENV] API_KEY is required per Dotenvxfile
$ echo $?
1
```
{: .envfile-example label="Missing secret stops the command"}

## Encryption
{: .design-page-title .text-center}

Choose how each value is stored. Use `storage: "encrypted"` for secrets and `storage: "plaintext"` for public configuration. The default storage policy is `"any"`; encryption is not required automatically.

```ruby
# Dotenvxfile
strict true

env "API_KEY", required: true, storage: "encrypted", redacted: true
env "PORT", type: "port", storage: "plaintext"
```
{: .envfile-example label="Choose encrypted and plaintext storage"}

```shell
$ dotenvx encrypt
```
{: .envfile-example label="Encrypt secret values"}

`dotenvx encrypt` respects the storage rules: `API_KEY` is encrypted and `PORT` stays readable. Declaring a storage rule does not rewrite your .env file or make `dotenvx run` reject plaintext at startup. Keep your private key separate from Git.

## Types
{: .design-page-title .text-center}

Catch bad configuration before your app does. Validate ports, URLs, emails, and more.

```ruby
# Dotenvxfile
strict true

env "PORT", type: "port", storage: "plaintext"
```
{: .envfile-example label="Validate a port"}

```shell
$ dotenvx run -- node index.js
☠ [INVALID_ENV] PORT must be at most 65535 per Dotenvxfile
```
{: .envfile-example label="Invalid port blocks startup"}

## Protect
{: .design-page-title .text-center}

Keep plaintext secrets out of commits. `dotenvx protect` installs Git protection for .env files and private keys. It currently checks .env files independently of Dotenvxfile’s storage rules, so a plaintext value such as `PORT` can still block staging.

```console
$ dotenvx protect
⛉ protection: full (.env*, .env.keys*)
$ echo 'API_KEY=example-only' > .env
$ git add .env
☠ [PLAINTEXT_ENV] API_KEY not encrypted (".env"). fix: run [dotenvx encrypt -f .env]
fatal: .env: clean filter 'dotenvx.protect' failed
```
{: .envfile-example label="Block plaintext secrets from commits"}

## Fine-Tune
{: .design-page-title .text-center}

Choose the rules for each variable. Allow plaintext for a port. Use `redacted: true` to hide secrets in output and `redacted: false` for public values.

```ruby
env "PORT", type: "port", storage: "plaintext", redacted: false
```
{: .envfile-example label="Declare plaintext storage and an output rule for a port"}

## Get Started
{: .design-page-title .text-center}

Create a file named `Dotenvxfile` in your project root. Add explicit rules for the variables your app needs:

```ruby
# Dotenvxfile
strict true

env "PORT", type: "port", required: true, storage: "plaintext"
env "DATABASE_URL", type: "url", required: true, storage: "encrypted", redacted: true
```
{: .envfile-example label="Create your Dotenvxfile"}

Encrypt your .env file, then run your app with output redaction:

```shell
dotenvx encrypt
dotenvx run -- node index.js
```
{: .envfile-example label="Encrypt and run"}

[Quickstart](/docs/quickstart/dotenvxfile/){: .design-btn} [Spec](/docs/dotenvxfile-spec/){: .design-btn}
{: .agents-cta}
