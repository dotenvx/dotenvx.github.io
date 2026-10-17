---
layout: docs-side-path
title: Build-time secrets
description: Build-time secrets with Docker and Dotenvx.
permalink: /docs/docker/build-secrets/
markdown_url: /docs/docker/build-secrets.md
parent_url: /docs/docker/#production
parent_title: Docker
side_path_kind: Alternative
---

Most apps only need secrets when the container starts. If your build itself needs them, use a [BuildKit secret mount](https://docs.docker.com/build/building/secrets/).

For a local example, create and encrypt .env.build with a demonstration BUILD_TOKEN value. Choose **Local** and store its key in .env.keys:

```dotenv
# .env.build
BUILD_TOKEN="example-build-token"
```

```console
$ dotenvx encrypt -f .env.build
```
{: copy="dotenvx encrypt -f .env.build"}

Create build.js. This demonstrates consuming a build secret without writing it into an artifact:

```javascript
// build.js
if (!process.env.BUILD_TOKEN) throw new Error('BUILD_TOKEN is required')
console.log('Build authenticated')
```

Start the Dockerfile with this syntax directive, before FROM:

```dockerfile
# syntax=docker/dockerfile:1
```

After installing Dotenvx and setting WORKDIR /app, add:

```dockerfile
COPY .env.build build.js ./
RUN --mount=type=secret,id=dotenv_keys,target=/app/.env.keys,required=true \
    /usr/local/bin/dotenvx run -f .env.build --strict -- node build.js
```

Keep the main app's COPY, ENTRYPOINT, and CMD instructions. Build with your ignored key file supplied separately:

```console
$ docker build --secret id=dotenv_keys,src=.env.keys -t hello-docker-build .
```
{: copy="docker build --secret id=dotenv_keys,src=.env.keys -t hello-docker-build ."}

The mount exists only for that RUN instruction. For CI, supply the build key through the runner's secret storage and a BuildKit secret mount; do not pass it through Dockerfile ARG or ENV.

Use a dedicated build key in CI. A build secret mount does not prevent your build tool from embedding decrypted values in generated files—keep secrets out of browser bundles and other published artifacts. The running app still needs its own runtime key.
