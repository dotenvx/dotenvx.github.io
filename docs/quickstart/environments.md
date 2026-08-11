---
title: Multiple Environments
description: Run any environment locally. Create a .env.ENVIRONMENT file and use -f to load it. It's straightforward, yet flexible.
permalink: /docs/quickstart/environments/
layout: radar
redirect_from:
  - /docs/quickstarts/environments
  - /docs/quickstarts/environments/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Multiple Environments"
  description="Run any environment locally. Create a .env.ENVIRONMENT file and use -f to load it. It's straightforward, yet flexible."
  mark="-f"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <h2 class="design-page-title">--env-file</h2>

    {% capture env_file %}
$ echo "HELLO=production" > .env.production
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f=.env.production -- node index.js
Hello production
> ^^
    {% endcapture %}
    {% include components/design-codeblock.html value=env_file copy_text="dotenvx run -f=.env.production -- node index.js" %}

    <h2 class="design-page-title">--env-file (multiple)</h2>

    {% capture env_file_multi %}
$ echo "HELLO=local" > .env.local
$ echo "HELLO=World" > .env
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f=.env.local -f=.env -- node index.js
Hello local
    {% endcapture %}
    {% include components/design-codeblock.html value=env_file_multi copy_text="dotenvx run -f=.env.local -f=.env -- node index.js" %}

    <p class="design-paragraph">The order matters. The first <code class="design-code">-f</code> will 'win' for an environment variable. You can use <code class="design-code">--overload</code> if you prefer the last to 'win'.</p>

    <h2 class="design-page-title">--overload</h2>

    {% capture env_overload %}
$ echo "HELLO=local" > .env.local
$ echo "HELLO=World" > .env
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f=.env.local -f=.env --overload -- node index.js
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=env_overload copy_text="dotenvx run -f=.env.local -f=.env --overload -- node index.js" %}

    <p class="design-paragraph">Keep in mind that <code class="design-code">--overload</code> will also overload any environment variables already set on your machine or server. Use <code class="design-code">--verbose</code> to get better visibility into this.</p>

    <h2 class="design-page-title">--verbose</h2>

    {% capture env_verbose %}
$ echo "HELLO=production" > .env.production
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f=.env.production --verbose -- node index.js
┆ loading env from .env.production (/path/to/.env.production)
┆ HELLO set
⟐ injected env (1) from .env.production
Hello production
    {% endcapture %}
    {% include components/design-codeblock.html value=env_verbose copy_text="dotenvx run -f=.env.production --verbose -- node index.js" %}

    <p class="design-paragraph">If you also want to see the secret value being set, use <code class="design-code">--debug</code>.</p>

    <h2 class="design-page-title">--debug</h2>

    {% capture env_debug %}
$ echo "HELLO=production" > .env.production
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f=.env.production --debug -- node index.js
┆ loading env from .env.production (/path/to/.env.production)
┆ {"HELLO":"production"}
┆ HELLO set
┆ HELLO set to production
⟐ injected env (1) from .env.production
Hello production
    {% endcapture %}
    {% include components/design-codeblock.html value=env_debug copy_text="dotenvx run -f=.env.production --debug -- node index.js" %}

    <p class="design-paragraph">Be careful with <code class="design-code">--debug</code> as this will leak your secrets out to your logs unless you've configured your logs to avoid it.</p>

    {% include components/design-video.html
      mp4="https://github.com/user-attachments/assets/aea4176e-52ba-4e78-8448-9563207d55f5"
    %}
    </div>
  </div>
</section>
