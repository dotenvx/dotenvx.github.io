---
layout: docs-quickstart
title: "uv"
social_title: "Encrypt a .env file in uv"
description: "Encrypt a .env file in a Python uv project with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: uv
permalink: /docs/uv/
redirect_from:
  - /docs/secrets-in-uv/
  - /docs/secrets-in-uv
prerequisite_lede: "To get the most out of this guide, you'll need to:"
prerequisite_links:
  - label: Install uv
    href: https://github.com/astral-sh/uv#installation
setup_title: "0. Setup"
setup_lede: "Create a uv project."
setup_copy: |
  uv init hello-world
  cd hello-world
setup: |
  $ uv init hello-world
  $ cd hello-world
install_lede: "Get the Dotenvx Python SDK."
install_after_lede: "And the CLI to encrypt files."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "uv add python-dotenvx"
install_after_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  import os
  from dotenvx import load_dotenv

  load_dotenv()

  print(f"HELLO: {os.getenv('HELLO')}")
install: |
  $ uv add python-dotenvx
install_after: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  import os
  from dotenvx import load_dotenv

  load_dotenv()

  print(f"HELLO: {os.getenv('HELLO')}")
inject_after_lede: "Run it with uv."
inject_after_copy: "uv run main.py"
inject_after: |
  $ uv run main.py
---
