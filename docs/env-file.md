---
title: ".env"
description: "The .env file separates your secrets from code."
permalink: /docs/env-file/
layout: radar
lang_examples:
  - id: node
    language: javascript
    label: Node
    code: "console.log('Hello ' + process.env.HELLO)"
    copy_text: "console.log('Hello ' + process.env.HELLO)"
  - id: python
    language: python
    label: Python
    code: |
      import os
      print("Hello " + os.getenv("HELLO", ""))
    copy_text: |
      import os
      print("Hello " + os.getenv("HELLO", ""))
---

{% capture env_hero_visual %}
  <img class="docs-dotenvx-logo" src="{{ '/assets/img/logo-env-yellow.svg' | relative_url }}" alt="dotenv" width="56" height="56">
{% endcapture %}

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env"
  description="The .env file separates your secrets from code."
  visual=env_hero_visual
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body docs-env-file-body" markdown="block">
{% capture step_content %}

## Format
{: #format}

`.env` files use a simple format – keys and values separated by an equal sign. Here's a complete example covering the common cases:

```dotenv
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
```

Load values in your app with `process.env` (or your language’s equivalent).

{% include components/design-choice-code.html
      items=page.lang_examples
      selected="node"
      lines=2
      aria_label="Language"
    %}

It's a convenient and widely adopted format for separating your secrets and config from your code.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Keys
{: #keys}

For the sake of portability (and sanity), environment variable names (keys) must consist solely of letters, digits, and the underscore (`_`) and must not begin with a digit. In regex-speak, the names must match the following pattern:

```text
[a-zA-Z_]+[a-zA-Z0-9_]*
```
{: copy="false"}

Example keys:

```text
DATABASE_URL  # ok
foobar        # ok (but not recommended. use upcase)
NO-WORK       # <-- invalid !!!
ÜBER          # <-- invalid !!!
2MUCH         # <-- invalid !!!
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Values
{: #values}

Values are to the right of the equals sign. They may be quoted. Using single quotes will prevent variables from being interpolated.

```dotenv
SIMPLE=xyz123
INTERPOLATED="Multiple\nLines"
NON_INTERPOLATED='raw text without variable interpolation'
MULTILINE = `long text here,
e.g. a private SSH key`
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Syntax
{: #syntax}

Cheat sheet — what you write, and what you get:

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
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Comments
{: #comments}

The hash-tag `#` symbol denotes a comment when on its own line or when it follows a quoted value. It is not treated as a comment when it appears within quotes.

```dotenv
# This is a comment
SECRET_KEY=YOURSECRETKEYGOESHERE # also a comment
SECRET_HASH="something-with-a-hash-#-this-is-not-a-comment"
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Interpolation
{: #interpolation}

Interpolation (also known as variable expansion) is supported in environment files. Interpolation is applied for unquoted and double-quoted values. Both braced (`${VAR}`) and unbraced (`$VAR`) expressions are supported.

<ul class="design-bullets">
<li>Direct interpolation: <code class="design-code">${VAR}</code> → value of <code class="design-code">VAR</code></li>
<li>Default value: <code class="design-code">${VAR:-default}</code> → value of <code class="design-code">VAR</code> if set and non-empty, otherwise <code class="design-code">default</code></li>
<li>Alternative value: <code class="design-code">${VAR:+alternate}</code> → value of <code class="design-code">alternate</code> if <code class="design-code">VAR</code> is set and non-empty, otherwise empty</li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Command Substitution
{: #command-substitution}

Add the output of a command to one of your variables in your .env file. Command substitution is applied for unquoted and double-quoted values.

```dotenv
DATABASE_URL="postgres://$(whoami)@localhost/my_database"
```

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encryption
{: #encryption}

More recently, dotenvx pioneered encryption support for .env files. Built by the same creator as dotenv, it extends the familiar format with ciphertext values and asymmetric key pairs: a public key encrypts values, and a separate private key decrypts them.

[Learn more about the encrypted .env format →](/docs/encrypted-env-file/)

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## History
{: #history}

The `.env` file format was [introduced by Heroku in 2012](https://12factor.net/config) and popularized by the [dotenv node](https://www.npmjs.com/package/dotenv) and [dotenv ruby](https://github.com/bkeepers/dotenv) libraries in 2013. Encryption support landed in [May 2024](https://github.com/dotenvx/dotenvx/issues/189).

A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials. — [The Twelve-Factor App](https://12factor.net/config)

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
