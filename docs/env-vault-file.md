---
title: ".env.vault (DEPRECATED)"
description: "(DEPRECATED) The .env.vault file is an encrypted version of your .env file."
permalink: /docs/env-vault-file/
layout: radar
redirect_from:
  - /docs/env-vault
  - /docs/env-vault/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env.vault (DEPRECATED)"
  description="The .env.vault file is an encrypted version of your .env file."
  mark=".env.vault"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph"><a class="design-link" href="/docs/deprecated">Deprecated</a> — The <code class="design-code">.env.vault</code> file has been DEPRECATED since May 2024. Please see <a class="design-link" href="/docs/quickstart/encryption">updated encryption instructions</a>.</p>

    <p class="design-paragraph"><code class="design-code">.env.vault</code> is an encrypted version of your .env file. Here is what it looks like.</p>

    {% capture vault_example %}
#/-------------------.env.vault---------------------/
#/         cloud-agnostic vaulting standard         /
#/  [how it works](https://dotenvx.com/env-vault)   /
#/--------------------------------------------------/
# development
DOTENV_VAULT_DEVELOPMENT="V4NYVn0Pow6Uf2ez2mbHEzTrYURloHL6VDAFRLqnQBppA/OmHI5x5AXoxCMVor7wOg=="
# production
DOTENV_VAULT_PRODUCTION="YZkhtbh1IlzBgIamAAsG5nzGPfH6p8Zbuj9egXoziviVu/eYIyNjJWtIYyhiW/vHhFbqbsvo5+P9b27OC6ZC7qU="
    {% endcapture %}
    {% include components/design-codeblock.html value=vault_example copy=false %}

    <p class="design-paragraph">Some quick takeaways:</p>
    <ul class="design-bullets">
      <li>It uses the <a class="design-link" href="/docs/env-file">.env</a> format</li>
      <li>It uses <a class="design-link" href="https://www.reddit.com/r/cryptography/comments/13kl9ds/how_much_longer_do_you_think_aes_will_last/">AES-256-GCM</a> encryption</li>
      <li><code class="design-code">DOTENV_VAULT_DEVELOPMENT</code> contains encrypted contents of <code class="design-code">.env</code></li>
      <li><code class="design-code">DOTENV_VAULT_PRODUCTION</code> contains encrypted contents of <code class="design-code">.env.production</code></li>
    </ul>

    <h2 class="design-page-title">Generating</h2>
    <p class="design-paragraph">It's generated with <a class="design-link" href="/docs/quickstart/encryption"><code class="design-code">dotenvx encrypt</code></a>. Create your <code class="design-code">.env</code> files like you usually do.</p>

    {% capture vault_env %}
# .env
HELLO="World"
    {% endcapture %}
    {% include components/design-codeblock.html value=vault_env copy=false %}

    {% capture vault_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=vault_env_prod copy=false %}

    <p class="design-paragraph">and then run <code class="design-code">dotenvx encrypt</code>.</p>

    {% capture vault_encrypt %}
$ dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=vault_encrypt copy_text="dotenvx encrypt" %}

    {% capture vault_result %}
#/-------------------.env.vault---------------------/
#/         cloud-agnostic vaulting standard         /
#/  [how it works](https://dotenvx.com/env-vault)   /
#/--------------------------------------------------/
# development
DOTENV_VAULT_DEVELOPMENT="V4NYVn0Pow6Uf2ez2mbHEzTrYURloHL6VDAFRLqnQBppA/OmHI5x5AXoxCMVor7wOg=="
# production
DOTENV_VAULT_PRODUCTION="YZkhtbh1IlzBgIamAAsG5nzGPfH6p8Zbuj9egXoziviVu/eYIyNjJWtIYyhiW/vHhFbqbsvo5+P9b27OC6ZC7qU="
    {% endcapture %}
    {% include components/design-codeblock.html value=vault_result copy=false %}

    <h2 class="design-page-title">History</h2>
    <p class="design-paragraph">The <code class="design-code">.env.vault</code> came out of development work on <a class="design-link" href="https://github.com/dotenv-org/dotenv-vault">dotenv-vault</a> – around early 2023.</p>
    </div>
  </div>
</section>
