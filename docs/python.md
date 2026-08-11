---
layout: docs-quickstart
title: "Python"
social_title: "Encrypt a .env file in Python"
description: "Encrypt a .env file in Python with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: python
permalink: /docs/python/
redirect_from:
  - /docs/languages/python
  - /docs/languages/python/
  - /docs/secrets-in-python/
  - /docs/secrets-in-python
install_lede: "Get the Dotenvx Python SDK."
install_after_lede: "And the CLI to encrypt files."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "pip install python-dotenvx"
install_after_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  import os
  from dotenvx import load_dotenv

  load_dotenv()

  print(f"HELLO: {os.getenv('HELLO')}")
install: |
  $ pip install python-dotenvx
install_after: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  import os
  from dotenvx import load_dotenv

  load_dotenv()

  print(f"HELLO: {os.getenv('HELLO')}")
---
