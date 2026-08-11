---
title: PM2
description: Use dotenvx with PM2.
permalink: /docs/process-managers/pm2/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="PM2"
  description="Use dotenvx with PM2."
  mark="pm2"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/process-managers/pm2">code examples for this guide</a> on GitHub.</p>

    <h2 class="design-page-title">Initial setup</h2>
    <p class="design-paragraph">Generate an <code class="design-code">ecosystem.config.js</code> file.</p>

    {% capture pm2_init %}
pm2 init
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_init copy_text="pm2 init" %}

    <p class="design-paragraph">Modify it to your needs. Something like this.</p>

    {% capture pm2_ecosystem %}
module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }]
};
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_ecosystem copy=false %}

    <p class="design-paragraph">Your <code class="design-code">index.js</code> file should look something like this.</p>

    {% capture pm2_index %}
// index.js
const PORT = process.env.PORT || 3000
const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${process.env.HELLO}`)
});

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
});
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_index copy=false %}

    <h2 class="design-page-title">Run dotenvx</h2>
    <p class="design-paragraph">Add <code class="design-code">@dotenvx/dotenvx</code> and <code class="design-code">pm2</code> as dependencies.</p>

    {% capture pm2_install %}
npm install @dotenvx/dotenvx --save
npm install pm2 --save
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_install copy=false %}

    <p class="design-paragraph">Then, in your <code class="design-code">package.json</code>, modify your start script.</p>

    {% capture pm2_pkg %}
{
  "scripts": {
    "start": "dotenvx run -- pm2-runtime start ecosystem.config.js --env production"
  },
  "dependencies": {
    "@dotenvx/dotenvx": "^1.48.4",
    "pm2": "^5.3.0"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_pkg copy=false %}

    <p class="design-paragraph">Create a <code class="design-code">.env</code> file in the root of your project.</p>

    {% capture pm2_env %}
# .env
HELLO="World"
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_env copy=false %}

    <p class="design-paragraph">Inject your env using your start script — which is using dotenvx and pm2.</p>

    {% capture pm2_start %}
npm start
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_start copy_text="npm start" %}

    <p class="design-paragraph">Your app will say <code class="design-code">Hello World</code>. That covers local development. Let's solve for production next.</p>

    <h2 class="design-page-title">Add production environment</h2>
    <p class="design-paragraph">Create a <code class="design-code">.env.production</code> file in the root of your project.</p>

    {% capture pm2_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_env_prod copy=false %}

    <p class="design-paragraph">Modify your start script to load your <code class="design-code">.env.production</code> file.</p>

    {% capture pm2_pkg_prod %}
{
  "scripts": {
    "start": "dotenvx run -f .env.production -- pm2-runtime start ecosystem.config.js --env production"
  },
  ...
}
    {% endcapture %}
    {% include components/design-codeblock.html value=pm2_pkg_prod copy=false %}

    <p class="design-paragraph">Your app will say <code class="design-code">Hello production</code>, simulating production.</p>
    </div>
  </div>
</section>
