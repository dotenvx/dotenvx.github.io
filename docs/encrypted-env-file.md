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
  <section class="docs-quickstart-body docs-env-file-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="format">Format</h2>
    <p class="design-paragraph">An encrypted .env file keeps the same <code class="design-code">KEY=value</code> format. Variable names stay readable; secret values become ciphertext.</p>

    {% capture encrypted_format %}
# .env
DOTENV_PUBLIC_KEY="03a435b2dc61a408876ba5f2afa0a6ab5c827e2167228c3b8c9d1a8253ccd62514"

HELLO="encrypted:BDcJe0ksryTFcP9vEGH/DRgvxIFCFym1MoPwA5MhnTPKhSxinnRAQYAUMalR83my7uyj5LGksmTL2pjOBwWWdZ5utqA6c5CPrs84AF+Kq4imBk1CjzAjN/cnYqMBStbpc+18SPQlJg=="
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_format copy=false language="dotenv" %}
    <p class="design-paragraph">The filename stays <code class="design-code">.env</code>. The <code class="design-code">encrypted:</code> prefix tells dotenvx which values need decryption. This example shows the format; encrypt your own file to generate its matching key pair.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="keys">Keys</h2>
    <p class="design-paragraph">Environment variable names follow the same rules as a <a class="design-link" href="/docs/env-file/#keys">plain .env file</a>. Encryption does not hide names such as <code class="design-code">DATABASE_URL</code> or <code class="design-code">API_KEY</code>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="values">Values</h2>
    <p class="design-paragraph">Each encrypted value starts with <code class="design-code">encrypted:</code>, followed by the ciphertext. Let dotenvx generate the value rather than adding the prefix yourself.</p>

    {% capture encrypted_value %}
HELLO="encrypted:BDcJe0ksryTFcP9vEGH/DRgvxIFCFym1MoPwA5MhnTPKhSxinnRAQYAUMalR83my7uyj5LGksmTL2pjOBwWWdZ5utqA6c5CPrs84AF+Kq4imBk1CjzAjN/cnYqMBStbpc+18SPQlJg=="
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_value copy=false language="dotenv" %}
    <p class="design-paragraph">A file can contain both encrypted and plaintext values. Any value left in plaintext remains readable.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="public-and-private-keys">Public and private keys</h2>
    <p class="design-paragraph">Dotenvx uses public-key encryption with a secp256k1 key pair.</p>
    <p class="design-paragraph"><code class="design-code">DOTENV_PUBLIC_KEY</code> belongs in the encrypted .env file. It encrypts new values, but cannot decrypt them.</p>
    <p class="design-paragraph"><code class="design-code">DOTENV_PRIVATE_KEY</code> decrypts the values. Keep it separate from the encrypted file. For local file-based storage, dotenvx saves it in <a class="design-link" href="/docs/env-keys-file/">.env.keys</a>. Do not commit that file.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="comments">Comments</h2>
    <p class="design-paragraph">Comments and blank lines still work. Comments are not encrypted, so keep secrets in values rather than comments.</p>

    {% capture encrypted_comments %}
# Database credentials
HELLO="encrypted:BDcJe0ksryTFcP9vEGH/DRgvxIFCFym1MoPwA5MhnTPKhSxinnRAQYAUMalR83my7uyj5LGksmTL2pjOBwWWdZ5utqA6c5CPrs84AF+Kq4imBk1CjzAjN/cnYqMBStbpc+18SPQlJg=="
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_comments copy=false language="dotenv" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="encrypt">Encrypt</h2>
    <p class="design-paragraph">Start with a plaintext .env file. <a class="design-link" href="/docs/install/">Install dotenvx</a> if needed.</p>

    {% capture plaintext %}
HELLO="Secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=plaintext copy_text=plaintext language="dotenv" %}
    <p class="design-paragraph">Run this in the directory containing the file:</p>

    {% capture encrypt_command %}
dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_command copy_text=encrypt_command language="bash" %}
    <p class="design-paragraph">Dotenvx replaces the values with ciphertext and adds the public key.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="update">Update</h2>
    <p class="design-paragraph">Set a new value without decrypting the whole file:</p>

    {% capture update_command %}
dotenvx set HELLO "Updated secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=update_command copy_text=update_command language="bash" %}
    <p class="design-paragraph">Dotenvx encrypts the new value using the file's public key.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="commit">Commit</h2>
    <p class="design-paragraph">Commit the encrypted .env file with your code. Check that any values left in plaintext are suitable for the repository.</p>

    {% capture commit_command %}
git add -f .env
git commit -m "encrypt .env"
    {% endcapture %}
    {% include components/design-codeblock.html value=commit_command copy_text=commit_command language="bash" %}
    <p class="design-paragraph">Keep <code class="design-code">.env.keys</code> in <code class="design-code">.gitignore</code>. Share the private key separately with the people or systems that need to run the app.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="run">Run</h2>
    <p class="design-paragraph">Your application reads normal environment variables. For example, in <code class="design-code">index.js</code>:</p>

    {% capture app_code %}
console.log(process.env.HELLO)
    {% endcapture %}
    {% include components/design-codeblock.html value=app_code copy_text=app_code language="javascript" %}

    {% capture run_command %}
dotenvx run -- node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=run_command copy_text=run_command language="bash" %}
    <p class="design-paragraph">With the matching private key available, the app prints <code class="design-code">Secret</code>. Decryption happens at runtime; the .env file stays encrypted.</p>
    <p class="design-paragraph">Locally, dotenvx can read the private key from <code class="design-code">.env.keys</code>. In deployment, supply <code class="design-code">DOTENV_PRIVATE_KEY</code> through your platform's secret settings.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="multiple-environments">Multiple environments</h2>
    <p class="design-paragraph">Use a separate encrypted file and key pair for each environment.</p>

    {% capture production_encrypt %}
dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=production_encrypt copy_text=production_encrypt language="bash" %}
    <p class="design-paragraph"><code class="design-code">.env.production</code> uses <code class="design-code">DOTENV_PUBLIC_KEY_PRODUCTION</code> and <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code>.</p>

    {% capture production_run %}
dotenvx run -f .env.production -- node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=production_run copy_text=production_run language="bash" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

  </section>
  </div>
</div>
