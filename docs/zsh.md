---
layout: docs-quickstart
title: "Zsh"
social_title: "Encrypt a .env file in Zsh"
description: "Encrypt a .env file in Zsh with dotenvx, commit it safely, and inject its secrets at runtime."
icon: zsh
permalink: /docs/zsh/
inject_lede: "Then inject your encrypted secrets at runtime with dotenvx run."
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: "dotenvx run --quiet -- zsh -c 'echo Hello $HELLO'"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  $ dotenvx run --quiet -- zsh -c 'echo Hello $HELLO'
---
