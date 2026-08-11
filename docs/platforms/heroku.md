---
title: Heroku
description: Use dotenvx with Heroku.
permalink: /docs/platforms/heroku/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Heroku"
  description="Use dotenvx with Heroku."
  mark="heroku"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/heroku">code examples for this guide</a> on GitHub.</p>

    <h2 class="design-page-title">Initial setup</h2>
    <p class="design-paragraph">Add a <code class="design-code">Procfile</code> and a simple Hello World app, then push to Heroku.</p>

    {% capture heroku_procfile %}
# Procfile
web: node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_procfile copy=false %}

    {% capture heroku_app %}
// index.js
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO || ''}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_app copy=false %}

    <h2 class="design-page-title">Run dotenvx</h2>
    <p class="design-paragraph">Install dotenvx via the <a class="design-link" href="https://github.com/dotenvx/heroku-buildpack-dotenvx">dotenvx buildpack</a>.</p>

    {% capture heroku_buildpack %}
heroku buildpacks:add https://github.com/dotenvx/heroku-buildpack-dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_buildpack copy_text="heroku buildpacks:add https://github.com/dotenvx/heroku-buildpack-dotenvx" %}

    <p class="design-paragraph">Update your <code class="design-code">Procfile</code> to use <code class="design-code">dotenvx</code>.</p>

    {% capture heroku_procfile_dx %}
# Procfile
web: dotenvx run -- node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_procfile_dx copy=false %}

    <h2 class="design-page-title">Add production environment</h2>

    {% capture heroku_env_prod %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_env_prod copy=false %}

    <h2 class="design-page-title">Encrypt production</h2>

    {% capture heroku_encrypt %}
$ dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Commit <code class="design-code">.env.production</code>. Do not commit <code class="design-code">.env.keys</code>. Keep private keys somewhere safe like 1Password or <a class="design-link" href="https://dotenvx.com/armor">Armor ⛨</a>.</p>

    <h2 class="design-page-title">Set decryption key</h2>
    <p class="design-paragraph">Set <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> on Heroku from your <code class="design-code">.env.keys</code> file.</p>

    {% capture heroku_config %}
heroku config:set DOTENV_PRIVATE_KEY_PRODUCTION='your-private-key'
git push heroku
    {% endcapture %}
    {% include components/design-codeblock.html value=heroku_config copy=false %}

    <p class="design-paragraph">Your app restarts and env is injected from the encrypted <code class="design-code">.env.production</code> file.</p>
    </div>
  </div>
</section>
