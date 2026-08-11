---
title: Encryption
description: Add encryption to your .env files with a single command. Use dotenvx encrypt.
permalink: /docs/quickstart/encryption/
layout: radar
redirect_from:
  - /docs/quickstarts/encryption
  - /docs/quickstarts/encryption/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Encryption"
  description="Add encryption to your .env files with a single command. Use dotenvx encrypt."
  mark="encrypt"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    {% capture encrypt_setup %}
$ touch .env
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_setup copy_text="dotenvx encrypt" %}

    <p class="design-paragraph">Your <code class="design-code">.env</code> file will now look something like this.</p>

    {% capture encrypt_env %}
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="037cfbfc90234cfdab7eb54050566293789efaa1a35dc420749662db400dc9c4b2"

# .env
HELLO="encrypted:BAZb6wDPFaFeFzq8Ut48oiNFSPtYvJmv4AwVDFVcNKiIcGxrxuRIFGWxZ3xVjxOgOo6w65bWFTpAfbatSz52+VvwDYZ3nFUO828nzovH5ZhsIoxPuPb7K0ZphmNynR7Hxci4a+fB"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_env copy=false %}

    <p class="design-paragraph">The public encryption key <code class="design-code">DOTENV_PUBLIC_KEY</code> is placed at the top of your <code class="design-code">.env</code> file. This allows anyone on your team to encrypt secrets.</p>

    <p class="design-paragraph">The private decryption key <code class="design-code">DOTENV_PRIVATE_KEY</code> is placed in your <code class="design-code">.env.keys</code> file. Only those holding this key can decrypt secrets.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">DOTENV_PRIVATE_KEY</h2>
    <p class="design-paragraph">Locate your <code class="design-code">DOTENV_PRIVATE_KEY</code> in <code class="design-code">.env.keys</code>.</p>

    {% capture encrypt_cat_keys %}
$ cat .env.keys
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_cat_keys copy_text="cat .env.keys" %}

    {% capture encrypt_keys %}
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env
DOTENV_PRIVATE_KEY="81dac4d2c42e67a2c6542d3b943a4674a05c4be5e7e5a40a689be7a3bd49a07e"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_keys copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Run</h2>
    <p class="design-paragraph">In development the <code class="design-code">dotenvx run</code> command reads from your <code class="design-code">.env.keys</code> file to decrypt and inject your secrets at runtime.</p>

    {% capture encrypt_dev %}
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_dev copy_text="dotenvx run -- node index.js" %}

    <p class="design-paragraph">In production, do NOT include your <code class="design-code">.env.keys</code> file. Instead, set your <code class="design-code">DOTENV_PRIVATE_KEY</code> ahead of your <code class="design-code">dotenvx run</code> command and it will smartly run the associated <code class="design-code">.env</code> file — decrypting and injecting your secrets at runtime.</p>

    {% capture encrypt_prod %}
$ dotenvx set HELLO production -f .env.production
$ DOTENV_PRIVATE_KEY_PRODUCTION="4a650a4159790e2341a388ebcd7526036fd33cc6240667c7cd940cde7b11cfaf" dotenvx run -- node index.js
⟐ injected env (2) from .env.production
Hello production
> :-D
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_prod copy=false %}

    <p class="design-paragraph">No more scattering your secrets across multiple third-parties platforms where they <a class="design-link" href="https://techcrunch.com/2023/01/05/circleci-breach/">could leak</a>!</p>

    {% include components/design-video.html
      mp4="https://github.com/user-attachments/assets/48f1ef52-073f-4f91-b1ea-6390795c860d"
    %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
