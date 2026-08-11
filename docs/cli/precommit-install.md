---
layout: docs-cli
title: "--install"
eyebrow: "dotenvx precommit"
eyebrow_href: /docs/cli/precommit/
description: Install a shell script to .git/hooks/pre-commit to prevent accidentally committing any .env files to source control.
permalink: /docs/cli/precommit-install/
redirect_from:
  - /docs/advanced/precommit-install
  - /docs/advanced/precommit-install/
  - /docs/ref/cli/precommit-install
  - /docs/ref/cli/precommit-install/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Precommit
    href: /docs/cli/precommit/
---
{% capture cli_code_0 %}
$ dotenvx precommit --install
▣ dotenvx precommit installed [.git/hooks/pre-commit]
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx precommit --install{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
