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

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

[Deprecated](/docs/deprecated) — The `.env.vault` file has been DEPRECATED since May 2024. Please see [updated encryption instructions](/docs/quickstart).

`.env.vault` is an encrypted version of your .env file. Here is what it looks like.

```dotenv
#/-------------------.env.vault---------------------/
#/         cloud-agnostic vaulting standard         /
#/  [how it works](https://dotenvx.com/env-vault)   /
#/--------------------------------------------------/
# development
DOTENV_VAULT_DEVELOPMENT="V4NYVn0Pow6Uf2ez2mbHEzTrYURloHL6VDAFRLqnQBppA/OmHI5x5AXoxCMVor7wOg=="
# production
DOTENV_VAULT_PRODUCTION="YZkhtbh1IlzBgIamAAsG5nzGPfH6p8Zbuj9egXoziviVu/eYIyNjJWtIYyhiW/vHhFbqbsvo5+P9b27OC6ZC7qU="
```
{: copy="false"}

Some quick takeaways:

<ul class="design-bullets">
<li>It uses the <a class="design-link" href="/docs/env-file">.env</a> format</li>
<li>It uses <a class="design-link" href="https://www.reddit.com/r/cryptography/comments/13kl9ds/how_much_longer_do_you_think_aes_will_last/">AES-256-GCM</a> encryption</li>
<li><code class="design-code">DOTENV_VAULT_DEVELOPMENT</code> contains encrypted contents of <code class="design-code">.env</code></li>
<li><code class="design-code">DOTENV_VAULT_PRODUCTION</code> contains encrypted contents of <code class="design-code">.env.production</code></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Generating

It's generated with [`dotenvx encrypt`](/docs/quickstart). Create your `.env` files like you usually do.

```dotenv
# .env
HELLO="World"
```
{: copy="false"}

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

and then run `dotenvx encrypt`.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

```dotenv
#/-------------------.env.vault---------------------/
#/         cloud-agnostic vaulting standard         /
#/  [how it works](https://dotenvx.com/env-vault)   /
#/--------------------------------------------------/
# development
DOTENV_VAULT_DEVELOPMENT="V4NYVn0Pow6Uf2ez2mbHEzTrYURloHL6VDAFRLqnQBppA/OmHI5x5AXoxCMVor7wOg=="
# production
DOTENV_VAULT_PRODUCTION="YZkhtbh1IlzBgIamAAsG5nzGPfH6p8Zbuj9egXoziviVu/eYIyNjJWtIYyhiW/vHhFbqbsvo5+P9b27OC6ZC7qU="
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## History

The `.env.vault` came out of development work on [dotenv-vault](https://github.com/dotenv-org/dotenv-vault) – around early 2023.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
