---
title: ".env"
description: "The .env file separates your secrets from code."
permalink: /docs/env-file/
layout: radar
---

{% capture env_hero_file %}
# .env
STRIPE_API_KEY=scr_12345
TWILIO_API_KEY=abcd1234
{% endcapture %}
{% assign env_hero_copy = "STRIPE_API_KEY=scr_12345
TWILIO_API_KEY=abcd1234" %}

{% capture env_hero_visual %}
  <div class="docs-env-hero-example">
    {% include components/design-codeblock.html value=env_hero_file copy_text=env_hero_copy %}
  </div>
{% endcapture %}

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env"
  description="The .env file separates your secrets from code."
  visual=env_hero_visual
%}

<div class="armor-shell">
  <section class="docs-quickstart-body docs-env-file-body">
    {% capture step_content %}
    <nav class="design-list" aria-label="On this page">
      <p class="design-list-title">On this page</p>
      <ul class="design-list-items">
        <li><a class="design-link" href="#format">Format</a></li>
        <li><a class="design-link" href="#use-with-dotenvx">Use it with dotenvx</a></li>
        <li><a class="design-link" href="#encryption">Encryption</a></li>
        <li><a class="design-link" href="#keys">Keys</a></li>
        <li><a class="design-link" href="#values">Values</a></li>
        <li><a class="design-link" href="#syntax">Syntax</a></li>
        <li><a class="design-link" href="#comments">Comments</a></li>
        <li><a class="design-link" href="#interpolation">Interpolation</a></li>
        <li><a class="design-link" href="#command-substitution">Command Substitution</a></li>
        <li><a class="design-link" href="#related">Related</a></li>
        <li><a class="design-link" href="#history">History</a></li>
      </ul>
    </nav>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="format">Format</h2>
    <p class="design-paragraph"><code class="design-code">.env</code> files use a simple format – keys and values separated by an equal sign. Here's a complete example covering the common cases:</p>

    {% capture env_canonical %}
# .env — keep secrets out of code
# Lines starting with # are comments

# Keys: letters, digits, underscore (must not start with a digit)
DATABASE_URL=postgres://localhost/my_database
API_KEY="quoted value"           # inline comment after the value
LITERAL='no ${interpolation}'    # single quotes stay literal

# Interpolation (unquoted and double-quoted values)
HOST=localhost
URL=https://${HOST}/api

# Invalid keys — do not use:
# NO-WORK=
# 2MUCH=
# ÜBER=
    {% endcapture %}
    {% include components/design-codeblock.html value=env_canonical copy_text=env_canonical %}

    <p class="design-paragraph">Load values in your app with <code class="design-code">process.env</code> (or your language’s equivalent).</p>

    {% capture env_node %}
console.log('Hello ' + process.env.HELLO)
    {% endcapture %}
    {% capture env_python %}
import os
print("Hello " + os.getenv("HELLO", ""))
    {% endcapture %}
    {% capture env_lang_panels %}
      {% include components/design-choice-code-panel.html
        id="node"
        active=true
        code=env_node
        copy_text=env_node
      %}
      {% include components/design-choice-code-panel.html
        id="python"
        code=env_python
        copy_text=env_python
      %}
    {% endcapture %}
    {% capture env_lang_options %}
      {% include components/design-choice-option.html label="Node" value="node" selected=true %}
      {% include components/design-choice-option.html label="Python" value="python" %}
    {% endcapture %}
    {% include components/design-choice-code.html
      count=2
      selected="node"
      lines=2
      aria_label="Language"
      panels=env_lang_panels
      options=env_lang_options
    %}

    <p class="design-paragraph">It's a convenient and widely adopted format for separating your secrets and config from your code.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="use-with-dotenvx">Use it with dotenvx</h2>
    <p class="design-paragraph">Dotenvx loads the values from your <code class="design-code">.env</code> file and makes them available to your application. Preface your application's command with <code class="design-code">dotenvx run --</code>.</p>

    {% capture env_run %}
$ dotenvx run -- your-app-boot-command
    {% endcapture %}
    {% include components/design-codeblock.html value=env_run copy_text="dotenvx run -- your-app-boot-command" %}

    <p class="design-paragraph"><a class="design-link" href="/docs/quickstarts">Get started with dotenvx →</a></p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="encryption">Encryption</h2>
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

    <p class="design-paragraph">Include the <code class="design-code">DOTENV_PUBLIC_KEY</code> inside the <code class="design-code">.env</code> file and commit it. It's encrypted, safe, and recommended.</p>

    {% capture env_encrypt_cmd %}
$ dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=env_encrypt_cmd copy_text="dotenvx encrypt" %}

    {% include components/design-btn.html
      label="Encryption quickstart"
      href="/docs/quickstart/encryption"
    %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="keys">Keys</h2>
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
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="values">Values</h2>
    <p class="design-paragraph">Values are to the right of the equals sign. They may be quoted. Using single quotes will prevent variables from being interpolated.</p>

    {% capture env_values %}
SIMPLE=xyz123
INTERPOLATED="Multiple\nLines"
NON_INTERPOLATED='raw text without variable interpolation'
MULTILINE = `long text here,
e.g. a private SSH key`
    {% endcapture %}
    {% include components/design-codeblock.html value=env_values copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="syntax">Syntax</h2>
    <p class="design-paragraph">Cheat sheet — what you write, and what you get:</p>

    {% capture env_syntax_table %}
      <thead>
        <tr>
          <th scope="col">Input</th>
          <th scope="col">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><code class="design-code"># comment</code></th>
          <td>Ignored (comment line)</td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">(blank line)</code></th>
          <td>Ignored</td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR=VAL</code></th>
          <td><code class="design-code">VAL</code> (interpolation on)</td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR="VAL"</code></th>
          <td><code class="design-code">VAL</code> (interpolation on)</td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR='VAL'</code></th>
          <td><code class="design-code">VAL</code> (literal, no interpolation)</td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR=VAL # comment</code></th>
          <td><code class="design-code">VAL</code></td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR=VAL# not a comment</code></th>
          <td><code class="design-code">VAL# not a comment</code></td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR="VAL # not a comment"</code></th>
          <td><code class="design-code">VAL # not a comment</code></td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR="VAL" # comment</code></th>
          <td><code class="design-code">VAL</code></td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR='$OTHER'</code></th>
          <td><code class="design-code">$OTHER</code></td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">VAR='${OTHER}'</code></th>
          <td><code class="design-code">${OTHER}</code></td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">\"</code> inside quotes</th>
          <td>Escaped quote</td>
        </tr>
        <tr>
          <th scope="row"><code class="design-code">\n</code> <code class="design-code">\r</code> <code class="design-code">\t</code> <code class="design-code">\\</code></th>
          <td>Supported in double-quoted values</td>
        </tr>
      </tbody>
    {% endcapture %}
    {% include components/design-table.html class="design-table-wrap--fill docs-env-syntax-table" content=env_syntax_table %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="comments">Comments</h2>
    <p class="design-paragraph">The hash-tag <code class="design-code">#</code> symbol denotes a comment when on its own line or when it follows a quoted value. It is not treated as a comment when it appears within quotes.</p>

    {% capture env_comments %}
# This is a comment
SECRET_KEY=YOURSECRETKEYGOESHERE # also a comment
SECRET_HASH="something-with-a-hash-#-this-is-not-a-comment"
    {% endcapture %}
    {% include components/design-codeblock.html value=env_comments copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="interpolation">Interpolation</h2>
    <p class="design-paragraph">Interpolation (also known as variable expansion) is supported in environment files. Interpolation is applied for unquoted and double-quoted values. Both braced (<code class="design-code">${VAR}</code>) and unbraced (<code class="design-code">$VAR</code>) expressions are supported.</p>
    <ul class="design-bullets">
      <li>Direct interpolation: <code class="design-code">${VAR}</code> → value of <code class="design-code">VAR</code></li>
      <li>Default value: <code class="design-code">${VAR:-default}</code> → value of <code class="design-code">VAR</code> if set and non-empty, otherwise <code class="design-code">default</code></li>
      <li>Alternative value: <code class="design-code">${VAR:+alternate}</code> → value of <code class="design-code">alternate</code> if <code class="design-code">VAR</code> is set and non-empty, otherwise empty</li>
    </ul>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="command-substitution">Command Substitution</h2>
    <p class="design-paragraph">Add the output of a command to one of your variables in your .env file. Command substitution is applied for unquoted and double-quoted values.</p>

    {% capture env_cmdsub %}
DATABASE_URL="postgres://$(whoami)@localhost/my_database"
    {% endcapture %}
    {% include components/design-codeblock.html value=env_cmdsub copy_text='DATABASE_URL="postgres://$(whoami)@localhost/my_database"' %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    {% capture env_related_items %}
      <li>
        <a class="design-link" href="/docs/env-keys-file/">.env.keys</a>
      </li>
      <li>
        <a class="design-link" href="/docs/quickstart/encryption/">Encryption quickstart</a>
      </li>
      <li>
        <a class="design-link" href="/docs/cli/run/">dotenvx run</a>
      </li>
      <li>
        <a class="design-link" href="/docs/cli/encrypt/">dotenvx encrypt</a>
      </li>
    {% endcapture %}
    <div id="related">
      {% include components/design-list.html
        title="Related"
        items=env_related_items
      %}
    </div>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush" id="history">History</h2>
    <p class="design-paragraph">The <code class="design-code">.env</code> file format was <a class="design-link" href="https://12factor.net/config">introduced by Heroku in 2012</a> and popularized by the <a class="design-link" href="https://www.npmjs.com/package/dotenv">dotenv node</a> and <a class="design-link" href="https://github.com/bkeepers/dotenv">dotenv ruby</a> libraries in 2013. Encryption support landed in <a class="design-link" href="https://github.com/dotenvx/dotenvx/issues/189">May 2024</a>.</p>
    <p class="design-paragraph">A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials. — <a class="design-link" href="https://12factor.net/config">The Twelve-Factor App</a></p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
