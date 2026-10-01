---
title: PM2
description: Use dotenvx with PM2.
permalink: /docs/process-managers/pm2/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="PM2"
  description="Use dotenvx with PM2."
  mark="pm2"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/process-managers/pm2) on GitHub.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Initial setup

Generate an `ecosystem.config.js` file.

```bash
pm2 init
```

Modify it to your needs. Something like this.

```javascript
module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }]
};
```
{: copy="false"}

Your `index.js` file should look something like this.

```javascript
// index.js
const PORT = process.env.PORT || 3000
const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${process.env.HELLO}`)
});

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
});
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Run dotenvx

Add `@dotenvx/dotenvx` and `pm2` as dependencies.

```bash
npm install @dotenvx/dotenvx --save
npm install pm2 --save
```
{: copy="false"}

Then, in your `package.json`, modify your start script.

```json
{
  "scripts": {
    "start": "dotenvx run -- pm2-runtime start ecosystem.config.js --env production"
  },
  "dependencies": {
    "@dotenvx/dotenvx": "^1.48.4",
    "pm2": "^5.3.0"
  }
}
```
{: copy="false"}

Create a `.env` file in the root of your project.

```dotenv
# .env
HELLO="World"
```
{: copy="false"}

Inject your env using your start script — which is using dotenvx and pm2.

```bash
npm start
```

Your app will say `Hello World`. That covers local development. Let's solve for production next.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Add production environment

Create a `.env.production` file in the root of your project.

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

Modify your start script to load your `.env.production` file.

```json
{
  "scripts": {
    "start": "dotenvx run -f .env.production -- pm2-runtime start ecosystem.config.js --env production"
  },
  ...
}
```
{: copy="false"}

Your app will say `Hello production`, simulating production.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
