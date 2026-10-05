---
title: "Envfile Spec"
description: "Define the rules for your environment variables."
permalink: /docs/envfile-spec/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Envfile Spec"
  description="Define the rules for your environment variables."
  mark="Envfile"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Start with the [Envfile quickstart](/docs/quickstart/envfile/), browse [individual settings](/docs/envfile/), or use this page as the complete language reference.

## Syntax and options
{: #reference}

Declare an environment variable by name:

```ruby
# Envfile (safe to commit)
# ------------------------

strict true

env "KEY"
```

Add options after a comma to change how the variable is handled:

```ruby
# Envfile (safe to commit)
# ------------------------

strict true

env "KEY", encrypted: false
```

{% capture spec_options %}
<thead><tr><th scope="col">Option</th><th scope="col">Default</th><th scope="col">Meaning</th></tr></thead>
<tbody>
<tr><th scope="row"><code class="design-code">required: true</code></th><td>true</td><td>Require a nonblank value.</td></tr>
<tr><th scope="row"><code class="design-code">optional: true</code></th><td>false</td><td>Allow an absent or blank value; inverse of <code class="design-code">required</code>.</td></tr>
<tr><th scope="row"><code class="design-code">type: &quot;port&quot;</code></th><td>None</td><td>Validate <code class="design-code">integer</code>, <code class="design-code">boolean</code>, <code class="design-code">port</code>, <code class="design-code">url</code>, <code class="design-code">email</code>, or <code class="design-code">ip</code>.</td></tr>
<tr><th scope="row"><code class="design-code">enum: [&quot;dev&quot;, &quot;prod&quot;]</code></th><td>None</td><td>Restrict a nonblank value to the listed choices.</td></tr>
<tr><th scope="row"><code class="design-code">min: 1</code></th><td>None; port minimum is 0</td><td>Inclusive integer or port lower bound.</td></tr>
<tr><th scope="row"><code class="design-code">max: 32</code></th><td>None; port maximum is 65535</td><td>Inclusive integer or port upper bound.</td></tr>
<tr><th scope="row"><code class="design-code">encrypted: false</code></th><td>true</td><td>Permit plaintext; <code class="design-code">encrypt</code> is an alias.</td></tr>
<tr><th scope="row"><code class="design-code">redacted: false</code></th><td>true</td><td>Permit output visibility; <code class="design-code">redact</code> is an alias.</td></tr>
<tr><th scope="row"><code class="design-code">proxy: { domain: &quot;api.stripe.com&quot; }</code></th><td>false</td><td>Use an Armor credential proxy for this domain.</td></tr>
<tr><th scope="row"><code class="design-code">proxy: false</code></th><td>false</td><td>Disable proxying, including an inherited proxy rule.</td></tr>
</tbody>
{% endcapture %}
{% capture spec_options_table %}
{% include components/design-table.html class="design-table-wrap--fill" content=spec_options %}
{% endcapture %}
{% include components/design-card.html class="pricing-summary-card" content=spec_options_table %}

## Declarations

Save the file as `Envfile` in your project directory. It contains names and rules. Values stay in `.env` or your other environment sources.

Variable names are case-sensitive and must match `[A-Za-z_][A-Za-z0-9_]*`. Use single or double quotes. Comments begin with `#`. Blank lines are ignored.

```ruby
# Envfile
strict true

env "DATABASE_URL", type: "url"
env 'SENTRY_DSN', optional: true
```

Every declaration is required, encrypted, and redacted by default. Proxying is off. There is no default type, enum, or range.

Options can continue on the next line after a comma:

```ruby
env "PORT",
  type: "port",
  encrypted: false,
  redacted: false
```

## Required and optional

`required: true` requires a value that is present and not blank. `optional: true` allows missing or blank values. When an optional value is supplied, its other rules still apply.

Use either `required` or `optional` in a declaration, never both. `optional: false` is equivalent to `required: true`.

## Types, choices, and bounds

All environment values remain strings. Types validate them; they do not convert them.

- `integer`: a signed or unsigned whole number, such as `42` or `-1`.
- `boolean`: exactly `true`, `false`, `1`, or `0`.
- `port`: an integer from `0` through `65535`.
- `url`: a URL with a scheme, including database URLs such as `postgres://localhost/app`.
- `email`: an email address with a valid local part and DNS-style domain.
- `ip`: an IPv4 or IPv6 address.

`enum` is a nonempty array of quoted strings or integers. Values must match one of the choices. With an integer or port type, choices compare numerically; other choices compare exactly. When combined with a type, every choice must satisfy that type.

Enum strings support escaped quotes, backslashes, and `\n`, `\r`, and `\t`. Arrays and proxy objects may have a trailing comma. A declaration cannot end with a trailing comma.

```ruby
env "NODE_ENV", enum: ["development", "test", "production"]
env "WORKERS", type: "integer", min: 1, max: 32
env "PORT", type: "port", min: 1024, encrypted: false
```

`min` and `max` are inclusive integer bounds. They require `type: "integer"` or `type: "port"`. The minimum cannot exceed the maximum. Port bounds are clamped to `0`–`65535`.

## Encryption and redaction

`encrypted: true` requires an encrypted source for a nonblank value. Use `encrypted: false` for values that may remain plaintext. The alias is `encrypt`.

`redacted: true` marks a value for output redaction. Use `redacted: false` for values that may be visible. The alias is `redact`.

```ruby
env "DATABASE_URL", encrypted: true, redacted: true
env "PORT", type: "port", encrypted: false, redacted: false
```

These are independent rules. Allowing plaintext does not automatically allow output visibility. Declaring a rule does not rewrite your `.env`; run `dotenvx encrypt` to encrypt its values.

Undeclared loaded variables are not an allowlist violation. They still use the default encryption policy. Dotenvx public-key metadata is exempt from the encryption requirement.

## Proxy

A proxy rule associates a secret with its destination domain:

```ruby
env "STRIPE_SECRET_KEY", proxy: { domain: "api.stripe.com" }
```

The domain must be a DNS hostname. Schemes, ports, paths, wildcards, and IP addresses are not allowed. Domain names are normalized to lowercase.

`proxy: false` disables proxying for that variable, including an inherited rule. `proxy: true` is not supported. A proxy declaration does not start a proxy by itself; it is used by Dotenvx's credential-proxy integration.

## File overrides

Group file-specific overrides inside `file ".env.production" do` … `end`. They inherit root rules and apply when that file is selected.

```ruby
env "NODE_ENV", enum: ["development", "test", "production"]
env "SENTRY_DSN", optional: true

file ".env.production" do
  env "NODE_ENV", enum: ["production"]
  env "SENTRY_DSN", optional: false
  strict true
end
```

Paths are relative to the Envfile and must name exact files; globs are not supported. An override changes only the options it specifies. It can also introduce a variable that applies only to that file.

When multiple selected files have rules, each active policy must hold. Conflicting proxy domains for the same variable are an error. A redaction requirement from any active policy takes precedence over an allowance to display the value.

## Strictness

`dotenvx spec` generates `strict true` at the top of each Envfile. This stops startup when validation fails. Set `strict false` to warn instead. Existing files that omit `strict` continue to warn. Set strictness once at the root or per file block. `strict` is the only root-level setting; it is not an `env` option. Encryption and redaction are per-variable options only; there is no root or file-level `encrypted false` or `redacted false` setting.

```ruby
strict true

env "DATABASE_URL", type: "url"
```

For `dotenvx run`, strict rules stop the command on validation failure. Without strictness, validation failures warn. CLI `--strict` also stops on loading errors. `dotenvx check` reports validation failures with a nonzero exit status regardless of the Envfile strictness setting.

## Invalid syntax

Duplicate declarations in one scope, duplicate options (including both spellings of an alias), and duplicate normalized file paths are errors. Unknown options are errors too. The current language has no value assignments, default values, imports, interpolation, loops, executable Ruby, or TOML syntax. Put actual values in your environment sources.

An invalid Envfile reports `MALFORMED_ENVFILE`. A failed validation reports `INVALID_ENV`. `dotenvx check` requires an Envfile; `.env.example` is not a substitute.

## Commands

```sh
dotenvx spec
dotenvx check
dotenvx encrypt
dotenvx run -- node index.js
```

`dotenvx spec` creates an Envfile with `strict true` and variable declarations, without copying secret values. In a terminal, it lets you select env files and scan code for references. Use `-f .env.production` to select one file, `--stdout` to preview the result, or `--overwrite` to replace an existing Envfile and its custom rules.

Use `dotenvx check -f .env.production` to validate a specific file and its overrides. See the [quickstart](/docs/quickstart/envfile/) for a complete example.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
