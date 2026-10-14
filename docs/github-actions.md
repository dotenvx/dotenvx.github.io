---
layout: docs-markdown
title: "GitHub Actions"
social_title: "Encrypt a .env file for GitHub Actions"
description: "Encrypt a .env file for GitHub Actions and inject its secrets into your workflow at runtime."
icon: github-actions
permalink: /docs/github-actions/
redirect_from:
  - /docs/cis/github-actions
  - /docs/cis/github-actions/
  - /docs/secrets-in-github-actions
  - /docs/secrets-in-github-actions/
quickstart_pager: true
---

{% raw %}
## Encrypt

Create a CI environment file and encrypt it.

```console
$ dotenvx encrypt -f .env.ci
```
{: copy="dotenvx encrypt -f .env.ci"}

Commit the encrypted `.env.ci` file, but never commit `.env.keys`.

## Add the private key to GitHub

Copy the private key for `.env.ci` from `.env.keys`. In your GitHub repository, open **Settings → Secrets and variables → Actions**, create a repository secret, and name it `DOTENV_PRIVATE_KEY`.

The encrypted values stay in `.env.ci`. GitHub stores only the private key needed to decrypt them during the workflow.

## Run

Install dotenvx, pass the GitHub secret to the step, and run your command through `dotenvx run`.

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: curl -sfS https://dotenvx.sh | sh
      - run: dotenvx run -- npm test
        env:
          DOTENV_PRIVATE_KEY: ${{ secrets.DOTENV_PRIVATE_KEY }}
          DOTENV_FILE: .env.ci
```
{% endraw %}
