---
layout: docs-quickstart
title: "1Password"
social_title: "Use 1Password secrets in .env files"
description: "Use 1Password secret references in .env files and resolve them securely at runtime with dotenvx."
icon: 1password
permalink: /docs/1password/
redirect_from:
  - /docs/guides/1password
  - /docs/guides/1password/
  - /docs/secrets-in-1password
  - /docs/secrets-in-1password/
prerequisite_lede: "To get the most out of this guide, you'll need to:"
prerequisite_links:
  - label: Install op
    href: https://developer.1password.com/docs/cli/get-started/
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_title: "2. Add a secret reference"
encrypt_lede: "Reference a secret from your 1Password vault."
encrypt_copy: 'echo "HELLO=op://Personal/hello/password" > .env'
encrypt: |
  $ echo "HELLO=op://Personal/hello/password" > .env
inject_title: "3. Run"
inject_lede: "Run your command with the secret resolved from 1Password."
inject_copy: "dotenvx run -- sh -c 'echo Hello $HELLO'"
inject: |
  $ dotenvx run -- sh -c 'echo Hello $HELLO'
  Hello World
video: https://github.com/user-attachments/assets/689a6c2e-b21f-4067-8c64-9e84e6287889
---
