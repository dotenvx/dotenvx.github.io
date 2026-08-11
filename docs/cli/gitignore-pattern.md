---
layout: docs-cli
title: "--pattern"
eyebrow: "dotenvx gitignore"
eyebrow_href: /docs/cli/gitignore/
description: Gitignore specific pattern(s) of .env files.
permalink: /docs/cli/gitignore-pattern/
redirect_from:
  - /docs/advanced/gitignore-pattern
  - /docs/advanced/gitignore-pattern/
  - /docs/ref/cli/gitignore-pattern
  - /docs/ref/cli/gitignore-pattern/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Gitignore
    href: /docs/cli/gitignore/
---
{% capture cli_code_0 %}
$ dotenvx gitignore --pattern .env.keys
▣ ignored .env.keys (.gitignore)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx gitignore --pattern .env.keys{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
