---
layout: docs-markdown
title: "Docker"
social_title: "Encrypt a .env file for Docker"
description: "Encrypt a .env file for Docker, include it safely in your image, and inject its secrets when the container starts."
icon: docker
permalink: /docs/docker/
redirect_from:
  - /docs/platforms/docker
  - /docs/platforms/docker/
  - /docs/secrets-in-docker
  - /docs/secrets-in-docker/
quickstart_pager: true
markdown_url: /docs/docker.md
agent_prompt: Set up Dotenvx with Docker for me.
---

## Prerequisites

Install [Docker](https://docs.docker.com/get-started/get-docker/) and start your Docker runtime. Check that both the client and server are available:

```console
$ docker version
```
{: copy="docker version"}

Start in your project's directory. This guide uses a small Node.js app; Node runs inside the container.

## Install

Install the Dotenvx CLI on your machine to encrypt files and manage keys:

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

When prompted, choose **Local** and store the private key in .env.keys. Your .env now contains encrypted values; .env.keys unlocks them.

## Commit

Commit the encrypted .env file. Keep .env.keys out of git and the Docker build context.

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

Keep the encrypted .env file available to Docker. If your existing .dockerignore excludes .env files, add !.env after that rule.

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

Create a Dockerfile:

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

The image contains your app and encrypted .env, but no private key. ENTRYPOINT decrypts the file before starting CMD. --strict stops startup if decryption fails.

Build it:

```console
$ docker build -t hello-docker .
```
{: copy="docker build -t hello-docker ."}

Mount your local key file read-only when you run it:

```console
$ docker run --rm --mount "type=bind,source=$(pwd)/.env.keys,target=/app/.env.keys,readonly" hello-docker
Hello Secret
```
{: copy="docker run --rm --mount \"type=bind,source=$(pwd)/.env.keys,target=/app/.env.keys,readonly\" hello-docker"}

These host commands use a POSIX shell, such as Bash or Zsh. In PowerShell, replace $(pwd)/.env.keys with the absolute path to your key file.

HELLO is a demonstration value. Use real secrets in your application without printing them.

For an existing app, copy its code and install dependencies before the entrypoint. Keep your usual application command in CMD.

[**Mount your files** Alternative →](/docs/docker/mount-files/){: .side-path}

[**Copy the binary** Alternative →](/docs/docker/copy-binary/){: .side-path}

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

Your teammate accepts the invitation, pulls the repository, installs Dotenvx, and logs in on their machine. They build the image, then retrieve the development key into their shell and pass it to Docker:

```shell
export DOTENV_PRIVATE_KEY="$(dotenvx keypair DOTENV_PRIVATE_KEY)"
docker run --rm --env DOTENV_PRIVATE_KEY hello-docker
unset DOTENV_PRIVATE_KEY
```

Docker passes the key to the container; Dotenvx decrypts there. This retrieves a usable private key on the teammate's machine. A host login is not automatically available inside a container.

[**Share a private key** Alternative →](/docs/docker/share-private-key/){: .side-path}

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

When prompted, choose **Enclaved**, select your supported deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name. Choose the resource that runs your container.

Update the Dockerfile's COPY instruction to include the encrypted production file:

```dockerfile
COPY index.js .env .env.production ./
```

If .dockerignore excludes production env files, add !.env.production after that rule. Commit the encrypted file and Dockerfile:

```console
$ git add -f .env.production
$ git add Dockerfile index.js
$ git commit -m "add encrypted production configuration"
```
{: copy="git add -f .env.production
git add Dockerfile index.js
git commit -m \"add encrypted production configuration\""}

Build and publish the image using your deployment platform's usual workflow. The image build does not need the private key.

In the container's runtime environment, set DOTENV_FILE to .env.production and make the provisioned DOTENV_PRIVATE_KEY_PRODUCTION available to the container. A secret configured only for the image builder will not reach the running app.

Start the container with its default entrypoint and command. It prints Hello Production after decrypting .env.production. Keep .env.keys off the deployment image.

For a host that already has DOTENV_PRIVATE_KEY_PRODUCTION in its shell environment, the equivalent Docker command is:

```console
$ docker run --rm --env DOTENV_FILE=.env.production --env DOTENV_PRIVATE_KEY_PRODUCTION hello-docker
Hello Production
```
{: copy="docker run --rm --env DOTENV_FILE=.env.production --env DOTENV_PRIVATE_KEY_PRODUCTION hello-docker"}

Rebuild hello-docker after changing its Dockerfile or encrypted files. For repeatable releases, pin your base image and Dotenvx version or image digest.

[**Deploy with a private key** Alternative →](/docs/docker/deploy-private-key/){: .side-path}

[**Build-time secrets** Alternative →](/docs/docker/build-secrets/){: .side-path}

## Conclusion

Your encrypted configuration travels with your Docker image. Dotenvx decrypts it when the container starts, using a key supplied separately.

Running multiple services? Continue with [Docker Compose](/docs/docker-compose/).
