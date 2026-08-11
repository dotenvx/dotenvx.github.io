---
title: Quickstarts
permalink: /docs/quickstarts/
layout: radar
---

<style>
  .docs-hero-ascii {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .docs-hero-ascii-art {
    color: var(--design-ink);
    font-family: var(--design-font-mono);
    font-size: var(--design-text-title);
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 1;
    margin: 0;
    text-align: center;
    user-select: none;
    white-space: pre;
  }

  @media (min-width: 900px) {
    .docs-hero-ascii {
      height: 100%;
      min-height: inherit;
    }
  }

</style>

{% capture docs_hero_visual %}
  <div class="docs-hero-ascii" aria-hidden="true">
    <pre class="docs-hero-ascii-art">0 ──&gt; 1</pre>
  </div>
{% endcapture %}

{% include components/design-hero.html
  class="company-design-hero docs-design-hero"

  eyebrow="Docs"
  eyebrow_href="/docs/introduction"
  title="Quickstarts"
  description="Use dotenvx with the tools and languages you already know and love. It works pretty much everywhere that we know of."
  visual=docs_hero_visual
%}

{% capture qs_cli_items %}
  <li>
    <a class="design-link" href="/docs/cli-quickstart">CLI</a>
    <span class="design-list-meta">dotenvx encrypt</span>
  </li>
{% endcapture %}

{% capture qs_agents_items %}
  <li>
    <a class="design-link" href="/docs/claude">Claude</a>
    <span class="design-list-meta">dotenvx run --redact -- claude</span>
  </li>
  <li>
    <a class="design-link" href="/docs/codex">Codex</a>
    <span class="design-list-meta">dotenvx run --redact -- codex</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cursor">Cursor</a>
    <span class="design-list-meta">dotenvx run --redact -- cursor</span>
  </li>
{% endcapture %}

{% capture qs_password_managers_items %}
  <li>
    <a class="design-link" href="/docs/1password">1Password</a>
    <span class="design-list-meta">op://</span>
  </li>
  <li>
    <a class="design-link" href="/docs/bitwarden">Bitwarden</a>
    <span class="design-list-meta">bw://</span>
  </li>
{% endcapture %}

{% capture qs_nodejs_items %}
  <li>
    <a class="design-link" href="/docs/nodejs">Node.js</a>
    <span class="design-list-meta">require('@dotenvx/dotenvx').config()</span>
  </li>
  <li>
    <a class="design-link" href="/docs/nextjs">Next.js</a>
    <span class="design-list-meta">npm install @dotenvx/next-env</span>
  </li>
  <li>
    <a class="design-link" href="/docs/express">Express</a>
    <span class="design-list-meta">require('@dotenvx/dotenvx').config()</span>
  </li>
  <li>
    <a class="design-link" href="/docs/astro">Astro</a>
    <span class="design-list-meta">dotenvx run -- astro</span>
  </li>
  <li>
    <a class="design-link" href="/docs/remix">Remix</a>
    <span class="design-list-meta">dotenvx run -- remix</span>
  </li>
  <li>
    <a class="design-link" href="/docs/expo">Expo</a>
    <span class="design-list-meta">dotenvx run -- expo</span>
  </li>
  <li>
    <a class="design-link" href="/docs/bun">Bun</a>
    <span class="design-list-meta">require('@dotenvx/dotenvx').config()</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cloudflare-workers">Cloudflare Workers</a>
    <span class="design-list-meta">import dotenvx from '@dotenvx/dotenvx'</span>
  </li>
{% endcapture %}

{% capture qs_python_items %}
  <li>
    <a class="design-link" href="/docs/python">Python</a>
    <span class="design-list-meta">pip install python-dotenvx</span>
  </li>
  <li>
    <a class="design-link" href="/docs/flask">Flask</a>
    <span class="design-list-meta">pip install python-dotenvx</span>
  </li>
  <li>
    <a class="design-link" href="/docs/uv">uv</a>
    <span class="design-list-meta">dotenvx run -- uv run</span>
  </li>
{% endcapture %}

{% capture qs_php_items %}
  <li>
    <a class="design-link" href="/docs/php">PHP</a>
    <span class="design-list-meta">dotenvx run -- php index.php</span>
  </li>
{% endcapture %}

{% capture qs_ruby_items %}
  <li>
    <a class="design-link" href="/docs/ruby">Ruby</a>
    <span class="design-list-meta">gem install dotenvx</span>
  </li>
  <li>
    <a class="design-link" href="/docs/rails">Rails</a>
    <span class="design-list-meta">gem "dotenvx-rails"</span>
  </li>
  <li>
    <a class="design-link" href="/docs/sinatra">Sinatra</a>
    <span class="design-list-meta">gem install dotenvx</span>
  </li>
{% endcapture %}

{% capture qs_go_items %}
  <li>
    <a class="design-link" href="/docs/go">Go</a>
    <span class="design-list-meta">dotenvx run -- go run</span>
  </li>
  <li>
    <a class="design-link" href="/docs/echo">Echo</a>
    <span class="design-list-meta">dotenvx run -- go run</span>
  </li>
{% endcapture %}

{% capture qs_rust_items %}
  <li>
    <a class="design-link" href="/docs/rust">Rust</a>
    <span class="design-list-meta">dotenvx run -- cargo run</span>
  </li>
  <li>
    <a class="design-link" href="/docs/rocket">Rocket</a>
    <span class="design-list-meta">platforms</span>
  </li>
{% endcapture %}

{% capture qs_java_items %}
  <li>
    <a class="design-link" href="/docs/java">Java</a>
    <span class="design-list-meta">dotenvx run -- java</span>
  </li>
  <li>
    <a class="design-link" href="/docs/kotlin">Kotlin</a>
    <span class="design-list-meta">dotenvx run -- kotlin</span>
  </li>
  <li>
    <a class="design-link" href="/docs/clojure">Clojure</a>
    <span class="design-list-meta">dotenvx run -- clj</span>
  </li>
{% endcapture %}

{% capture qs_dotnet_items %}
  <li>
    <a class="design-link" href="/docs/dotnet">.NET</a>
    <span class="design-list-meta">dotenvx run -- dotnet run</span>
  </li>
{% endcapture %}

{% capture qs_docker_items %}
  <li>
    <a class="design-link" href="/docs/docker">Docker</a>
    <span class="design-list-meta">Dockerfile</span>
  </li>
  <li>
    <a class="design-link" href="/docs/docker-compose">Docker Compose</a>
    <span class="design-list-meta">compose.yml</span>
  </li>
{% endcapture %}

{% capture qs_ci_items %}
  <li>
    <a class="design-link" href="/docs/github-actions">GitHub Actions</a>
    <span class="design-list-meta">.github/workflows</span>
  </li>
{% endcapture %}

{% capture qs_package_managers_items %}
  <li>
    <a class="design-link" href="/docs/package-managers/npm">npm</a>
    <span class="design-list-meta">dotenvx run --</span>
  </li>
  <li>
    <a class="design-link" href="/docs/package-managers/pnpm">pnpm</a>
    <span class="design-list-meta">like npm</span>
  </li>
{% endcapture %}

{% capture qs_process_managers_items %}
  <li>
    <a class="design-link" href="/docs/process-managers/pm2">PM2</a>
    <span class="design-list-meta">pm2-runtime</span>
  </li>
{% endcapture %}

{% capture qs_background_jobs_items %}
  <li>
    <a class="design-link" href="/docs/background-jobs/triggerdotdev">Trigger.dev</a>
    <span class="design-list-meta">dotenv.config</span>
  </li>
{% endcapture %}

{% capture qs_monorepos_items %}
  <li>
    <a class="design-link" href="/docs/monorepos">Monorepos</a>
    <span class="design-list-meta">dotenvx run -f</span>
  </li>
  <li>
    <a class="design-link" href="/docs/nx">Nx</a>
    <span class="design-list-meta">dotenvx run -- nx</span>
  </li>
  <li>
    <a class="design-link" href="/docs/turborepo">Turborepo</a>
    <span class="design-list-meta">dotenvx run -- turbo</span>
  </li>
{% endcapture %}

{% capture qs_other_items %}
  <li>
    <a class="design-link" href="/docs/bash">Bash</a>
    <span class="design-list-meta">dotenvx run -- bash</span>
  </li>
  <li>
    <a class="design-link" href="/docs/fish">Fish</a>
    <span class="design-list-meta">dotenvx run -- fish</span>
  </li>
  <li>
    <a class="design-link" href="/docs/zsh">Zsh</a>
    <span class="design-list-meta">dotenvx run -- zsh</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cron">Cron</a>
    <span class="design-list-meta">crontab</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-quickstarts-lists">
      {% capture step_content %}
        {% include components/design-list.html title="CLI" items=qs_cli_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Coding Agents" items=qs_agents_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="CI" items=qs_ci_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Node.js" items=qs_nodejs_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Python" items=qs_python_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="PHP" items=qs_php_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Ruby" items=qs_ruby_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Go" items=qs_go_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Rust" items=qs_rust_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Java" items=qs_java_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title=".NET" items=qs_dotnet_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Docker" items=qs_docker_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Package Managers" items=qs_package_managers_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Process Managers" items=qs_process_managers_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Background Jobs" items=qs_background_jobs_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Monorepos" items=qs_monorepos_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Other" items=qs_other_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html title="Password Managers" items=qs_password_managers_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>
  </div>
</section>
