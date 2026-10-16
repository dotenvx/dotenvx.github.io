---
layout: docs-markdown
title: "GitHub Actions"
social_title: "Encrypt a .env file for GitHub Actions"
description: "Encrypt a .env file for GitHub Actions and inject its secrets into your workflow at runtime."
icon: github-actions
permalink: /docs/github-actions/
markdown_url: /docs/github-actions.md
agent_prompt: Set up Dotenvx with GitHub Actions using an Enclaved Key for me.
redirect_from:
  - /docs/cis/github-actions
  - /docs/cis/github-actions/
  - /docs/secrets-in-github-actions
  - /docs/secrets-in-github-actions/
quickstart_pager: true
---

## Prerequisites

Start with a GitHub repository and access to configure its Actions secrets. Open a terminal at the repository root to prepare the encrypted CI environment file.

The workflow runs remotely in GitHub Actions using an Enclaved Key. The setup commands below use npm or pnpm.

## Install

In your project, install Dotenvx as a development dependency.

```console
$ npm install --save-dev @dotenvx/dotenvx
```
{: copy="npm install --save-dev @dotenvx/dotenvx" package-manager="npm"}

```console
$ pnpm add -D @dotenvx/dotenvx
```
{: copy="pnpm add -D @dotenvx/dotenvx" package-manager="pnpm"}

Commit package.json and your package manager's lockfile so the workflow can install the same dependencies.

## Encrypt

Create a .env.ci file for your workflow.

```dotenv
# .env.ci
HELLO="CI"
```
{: copy="HELLO=\"CI\""}

Log in to Dotenvx.

```console
$ npx dotenvx login
```
{: copy="npx dotenvx login" package-manager="npm"}

```console
$ pnpm exec dotenvx login
```
{: copy="pnpm exec dotenvx login" package-manager="pnpm"}

Encrypt it with an Enclaved Key ◊

```console
$ npx dotenvx encrypt -f .env.ci
```
{: copy="npx dotenvx encrypt -f .env.ci" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.ci
```
{: copy="pnpm exec dotenvx encrypt -f .env.ci" package-manager="pnpm"}

When prompted, choose **Enclaved**, select **GitHub Actions**, and choose the connection and repository for your workflow. Use DOTENV_PRIVATE_KEY_CI as the private key name.

Your .env.ci values are now encrypted. The Enclaved Key is configured for GitHub Actions so the remote runner can decrypt them.

## Commit

Commit your encrypted .env.ci file with your code so GitHub Actions can load it. Keep .env.keys out of git. The -f flag adds the encrypted file even if your project ignores .env files.

```console
$ git add -f .env.ci
$ git commit -m "encrypt .env.ci"
```
{: copy="git add -f .env.ci
git commit -m \"encrypt .env.ci\""}

## Run

Create .github/workflows/ci.yml. This workflow checks out your encrypted .env.ci file, installs Dotenvx, and uses DOTENV_PRIVATE_KEY_CI from GitHub Actions secrets to decrypt it on the runner.

{% raw %}
```yaml
name: CI

on: [push]

permissions:
  contents: read

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false
      - run: npm ci
      - name: Check CI secrets
        run: >-
          npx dotenvx run -f .env.ci --strict --
          node -e "require('node:assert/strict').equal(process.env.HELLO, 'CI'); console.log('CI secrets loaded')"
        env:
          DOTENV_PRIVATE_KEY_CI: ${{ secrets.DOTENV_PRIVATE_KEY_CI }}
```
{% endraw %}
{: label=".github/workflows/ci.yml" package-manager="npm"}

{% raw %}
```yaml
name: CI

on: [push]

permissions:
  contents: read

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false
      - uses: pnpm/action-setup@v6
        with:
          version: 10
      - run: pnpm install --frozen-lockfile
      - name: Check CI secrets
        run: >-
          pnpm exec dotenvx run -f .env.ci --strict --
          node -e "require('node:assert/strict').equal(process.env.HELLO, 'CI'); console.log('CI secrets loaded')"
        env:
          DOTENV_PRIVATE_KEY_CI: ${{ secrets.DOTENV_PRIVATE_KEY_CI }}
```
{% endraw %}
{: label=".github/workflows/ci.yml" package-manager="pnpm"}

The pnpm example uses version 10; match it to the version used for your project's lockfile.

Commit the workflow and push your changes:

```console
$ git add .github/workflows/ci.yml
$ git commit -m "add encrypted CI workflow"
$ git push
```
{: copy="git add .github/workflows/ci.yml
git commit -m \"add encrypted CI workflow\"
git push"}

Open your repository's **Actions** tab, select the **CI** run, and open **Check CI secrets**. A successful run prints:

```text
CI secrets loaded
```

The check confirms that the remote runner received the decrypted HELLO value. Replace the node -e check with your test or build command when you're ready to use your own CI secrets.

## Conclusion

You've encrypted your CI secrets, committed them with your code, and loaded them on a GitHub Actions runner with an Enclaved Key. Your encrypted .env.ci file travels with your repository, ready for your workflow's tests and builds.
