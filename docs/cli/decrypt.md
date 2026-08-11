---
layout: docs-cli
title: Decrypt
description: Convert encrypted .env file to plain .env file.
permalink: /docs/cli/decrypt/
redirect_from:
  - /docs/advanced/decrypt
  - /docs/advanced/decrypt/
  - /docs/ref/cli/decrypt
  - /docs/ref/cli/decrypt/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: decrypt -f
    href: /docs/cli/decrypt-f/
  - title: decrypt -fk
    href: /docs/cli/decrypt-fk/
  - title: decrypt -k
    href: /docs/cli/decrypt-k/
  - title: decrypt -ek
    href: /docs/cli/decrypt-ek/
  - title: decrypt --stdout
    href: /docs/cli/decrypt-stdout/
  - title: decrypt --stdout --mask
    href: /docs/cli/decrypt-stdout-mask/
  - title: decrypt --no-armor
    href: /docs/cli/decrypt-no-armor/
  - title: decrypt --no-native
    href: /docs/cli/decrypt-no-native/
---
{% capture cli_code_0 %}
$ dotenvx decrypt
◇ decrypted (.env)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx decrypt{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
