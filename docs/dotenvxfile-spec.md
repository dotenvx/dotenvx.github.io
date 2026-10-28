---
title: "Dotenvxfile Spec"
description: "Define the rules for your environment variables."
permalink: "/docs/dotenvxfile-spec/"
redirect_from:
  - /docs/envfile-spec
  - /docs/envfile-spec/
layout: docs-markdown
mark: "Dotenvxfile"
---
Start with the [Dotenvxfile quickstart](/docs/quickstart/dotenvxfile/), or browse [individual settings](/docs/dotenvxfile/).

## Syntax and defaults
{: #reference}

Save a file named `Dotenvxfile` in your project root. It contains names and rules, not secret values, and is safe to commit.

```ruby
# Dotenvxfile
strict true

env "DATABASE_URL", type: "url", required: true, storage: "encrypted", redacted: true
env "PORT", type: "port", storage: "plaintext"
```

Names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Use single or double quotes. Comments start with `#`. Options may continue on the next line after a comma. This is a declarative format, not executable Ruby.

| Option | Default | Meaning |
| --- | --- | --- |
| `required: true` | `false` | Require a present, nonblank value. |
| `optional: true` | `true` | Allow missing or blank values; inverse of `required`. |
| `type: "port"` | `"string"` | Validate a value without converting it. |
| `enum: ["dev", "prod"]` | None | Restrict nonblank values to the listed choices. |
| `min: 1` | None | Inclusive numeric lower bound or string minimum length. |
| `max: 32` | None | Inclusive numeric upper bound or string maximum length. |
| `storage: "encrypted"` | `"any"` | Choose encrypted, plaintext, or unrestricted storage. |
| `redacted: true` | `false` | Hide matching values in output; `redact` is an alias. |
| `strict: true` | `false` | Stop the command when a configured validation rule fails. |

Root settings supply defaults:

```ruby
strict true
required true
redacted true
storage "encrypted"

env "DATABASE_URL", type: "url"
env "PORT", type: "port", storage: "plaintext", redacted: false
```

Individual declarations override defaults. Use either `required` or `optional` on one declaration, never both. `optional: false` means `required: true`. Optional values are still validated when supplied.

## Types, choices, and bounds

Values remain strings. Supported types are `string`, `integer`, `boolean`, `port`, `url`, `email`, and `ip`.

- Integers are signed or unsigned whole numbers.
- Booleans accept `true`, `false`, `1`, or `0`.
- Ports are integers from `0` through `65535`.
- URLs require a scheme, including database schemes such as `postgres://`.
- Email and IP types validate their respective address formats.

`enum` is a nonempty array of quoted strings or integers. Integer and port choices compare numerically; other choices compare exactly. Choices must satisfy the selected type. Strings support escaped quotes, backslashes, and `\n`, `\r`, and `\t`. Arrays may have a trailing comma; declarations may not.

```ruby
env "NODE_ENV", enum: ["development", "test", "production"]
env "WORKERS", type: "integer", min: 1, max: 32
env "LABEL", type: "string", min: 1, max: 64
```

Bounds apply to integers, ports, or string lengths. String bounds must be nonnegative. The minimum cannot exceed the maximum. Port bounds are clamped to `0`–`65535`.

## Storage and redaction

Use `storage: "encrypted"` for secrets and `storage: "plaintext"` for readable values. `storage: "any"` imposes no storage restriction. `dotenvx encrypt` respects plaintext rules when choosing what to encrypt.

Storage declarations do not rewrite `.env` files or make `dotenvx run` reject plaintext at startup. Encrypt values with `dotenvx encrypt` and keep private keys separate from Git.

`redacted: true` hides matching values from output while your app receives the real values. Dotenvx applies the policy automatically when running your app. Storage and redaction are independent.

Undeclared variables are not an allowlist violation. Root defaults supply their rules; public-key metadata is excluded from output redaction.

## File overrides

Use exact paths relative to the Dotenvxfile; globs are not supported. File blocks can override declarations and set `strict`, `required`, and `storage` defaults.

```ruby
env "NODE_ENV", enum: ["development", "test", "production"]
env "SENTRY_DSN", optional: true

file ".env.production" do
  strict true
  env "NODE_ENV", enum: ["production"]
  env "SENTRY_DSN", required: true
end
```

For multiple selected files, earlier files take precedence for explicitly specified options. Unspecified options inherit the root rules. A file block may introduce variables that apply only to that file.

## Profiles

Name combinations of environment files:

```ruby
profile "production", files: [".env.production", ".env"]
```

Profiles contain exact filenames. Profile names must be nonempty and unique.

## Validation and errors

`strict true` stops `dotenvx run` on value-validation failures. The default, `strict false`, reports warnings. CLI `--strict` also stops on loading errors.

Invalid syntax reports `MALFORMED_DOTENVXFILE`. Value-validation failures report `INVALID_ENV`; storage validation through primitives reports `INVALID_STORAGE`.

Duplicate declarations in a scope, duplicate options, duplicate normalized file blocks, conflicting `required` and `optional` options, and unknown options are errors. There are no value assignments, imports, executable loops, or proxy declarations. `.env.example` does not define validation rules.

## Use your rules

```sh
dotenvx encrypt
dotenvx run -- node index.js
dotenvx run -f .env.production -- node index.js
```

Create your Dotenvxfile directly; the current CLI has no `init`, `spec`, or standalone `check` command. For low-level policy inspection and validation, use `dotenvx primitives policy`, `dotenvx primitives storagepolicy`, `dotenvx primitives check`, and `dotenvx primitives storagecheck`.
