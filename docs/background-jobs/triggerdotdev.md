---
title: Trigger.dev
description: Use dotenvx with Trigger.dev.
permalink: /docs/background-jobs/triggerdotdev/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Trigger.dev"
  description="Use dotenvx with Trigger.dev."
  mark="trigger"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/background-jobs/triggerdotdev) on GitHub.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Initial setup

First, complete the [Trigger.dev quickstart steps](https://trigger.dev/docs/quick-start) so you end up with a `trigger/example.ts` file like this.

```typescript
import { logger, task, wait } from "@trigger.dev/sdk/v3";

export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300,
  run: async (payload: any, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: "Hello, world!",
    }
  },
});
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Install dotenvx

Install [dotenvx](https://github.com/dotenvx/dotenvx).

```console
$ npm install @dotenvx/dotenvx --save
```
{: copy="npm install @dotenvx/dotenvx --save"}

And configure dotenvx in `trigger/example.ts`.

```typescript
import { logger, task, wait } from "@trigger.dev/sdk/v3";
import dotenv from "@dotenvx/dotenvx";

dotenv.config({path: ".env.production"});

export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300,
  run: async (payload: any, { ctx }) => {
    logger.log(`Hello, ${process.env.HELLO}!`, { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: `Hello, ${process.env.HELLO}!`,
    }
  },
});
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Add production environment

Create `.env.production` in the root of your project.

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt production

```bash
dotenvx encrypt -f .env.production
```

Your `.env.production` file is now encrypted, and you have a `.env.keys` file.

```dotenv
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY_PRODUCTION="025a54defaeff32caa2bbe60537b88b5b89716eade6df08418d7a68f5c4f742be6"

# .env.production
HELLO="encrypted:BD+uttK9iBuXnfx6HukDK06IGk0pQARwivtxM+ZiePvhRxHyQL3UD0sf0ayLw/P5Y/BED//zRiTlUf6nENuu7QhNJ24g3uADfrDfhvYi/MOHjmfKyRiu+yOxSw6e+c0yRNukS+n8SxONnec="
```
{: copy="false"}

```dotenv
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env.production
DOTENV_PRIVATE_KEY_PRODUCTION="424d0ea072eb17c6bee9b4b42ff6333513cf128ea3d5d60ccf79246ca7c3f786"
```
{: copy="false"}

You SHOULD commit `.env.production` to code. It is now encrypted, safe, and recommended to do so. But DO NOT commit `.env.keys` to code. Keep them somewhere safe like 1Password or [Armor](https://dotenvx.com/armor).

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Run your task

Run your task in Trigger's UI. Your env is successfully injected using the encrypted contents of `.env.production`.

Visit the dashboard and it says `Hello production`.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
