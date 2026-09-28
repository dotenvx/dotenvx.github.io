---
layout: docs-quickstart
title: "Nx"
social_title: "Encrypt a .env file in Nx"
description: "Upgrade Nx's dotenv-expand dependency to decrypt encrypted environment files when Nx loads them."
icon: nx
permalink: /docs/nx/
redirect_from:
  - /docs/monorepos/nx
  - /docs/monorepos/nx/
  - /docs/secrets-in-nx
  - /docs/secrets-in-nx/
prerequisite_lede: "An Nx workspace using npm and the [dotenvx CLI](/docs/install). This setup was tested with Nx 23.2.1 and dotenv-expand 1000.0.0. See the precedence limitation below before using shared root values."
install_title: "Update dotenv-expand"
install_lede: "Merge this override into the workspace root `package.json`. It updates the dependency Nx uses to expand and decrypt environment values. Installing dotenv-expand as a separate top-level dependency is not enough."
install_language: json
install: |
  {
    "overrides": {
      "nx": {
        "dotenv-expand": "1000.0.0"
      }
    }
  }
install_after_lede: "Apply the override and confirm that Nx resolves dotenv-expand 1000.0.0:"
install_after_format: cli
install_after_copy: |
  npm install
  npm ls nx dotenv-expand
install_after: |
  $ npm install
  $ npm ls nx dotenv-expand
encrypt_title: "Encrypt"
encrypt_lede: "Keep the environment file beside the Nx application and encrypt it. Replace `app` with your project's name and directory."
encrypt_copy: "dotenvx encrypt -f apps/app/.env"
encrypt_format: cli
encrypt: |
  $ dotenvx encrypt -f apps/app/.env
encrypt_after_lede: "Commit `apps/app/.env` and the updated package files, but never commit `apps/app/.env.keys`."
inject_title: "Set the private key"
inject_lede: "Copy the generated `DOTENV_PRIVATE_KEY` value from `apps/app/.env.keys` into your shell or CI secret configuration before starting Nx. Nx does not automatically read `.env.keys`. For a local Unix shell:"
inject_copy: "export DOTENV_PRIVATE_KEY='<your private key>'"
inject_format: cli
inject: |
  $ export DOTENV_PRIVATE_KEY='<your private key>'
inject_after_lede: "Supply the key that matches the encrypted file. This integration does not automatically select environment-specific private key names."
run_title: "Run Nx"
run_lede: "Run your usual Nx target. Nx selects the environment files and dotenv-expand decrypts their values using the supplied key. Read them normally through `process.env`."
run_copy: "npx nx serve app"
run_format: cli
run: |
  $ npx nx serve app
---

### File selection and precedence

Nx continues to select application and target-specific files, such as `apps/app/.env` and `apps/app/.env.serve.production`. Keep Nx's environment loading enabled; do not set `NX_LOAD_DOT_ENV_FILES=false` for this setup.

**Known limitation in Nx 23.2.1:** an encrypted root value can incorrectly take precedence over the same variable in a project or target-specific file. Keep encrypted values in project files, or avoid defining the same variable in both an encrypted root file and a project file. Updating dotenv-expand alone does not fix this Nx precedence bug.

Want native support? Leave a comment on [Nx PR #37219](https://github.com/nrwl/nx/pull/37219) to support the fix.

### Expansion behavior

Without a private key, encrypted values remain ciphertext; this setup does not fail automatically for a missing key. An incorrect key causes decryption to fail. Decrypted values also undergo variable expansion and command substitution: `$NAME` and `$(command)` expressions are evaluated.

### Using the dotenvx CLI instead

To let dotenvx load and decrypt a specific application's environment before Nx starts, use:

```shell
dotenvx run -f apps/app -- npx nx serve app
```

This alternative does not require the dependency override. Its injected values become inherited environment variables and take precedence over values Nx loads afterward.

For a shared root `.env` or separate `.env.keys` location with the CLI workflow, see [Secrets in monorepos](/docs/monorepos).
