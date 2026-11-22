---
title: AWS Lambda
description: Use dotenvx with AWS Lambda.
permalink: /docs/platforms/aws-lambda/
mark: "λ"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/aws-lambda) on GitHub.

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

## Add dotenvx

```console
$ npm install @dotenvx/dotenvx --save
```
{: copy="npm install @dotenvx/dotenvx --save"}

```javascript
// index.js
require('@dotenvx/dotenvx').config({ strict: true })

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `Hello ${process.env.HELLO}`
  }
}
```
{: copy="false"}

## Add .env file

```dotenv
# .env
HELLO="World"
```
{: copy="false"}

```console
$ npx dotenvx encrypt
```
{: copy="npx dotenvx encrypt"}

## Zip it up

Build the deployment package in a Linux x86_64 environment matching your Lambda runtime. Run npm install there with optional dependencies enabled; the 3.0 SDK requires its platform-specific native package. A node_modules directory installed on macOS or Windows cannot be used directly.

Include index.js, package.json, package-lock.json, node_modules, and encrypted .env. Keep .env.keys out of the archive:

```console
$ zip -r function.zip index.js package.json package-lock.json node_modules .env
```
{: copy="zip -r function.zip index.js package.json package-lock.json node_modules .env"}

## Upload to AWS Lambda

[Create a function](https://us-west-1.console.aws.amazon.com/lambda/home?region=us-west-1#/create/function), select your runtime and `x86_64`, then upload `function.zip`.

Set the private key before invoking the function. With strict loading, a missing key stops initialization.

## Set DOTENV_PRIVATE_KEY

Add an environment variable `DOTENV_PRIVATE_KEY` with the value from your `.env.keys` file. Test again—you should see `Hello World`.

Distributing your lambdas is now safer—they only contain encrypted values.
