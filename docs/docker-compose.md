---
layout: docs-quickstart
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
encrypt_title: "1. Encrypt"
encrypt_lede: "Encrypt your `.env` file before building the image."
encrypt_copy: "dotenvx encrypt"
encrypt: |
  $ dotenvx encrypt
encrypt_after_lede: "Commit the encrypted `.env` file, but never commit or copy `.env.keys` into the image."
encrypt_after_copy: ".env.keys"
encrypt_after: |
  .env.keys
inject_title: "2. Add dotenvx to your image"
inject_lede: "Install dotenvx in the image that runs your application."
inject_copy: |
  FROM node:22-alpine

  RUN apk add --no-cache curl \
    && curl -sfS https://dotenvx.sh | sh \
    && apk del curl

  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --omit=dev
  COPY . .

  CMD ["node", "index.js"]
inject: |
  FROM node:22-alpine

  RUN apk add --no-cache curl \
    && curl -sfS https://dotenvx.sh | sh \
    && apk del curl

  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --omit=dev
  COPY . .

  CMD ["node", "index.js"]
run_title: "3. Run with Compose"
run_lede: "Prepend the service command with `dotenvx run --` and pass the private key through from the environment running Compose."
run_copy: |
  services:
    app:
      build: .
      command: dotenvx run -- node index.js
      environment:
        DOTENV_PRIVATE_KEY: ${DOTENV_PRIVATE_KEY}
run: |
  services:
    app:
      build: .
      command: dotenvx run -- node index.js
      environment:
        DOTENV_PRIVATE_KEY: ${DOTENV_PRIVATE_KEY}
---

For a local check, let Compose read the private key from your ignored `.env.keys` file.

{% capture compose_up %}
$ docker compose --env-file .env.keys up --build
{% endcapture %}
{% include components/design-codeblock.html value=compose_up copy_text="docker compose --env-file .env.keys up --build" %}
