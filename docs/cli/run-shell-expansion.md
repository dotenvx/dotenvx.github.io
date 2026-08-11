---
layout: docs-cli
title: run - Shell Expansion
description: "Prevent your shell from expanding inline `$VARIABLES` before dotenvx has a chance to inject them. Use a subshell."
permalink: /docs/cli/run-shell-expansion/
redirect_from:
  - /docs/advanced/run-shell-expansion
  - /docs/advanced/run-shell-expansion/
  - /docs/ref/cli/run-shell-expansion
  - /docs/ref/cli/run-shell-expansion/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ dotenvx run --env="HELLO=World" -- sh -c 'echo Hello $HELLO'
Hello World
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx run --env="HELLO=World" -- sh -c 'echo Hello $HELLO'{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

## Background

Given your `.env` file looks like this,

{% capture cli_fix_4937586 %}
HELLO=World

{% capture cli_code_1 %}

You might assume running `dotenvx run -- echo "Hello $HELLO"` would print `Hello World`. But, that's not what happens.

Why? The shell processes the `echo "Hello $HELLO"` command first before passing it to `dotenvx`. That's how shells work. They don't read from left to right like a human. Instead, they first convert any variables like `$HELLO`. As a result, `$HELLO` gets converted to empty string `''` before `dotenvx run` has a chance to run. The result is `Hello `.

There are two solutions to this:

1. [subshell](#subshell)
2. [subscript](#subscript)

## Subshell

As detailed above, use a subshell.
{% endcapture %}
{% capture cli_code_1_copy %}You might assume running `dotenvx run -- echo "Hello $HELLO"` would print `Hello World`. But, that's not what happens.{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

bash
$ dotenvx run -- bash -c 'echo Hello $HELLO'

{% capture cli_code_2 %}

Make sure to use single quotes `'` so values are NOT interpreted.

## Subscript

Or you can encapsulate in a script. Here's an example using [npm scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts).
{% endcapture %}
{% capture cli_code_2_copy %}Make sure to use single quotes `'` so values are NOT interpreted.{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

json {{ title: "package.json" }}
{
  "scripts": {
    "_echo": "echo Hello $HELLO",
    "hello": "dotenvx run -- npm run _echo"
  }
}

{% capture cli_code_3 %}

{% endcapture %}
{% include components/design-codeblock.html value=cli_code_3 copy=false %}

sh
$ npm run hello
Hello World
{% endcapture %}
{% capture cli_fix_4937586_copy %}dotenvx run -- bash -c 'echo Hello $HELLO'
npm run hello{% endcapture %}
{% include components/design-codeblock.html value=cli_fix_4937586 copy_text=cli_fix_4937586_copy %}
