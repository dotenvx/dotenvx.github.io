---
layout: docs-cli
title: Protect
description: Keep plaintext secrets and private keys out of commits across your repositories on this machine.
permalink: /docs/cli/protect/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
related:
  - title: Encrypt
    href: /docs/cli/encrypt/
  - title: Private-key files
    href: /docs/env-keys-file/
  - title: Precommit
    href: /docs/cli/precommit/
---
Run once to set up protection for your Git user across existing and future repositories on this machine. You can run it outside a repository too.

{% capture protect_setup %}
$ dotenvx protect
? Keep plaintext secrets (.env*) secure from code? (Y/n)
? Keep private keys (.env.keys*) secure from code? (Y/n)
{% endcapture %}
{% capture protect_setup_copy %}dotenvx protect{% endcapture %}
{% include components/design-codeblock.html value=protect_setup copy_text=protect_setup_copy %}

Both choices default to yes. They do different jobs:

### Keep plaintext secrets secure

This adds a check to `git add`. If an env file contains plaintext secrets, Git refuses to add it to the next commit, even with `git add -f`. Encrypt the file or exclude it from Git before trying again.

Encrypted env files pass through unchanged. No private key is needed for this check, and `protect` does not encrypt or rewrite your files.

### Keep private keys secure

This tells Git to skip `.env.keys*` files automatically during normal adds, so you do not have to exclude them yourself in every repository. Existing ignore rules are preserved.

If both choices are enabled, an explicit `git add -f .env.keys` is still blocked by the first check. Ignoring alone does not block forced adds or stop tracking a file already in Git.

Declining a choice leaves its existing settings unchanged. In CI or without an interactive terminal, `protect` installs only the env-file check without prompting.

### Supported files

Protection covers these filenames at any directory depth, including monorepos:

| Pattern | Examples |
| --- | --- |
| `.env*` | `.env`, `apps/web/.env.production` |
| `*.env` | `services/api/config.env` |
| `.flaskenv` | `services/api/.flaskenv` |
| `.dev.vars*` | `apps/worker/.dev.vars`, `.dev.vars.staging` |
| `.env.d/*` | `.env.d/production`, `apps/web/.env.d/local` |

The `.env.d/` rule covers files directly inside those directories. Dockerfiles and other configuration formats are not included. Gitignored directories such as `node_modules/` are skipped during normal adds.

`.env.example`, `.env.vault`, and `.env.x` are exempt. Public-key entries (`DOTENV_PUBLIC_KEY*`) and variables ending in `_PLAIN` may remain plaintext. Private-key files named `.env.keys*` are always rejected by the check.

The content check recognizes the `encrypted:` prefix; it does not verify that ciphertext can be decrypted. Empty and comment-only env files pass.

### Try it

In a disposable repository, create an env file with a dummy value and try adding it:

{% capture protect_test %}
$ printf 'HELLO=world\n' > .env
$ git add -f .env
☠ [PLAINTEXT_ENV] refusing to stage ".env"
fix: run [dotenvx encrypt -f .env]
{% endcapture %}
{% capture protect_test_copy %}printf 'HELLO=world\n' > .env
git add -f .env{% endcapture %}
{% include components/design-codeblock.html value=protect_test copy_text=protect_test_copy %}

Git also prints its own filter-failure diagnostics. Encrypt the file, then try again:

{% capture protect_encrypt %}
$ dotenvx encrypt -f .env
$ git add .env
{% endcapture %}
{% capture protect_encrypt_copy %}dotenvx encrypt -f .env
git add .env{% endcapture %}
{% include components/design-codeblock.html value=protect_encrypt copy_text=protect_encrypt_copy %}

The encrypted file can now be added to your next commit.

### Moving from precommit

`dotenvx precommit` is deprecated. Run `dotenvx protect` inside a repository and enable the plaintext-secret check to install protection and remove recognized dotenvx pre-commit hook blocks. Other hook commands are preserved. Customized, symlinked, or external shared hooks may need manual cleanup.

Run it in each repository that still has an old hook. To remove only the hook, use `dotenvx precommit --uninstall`.

### What gets installed

The first choice configures a required Git clean filter in your global Git configuration and adds filename rules to your global attributes file. It respects `core.attributesFile`, otherwise using `$XDG_CONFIG_HOME/git/attributes` or `~/.config/git/attributes`.

The second adds `.env.keys*` to your global ignore file. It respects `core.excludesFile`, otherwise using `$XDG_CONFIG_HOME/git/ignore` or `~/.config/git/ignore`. It does not add rules that force other env files to be included in Git.

Git invokes `dotenvx protect --git-file <pathname>`, passing the contents through stdin. The pathname identifies the incoming contents; dotenvx does not open that file to perform the check.

Re-run `dotenvx protect` after upgrading or moving the installed executable to refresh your setup. Repeated installation does not duplicate its rules.

Protection applies to future adds. It does not remove secrets already added to the next commit or stored in Git history. Repository-specific attributes and Git settings can override global rules. Each developer needs to set up protection for their own Git user.
