---
layout: docs-quickstart
title: "CLI"
social_title: "Encrypt a .env file with the Dotenvx CLI"
description: "Encrypt a .env file with the Dotenvx CLI, commit it safely, and inject its secrets at runtime."
icon: cli
permalink: /docs/cli-quickstart/
redirect_from:
  - /docs/secrets-with-cli/
  - /docs/secrets-with-cli
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_copy: "dotenvx encrypt"
encrypt: |
  $ dotenvx encrypt
inject_lede: "Then inject your encrypted secrets at runtime with `dotenvx run`."
inject_copy: "dotenvx run -- sh -c 'echo Hello $HELLO'"
inject: |
  $ dotenvx run -- yourcommand

  # for example: dotenvx run -- sh -c 'echo Hello $HELLO'
---
