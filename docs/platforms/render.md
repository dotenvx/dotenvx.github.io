---
title: Render
description: Use dotenvx with Render.
permalink: /docs/platforms/render/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Render"
  description="Use dotenvx with Render."
  mark="render"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/docker">code examples for this guide</a> on GitHub.</p>

    <p class="design-paragraph">Deploying to <a class="design-link" href="https://render.com">Render</a> takes more steps than we document here. Follow their <a class="design-link" href="https://docs.render.com/docker#docker-builds-on-render">Docker guide</a> (Render recognizes your <code class="design-code">Dockerfile</code> automatically). This guide shows the dotenvx pieces in a Docker context.</p>

    <h2 class="design-page-title">Dockerfile</h2>

    {% capture render_dockerignore %}
# .dockerignore
.env.keys
    {% endcapture %}
    {% include components/design-codeblock.html value=render_dockerignore copy=false %}

    {% capture render_dockerfile %}
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
    {% include components/design-codeblock.html value=render_dockerfile copy=false %}

    <p class="design-paragraph">If you prefer, <a class="design-link" href="/docs/learn/installing#github">install from GitHub Releases</a> or view the <a class="design-link" href="https://dotenvx.sh/install.sh">install.sh</a> file before executing.</p>

    <h2 class="design-page-title">Encrypt production</h2>

    {% capture render_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=render_env_prod copy=false %}

    {% capture render_encrypt %}
$ dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=render_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>.</p>

    <h2 class="design-page-title">Set decryption key</h2>
    <p class="design-paragraph">Set <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> in Render's environment variable manager, then redeploy. Your app injects env from the encrypted <code class="design-code">.env.production</code> file.</p>
    </div>
  </div>
</section>
