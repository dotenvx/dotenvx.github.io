---
layout: docs-quickstart
title: "PHP"
social_title: "Encrypt a .env file in PHP"
description: "Encrypt a .env file in PHP with dotenvx, commit it safely, and inject its secrets at runtime."
icon: php
permalink: /docs/php/
redirect_from:
  - /docs/languages/php
  - /docs/languages/php/
  - /docs/secrets-in-php/
  - /docs/secrets-in-php
install_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
install: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject_lede: |
  Then inject your encrypted secrets at runtime with `dotenvx run`.
inject_copy: |
  <?php

  echo "Hello {$_SERVER['HELLO']}\n";
inject: |
  <?php

  echo "Hello {$_SERVER['HELLO']}\n";
inject_after_copy: |
  dotenvx run -- php index.php
inject_after: |
  $ dotenvx run -- php index.php
---

