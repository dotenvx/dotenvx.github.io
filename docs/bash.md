---
layout: docs-quickstart
title: "Bash"
social_title: "Encrypt a .env file in Bash"
description: "Encrypt a .env file in Bash with dotenvx, commit it safely, and inject its secrets at runtime."
icon: bash
permalink: /docs/bash/
redirect_from:
  - /docs/secrets-in-bash/
  - /docs/secrets-in-bash
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

