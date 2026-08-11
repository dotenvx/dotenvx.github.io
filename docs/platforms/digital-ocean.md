---
title: DigitalOcean
description: Use dotenvx with DigitalOcean.
permalink: /docs/platforms/digital-ocean/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="DigitalOcean"
  description="Use dotenvx with DigitalOcean."
  mark="do"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/docker">code examples for this guide</a> on GitHub.</p>

    <p class="design-paragraph">DigitalOcean has multiple deploy paths—<a class="design-link" href="https://docs.digitalocean.com/products/droplets/getting-started/quickstart/">droplets</a>, <a class="design-link" href="https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/">Kubernetes</a>, and <a class="design-link" href="https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/">App Platform</a>. This guide assumes Docker (the most common path).</p>

    <h2 class="design-page-title">Dockerfile</h2>

    {% capture do_dockerignore %}
# .dockerignore
.env.keys
    {% endcapture %}
    {% include components/design-codeblock.html value=do_dockerignore copy=false %}

    {% capture do_dockerfile %}
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
    {% include components/design-codeblock.html value=do_dockerfile copy=false %}

    <h2 class="design-page-title">Encrypt production</h2>

    {% capture do_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=do_env_prod copy=false %}

    {% capture do_encrypt %}
$ dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=do_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>.</p>

    <h2 class="design-page-title">Set decryption key</h2>
    <p class="design-paragraph">Set <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> in DigitalOcean's environment variable manager (or pass it into <code class="design-code">docker run -e</code>), then redeploy. Your app injects env from the encrypted <code class="design-code">.env.production</code> file.</p>
    </div>
  </div>
</section>
