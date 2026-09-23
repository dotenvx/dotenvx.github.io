---
title: Cloudflare
description: Use Dotenvx with Cloudflare.
permalink: /docs/cloudflare/
layout: radar
---

{% capture cloudflare_visual %}
  {% include icons/cloudflare.html class="docs-cloudflare-logo" %}
{% endcapture %}
{% include components/docs-hero.html
  eyebrow="Docs"
  title="Cloudflare"
  description="Use Dotenvx with Cloudflare."
  visual=cloudflare_visual
%}

<div class="armor-shell">
  <div class="design-content-width">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    <p class="design-paragraph">Install wrangler and dotenvx.</p>
    {% capture cf_install %}
$ npm install --save-dev wrangler@latest
$ npm install --save-dev @dotenvx/dotenvx
    {% endcapture %}
    {% capture cf_install_copy %}
npm install --save-dev wrangler@latest
npm install --save-dev @dotenvx/dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_install copy_text=cf_install_copy %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt</h2>
    <p class="design-paragraph">Create .env.production:</p>
    {% capture cf_env %}
# .env.production
HELLO="Production"
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_env %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Deploy</h2>
    <p class="design-paragraph">Deploy it with the dotenvx --secrets-file.</p>
    {% capture cf_deploy_command %}
$ npx wrangler deploy --secrets-file <(npx dotenvx get -f .env.production --strict)
    {% endcapture %}
    {% capture cf_deploy_command_copy %}
npx wrangler deploy --secrets-file <(npx dotenvx get -f .env.production --strict)
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_deploy_command copy_text=cf_deploy_command_copy class="design-codeblock--nowrap" %}
    <p class="design-paragraph">That's it. Your Worker reads env.HELLO just like any other Cloudflare secret.</p>
    {% capture cf_worker %}
// src/index.js
export default {
  async fetch(request, env) {
    return new Response(`Hello ${env.HELLO}`)
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_worker %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Scripts</h2>
    <p class="design-paragraph">Add to your scripts for convenience.</p>
    {% capture cf_package %}
{
  "scripts": {
    "deploy": "bash -c 'wrangler deploy --secrets-file <(dotenvx get -f .env.production --strict)'",
    "preview": "bash -c 'wrangler preview --secrets-file <(dotenvx get -f .env.preview --strict)'"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_package class="design-codeblock--nowrap" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Pages</h2>
    <p class="design-paragraph">Using pages? It is similar to workers.</p>
    {% capture cf_pages %}
$ npx wrangler pages secret bulk <(npx dotenvx get -f .env.production --strict) --project-name my-site
$ npx wrangler pages deploy dist --project-name my-site
    {% endcapture %}
    {% capture cf_pages_copy %}
npx wrangler pages secret bulk <(npx dotenvx get -f .env.production --strict) --project-name my-site
npx wrangler pages deploy dist --project-name my-site
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_pages copy_text=cf_pages_copy class="design-codeblock--nowrap" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}



    {% capture step_content %}
    <hr style="border: 0; border-top: 1px solid var(--design-line); margin: 0 0 2.5rem;">
    <h2 class="design-page-title design-page-title--flush">Advanced</h2>
    <p class="design-paragraph">The above set up is typical for Cloudflare but if you want to get full secrets separation in the spirit of dotenvx you can ship an encrypted .env.txt file to decrypt at runtime.</p>
    <p class="design-paragraph">Install dotenvx.</p>
    {% capture cf_advanced_install %}
$ npm install @dotenvx/dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_advanced_install copy_text="npm install @dotenvx/dotenvx" %}
    <p class="design-paragraph">Encrypt a .env.production.txt file. The .txt extension allows it to be included in the worker as an artifact.</p>
    {% capture cf_advanced_encrypt %}
$ npx dotenvx encrypt -f .env.production.txt
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_advanced_encrypt copy_text="npx dotenvx encrypt -f .env.production.txt" %}
    <p class="design-paragraph">Commit to code.</p>
    {% capture cf_advanced_commit %}
$ git add .env.production.txt
$ git commit -m "encrypt .env.production.txt"
    {% endcapture %}
    {% capture cf_advanced_commit_copy %}
git add .env.production.txt
git commit -m "encrypt .env.production.txt"
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_advanced_commit copy_text=cf_advanced_commit_copy %}
    <p class="design-paragraph">Then inject your encrypted secrets at runtime.</p>
    {% capture cf_advanced_runtime %}
import envSrc from '../.env.production.txt'
import dotenvx from '@dotenvx/dotenvx'

const config = dotenvx.config({ envs: [{ type: 'env', value: envSrc, privateKeyName: 'DOTENV_PRIVATE_KEY_PRODUCTION' }] })
const envx = config.parsed

export default {
  async fetch(request, env, ctx) {
    return new Response(`Hello ${envx.HELLO}`)
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_advanced_runtime %}
    <p class="design-paragraph">Adjust your deploy script to set your production keypair on Cloudflare.</p>
    {% capture cf_advanced_scripts %}
{
  "scripts": {
    "deploy": "bash -c 'wrangler deploy --secrets-file <(dotenvx keypair -f .env.production.txt)'"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_advanced_scripts class="design-codeblock--nowrap" %}
    <p class="design-paragraph">That's it! This gives you advanced protection.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}


  </section>
  </div>
</div>
