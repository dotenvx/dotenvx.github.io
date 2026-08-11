---
layout: docs-quickstart
title: "Python"
social_title: "Encrypt a .env file in Python"
description: "Encrypt a .env file in Python with dotenvx, commit it safely, and inject its secrets at runtime."
icon: python
permalink: /docs/python/
redirect_from:
  - /docs/secrets-in-python/
  - /docs/secrets-in-python
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  import os

  print(f"HELLO: {os.getenv('HELLO')}")
inject: |
  import os

  print(f"HELLO: {os.getenv('HELLO')}")
inject_after_copy: |
  dotenvx run -- python main.py
inject_after: |
  $ dotenvx run -- python main.py
---

