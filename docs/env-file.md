---
title: ".env"
description: "The .env file separates your secrets from code."
permalink: /docs/env-file/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env"
  description="The .env file separates your secrets from code."
  mark="KEY=VALUE"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <h2 class="design-page-title">Format</h2>
    <p class="design-paragraph"><code class="design-code">.env</code> files use a simple format – key/values separated by an equal sign.</p>

    {% capture env_example %}
# .env
STRIPE_API_KEY=scr_12345
TWILIO_API_KEY=abcd1234
    {% endcapture %}
    {% include components/design-codeblock.html value=env_example copy_text="STRIPE_API_KEY=scr_12345
TWILIO_API_KEY=abcd1234" %}

    <p class="design-paragraph">Then it is loaded into your application code using <code class="design-code">process.env</code> (or your language’s equivalent).</p>

    {% capture env_node %}
console.log('Hello ' + process.env.HELLO)
    {% endcapture %}
    {% include components/design-codeblock.html value=env_node label="Node" %}

    {% capture env_python %}
import os
print("Hello " + os.getenv("HELLO", ""))
    {% endcapture %}
    {% include components/design-codeblock.html value=env_python label="Python" %}

    <p class="design-paragraph">It's a convenient and widely adopted format for separating your secrets and config from your code.</p>

    <h2 class="design-page-title">Use it with dotenvx</h2>
    <p class="design-paragraph">Dotenvx loads the values from your <code class="design-code">.env</code> file and makes them available to your application. Preface your application's command with <code class="design-code">dotenvx run --</code>.</p>

    {% capture env_run %}
$ dotenvx run -- your-app-boot-command
    {% endcapture %}
    {% include components/design-codeblock.html value=env_run copy_text="dotenvx run -- your-app-boot-command" %}

    <p class="design-paragraph"><a class="design-link" href="/docs/quickstarts">Get started with dotenvx →</a></p>

    <h2 class="design-page-title">Keys</h2>
    <p class="design-paragraph">For the sake of portability (and sanity), environment variable names (keys) must consist solely of letters, digits, and the underscore (<code class="design-code">_</code>) and must not begin with a digit. In regex-speak, the names must match the following pattern:</p>

    {% capture env_key_regex %}
[a-zA-Z_]+[a-zA-Z0-9_]*
    {% endcapture %}
    {% include components/design-codeblock.html value=env_key_regex copy=false %}

    <p class="design-paragraph">Example keys:</p>

    {% capture env_key_examples %}
DATABASE_URL  # ok
foobar        # ok (but not recommended. use upcase)
NO-WORK       # <-- invalid !!!
ÜBER          # <-- invalid !!!
2MUCH         # <-- invalid !!!
    {% endcapture %}
    {% include components/design-codeblock.html value=env_key_examples copy=false %}

    <h2 class="design-page-title">Values</h2>
    <p class="design-paragraph">Values are to the right of the equals sign. They may be quoted. Using single quotes will prevent variables from being interpolated.</p>

    {% capture env_values %}
SIMPLE=xyz123
INTERPOLATED="Multiple\nLines"
NON_INTERPOLATED='raw text without variable interpolation'
MULTILINE = `long text here,
e.g. a private SSH key`
    {% endcapture %}
    {% include components/design-codeblock.html value=env_values copy=false %}

    <h2 class="design-page-title">Syntax</h2>
    <p class="design-paragraph">The following syntax rules apply to environment files:</p>
    <ul class="design-bullets">
      <li>Lines beginning with <code class="design-code">#</code> are processed as comments and ignored.</li>
      <li>Blank lines are ignored.</li>
      <li>Unquoted and double-quoted (<code class="design-code">"</code>) values have interpolation applied.</li>
      <li>Each line represents a key-value pair. Values can optionally be quoted.
        <ul class="design-bullets">
          <li><code class="design-code">VAR=VAL</code> → <code class="design-code">VAL</code></li>
          <li><code class="design-code">VAR="VAL"</code> → <code class="design-code">VAL</code></li>
          <li><code class="design-code">VAR='VAL'</code> → <code class="design-code">VAL</code></li>
        </ul>
      </li>
      <li>Inline comments for unquoted values must be preceded with a space.
        <ul class="design-bullets">
          <li><code class="design-code">VAR=VAL # comment</code> → <code class="design-code">VAL</code></li>
          <li><code class="design-code">VAR=VAL# not a comment</code> → <code class="design-code">VAL# not a comment</code></li>
        </ul>
      </li>
      <li>Inline comments for quoted values must follow the closing quote.
        <ul class="design-bullets">
          <li><code class="design-code">VAR="VAL # not a comment"</code> → <code class="design-code">VAL # not a comment</code></li>
          <li><code class="design-code">VAR="VAL" # comment</code> → <code class="design-code">VAL</code></li>
        </ul>
      </li>
      <li>Single-quoted (<code class="design-code">'</code>) values are used literally.
        <ul class="design-bullets">
          <li><code class="design-code">VAR='$OTHER'</code> → <code class="design-code">$OTHER</code></li>
          <li><code class="design-code">VAR='${OTHER}'</code> → <code class="design-code">${OTHER}</code></li>
        </ul>
      </li>
      <li>Quotes can be escaped with <code class="design-code">\</code>.</li>
      <li>Common shell escape sequences including <code class="design-code">\n</code>, <code class="design-code">\r</code>, <code class="design-code">\t</code>, and <code class="design-code">\\</code> are supported in double-quoted values.</li>
    </ul>

    <h2 class="design-page-title">Comments</h2>
    <p class="design-paragraph">The hash-tag <code class="design-code">#</code> symbol denotes a comment when on its own line or when it follows a quoted value. It is not treated as a comment when it appears within quotes.</p>

    {% capture env_comments %}
# This is a comment
SECRET_KEY=YOURSECRETKEYGOESHERE # also a comment
SECRET_HASH="something-with-a-hash-#-this-is-not-a-comment"
    {% endcapture %}
    {% include components/design-codeblock.html value=env_comments copy=false %}

    <h2 class="design-page-title">Interpolation</h2>
    <p class="design-paragraph">Interpolation (also known as variable expansion) is supported in environment files. Interpolation is applied for unquoted and double-quoted values. Both braced (<code class="design-code">${VAR}</code>) and unbraced (<code class="design-code">$VAR</code>) expressions are supported.</p>
    <ul class="design-bullets">
      <li>Direct interpolation: <code class="design-code">${VAR}</code> → value of <code class="design-code">VAR</code></li>
      <li>Default value: <code class="design-code">${VAR:-default}</code> → value of <code class="design-code">VAR</code> if set and non-empty, otherwise <code class="design-code">default</code></li>
      <li>Alternative value: <code class="design-code">${VAR:+alternate}</code> → value of <code class="design-code">alternate</code> if <code class="design-code">VAR</code> is set and non-empty, otherwise empty</li>
    </ul>

    <h2 class="design-page-title">Command Substitution</h2>
    <p class="design-paragraph">Add the output of a command to one of your variables in your .env file. Command substitution is applied for unquoted and double-quoted values.</p>

    {% capture env_cmdsub %}
DATABASE_URL="postgres://$(whoami)@localhost/my_database"
    {% endcapture %}
    {% include components/design-codeblock.html value=env_cmdsub copy_text='DATABASE_URL="postgres://$(whoami)@localhost/my_database"' %}

    <h2 class="design-page-title">Encryption</h2>
    <p class="design-paragraph"><code class="design-code">.env</code> files can be extended to support encryption. Preface each value with <code class="design-code">encrypted:</code> followed by a <a class="design-link" href="https://en.bitcoin.it/wiki/Secp256k1">secp256k1</a> encrypted string.</p>

    {% capture env_encrypted %}
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="03f98bf6e00bce6fdb933bc47738d671dffb75a916fa8c89854bdfa3483902632f"

# .env
HELLO="encrypted:BCV9qZmblsUm77IxgrEqY9t67qDVWQZg6jpogQhBWa9SaOCtvheEQ5/eUfPCigQ7KB6vN//6vFE+2+orG7LmUorWhe1JapWct6Dz58IY6mXi+ONs51F7TSed6R/T9e+lDBWYH04p"
    {% endcapture %}
    {% include components/design-codeblock.html value=env_encrypted copy=false %}

    <p class="design-paragraph">Additionally, include the <code class="design-code">DOTENV_PUBLIC_KEY</code> inside the <code class="design-code">.env</code> file and commit <code class="design-code">.env</code> to code. It's now encrypted, safe, and recommended to do so.</p>
    <p class="design-paragraph">Use <code class="design-code">dotenvx</code> to auto-generate this format extension.</p>

    {% capture env_encrypt_cmd %}
$ dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=env_encrypt_cmd copy_text="dotenvx encrypt" %}

    <h2 class="design-page-title">History</h2>
    <p class="design-paragraph">The <code class="design-code">.env</code> file format was <a class="design-link" href="https://12factor.net/config">introduced by Heroku in 2012</a> and popularized by the <a class="design-link" href="https://www.npmjs.com/package/dotenv">dotenv node</a> and <a class="design-link" href="https://github.com/bkeepers/dotenv">dotenv ruby</a> libraries in 2013.</p>
    <p class="design-paragraph">Apps sometimes store config as constants in the code. This is a violation of twelve-factor, which requires strict separation of config from code. Config varies substantially across deploys, code does not.</p>
    <p class="design-paragraph">A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials. — <a class="design-link" href="https://12factor.net/config">The Twelve-Factor App</a></p>
    <p class="design-paragraph">Other languages, frameworks, platforms, and infra tools like Docker followed soon after – implementing environment variable support. Today, it has become an industry standard.</p>
    <p class="design-paragraph">Encryption support was introduced <a class="design-link" href="https://github.com/dotenvx/dotenvx/issues/189">May of 2024</a>.</p>
    </div>
  </div>
</section>
