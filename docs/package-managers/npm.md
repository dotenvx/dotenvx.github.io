---
title: npm
description: Use dotenvx with npm.
permalink: /docs/package-managers/npm/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="npm"
  description="Use dotenvx with npm."
  mark="npm"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <p class="design-paragraph">Find <a class="design-link" href="https://github.com/dotenvx/examples/tree/main/package-managers/npm">code examples on GitHub</a> for these framework guides.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Astro</h2>
    <p class="design-paragraph">Use dotenvx (as an npm module) with <a class="design-link" href="https://github.com/withastro/astro">astro.js</a>.</p>
    <p class="design-paragraph">Create an Astro application.</p>

    {% capture npm_astro_create %}
npm create astro@latest
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_astro_create copy_text="npm create astro@latest" %}

    <p class="design-paragraph">Install <code class="design-code">dotenvx</code> as an npm module.</p>

    {% capture npm_astro_install %}
npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_astro_install copy_text="npm install @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">Edit <code class="design-code">src/pages/index.astro</code> to include <code class="design-code">process.env.HELLO</code>.</p>

    {% capture npm_astro_page %}
---
---

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content={Astro.generator} />
        <title>Astro</title>
    </head>
    <body>
        <h1>Hello {import.meta.env.HELLO}</h1>
    </body>
</html>
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_astro_page copy=false %}

    <p class="design-paragraph">Preload Astro scripts with dotenvx. This injects environment variables ahead of Astro.</p>

    {% capture npm_astro_scripts %}
...
"scripts": {
  "dev": "dotenvx run -- astro dev",
  "start": "dotenvx run -- astro dev",
  "build": "astro check && dotenvx run -- astro build",
  "preview": "dotenvx run -- astro preview",
  "astro": "astro"
},
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_astro_scripts copy=false %}

    <p class="design-paragraph">Run it.</p>

    {% capture npm_astro_run %}
$ npm run dev

> dev
> dotenvx run -- astro dev

⟐ injected env (1) from .env
┃ Local    http://localhost:4321/
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_astro_run copy_text="npm run dev" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Express</h2>
    <p class="design-paragraph">Use dotenvx (as an npm module) with <a class="design-link" href="https://github.com/expressjs/express">express.js</a>.</p>

    {% capture npm_express_install %}
npm install express @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_express_install copy_text="npm install express @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">Create a simple Hello World application.</p>

    {% capture npm_express_index %}
// index.js
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO || ''}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_express_index copy=false %}

    <p class="design-paragraph">Add <code class="design-code">dotenvx run --</code> to your start script.</p>

    {% capture npm_express_pkg %}
{
  "dependencies": {
    "@dotenvx/dotenvx": "^1.48.4",
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "dotenvx run -- node index.js"
  }
}
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_express_pkg copy=false %}

    <p class="design-paragraph">Run it.</p>

    {% capture npm_express_run %}
$ npm start

> start
> dotenvx run -- node index.js

⟐ injected env (1) from .env
Server running on port:3000
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_express_run copy_text="npm start" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Next</h2>
    <p class="design-paragraph">Use dotenvx (as an npm module) with <a class="design-link" href="https://github.com/vercel/next.js">next.js</a>.</p>

    {% capture npm_next_create %}
npx create-next-app@latest --example hello-world .
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_next_create copy_text="npx create-next-app@latest --example hello-world ." %}

    {% capture npm_next_install %}
npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_next_install copy_text="npm install @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">Edit <code class="design-code">app/page.tsx</code> to include <code class="design-code">process.env.HELLO</code>.</p>

    {% capture npm_next_page %}
export default function Page() {
  return <h1>Hello {process.env.HELLO}</h1>;
}
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_next_page copy=false %}

    <p class="design-paragraph">Preload Next.js scripts with dotenvx.</p>

    {% capture npm_next_scripts %}
...
"scripts": {
  "dev": "dotenvx run -- next dev --turbo",
  "build": "dotenvx run -- next build",
  "start": "dotenvx run -- next start"
},
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_next_scripts copy=false %}

    <p class="design-paragraph">Run it.</p>

    {% capture npm_next_run %}
$ npm run dev

> dev
> dotenvx run -- next dev --turbo

⟐ injected env (1) from .env
   ▲ Next.js 14.0.4 (turbo)
   - Local:        http://localhost:3000
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_next_run copy_text="npm run dev" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Remix</h2>
    <p class="design-paragraph">Use dotenvx (as an npm module) with <a class="design-link" href="https://github.com/remix-run/remix">remix.js</a>.</p>

    {% capture npm_remix_create %}
npx create-remix@latest
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_remix_create copy_text="npx create-remix@latest" %}

    {% capture npm_remix_install %}
npm install @dotenvx/dotenvx --save
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_remix_install copy_text="npm install @dotenvx/dotenvx --save" %}

    <p class="design-paragraph">Edit <code class="design-code">app/routes/_index.tsx</code> to include <code class="design-code">process.env.HELLO</code> using a Remix loader.</p>

    {% capture npm_remix_page %}
import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json({
    ENV: {
      HELLO: process.env.HELLO,
    },
  });
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      Hello {data.ENV.HELLO}.
    </div>
  );
}
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_remix_page copy=false %}

    <p class="design-paragraph">Preload Remix scripts with dotenvx.</p>

    {% capture npm_remix_scripts %}
...
"scripts": {
  "build": "dotenvx run -- remix build",
  "dev": "dotenvx run -- remix dev --manual",
  "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
  "start": "dotenvx run -- remix-serve ./build/index.js",
  "typecheck": "tsc"
},
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_remix_scripts copy=false %}

    <p class="design-paragraph">Run it.</p>

    {% capture npm_remix_run %}
$ npm run dev

> dev
> dotenvx run -- remix dev --manual

⟐ injected env (1) from .env
[remix-serve] http://localhost:3000
    {% endcapture %}
    {% include components/design-codeblock.html value=npm_remix_run copy_text="npm run dev" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
