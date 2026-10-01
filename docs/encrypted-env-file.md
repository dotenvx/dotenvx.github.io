---
title: ".env (encrypted)"
description: "The .env file you can commit."
permalink: /docs/encrypted-env-file/
layout: radar
---

{% capture encrypted_env_visual %}
  {% include components/logo.html class="docs-dotenvx-logo" %}
{% endcapture %}

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env (encrypted)"
  description="The .env file you can commit."
  visual=encrypted_env_visual
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body docs-env-file-body" markdown="block">
{% capture step_content %}

## Format
{: #format}

An encrypted .env file keeps the same `KEY=value` format. Variable names stay readable; secret values become ciphertext.

```dotenv
# .env
DOTENV_PUBLIC_KEY="03a435b2dc61a408876ba5f2afa0a6ab5c827e2167228c3b8c9d1a8253ccd62514"

HELLO="encrypted:BDcJe0ksryTFcP9vEGH/DRgvxIFCFym1MoPwA5MhnTPKhSxinnRAQYAUMalR83my7uyj5LGksmTL2pjOBwWWdZ5utqA6c5CPrs84AF+Kq4imBk1CjzAjN/cnYqMBStbpc+18SPQlJg=="
```
{: copy="false"}

The filename stays `.env`. The `encrypted:` prefix tells dotenvx which values need decryption. This example shows the format; encrypt your own file to generate its matching key pair.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Keys
{: #keys}

Environment variable names follow the same rules as a [plain .env file](/docs/env-file/#keys). Encryption does not hide names such as `DATABASE_URL` or `API_KEY`.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Values
{: #values}

Each encrypted value starts with `encrypted:`, followed by the ciphertext. Let dotenvx generate the value rather than adding the prefix yourself.

```dotenv
HELLO="encrypted:BDcJe0ksryTFcP9vEGH/DRgvxIFCFym1MoPwA5MhnTPKhSxinnRAQYAUMalR83my7uyj5LGksmTL2pjOBwWWdZ5utqA6c5CPrs84AF+Kq4imBk1CjzAjN/cnYqMBStbpc+18SPQlJg=="
```
{: copy="false"}

A file can contain both encrypted and plaintext values. Any value left in plaintext remains readable.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Public and private keys
{: #public-and-private-keys}

Dotenvx uses public-key encryption with a secp256k1 key pair.

`DOTENV_PUBLIC_KEY` belongs in the encrypted .env file. It encrypts new values, but cannot decrypt them.

`DOTENV_PRIVATE_KEY` decrypts the values. Keep it separate from the encrypted file. For local file-based storage, dotenvx saves it in [.env.keys](/docs/env-keys-file/). Do not commit that file.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Comments
{: #comments}

Comments and blank lines still work. Comments are not encrypted, so keep secrets in values rather than comments.

```dotenv
# Database credentials
HELLO="encrypted:BDcJe0ksryTFcP9vEGH/DRgvxIFCFym1MoPwA5MhnTPKhSxinnRAQYAUMalR83my7uyj5LGksmTL2pjOBwWWdZ5utqA6c5CPrs84AF+Kq4imBk1CjzAjN/cnYqMBStbpc+18SPQlJg=="
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt
{: #encrypt}

Start with a plaintext .env file. [Install dotenvx](/docs/install/) if needed.

{% capture plaintext %}
HELLO="Secret"
{% endcapture %}
{% include components/design-codeblock.html value=plaintext copy_text=plaintext language="dotenv" %}

Run this in the directory containing the file:

```bash
dotenvx encrypt
```

Dotenvx replaces the values with ciphertext and adds the public key.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Update
{: #update}

Set a new value without decrypting the whole file:

```bash
dotenvx set HELLO "Updated secret"
```

Dotenvx encrypts the new value using the file's public key.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Commit
{: #commit}

Commit the encrypted .env file with your code. Check that any values left in plaintext are suitable for the repository.

```bash
git add -f .env
git commit -m "encrypt .env"
```

Keep `.env.keys` in `.gitignore`. Share the private key separately with the people or systems that need to run the app.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Run
{: #run}

Your application reads normal environment variables. For example, in `index.js`:

```javascript
console.log(process.env.HELLO)
```

```bash
dotenvx run -- node index.js
```

With the matching private key available, the app prints `Secret`. Decryption happens at runtime; the .env file stays encrypted.

Locally, dotenvx can read the private key from `.env.keys`. In deployment, supply `DOTENV_PRIVATE_KEY` through your platform's secret settings.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Multiple environments
{: #multiple-environments}

Use a separate encrypted file and key pair for each environment.

```bash
dotenvx encrypt -f .env.production
```

`.env.production` uses `DOTENV_PUBLIC_KEY_PRODUCTION` and `DOTENV_PRIVATE_KEY_PRODUCTION`.

```bash
dotenvx run -f .env.production -- node index.js
```

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

</section>
</div>
</div>
