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

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/aws-lambda) on GitHub.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Initial setup

```javascript
// index.js
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: 'Hello World'
  }
}
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Add dotenvx

```console
$ npm install @dotenvx/dotenvx --save
```
{: copy="npm install @dotenvx/dotenvx --save"}

```javascript
// index.js
require('@dotenvx/dotenvx').config()

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `Hello ${process.env.HELLO}`
  }
}
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Add .env file

```dotenv
# .env
HELLO="World"
```
{: copy="false"}

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Zip it up

Zip everything—making sure to ignore `.env.keys`.

```bash
zip -r function.zip . -x ".env.keys"
```

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Upload to AWS Lambda

[Create a function](https://us-west-1.console.aws.amazon.com/lambda/home?region=us-west-1#/create/function), select your runtime and `x86_64`, then upload `function.zip`.

Click **Test** and you will see encrypted ciphertext in the body until the private key is set.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Set DOTENV_PRIVATE_KEY

Add an environment variable `DOTENV_PRIVATE_KEY` with the value from your `.env.keys` file. Test again—you should see `Hello World`.

Distributing your lambdas is now safer—they only contain encrypted values.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
