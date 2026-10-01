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

<!-- ## Spec -->
<!-- ## Check -->
<!-- ## Encrypt -->
<!-- ## Protect -->
<!-- ## Proxy -->

[Quickstart](/docs/quickstart/envfile/){: .design-btn} [Spec](/docs/envfile-spec/){: .design-btn}
{: .agents-cta}
