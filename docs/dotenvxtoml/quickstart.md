---
title: Dotenvx.toml Quickstart
description: Create your first Dotenvx.toml.
permalink: "/docs/dotenvxtoml/quickstart/"
hero_title: "Dotenvx.toml"
eyebrow: "Dotenvx.toml"
eyebrow_href: /docs/dotenvxtoml/
mark: "Dotenvx.toml"
---
## Create

[Install Dotenvx](/docs/install/), then start with a `.env` file.

```dotenv
# .env
PORT=3000
DATABASE_URL="postgres://localhost/myapp"
```

Create a file named `Dotenvx.toml` in your project root.

```toml
# Dotenvx.toml
strict = true

[env.PORT]
type = "port"
required = true
storage = "plaintext"

[env.DATABASE_URL]
type = "url"
required = true
storage = "encrypted"
redacted = true
```

Both variables are required explicitly. `PORT` stays readable. `DATABASE_URL` is selected for encrypted storage and output redaction. `strict = true` stops your command when a value-validation rule fails.

## Encrypt

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

Dotenvx encrypts `DATABASE_URL` and leaves `PORT` readable. Keep your private key separate from Git.

## Run

Dotenvx validates resolved values before running your app.

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Replace `node index.js` with your app's command. Try `PORT=not-a-port` in `.env` to see strict validation stop startup. Change it back to `3000`.

The app receives the real database URL. Dotenvx redacts it in matching terminal output. Commit `Dotenvx.toml` alongside the encrypted `.env` file.

[Read the full Dotenvx.toml spec →](/docs/dotenvxtoml/spec/)
