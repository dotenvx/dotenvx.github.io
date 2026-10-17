---
layout: docs-side-path
title: Share a private key
description: Share a private key with Docker and Dotenvx.
permalink: /docs/docker/share-private-key/
markdown_url: /docs/docker/share-private-key.md
parent_url: /docs/docker/#share
parent_title: Docker
side_path_kind: Alternative
---

Share the encrypted .env file through git and the development private key through your team's approved private channel.

Retrieve the key:

```console
$ dotenvx keypair DOTENV_PRIVATE_KEY
```
{: copy="dotenvx keypair DOTENV_PRIVATE_KEY"}

Your teammate puts the value in an ignored .env.keys file:

```dotenv
DOTENV_PRIVATE_KEY="your-shared-private-key"
```

They can then build the image and use the read-only key mount from [Ship](/docs/docker/#ship).

Keep .env.keys out of git and Docker images. Anyone retaining a copy of the key can still decrypt the file after repository access is removed.
