---
layout: docs-quickstart
title: "uv"
social_title: "Encrypt a .env file in uv"
description: "Encrypt a .env file in a Python uv project with dotenvx, commit it safely, and inject its secrets at runtime."
icon: uv
permalink: /docs/uv/
redirect_from:
  - /docs/secrets-in-uv/
  - /docs/secrets-in-uv
prerequisite_title: "Prerequisites"
prerequisite_lede: "To get the most out of this guide, you'll need to:"
prerequisite_links:
  - label: Install uv
    href: https://github.com/astral-sh/uv#installation
setup_title: "0. Setup"
setup_lede: "Create uv project."
setup_copy: |
  uv init hello-world
  cd hello-world
setup: |
  $ uv init hello-world
  $ cd hello-world
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_copy: "dotenvx encrypt"
encrypt: |
  $ dotenvx encrypt
inject_lede: "Then inject your encrypted secrets at runtime with `dotenvx run` into a uv project."
inject_copy: |
  import os

  def main():
      print(f"Hello {os.getenv('HELLO')}")


  if __name__ == "__main__":
      main()
inject: |
  import os

  def main():
      print(f"Hello {os.getenv('HELLO')}")


  if __name__ == "__main__":
      main()
inject_after_copy: "dotenvx run -- uv run main.py"
inject_after: |
  $ dotenvx run -- uv run main.py
---
