---
layout: blog
author: "Scott Motte – Mot"
title: "Rotate NPM Tokens with Dotenvx Ops. Automatically."
image: "/assets/img/blog/blog-11.png"
excerpt: "NPM's new short-lived tokens improve security, but they make rotation painful."
---

**NPM's new short-lived tokens improve security, but they make rotation painful.** Every 90 days (or sooner) you have to manually create a fresh token, set it in your CI, and make sure nothing breaks. <sup><a href="#footnote1">1</a></sup>

It was a real problem for us. We publish <a href="https://www.npmjs.com/org/dotenvx">64 npm packages</a>, and rotating tokens across all of them by hand was not going to be sustainable. Every expiration meant touching dozens of pipelines and praying the next publish didn't fail. So we built a solution.

Introducing <a href="https://dotenvx.com/docs/ops/rotate">Dotenvx Rotate</a> — part of Dotenvx Ops.

## How It Works

Install [dotenvx-ops](https://dotenvx.com/ops).

```sh
$ curl -sfS https://dotenvx.com/ops | sh
```

Run `rotate npm connect` to connect <a href="https://npmjs.com">npm</a>.

```sh
$ dotenvx-ops rotate npm connect
```

When prompted enter your npm username and password.

```sh
$ dotenvx-ops rotate npm connect
✔ npm username: USERNAME
✔ npm password: PASSWORD
```

This opens a local browser session, connecting your npm account.

<img src="https://github.com/user-attachments/assets/49ee113b-95dd-4586-87ca-06da3b0f8d20" />

Complete any 2FA steps manually.

<img src="https://github.com/user-attachments/assets/a7487c65-0ee6-4415-9a94-d1e64a377e66" />

On success, return to your CLI, and you will see a passcard created.

```sh
$ dotenvx-ops rotate npm connect
✔ npm username: USERNAME
✔ npm password: PASSWORD
✔ connected [https://ops.dotenvx.com/go/pas_1234..]
```

*Dotenvx Passcards* are special connectors allowing account access.

Next, use the passcard to rotate your npm token.

## Rotate

Run `rotate` on the passcard.

```sh
$ dotenvx-ops rotate dotenvx://pas_1234..
⠏ rotating..
```

Takes 10-30 seconds. On success, it returns a Dotenvx Rotation Token (ROT).

```sh
$ dotenvx-ops rotate dotenvx://pas_1234..
✔ rotated [https://ops.dotenvx.com/go/pas_1234..]
⮕ next run [dotenvx-ops get dotenvx://rot_a2c4..]
```

*Dotenvx ROTs* are special tokens that can change value. You can think of them as proxy tokens.

Next, let's get the value for it.

## Get

Run `get` on the rotation token.

```sh
$ dotenvx-ops get dotenvx://rot_a2c4..
npm_d2cJ..
```

It returns your npm token. Cool!

Try `rotate`ing the passcard again.

```sh
$ dotenvx-ops rotate dotenvx://pas_1234..
✔ rotated [https://ops.dotenvx.com/go/pas_1234..]
⮕ next run [dotenvx-ops get dotenvx://rot_a2c4..]
```

And `get` the ROT again.

```sh
$ dotenvx-ops get dotenvx://rot_a2c4..
npm_cbGY..
```

WOW the value changed! That's the primitive at work. ROTs introduce a new key rotation primitive: the npm token rotates, the reference does not - which is exactly what CI/CD automation needs.

## CI/CD

Our CI/CD had an `npm publish` that looked like this:

{% raw %}
```yaml
npm:
  ...
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

We changed the following:

- Added a step above `npm publish` writing `get dotenvx:/rot_a2c4..` to `NODE_AUTH_TOKEN`
- Replaced `secrets.NPM_TOKEN` with `env.NODE_AUTH_TOKEN`
- Set `DOTENVX_OPS_TOKEN` in <a href="https://github.com/username/project/settings/secrets/actions">GitHub Actions Secrets</a>

{% raw %}
```yaml
npm:
  ...
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18.x'
        registry-url: 'https://registry.npmjs.org'
    - run: |
        curl -sfS https://dotenvx.sh/ops | sh
        echo "NODE_AUTH_TOKEN=$(dotenvx-ops get dotenvx://rot_a2c4 --token '${{ secrets.DOTENVX_OPS_TOKEN }}')" >> $GITHUB_ENV
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ env.NODE_AUTH_TOKEN }}
```
{% endraw %}

<img src="https://github.com/user-attachments/assets/b2c8f5b5-d7ac-4e62-9e7c-3ae2a5a84873" />

Find your organization's `DOTENVX_OPS_TOKEN` at <a href="https://ops.dotenvx.com/settings">/settings</a> page.

<img src="https://github.com/user-attachments/assets/df4f6146-5cf9-44a7-9a22-b967d675f3d8" />

Now publishing works indefinitely - with rotating NPM tokens.

- NPM token leaked? Just rotate it - all your operations still work.
- NPM token should be rotated every N days for compliance? Put it on a schedule - all your operations still work. 
- Changed an employee who had access to the old token? Rotate it — all your operations still work.

This has been a great setup for us. We publish a lot of npm packages, and ROTs finally made token rotation feel simple again.

If you're dealing with npm token rotation today, you can start using this immediately by signing up for <a href="https://dotenvx.com/ops">Dotenvx Ops</a>. And if you're running this at enterprise scale — with compliance requirements, scheduled rotation, or broader CI/CD concerns — <a href="mailto:scott@dotenvx.com">get in touch</a>. We'd like to help.

---

<small><sup id="footnote1">1</sup> <a href="https://github.blog/changelog/2025-09-29-strengthening-npm-security-important-changes-to-authentication-and-token-management/">Strengthening npm security: Important changes to authentication and token management</a></small>
