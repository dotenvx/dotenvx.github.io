---
title: ".env.keys (old format deprecated)"
description: "(DEPRECATED) The .env.keys file contains holds environment DOTENV_KEYs"
permalink: /docs/env-keys-file-deprecated/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env.keys (old format deprecated)"
  description="The .env.keys file holds environment DOTENV_KEYs."
  mark=".env.keys"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

[Deprecated](/docs/deprecated) — The format detailed here has been DEPRECATED since May 2024. Please see [updated .env.keys file format](/docs/env-keys-file).

`.env.keys` holds your environment decryption DOTENV_KEYs. Here is what it looks like.

```dotenv
#/!!!!!!!!!!!!!!!!!!!.env.keys!!!!!!!!!!!!!!!!!!!!!!/
#/   DOTENV_KEYs. DO NOT commit to source control   /
#/   [how it works](https://dotenv.org/env-keys)    /
#/--------------------------------------------------/
DOTENV_KEY_DEVELOPMENT="dotenv://:key_e507c60efa8841d8d5bbb85bd701ee92406cf3b06506d1d80f1553c2a72791e4@dotenvx.com/vault/.env.vault?environment=development"
DOTENV_KEY_PRODUCTION="dotenv://:key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e@dotenvx.com/vault/.env.vault?environment=production"
```
{: copy="false"}

Some quick takeaways:

<ul class="design-bullets">
<li>It uses the <a class="design-link" href="/docs/env-file">.env</a> format</li>
<li><code class="design-code">DOTENV_KEY_DEVELOPMENT</code> contains the decryption key to <code class="design-code">DOTENV_VAULT_DEVELOPMENT</code> in <a class="design-link" href="/docs/env-vault-file">.env.vault</a></li>
<li><code class="design-code">DOTENV_KEY_PRODUCTION</code> contains the decryption key to <code class="design-code">DOTENV_VAULT_PRODUCTION</code> in <a class="design-link" href="/docs/env-vault-file">.env.vault</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Generating

It's auto-generated when running [`dotenvx encrypt`](/docs/quickstart).

```console
$ dotenvx encrypt
◈ encrypted to .env.vault (.env)
◈ key added to .env.keys (DOTENV_KEY_DEVELOPMENT)
```
{: copy="dotenvx encrypt"}

Do not commit `.env.keys` to source code. Keep them somewhere safe like 1Password or [Armor ⛨](/armor).

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## History

The `.env.keys` file came out of development work on [dotenv-vault](https://github.com/dotenv-org/dotenv-vault) – around early 2023.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
