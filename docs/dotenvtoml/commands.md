---
doc_type: cli
title: Commands
description: Encrypt and validate with Dotenv.toml.
permalink: "/docs/dotenvtoml/commands/"
eyebrow: Dotenv.toml
eyebrow_href: "/docs/dotenvtoml/"
command: dotenvx run -- node index.js
command_prompt: false
related:
- title: Dotenv.toml Quickstart
  href: "/docs/dotenvtoml/quickstart/"
- title: Full Dotenv.toml Spec
  href: "/docs/dotenvtoml/spec/"
---
Create `Dotenv.toml` in your project root, then encrypt and run your app.

```console
$ dotenvx encrypt
$ dotenvx run -- node index.js
```
{: copy="dotenvx encrypt
dotenvx run -- node index.js"}

Use `-f` to select a specific environment file and apply its [file overrides](/docs/dotenvtoml/file/).

```console
$ dotenvx encrypt -f .env.production
$ dotenvx run -f .env.production -- node index.js
```
{: copy="dotenvx encrypt -f .env.production
dotenvx run -f .env.production -- node index.js"}

Dotenvx validates resolved values before starting the command. With `strict = true`, validation failures stop startup.

See the [quickstart](/docs/dotenvtoml/quickstart/) for a complete example.
