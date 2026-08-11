---
title: Fly
description: Use dotenvx with Fly.
permalink: /docs/platforms/fly/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Fly"
  description="Use dotenvx with Fly."
  mark="fly"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/fly">code examples for this guide</a> on GitHub.</p>

    <h2 class="design-page-title">Initial setup</h2>
    <p class="design-paragraph">Create a Hello World app, a <code class="design-code">Dockerfile</code>, and <code class="design-code">fly.toml</code>, then deploy.</p>

    {% capture fly_dockerfile %}
# Dockerfile
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_dockerfile copy=false %}

    {% capture fly_dockerignore %}
# .dockerignore
.env.keys
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_dockerignore copy=false %}

    {% capture fly_toml %}
[http_service]
  internal_port = 3000
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_toml copy=false %}

    {% capture fly_deploy %}
flyctl launch
flyctl deploy
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_deploy copy=false %}

    <h2 class="design-page-title">Run dotenvx</h2>
    <p class="design-paragraph">Install dotenvx in your <code class="design-code">Dockerfile</code> and prepend your app command with <code class="design-code">dotenvx run --</code>.</p>

    {% capture fly_dockerfile_dx %}
# Dockerfile
FROM node:20
WORKDIR /app

# Install dotenvx
RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Prepend dotenvx run
CMD ["dotenvx", "run", "--", "node", "index.js"]
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_dockerfile_dx copy=false %}

    <p class="design-paragraph">If you prefer, <a class="design-link" href="/docs/learn/installing#github">install from GitHub Releases</a> or view the <a class="design-link" href="https://dotenvx.sh/install.sh">install.sh</a> file before executing.</p>

    <h2 class="design-page-title">Encrypt production</h2>

    {% capture fly_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_env_prod copy=false %}

    {% capture fly_encrypt %}
$ dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>.</p>

    <h2 class="design-page-title">Set decryption key</h2>

    {% capture fly_secrets %}
flyctl secrets set DOTENV_PRIVATE_KEY_PRODUCTION='your-private-key'
flyctl deploy
    {% endcapture %}
    {% include components/design-codeblock.html value=fly_secrets copy=false %}

    <p class="design-paragraph">Your app restarts and env is injected from the encrypted <code class="design-code">.env.production</code> file.</p>
    </div>
  </div>
</section>
