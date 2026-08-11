---
title: Vercel
description: Use dotenvx with Vercel.
permalink: /docs/platforms/vercel/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Vercel"
  description="Use dotenvx with Vercel."
  mark="vercel"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/vercel">code examples for this guide</a> on GitHub (Next.js and Astro).</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Initial setup</h2>
    <p class="design-paragraph">Create a Next.js app (or Astro), ignore <code class="design-code">.env.keys</code>, and deploy.</p>

    {% capture vercel_create %}
npx create-next-app@latest --example hello-world .
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_create copy_text="npx create-next-app@latest --example hello-world ." %}

    {% capture vercel_page %}
// app/page.tsx
export default function Page() {
  return <h1>Hello {process.env.HELLO}</h1>;
}
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_page copy=false %}

    {% capture vercel_ignore %}
# .vercelignore
.env.keys
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_ignore copy=false %}

    {% capture vercel_gitignore %}
# .gitignore
!.env.production
.env.keys
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_gitignore copy=false %}

    {% capture vercel_deploy %}
npx vercel@latest deploy --prod
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_deploy copy_text="npx vercel@latest deploy --prod" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Run dotenvx</h2>

    {% capture vercel_install %}
npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_install copy_text="npm install @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">For Next.js, swap <code class="design-code">process.env</code> for <code class="design-code">dotenvx.get</code>.</p>

    {% capture vercel_page_dx %}
// app/page.tsx
import * as dotenvx from '@dotenvx/dotenvx';
export default async function Page() {
  return <h1>Hello {await dotenvx.get('HELLO')}</h1>;
}
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_page_dx copy=false %}

    <p class="design-paragraph">Add dotenvx to your scripts.</p>

    {% capture vercel_scripts %}
"scripts": {
  "dotenvx": "dotenvx",
  "dev": "dotenvx run -- next dev --turbo",
  "build": "dotenvx run -- next build",
  "start": "dotenvx run -- next start"
}
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_scripts copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt production</h2>

    {% capture vercel_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_env_prod copy=false %}

    {% capture vercel_encrypt %}
npm run dotenvx -- set HELLO production -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_encrypt copy_text="npm run dotenvx -- set HELLO production -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Set decryption key</h2>
    <p class="design-paragraph">Set <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> on Vercel from your <code class="design-code">.env.keys</code> file.</p>

    {% capture vercel_env_add %}
npx vercel@latest env add DOTENV_PRIVATE_KEY_PRODUCTION
npx vercel@latest deploy --prod
    {% endcapture %}
    {% include components/design-codeblock.html value=vercel_env_add copy=false %}

    <p class="design-paragraph">Your build injects env from the encrypted <code class="design-code">.env.production</code> file.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
