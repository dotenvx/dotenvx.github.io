---
layout: docs-cli
permalink: /docs/cli/protect-docker/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "protect --docker"
command: "dotenvx protect --docker"
description: "Check env files during a Docker build. Use .dockerignore to exclude files from the build context."
---
Check env files during a Docker build. Use `.dockerignore` to exclude files from the build context.

```docker
RUN dotenvx protect --docker
```
