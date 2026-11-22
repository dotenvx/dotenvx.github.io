---
title: "Dotenvx.toml Spec"
description: "Define the rules for your environment variables."
permalink: "/docs/dotenvxtoml/spec/"
mark: "Dotenvx.toml"
---
Start with the [Dotenvx.toml quickstart](/docs/dotenvxtoml/quickstart/), or browse [individual settings](/docs/dotenvxtoml/).

## Syntax and defaults
{: #reference}

Save `Dotenvx.toml` in your project root. It contains names and rules and is safe to commit. Keep values in your environment sources. Dotenvx also accepts `dotenvx.toml` and prefers `Dotenvx.toml` if both exist.

```toml
# Dotenvx.toml
strict = true

[env.DATABASE_URL]
type = "url"
required = true
storage = "encrypted"
redacted = true

[env.PORT]
type = "port"
storage = "plaintext"
```

Declare variables in `[env.NAME]` tables. Names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Put one assignment per line and start comments with `#`.

| Option | Default | Meaning |
| --- | --- | --- |
| `required = true` | `false` | Require a present, nonblank value. |
| `optional = true` | `true` | Allow missing or blank values. |
| `type = "port"` | `"string"` | Validate a value without converting it. |
| `enum = ["dev", "prod"]` | None | Restrict nonblank values to the listed choices. |
| `min = 1` | None | Inclusive numeric lower bound or string minimum length. |
| `max = 32` | None | Inclusive numeric upper bound or string maximum length. |
| `storage = "encrypted"` | `"any"` | Choose encrypted, plaintext, or unrestricted storage. |
| `redacted = true` | `false` | Hide matching values in output. `redact` is an alias in variable tables. |
| `strict = true` | `false` | Stop the command when a configured validation rule fails. |

Root settings supply defaults.

```toml
strict = true
required = true
redacted = true
storage = "encrypted"

[env.DATABASE_URL]
type = "url"

[env.PORT]
type = "port"
storage = "plaintext"
redacted = false
```

Individual declarations override defaults. Use either `required` or `optional` on one declaration, never both. `optional = false` means `required = true`. Optional values are still validated when supplied.

## Types, choices, and bounds

Values remain strings. Supported types are `string`, `integer`, `boolean`, `port`, `url`, `email`, and `ip`.

- Integers are signed or unsigned whole numbers.
- Booleans accept `true`, `false`, `1`, or `0`.
- Ports are integers from `0` through `65535`.
- URLs require a scheme, including database schemes such as `postgres://`.
- Email and IP types validate their respective address formats.

`enum` is a nonempty array of quoted strings or integers. Integer and port choices compare numerically. Other choices compare exactly. Choices must satisfy the selected type.

```toml
[env.NODE_ENV]
enum = ["development", "test", "production"]

[env.WORKERS]
type = "integer"
min = 1
max = 32

[env.LABEL]
type = "string"
min = 1
max = 64
```

Bounds apply to integers, ports, or string lengths. String bounds must be nonnegative. The minimum cannot exceed the maximum. Port bounds are clamped to `0`–`65535`.

## Storage and redaction

Use `storage = "encrypted"` for secrets and `storage = "plaintext"` for readable values. `storage = "any"` imposes no storage restriction. `dotenvx encrypt` respects plaintext rules when choosing what to encrypt.

Run `dotenvx encrypt` to apply storage rules to your `.env` files. Keep private keys separate from Git. At startup, `dotenvx run` validates resolved values.

`redacted = true` hides matching values from output while your app receives the real values. Dotenvx applies the policy automatically when running your app. Storage and redaction are independent.

Undeclared variables use the root defaults. Public-key metadata stays visible in output.

## File overrides

Use literal filenames relative to your project. File tables can override declarations and set `strict`, `required`, and `storage` defaults.

```toml
[env.NODE_ENV]
enum = ["development", "test", "production"]

[env.SENTRY_DSN]
optional = true

[files.".env.production"]
strict = true

[files.".env.production".env.NODE_ENV]
enum = ["production"]

[files.".env.production".env.SENTRY_DSN]
required = true
```

For multiple selected files, earlier files take precedence for explicitly specified options. Unspecified options inherit the root rules. A file block may introduce variables that apply only to that file.

## Profiles

The policy format can name combinations of environment files.

```toml
profiles.production = [".env.production", ".env"]
```

Profiles contain exact filenames. Profile names must be nonempty and unique. Select these files from the CLI with `dotenvx run -f .env.production -f .env -- node index.js`.

## Validation and errors

`strict = true` stops `dotenvx run` on value-validation failures. The default, `strict = false`, reports warnings. CLI `--strict` also stops on loading errors.

Invalid syntax or settings report `MALFORMED_DOTENVX_TOML`. Value-validation failures report `INVALID_ENV`. Storage validation through primitives reports `INVALID_STORAGE`.

Duplicate declarations in a scope, duplicate options, duplicate normalized file tables, conflicting `required` and `optional` options, and unknown options are errors.

## Use your rules

```console
$ dotenvx encrypt
$ dotenvx run -- node index.js
$ dotenvx run -f .env.production -- node index.js
```
{: copy="dotenvx encrypt
dotenvx run -- node index.js
dotenvx run -f .env.production -- node index.js"}

[See commands that use Dotenvx.toml](/docs/dotenvxtoml/commands/)
