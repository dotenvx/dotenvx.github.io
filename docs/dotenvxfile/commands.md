---
layout: docs-cli
title: Commands
description: Generate, validate, and use your Dotenvxfile.
permalink: "/docs/dotenvxfile/commands/"
redirect_from:
  - /docs/envfile/commands
  - /docs/envfile/commands/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: dotenvx run -- node index.js
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Create a `Dotenvxfile` in your project root, then encrypt and run:

```sh
dotenvx encrypt
dotenvx run -- node index.js
```

Use `dotenvx run -f .env.production -- node index.js` to load a specific environment file and its overrides. Dotenvx validates resolved values before starting the command, and `strict true` stops startup on validation failures.

To inspect rules without loading values, use the [primitives commands](/docs/cli/primitives/):

```sh
dotenvx primitives policy --source 'env "PORT", type: "port"' --file .env.production
dotenvx primitives storagepolicy --source 'storage "encrypted"' --file .env.production
```

See the [quickstart](/docs/quickstart/dotenvxfile/) for a complete example.
