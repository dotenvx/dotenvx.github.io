---
layout: docs-quickstart
title: "Docker"
social_title: "Encrypt a .env file for Docker"
description: "Encrypt a .env file for Docker, include it safely in your image, and inject its secrets when the container starts."
icon: docker
permalink: /docs/docker/
redirect_from:
  - /docs/secrets-in-docker/
  - /docs/secrets-in-docker
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
inject_lede: "Install dotenvx and use `dotenvx run --` as the image entrypoint. Docker appends the existing `CMD`, so your application command stays easy to change."
inject_copy: |
  FROM node:22-alpine

  RUN apk add --no-cache curl \
    && curl -sfS https://dotenvx.sh | sh \
    && apk del curl

  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --omit=dev
  COPY . .

  ENTRYPOINT ["dotenvx", "run", "--"]
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

  ENTRYPOINT ["dotenvx", "run", "--"]
  CMD ["node", "index.js"]
run_title: "3. Run"
run_lede: "For a local check, pass the private key from your ignored `.env.keys` file."
run_copy: |
  docker build -t myapp .
  docker run --env-file .env.keys myapp
run: |
  $ docker build -t myapp .
  $ docker run --env-file .env.keys myapp
---
