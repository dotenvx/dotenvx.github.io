---
layout: docs-cli
title: "Shell Expansion"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
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

```console
$ dotenvx run --env="HELLO=World" -- sh -c 'echo Hello $HELLO'
Hello World
```
{: copy="dotenvx run --env=\"HELLO=World\" -- sh -c 'echo Hello $HELLO'"}

## Background

Given your `.env` file looks like this,

```dotenv
HELLO=World
```

You might assume running `dotenvx run -- echo "Hello $HELLO"` would print `Hello World`. But, that's not what happens.

Why? The shell processes the `echo "Hello $HELLO"` command first before passing it to `dotenvx`. That's how shells work. They don't read from left to right like a human. Instead, they first convert any variables like `$HELLO`. As a result, `$HELLO` gets converted to empty string `''` before `dotenvx run` has a chance to run. The result is `Hello `.

There are two solutions to this:

1. [subshell](#subshell)
2. [subscript](#subscript)

## Subshell

As detailed above, use a subshell.

```console
$ dotenvx run -- bash -c 'echo Hello $HELLO'
```
{: copy="dotenvx run -- bash -c 'echo Hello $HELLO'"}

Make sure to use single quotes `'` so values are NOT interpreted.

## Subscript

Or you can encapsulate in a script. Here's an example using [npm scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts).

```json
{
  "scripts": {
    "_echo": "echo Hello $HELLO",
    "hello": "dotenvx run -- npm run _echo"
  }
}
```
{: label="package.json"}

```console
$ npm run hello
Hello World
```
{: copy="npm run hello"}
