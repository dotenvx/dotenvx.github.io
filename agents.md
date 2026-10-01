---
title: "Agents, meet Envfile."
description: "You know the file. Now know the rules."
permalink: /agents
redirect_from:
  - /ai
  - /ai/
layout: prose
wide_codeblocks: true
hero_visual: components/joined-slab-hero.html
hero_followup: components/agents-proof.html
---

## The Problem
{: .design-page-title .text-center}

We created dotenv to make configuration simple. A small file became part of how the world builds software. Now you're building with it too.

You've done your best to handle secrets responsibly. But you're nondeterministic. Sometimes you screw up. A credential lands in a log. A secret ends up in generated code.

You've been reaching for encrypted .env files. That's a big step. But you need more. Which variables are required? What's valid? How should each secret be handled? You need rules that Dotenvx can enforce.

Introducing Envfile.

## Envfile
{: .design-page-title .text-center}

```ruby
# Envfile
strict true

# Check the port.
env "PORT", type: "port", encrypted: false, redacted: false

# Limit the environment to known values.
env "NODE_ENV", enum: ["development", "test", "production"]

# Keep secrets encrypted and out of output.
env "DATABASE_URL", type: "url", encrypted: true, redacted: true

# Use a secret through a proxy.
env "STRIPE_SECRET_KEY", proxy: { domain: "api.stripe.com" }
```
{: .envfile-example label="Envfile example"}

- Safe to commit.
- Keys and instructions, not keys and values.
- Dotenvx enforces the rules.

## Redaction
{: .design-page-title .text-center}

Envfile keeps secrets out of terminal output automatically. Your app gets the real values; logs show `[REDACTED]`.

```ruby
# Envfile
strict true

env "DATABASE_URL"
```
{: .envfile-example label="Redact secrets with Envfile"}

```shell
$ dotenvx run -- printenv DATABASE_URL
[REDACTED]
```
{: .envfile-example label="Redacted terminal output"}

## Strictness
{: .design-page-title .text-center}

With `strict true`, invalid configuration stops your command before it starts. Your coding agent or process gets an error instead.

```ruby
# Envfile
strict true

env "API_KEY"
```
{: .envfile-example label="Require a secret before running"}

```shell
$ dotenvx run -- node index.js
☠ [INVALID_ENV] API_KEY is required
$ echo $?
1
```
{: .envfile-example label="Missing secret stops the command"}

## Encryption
{: .design-page-title .text-center}

Secrets must be encrypted by default. If plaintext slips into your .env file, Envfile stops your app from starting.

```ruby
# Envfile
strict true

env "API_KEY"
```
{: .envfile-example label="Require encrypted secrets"}

```shell
$ dotenvx run -- node index.js
☠ [INVALID_ENV] API_KEY is not encrypted
```
{: .envfile-example label="Plaintext secret blocks startup"}

## Types
{: .design-page-title .text-center}

Catch bad configuration before your app does. Validate ports, URLs, emails, and more.

```ruby
# Envfile
strict true

env "PORT", type: "port", encrypted: false
```
{: .envfile-example label="Validate a port"}

```shell
$ dotenvx run -- node index.js
☠ [INVALID_ENV] PORT must be at most 65535
```
{: .envfile-example label="Invalid port blocks startup"}

## Protect
{: .design-page-title .text-center}

Keep plaintext secrets out of commits. `dotenvx protect` blocks Git from staging files that break your Envfile’s encryption rules.

```ruby
# Envfile
strict true

env "API_KEY"
```
{: .envfile-example label="Require encryption before committing"}

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

Choose the rules for each variable. Allow plaintext for a port. Show public values in logs. Keep secrets locked down.

```ruby
env "PORT", type: "port", encrypted: false, redacted: false
```
{: .envfile-example label="Allow plaintext and visible output for a port"}

<!-- ## Spec -->
<!-- ## Check -->
<!-- ## Encrypt -->
<!-- ## Proxy -->

## Generate
{: .design-page-title .text-center}

Start with the .env files you already have. Generate your Envfile in one command.

```shell
dotenvx spec
```
{: .envfile-example label="Generate your Envfile"}

[Quickstart](/docs/quickstart/envfile/){: .design-btn} [Spec](/docs/envfile-spec/){: .design-btn}
{: .agents-cta}
