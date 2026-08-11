---
title: Netlify
description: Use dotenvx with Netlify.
permalink: /docs/platforms/netlify/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Netlify"
  description="Use dotenvx with Netlify."
  mark="netlify"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/netlify">code examples for this guide</a> on GitHub (Next.js and Astro).</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Initial setup</h2>

    {% capture netlify_create %}
npx create-next-app@latest --example hello-world .
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_create copy_text="npx create-next-app@latest --example hello-world ." %}

    {% capture netlify_toml %}
[[plugins]]
  package = "@netlify/plugin-nextjs"

[build]
  command = "npm run build"
  publish = ".next"
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_toml copy=false %}

    {% capture netlify_deploy %}
npx netlify-cli@latest deploy --build --prod
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_deploy copy_text="npx netlify-cli@latest deploy --build --prod" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Run dotenvx</h2>

    {% capture netlify_install %}
npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_install copy_text="npm install @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">Preload scripts with dotenvx so environment variables inject ahead of build, start, or dev.</p>

    {% capture netlify_scripts %}
"scripts": {
  "dotenvx": "dotenvx",
  "dev": "dotenvx run -- next dev --turbo",
  "build": "dotenvx run -- next build",
  "start": "dotenvx run -- next start"
}
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_scripts copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt production</h2>

    {% capture netlify_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_env_prod copy=false %}

    {% capture netlify_encrypt %}
npm run dotenvx -- set HELLO production -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_encrypt copy_text="npm run dotenvx -- set HELLO production -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Set decryption key</h2>

    {% capture netlify_env_set %}
npx netlify-cli@latest env:set DOTENV_PRIVATE_KEY_PRODUCTION "your-private-key"
npx netlify-cli@latest deploy --build --prod
    {% endcapture %}
    {% include components/design-codeblock.html value=netlify_env_set copy=false %}

    <p class="design-paragraph">Your build injects env from the encrypted <code class="design-code">.env.production</code> file.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
