---
layout: docs-quickstart
title: "Bitwarden"
social_title: "Use Bitwarden secrets in .env files"
description: "Use Bitwarden secret references in .env files and resolve them securely at runtime with dotenvx."
icon: bitwarden
permalink: /docs/bitwarden/
redirect_from:
  - /docs/secrets-in-bitwarden/
  - /docs/secrets-in-bitwarden
prerequisite_title: "Prerequisites"
prerequisite_lede: "To get the most out of this guide, you'll need to:"
prerequisite_links:
  - label: Install the Bitwarden CLI
    href: https://bitwarden.com/help/cli/
install_copy: "curl -sfS https://dotenvx.sh | sh"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt_title: "2. Add a secret reference"
encrypt_lede: "Reference a login item from your Bitwarden vault. Item names can contain spaces."
encrypt_copy: "echo 'PASSWORD=\"bw://My GitHub Account/password\"' > .env"
encrypt: |
  $ echo 'PASSWORD="bw://My GitHub Account/password"' > .env
encrypt_after_lede: "The reference format is `bw://<item>/<field>`. Use an item name or ID with the `username`, `password`, or `uri` field."
inject_title: "3. Run"
inject_lede: "Run your command with the secret resolved from Bitwarden. If the vault is locked, Bitwarden prompts you to unlock it."
inject_copy: "dotenvx run -- sh -c 'echo Password loaded: ${PASSWORD:+yes}'"
inject: |
  $ dotenvx run -- sh -c 'echo Password loaded: ${PASSWORD:+yes}'
  Password loaded: yes
video: https://github.com/user-attachments/assets/ea4a2306-8179-49c4-a4b5-cfb43b5eeea2
---
