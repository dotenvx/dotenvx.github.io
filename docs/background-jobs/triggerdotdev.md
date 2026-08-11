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
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/background-jobs/triggerdotdev">code examples for this guide</a> on GitHub.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Initial setup</h2>
    <p class="design-paragraph">First, complete the <a class="design-link" href="https://trigger.dev/docs/quick-start">Trigger.dev quickstart steps</a> so you end up with a <code class="design-code">trigger/example.ts</code> file like this.</p>

    {% capture trigger_example %}
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
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_example copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install dotenvx</h2>
    <p class="design-paragraph">Install <a class="design-link" href="https://github.com/dotenvx/dotenvx">dotenvx</a>.</p>

    {% capture trigger_install %}
$ npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_install copy_text="npm install @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">And configure dotenvx in <code class="design-code">trigger/example.ts</code>.</p>

    {% capture trigger_config %}
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
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_config copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Add production environment</h2>
    <p class="design-paragraph">Create <code class="design-code">.env.production</code> in the root of your project.</p>

    {% capture trigger_env %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_env copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt production</h2>

    {% capture trigger_encrypt %}
dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Your <code class="design-code">.env.production</code> file is now encrypted, and you have a <code class="design-code">.env.keys</code> file.</p>

    {% capture trigger_encrypted %}
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY_PRODUCTION="025a54defaeff32caa2bbe60537b88b5b89716eade6df08418d7a68f5c4f742be6"

# .env.production
HELLO="encrypted:BD+uttK9iBuXnfx6HukDK06IGk0pQARwivtxM+ZiePvhRxHyQL3UD0sf0ayLw/P5Y/BED//zRiTlUf6nENuu7QhNJ24g3uADfrDfhvYi/MOHjmfKyRiu+yOxSw6e+c0yRNukS+n8SxONnec="
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_encrypted copy=false %}

    {% capture trigger_keys %}
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env.production
DOTENV_PRIVATE_KEY_PRODUCTION="424d0ea072eb17c6bee9b4b42ff6333513cf128ea3d5d60ccf79246ca7c3f786"
    {% endcapture %}
    {% include components/design-codeblock.html value=trigger_keys copy=false %}

    <p class="design-paragraph">You SHOULD commit <code class="design-code">.env.production</code> to code. It is now encrypted, safe, and recommended to do so. But DO NOT commit <code class="design-code">.env.keys</code> to code. Keep them somewhere safe like 1Password or <a class="design-link" href="https://dotenvx.com/armor">Armor</a>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Run your task</h2>
    <p class="design-paragraph">Run your task in Trigger's UI. Your env is successfully injected using the encrypted contents of <code class="design-code">.env.production</code>.</p>
    <p class="design-paragraph">Visit the dashboard and it says <code class="design-code">Hello production</code>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
