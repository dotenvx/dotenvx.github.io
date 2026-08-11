---
layout: docs-quickstart
title: "Fish"
social_title: "Encrypt a .env file in Fish"
description: "Encrypt a .env file in Fish with dotenvx, commit it safely, and inject its secrets at runtime."
icon: fish
permalink: /docs/fish/
redirect_from:
  - /docs/secrets-in-fish/
  - /docs/secrets-in-fish
inject_lede: "Then inject your encrypted secrets at runtime with dotenvx run."
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: "dotenvx run --quiet -- sh -c 'echo Hello $HELLO'"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  $ dotenvx run --quiet -- sh -c 'echo Hello $HELLO'
---

