---
title: Cloudflare
description: Use dotenvx with Cloudflare Workers and Pages.
permalink: /docs/platforms/cloudflare/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Cloudflare"
  description="Use dotenvx with Cloudflare Workers and Pages."
  mark="cf"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Initial setup</h2>
    <p class="design-paragraph">Select Build System v3 (bun) and install dependencies:</p>

    {% capture cf_install %}
# Install dotenvx and wrangler
bun install @dotenvx/dotenvx wrangler --save
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_install copy_text="bun install @dotenvx/dotenvx wrangler --save" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Cloudflare Workers</h2>
    <p class="design-paragraph">Add dotenvx to your Worker entrypoint to load environment variables at startup:</p>

    {% capture cf_worker %}
// Load .env variables automatically
import '@dotenvx/dotenvx/config'

export default {
  async fetch(request) {
    return new Response(`Hello ${process.env.HELLO}`)
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_worker copy=false %}

    {% capture cf_wrangler %}
name = "dotenvx-worker"
main = "index.js"
compatibility_date = "2025-08-21"
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_wrangler copy=false %}

    <p class="design-paragraph">Add your <code class="design-code">.env</code> file and encrypt it:</p>

    {% capture cf_encrypt %}
# .env
HELLO="World"

bunx dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_encrypt copy=false %}

    <p class="design-paragraph">Set the private key as a Worker secret and deploy:</p>

    {% capture cf_secret %}
wrangler secret put DOTENV_PRIVATE_KEY
wrangler publish
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_secret copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Cloudflare Pages</h2>
    <p class="design-paragraph">For Pages builds, run dotenvx during the build and dev scripts:</p>

    {% capture cf_pages_scripts %}
{
  "scripts": {
    "dev": "dotenvx run -- bun run dev",
    "build": "dotenvx run -- bun run build"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_pages_scripts copy=false %}

    <p class="design-paragraph">In your framework config (e.g. Next.js), expose env vars:</p>

    {% capture cf_next_config %}
export default {
  env: {
    HELLO: process.env.HELLO,
  },
}
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_next_config copy=false %}

    {% capture cf_pages_encrypt %}
# .env.production
HELLO="Production"

bunx dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=cf_pages_encrypt copy=false %}

    <p class="design-paragraph">In the Pages dashboard: Settings → Environment Variables, add <code class="design-code">DOTENV_PRIVATE_KEY</code> from <code class="design-code">.env.keys</code>. Pages injects the encrypted values during build.</p>

    <p class="design-paragraph">For a shorter Workers quickstart, see <a class="design-link" href="/docs/cloudflare-workers">Cloudflare Workers</a>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
