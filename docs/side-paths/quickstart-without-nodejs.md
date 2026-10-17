---
layout: docs-side-path
title: Without Node.js
description: Try your encrypted .env file with printenv.
permalink: /docs/quickstart/without-nodejs/
markdown_url: /docs/quickstart/without-nodejs.md
parent_url: /docs/quickstart/#ship
parent_title: Quickstart
side_path_kind: Alternative
---

On macOS or Linux, try your decrypted secret with printenv:

```console
$ dotenvx run -- printenv HELLO
⟐ injected env (2) from .env (022 0D8) via .env.keys
Secret
```
{: copy="dotenvx run -- printenv HELLO"}

Dotenvx decrypts .env and makes its values available to the command. Replace printenv HELLO with your app's start command to use any language.
