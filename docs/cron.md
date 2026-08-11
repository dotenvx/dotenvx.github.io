---
layout: docs-quickstart
title: "Cron"
social_title: "Encrypt .env secrets for cron jobs"
description: "Encrypt .env secrets for cron jobs with dotenvx and inject them securely at runtime."
icon: cron
permalink: /docs/cron/
redirect_from:
  - /docs/secrets-in-cron/
  - /docs/secrets-in-cron
inject_lede: "Then inject your encrypted secrets in cron jobs with `dotenvx run`."
inject_title: "3. Inject"
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  # run every day at 8am
  0 8 * * * dotenvx run -- /path/to/myscript.sh
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  # run every day at 8am
  0 8 * * * dotenvx run -- /path/to/myscript.sh
---

