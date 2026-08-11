---
title: AWS Lambda
description: Use dotenvx with AWS Lambda.
permalink: /docs/platforms/aws-lambda/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="AWS Lambda"
  description="Use dotenvx with AWS Lambda."
  mark="λ"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/platforms/aws-lambda">code examples for this guide</a> on GitHub.</p>

    <h2 class="design-list-title">Initial setup</h2>

    {% capture lambda_handler %}
// index.js
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: 'Hello World'
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=lambda_handler copy=false %}

    <h2 class="design-list-title">Add dotenvx</h2>

    {% capture lambda_install %}
$ npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=lambda_install copy_text="npm install @dotenvx/dotenvx --save" %}

    {% capture lambda_handler_dx %}
// index.js
require('@dotenvx/dotenvx').config()

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `Hello ${process.env.HELLO}`
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=lambda_handler_dx copy=false %}

    <h2 class="design-list-title">Add .env file</h2>

    {% capture lambda_env %}
# .env
HELLO="World"
    {% endcapture %}
    {% include components/design-codeblock.html value=lambda_env copy=false %}

    {% capture lambda_encrypt %}
$ dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=lambda_encrypt copy_text="dotenvx encrypt" %}

    <h2 class="design-list-title">Zip it up</h2>
    <p class="design-paragraph">Zip everything—making sure to ignore <code class="design-code">.env.keys</code>.</p>

    {% capture lambda_zip %}
zip -r function.zip . -x ".env.keys"
    {% endcapture %}
    {% include components/design-codeblock.html value=lambda_zip copy_text='zip -r function.zip . -x ".env.keys"' %}

    <h2 class="design-list-title">Upload to AWS Lambda</h2>
    <p class="design-paragraph"><a class="design-link" href="https://us-west-1.console.aws.amazon.com/lambda/home?region=us-west-1#/create/function">Create a function</a>, select your runtime and <code class="design-code">x86_64</code>, then upload <code class="design-code">function.zip</code>.</p>

    <p class="design-paragraph">Click <strong>Test</strong> and you will see encrypted ciphertext in the body until the private key is set.</p>

    <h2 class="design-list-title">Set DOTENV_PRIVATE_KEY</h2>
    <p class="design-paragraph">Add an environment variable <code class="design-code">DOTENV_PRIVATE_KEY</code> with the value from your <code class="design-code">.env.keys</code> file. Test again—you should see <code class="design-code">Hello World</code>.</p>

    <p class="design-paragraph">Distributing your lambdas is now safer—they only contain encrypted values.</p>
    </div>
  </div>
</section>
