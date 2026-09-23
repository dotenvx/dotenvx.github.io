---
layout: radar
body_class: home-page dotenv-page
title: "Dotenv · Load your .env and get to work"
description: "The official dotenv quickstart, SDK, and CLI reference. Load environment variables from .env files in your application or before any command."
permalink: /docs/dotenv
og_image:
  title: "Dotenv. Load your .env and get to work."
---

<style>
  .dotenv-page .dotenv-jump-links { display: flex; flex-wrap: wrap; justify-content: center; gap: .75rem 1.5rem; margin-bottom: 1.5rem; }
  .dotenv-page .dotenv-section { scroll-margin-top: 6rem; }
  .dotenv-page .dotenv-demo { max-width: 30rem; margin: 2rem auto; }
  .dotenv-page .design-table-wrap { margin-block: 1.5rem; }
  .dotenv-page .design-table td { vertical-align: top; }
  .dotenv-page .design-prose { overflow-wrap: anywhere; }
</style>

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Dotenv">
    <div class="armor-shell">
      {% capture dotenv_actions %}
        {% include components/design-btn.html label="Get started" href="#quickstart" %}
        {% include components/design-btn.html label="View on GitHub" href="https://github.com/motdotla/dotenv" %}
      {% endcapture %}
      {% include components/design-hero.html compact=true secondary=true name="Dotenv" name_heading=true description="Load your .env and get to work. In your app, or before any command." actions=dotenv_actions %}
    </div>
  </section>

  <section class="radar-section">
    <div class="armor-shell">
      {% capture dotenv_content %}
      <nav class="dotenv-jump-links" aria-label="On this page">
        <a class="design-link" href="#quickstart">Quickstart</a>
        <a class="design-link" href="#demo">Video</a>
        <a class="design-link" href="#sdk">SDK</a>
        <a class="design-link" href="#cli">CLI</a>
        <a class="design-link" href="#common-questions">FAQ</a>
      </nav>

      <p>Dotenv is a zero-dependency module that loads variables from a .env file into process.env. Keep configuration separate from code, following <a href="https://12factor.net/config">The Twelve-Factor App</a>.</p>

      <section id="quickstart" class="dotenv-section" aria-labelledby="quickstart-title">
        <h2 id="quickstart-title">Quickstart</h2>
        <p>Install dotenv in your project.</p>
        {% include components/design-codeblock.html value="npm install dotenv --save" language="bash" %}
        <p>Create a .env file in the root of your project.</p>
        {% capture dotenv_env %}
# .env
HELLO="Dotenv"
OPENAI_API_KEY="your-api-key-goes-here"
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_env language="dotenv" %}
        <p>Load dotenv as early as possible in your application.</p>
        {% capture dotenv_app %}
// index.js
require('dotenv').config()
// or import 'dotenv/config' // for ESM

console.log(`Hello ${process.env.HELLO}`)
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_app language="javascript" %}
        {% capture dotenv_output %}
$ node index.js
◇ injected env (2) from .env
Hello Dotenv
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_output copy_text="node index.js" format="cli" %}
        <p>That's it. Your variables are now available in process.env.</p>
        <h3>Prefer the command line?</h3>
        <p>Dotenv 18 includes a CLI. Load your .env before the command starts, with no dotenv import needed in your app.</p>
        {% include components/design-codeblock.html value="npx dotenv run -- node index.js" language="bash" %}
      </section>

      <div id="demo" class="dotenv-demo dotenv-section">
        {% include components/design-video.html mp4="https://github.com/user-attachments/assets/79395e92-5ce0-430d-b8b5-31631aac25bb" title="Watch the 30 second demo" %}
      </div>

      <section id="sdk" class="dotenv-section" aria-labelledby="sdk-title">
        <h2 id="sdk-title">SDK</h2>
        <p>Three functions for loading, parsing, and populating environment variables.</p>
        <h3>config</h3>
        <p>Read your .env file, parse its contents, and assign the values to process.env. Returns an object with parsed values, or an error if loading fails.</p>
        {% capture dotenv_config %}
const dotenv = require('dotenv')
const result = dotenv.config({ path: ['.env.local', '.env'] })

if (result.error) throw result.error
console.log(result.parsed)
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_config language="javascript" %}
        {% capture sdk_options %}
        <thead><tr><th scope="col">Option</th><th scope="col">Default</th><th scope="col">What it does</th></tr></thead>
        <tbody>
          <tr><td>path</td><td>.env</td><td>File path, file URL, or an array of paths. Defaults to .env in the current working directory.</td></tr>
          <tr><td>quiet</td><td>false</td><td>Suppress the injected environment variables message.</td></tr>
          <tr><td>encoding</td><td>utf8</td><td>Encoding of your .env file.</td></tr>
          <tr><td>debug</td><td>false</td><td>Enable debug logging.</td></tr>
          <tr><td>override</td><td>false</td><td>Overwrite existing variables. Later files win when loading multiple files.</td></tr>
          <tr><td>fast</td><td>false</td><td>Use the faster character-scanner parser.</td></tr>
          <tr><td>processEnv</td><td>process.env</td><td>Write values to another object instead.</td></tr>
        </tbody>
        {% endcapture %}
        {% include components/design-table.html content=sdk_options class="design-table-wrap--fill" %}
        <p>By default, existing environment variables take precedence. Across multiple files, the first value wins. With override enabled, the last value wins.</p>
        <h3>parse</h3>
        <p>Turn a string or Buffer into an object of keys and values, without changing your environment. Pass debug: true as an option for diagnostic output.</p>
        {% capture dotenv_parse %}
const dotenv = require('dotenv')
const parsed = dotenv.parse('HELLO="Dotenv"')
// { HELLO: 'Dotenv' }
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_parse language="javascript" %}
        <h3>populate</h3>
        <p>Copy parsed values into a target object. Supports override and debug options, both false by default.</p>
        {% capture dotenv_populate %}
const dotenv = require('dotenv')
const target = { HELLO: 'World' }

dotenv.populate(target, { HELLO: 'Dotenv' }, { override: true })
console.log(target.HELLO) // Dotenv
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_populate language="javascript" %}
      </section>

      <section id="cli" class="dotenv-section" aria-labelledby="cli-title">
        <h2 id="cli-title">CLI</h2>
        <p>Run scripts, tests, or any executable with variables from your .env file. Use npx dotenv, or dotenv directly in npm scripts.</p>
        <h3>run</h3>
        {% include components/design-codeblock.html value="npx dotenv run [options] -- <command> [args...]" copy=false language="bash" %}
        <p>Select another file with -f, or repeat it to load several files in order.</p>
        {% capture dotenv_cli %}
npx dotenv run -f .env.local -- node index.js
npx dotenv run -f .env.local -f .env -- npm test
        {% endcapture %}
        {% include components/design-codeblock.html value=dotenv_cli language="bash" %}
        <p>Put dotenv options before the command. The -- separator is optional; everything after the command is passed through as its arguments.</p>
        {% capture cli_options %}
        <thead><tr><th scope="col">Option</th><th scope="col">What it does</th></tr></thead>
        <tbody>
          <tr><td>-f, --file &lt;paths&gt;</td><td>Load files in order. Repeat the flag or separate paths with commas. Defaults to .env.</td></tr>
          <tr><td>-q, --quiet</td><td>Suppress the injected environment variables message.</td></tr>
          <tr><td>--debug</td><td>Enable debug logging.</td></tr>
          <tr><td>--override</td><td>Overwrite existing variables. Later files win.</td></tr>
          <tr><td>--fast</td><td>Use the faster character-scanner parser.</td></tr>
          <tr><td>-h, --help</td><td>Show help. Also available as dotenv --help.</td></tr>
        </tbody>
        {% endcapture %}
        {% include components/design-table.html content=cli_options class="design-table-wrap--fill" %}
        <p>Without --override, existing environment variables take precedence and the first value found across files wins. The CLI forwards your command's exit status. A missing default .env is allowed; an explicitly selected missing file stops the command from running.</p>
        <h3>Environment defaults</h3>
        <p>These defaults apply to both config() and the CLI. Explicit options or flags take precedence.</p>
        {% capture env_options %}
        <thead><tr><th scope="col">Variable</th><th scope="col">Default</th></tr></thead>
        <tbody>
          <tr><td>DOTENV_PATH</td><td>.env</td></tr>
          <tr><td>DOTENV_ENCODING</td><td>utf8</td></tr>
          <tr><td>DOTENV_QUIET</td><td>false</td></tr>
          <tr><td>DOTENV_DEBUG</td><td>false</td></tr>
          <tr><td>DOTENV_OVERRIDE</td><td>false</td></tr>
          <tr><td>DOTENV_FAST</td><td>false</td></tr>
        </tbody>
        {% endcapture %}
        {% include components/design-table.html content=env_options class="design-table-wrap--fill" %}
        <p>The legacy DOTENV_CONFIG_* names remain fallbacks when the corresponding DOTENV_* variable is unset. For boolean settings, false, 0, no, off, and an empty value disable the setting.</p>
      </section>

      <section id="common-questions" class="dotenv-section" aria-labelledby="questions-title">
        <h2 id="questions-title">A few common questions</h2>
        <h3>Should I commit my .env file?</h3>
        <p>Keep plaintext secrets out of version control. Use <a href="/">dotenvx</a> if you want to encrypt your .env files and commit them safely while keeping private keys separate.</p>
        <h3>What about ESM?</h3>
        <p>Import dotenv/config before modules that read environment variables, or use the CLI to load variables before Node starts.</p>
        {% include components/design-codeblock.html value="import 'dotenv/config'" language="javascript" %}
        <h3>Does dotenv expand variables?</h3>
        <p>Use <a href="https://github.com/dotenvx/dotenv-expand">dotenv-expand</a> for variable expansion, or <a href="/">dotenvx</a> for expansion, command substitution, and encrypted .env files.</p>
        <p>For parsing rules, framework examples, and more answers, see the <a href="https://github.com/motdotla/dotenv#readme">full README</a>.</p>
      </section>
      <p class="text-center"><a href="https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md">Changelog</a> · <a href="https://www.npmjs.com/package/dotenv">npm</a> · <a href="https://github.com/motdotla/dotenv">GitHub</a></p>
      {% endcapture %}
      {% include components/design-content-width.html content=dotenv_content class="design-prose" %}
    </div>
  </section>
</div>
