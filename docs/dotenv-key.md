---
title: "DOTENV_KEY (deprecated)"
description: "DOTENV_KEY is used to decrypt an environment inside your .env.vault file."
permalink: /docs/dotenv-key/
layout: radar
redirect_from:
  - /docs/dotenv_key
  - /docs/dotenv_key/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="DOTENV_KEY (deprecated)"
  description="DOTENV_KEY is used to decrypt an environment inside your .env.vault file."
  mark="DOTENV_KEY"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph"><a class="design-link" href="/docs/deprecated">Deprecated</a> — The <code class="design-code">DOTENV_KEY</code> has been DEPRECATED since May 2024. Please see <a class="design-link" href="/docs/quickstart/encryption">updated encryption instructions</a>.</p>

    <p class="design-paragraph"><code class="design-code">DOTENV_KEY</code> is used to decrypt an environment inside your <code class="design-code">.env.vault</code> file.</p>

    <p class="design-paragraph">If a <code class="design-code">DOTENV_KEY</code> is set on your server and a <code class="design-code">.env.vault</code> exists in your code, <code class="design-code">dotenvx run</code> will attempt to decrypt your <code class="design-code">.env.vault</code> file and inject its secrets just in time.</p>

    <p class="design-paragraph">For example:</p>

    {% capture dotenv_key_example %}
DOTENV_KEY=dotenv://:key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e@dotenvx.com/vault/.env.vault?environment=production dotenv run -- yourcommand
    {% endcapture %}
    {% include components/design-codeblock.html value=dotenv_key_example copy=false %}

    <h2 class="design-list-title">Spec</h2>
    <p class="design-paragraph">A <code class="design-code">DOTENV_KEY</code> uses the tried and true uri format. This trusted yet flexible format can grow as dotenvx grows.</p>

    {% capture dotenv_key_url %}
$ node
new URL('dotenv://:key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e@dotenvx.com/vault/.env.vault?environment=production')
URL {
  href: 'dotenv://:key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e@dotenvx.com/vault/.env.vault?environment=production',
  origin: 'null',
  protocol: 'dotenv:',
  username: '',
  password: 'key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e',
  host: 'dotenvx.com',
  hostname: 'dotenvx.com',
  port: '',
  pathname: '/vault/.env.vault',
  search: '?environment=production',
  searchParams: URLSearchParams { 'environment' => 'production' },
  hash: ''
}
    {% endcapture %}
    {% include components/design-codeblock.html value=dotenv_key_url copy=false %}

    <p class="design-paragraph">Required:</p>
    <ul class="design-bullets">
      <li><strong>protocol</strong>: <code class="design-code">dotenv:</code> (good practice to communicate this as a <code class="design-code">DOTENV_KEY</code>)</li>
      <li><strong>password</strong>: <code class="design-code">key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e</code> (last 64 bytes are used to decrypt <code class="design-code">DOTENV_VAULT_environment</code> in your <code class="design-code">.env.vault</code> file. this way we can support other generators in the future like your own <code class="design-code">yourowngenerator_64bytes..</code>)</li>
      <li><strong>host</strong>: <code class="design-code">dotenvx.com</code> (can be anything at this time. dotenvx.com is used to communicate that this key was generated with <a class="design-link" href="https://dotenvx.com">dotenvx</a>)</li>
      <li><strong>params.environment</strong>: <code class="design-code">production</code> (specifies which <code class="design-code">DOTENV_VAULT_environment</code> to decrypt from your <code class="design-code">.env.vault</code> file)</li>
    </ul>

    <p class="design-paragraph">Optional/Not-in-use:</p>
    <ul class="design-bullets">
      <li><strong>username</strong>: (not in use at this time)</li>
      <li><strong>pathname</strong>: <code class="design-code">/vault/.env.vault</code> (can be anything at this time. in the future, might be used to combine multiple vaults)</li>
    </ul>
    </div>
  </div>
</section>
