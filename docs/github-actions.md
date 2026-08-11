---
layout: docs-quickstart
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
encrypt_title: "1. Encrypt"
encrypt_lede: "Create a CI environment file and encrypt it."
encrypt_copy: "dotenvx encrypt -f .env.ci"
encrypt: |
  $ dotenvx encrypt -f .env.ci
encrypt_after_lede: "Commit the encrypted `.env.ci` file, but never commit `.env.keys`."
inject_title: "2. Add the private key to GitHub"
inject_lede: "Copy `DOTENV_PRIVATE_KEY_CI` from `.env.keys`. In your GitHub repository, open **Settings → Secrets and variables → Actions**, create a repository secret, and name it `DOTENV_PRIVATE_KEY_CI`.\n\nThe encrypted values stay in `.env.ci`. GitHub stores only the private key needed to decrypt them during the workflow."
run_title: "3. Run"
run_lede: "Install dotenvx, pass the GitHub secret to the step, and run your command through `dotenvx run`."
run_copy: |
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
        - run: dotenvx run -f .env.ci -- npm test
          env:
            DOTENV_PRIVATE_KEY_CI: ${{ secrets.DOTENV_PRIVATE_KEY_CI }}
run: |
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
        - run: dotenvx run -f .env.ci -- npm test
          env:
            DOTENV_PRIVATE_KEY_CI: ${{ secrets.DOTENV_PRIVATE_KEY_CI }}
---
