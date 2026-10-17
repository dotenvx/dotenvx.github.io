---
layout: docs-side-path
title: Copy the binary
description: Copy the binary with Docker and Dotenvx.
permalink: /docs/docker/copy-binary/
markdown_url: /docs/docker/copy-binary.md
parent_url: /docs/docker/#ship
parent_title: Docker
side_path_kind: Alternative
---

Copy Dotenvx from its official image instead of running the shell installer. This avoids requiring curl or a shell for installation.

Replace the main Dockerfile's RUN installation block with:

```dockerfile
COPY --from=dotenv/dotenvx:latest /usr/local/bin/dotenvx /usr/local/bin/dotenvx
```

Keep the absolute entrypoint path:

```dockerfile
ENTRYPOINT ["/usr/local/bin/dotenvx", "run", "--strict", "--"]
```

Build and run it with the same commands as the main guide. Pin the source image to a tested version or digest for production.

For a shell-less image, also provide your application's runtime and any libraries or CA certificates it needs. Copying Dotenvx does not make every base image compatible automatically. Test your chosen base image and target architecture, especially scratch or distroless builds.

This installation alternative follows [PR #714](https://github.com/dotenvx/dotenvx/pull/714).
