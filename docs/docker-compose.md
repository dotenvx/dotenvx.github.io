---
layout: docs-markdown
title: "Docker Compose"
social_title: "Encrypt a .env file for Docker Compose"
description: "Encrypt a .env file for Docker Compose and inject its secrets when your service starts."
icon: docker-compose
permalink: /docs/docker-compose/
redirect_from:
  - /docs/platforms/docker-compose
  - /docs/platforms/docker-compose/
  - /docs/secrets-in-docker-compose
  - /docs/secrets-in-docker-compose/
quickstart_pager: true
markdown_url: /docs/docker-compose.md
agent_prompt: Set up Dotenvx with Docker Compose for me.
---

## Prerequisites

Install [Docker with Compose](https://docs.docker.com/compose/install/) and start your Docker runtime. Check both:

```console
$ docker version
$ docker compose version
```
{: copy="docker version
docker compose version"}

Start in your project's directory. This guide uses a small Node.js app inside a Linux container; Node does not need to be installed on your machine.

## Install

Install Dotenvx on your machine to encrypt files and manage keys:

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Create .env with a demonstration value:

```dotenv
# .env
HELLO="Secret"
```

Encrypt it:

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

When prompted, choose **Local** and store the private key in .env.keys. Your .env contains encrypted values; .env.keys unlocks them.

## Commit

Commit your encrypted .env file. Keep .env.keys out of git and the Docker build context.

Add this to .gitignore:

```text
.env.keys*
```

Create .dockerignore:

```text
.git
node_modules
.env.keys*
**/.env.keys*
```

Keep encrypted .env files available to Docker. If an existing .dockerignore excludes .env, add !.env after that rule.

```console
$ git add -f .env
$ git add .gitignore .dockerignore
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git add .gitignore .dockerignore
git commit -m \"encrypt .env\""}

## Ship

Create index.js:

```javascript
// index.js
console.log(`Hello ${process.env.HELLO}`)
```

Create a Dockerfile. If you followed the [Docker guide](/docs/docker/), this is the same image:

```dockerfile
FROM node:22-alpine

RUN apk add --no-cache curl \
  && curl -sfS https://dotenvx.sh | sh \
  && apk del curl

WORKDIR /app
COPY index.js .env ./

ENTRYPOINT ["/usr/local/bin/dotenvx", "run", "--strict", "--"]
CMD ["node", "index.js"]
```

Create compose.yaml:

```yaml
services:
  app:
    build: .
    environment:
      DOTENV_PRIVATE_KEY: ${DOTENV_PRIVATE_KEY:?Set DOTENV_PRIVATE_KEY}
```

Compose supplies the private key. The image's entrypoint loads and decrypts .env before starting your app. --strict stops startup if decryption fails.

Build and run it using your local key file:

```console
$ docker compose --env-file .env.keys up --build
app-1  | Hello Secret
```
{: copy="docker compose --env-file .env.keys up --build"}

The demonstration app prints once and exits. Your own server would keep running. HELLO is a demonstration value; use real secrets without printing them.

Here, --env-file .env.keys supplies values for Compose's ${...} expressions. The environment mapping passes only DOTENV_PRIVATE_KEY to the container. It does not mount the key file.

Keep the encrypted .env out of a service's env_file setting. That setting injects its entries directly into the environment; this guide lets Dotenvx read the encrypted file inside the image.

Clean up the stopped container and project network:

```console
$ docker compose --env-file .env.keys down
```
{: copy="docker compose --env-file .env.keys down"}

[**Mount your files** Alternative →](/docs/docker-compose/mount-files/){: .side-path}

[**Use Compose secrets** Alternative →](/docs/docker-compose/runtime-secrets/){: .side-path}

[**Multiple services** Alternative →](/docs/docker-compose/multiple-services/){: .side-path}

[**Existing images / no Dockerfile** Alternative →](/docs/docker-compose/existing-images/){: .side-path}

## Share

Share access with Dotenvx Armor ⛨

Log in, armor your development key, and invite your teammate:

```console
$ dotenvx login
$ dotenvx armor up
$ dotenvx armor invite
```
{: copy="dotenvx login
dotenvx armor up
dotenvx armor invite"}

Your teammate accepts the invitation, pulls the repository, installs Dotenvx, and logs in on their machine. They let Dotenvx retrieve the app’s key on the host before Compose starts:

```shell
DOTENV_PRIVATE_KEY="$(dotenvx keypair DOTENV_PRIVATE_KEY)" \
  docker compose up --build
```

Armor authentication stays on the host. The compose.yaml environment mapping passes only the app’s private key into the container, where Dotenvx decrypts .env. The assignment lasts for this command; no export or cleanup is needed. This syntax uses Bash or Zsh.

Use the same handoff when removing the stopped container and network:

```shell
DOTENV_PRIVATE_KEY="$(dotenvx keypair DOTENV_PRIVATE_KEY)" \
  docker compose down
```

[**Share a private key** Alternative →](/docs/docker-compose/share-private-key/){: .side-path}

## Production

Create .env.production:

```dotenv
# .env.production
HELLO="Production"
```

Encrypt it with an Enclaved Key ◊:

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

When prompted, choose **Enclaved**, select your supported deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name. Choose the resource running your container. For a self-managed Compose host without a supported connection, use the private-key alternative below.

Update the Dockerfile's COPY instruction:

```dockerfile
COPY index.js .env .env.production ./
```

If .dockerignore excludes .env.production, add !.env.production after that rule.

Create a standalone compose.production.yaml:

```yaml
services:
  app:
    image: hello-compose:production
    environment:
      DOTENV_FILE: .env.production
      DOTENV_PRIVATE_KEY_PRODUCTION: ${DOTENV_PRIVATE_KEY_PRODUCTION:?Set DOTENV_PRIVATE_KEY_PRODUCTION}
```

Use this file on its own, rather than merging it with the development file. It needs only the production key.

Commit the encrypted file and application setup:

```console
$ git add -f .env.production
$ git add Dockerfile index.js compose.yaml compose.production.yaml
$ git commit -m "add encrypted production configuration"
```
{: copy="git add -f .env.production
git add Dockerfile index.js compose.yaml compose.production.yaml
git commit -m \"add encrypted production configuration\""}

Build the production image without a private key:

```console
$ docker build -t hello-compose:production .
```
{: copy="docker build -t hello-compose:production ."}

For another host, publish this image to your registry and replace image in compose.production.yaml with that registry reference. Pin your base image and Dotenvx version or digest for repeatable releases.

Make DOTENV_PRIVATE_KEY_PRODUCTION available to the process running Compose through your deployment platform's secret settings. A secret available only to the image builder will not reach the running app.

Start the service:

```console
$ docker compose -f compose.production.yaml up
app-1  | Hello Production
```
{: copy="docker compose -f compose.production.yaml up"}

Compose passes the key to the container. DOTENV_FILE selects .env.production, and Dotenvx decrypts it at startup. Keep .env.keys off the image.

For your own long-running server, use up -d. To remove the demo container and network, run docker compose -f compose.production.yaml down while the key is still available to Compose.

[**Deploy with a private key** Alternative →](/docs/docker-compose/deploy-private-key/){: .side-path}

[**Build-time secrets** Alternative →](/docs/docker-compose/build-secrets/){: .side-path}

## Conclusion

Your encrypted configuration travels with your image. Compose supplies the runtime key, and Dotenvx decrypts before your service starts.
