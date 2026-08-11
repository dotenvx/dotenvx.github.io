---
title: Railway
description: Use dotenvx with Railway.
permalink: /docs/platforms/railway/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Railway"
  description="Use dotenvx with Railway."
  mark="railway"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/railway">code examples for this guide</a> on GitHub.</p>

    <h2 class="design-list-title">Initial setup</h2>
    <p class="design-paragraph">Create a Hello World app and <code class="design-code">Dockerfile</code>, then deploy to Railway.</p>

    {% capture railway_dockerfile %}
# Dockerfile
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_dockerfile copy=false %}

    {% capture railway_ignore %}
# .railwayignore
.env.keys
!.env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_ignore copy=false %}

    {% capture railway_up %}
npx @railway/cli@latest init
npx @railway/cli@latest up
npx @railway/cli@latest domain
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_up copy=false %}

    <p class="design-paragraph">Set <code class="design-code">PORT</code> to <code class="design-code">3000</code> (or your app's listen port) in the Railway dashboard, then redeploy.</p>

    <h2 class="design-list-title">Run dotenvx</h2>
    <p class="design-paragraph">Install dotenvx in your <code class="design-code">Dockerfile</code> and prepend your app command with <code class="design-code">dotenvx run --</code>.</p>

    {% capture railway_dockerfile_dx %}
# Dockerfile
FROM node:20
WORKDIR /app

RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["dotenvx", "run", "--", "node", "index.js"]
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_dockerfile_dx copy=false %}

    <h2 class="design-list-title">Encrypt production</h2>

    {% capture railway_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_env_prod copy=false %}

    {% capture railway_encrypt %}
$ dotenvx set HELLO production -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_encrypt copy_text="dotenvx set HELLO production -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>.</p>

    <h2 class="design-list-title">Set decryption key</h2>
    <p class="design-paragraph">Set <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> in the Railway environment variable manager (apply the change), then redeploy.</p>

    {% capture railway_redeploy %}
npx @railway/cli@latest up
    {% endcapture %}
    {% include components/design-codeblock.html value=railway_redeploy copy_text="npx @railway/cli@latest up" %}

    <p class="design-paragraph">Your app reboots and env is injected from the encrypted production file.</p>
    </div>
  </div>
</section>
