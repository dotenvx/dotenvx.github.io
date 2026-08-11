---
layout: docs-cli
title: Get
description: Return a single environment variable.
permalink: /docs/cli/get/
redirect_from:
  - /docs/ref/cli/get/
  - /docs/ref/cli/get
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "get KEY"
    href: /docs/cli/get-key/
  - title: "get KEY --mask"
    href: /docs/cli/get-key-mask/
  - title: "get KEY -f"
    href: /docs/cli/get-key-f/
  - title: "get KEY -f directory"
    href: /docs/cli/get-key-f-directory/
  - title: "get KEY -fk"
    href: /docs/cli/get-key-fk/
  - title: "get KEY --env"
    href: /docs/cli/get-key-env/
  - title: "get KEY --overload"
    href: /docs/cli/get-key-overload/
  - title: "get KEY --strict"
    href: /docs/cli/get-key-strict/
  - title: "get KEY --ignore"
    href: /docs/cli/get-key-ignore/
  - title: "get KEY --convention=nextjs"
    href: /docs/cli/get-key-convention-nextjs/
  - title: "get KEY -f directory --convention=nextjs"
    href: /docs/cli/get-key-f-directory-convention-nextjs/
  - title: "get KEY --convention=flow"
    href: /docs/cli/get-key-convention-flow/
  - title: "get (json)"
    href: /docs/cli/get-json/
  - title: "get -ik"
    href: /docs/cli/get-include-key/
  - title: "get -ek"
    href: /docs/cli/get-exclude-key/
  - title: "get --format shell"
    href: /docs/cli/get-shell/
  - title: "get --format colon"
    href: /docs/cli/get-colon/
  - title: "get --format eval"
    href: /docs/cli/get-eval/
  - title: "get --format eval-export"
    href: /docs/cli/get-eval-export/
  - title: "get --all"
    href: /docs/cli/get-all/
  - title: "get --pretty-print"
    href: /docs/cli/get-pretty-print/
  - title: "get --all --pretty-print"
    href: /docs/cli/get-all-pretty-print/
  - title: "get --no-armor"
    href: /docs/cli/get-no-armor/
  - title: "get KEY --no-native"
    href: /docs/cli/get-no-native/
---
{% capture cli_code_0 %}
$ dotenvx get HELLO
World
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx get HELLO{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
