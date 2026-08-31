---
layout: docs-cli
title: Precommit
description: Prevent .env files from being committed to code.
permalink: /docs/cli/precommit/
redirect_from:
  - /docs/advanced/precommit
  - /docs/advanced/precommit/
  - /docs/ref/cli/precommit
  - /docs/ref/cli/precommit/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "precommit directory"
    href: /docs/cli/precommit-directory/
  - title: "precommit --install"
    href: /docs/cli/precommit-install/
video: cli-precommit
---
{% capture cli_code_0 %}
$ dotenvx precommit
▣ encrypted/gitignored (1)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx precommit{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
