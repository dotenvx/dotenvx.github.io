---
doc_type: cli
title: Commands
description: Encrypt and validate with Dotenvx.toml.
permalink: "/docs/dotenvxtoml/commands/"
eyebrow: Dotenvx.toml
eyebrow_href: "/docs/dotenvxtoml/"
command: dotenvx run -- node index.js
command_prompt: false
related:
- title: Dotenvx.toml Quickstart
  href: "/docs/dotenvxtoml/quickstart/"
- title: Full Dotenvx.toml Spec
  href: "/docs/dotenvxtoml/spec/"
---
Create `Dotenvx.toml` in your project root, then encrypt and run your app.

```sh
dotenvx encrypt
dotenvx run -- node index.js
```

Use `-f` to select a specific environment file and apply its [file overrides](/docs/dotenvxtoml/file/).

```sh
dotenvx encrypt -f .env.production
dotenvx run -f .env.production -- node index.js
```

Dotenvx validates resolved values before starting the command. With `strict = true`, validation failures stop startup.

See the [quickstart](/docs/dotenvxtoml/quickstart/) for a complete example.
