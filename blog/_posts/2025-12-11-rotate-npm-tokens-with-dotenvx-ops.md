---
layout: blog
author: "Scott Motte – Mot"
title: "Rotate NPM Tokens with Dotenvx Ops. Automatically."
image: "/assets/img/blog/blog-11.png"
excerpt: "NPM's new short-lived tokens improve security, but they make rotation painful."
---

**NPM's new short-lived tokens** strengthen security, but they **make rotation painful.** Every 90 days (or sooner) you have to manually create a fresh token, set it in your CI, and make sure nothing breaks. <sup><a href="#footnote1">1</a></sup>

<img src="https://github.com/user-attachments/assets/9868574d-2e81-4654-b4bc-b1c66df19784" />

This was a real problem for us. We publish <a href="https://www.npmjs.com/org/dotenvx">64 npm packages</a>, and rotating tokens across all of them by hand was not going to be sustainable. Every expiration meant touching dozens of pipelines and praying the next publish didn't fail.

So we built a solution. Introducing <a href="https://dotenvx.com/docs/ops/rotate">Dotenvx Rotate</a> - part of Dotenvx Ops.

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

> IMPORTANT: Note that this is **local only** - this way we can bypass the need for storing your credentials.

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

It takes 10-30 seconds. On success, it returns a Dotenvx Rotation Token (ROT).

```sh
$ dotenvx-ops rotate dotenvx://pas_1234..
✔ rotated [https://ops.dotenvx.com/go/pas_1234..]
⮕ next run [dotenvx-ops get dotenvx://rot_a2c4..]
```

*Dotenvx Rotation Tokens (ROTs)* are special tokens that can change value. You can think of them as proxy tokens.

Next, let's get the value for it.

## Get

Run `get` on the rotation token.

```sh
$ dotenvx-ops get dotenvx://rot_a2c4..
npm_d2cJ..
```

It returns your npm token. Cool!

## Rotate Again

Run `rotate` on the passcard again.

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

The value changed. Way cool!

That's the ROT at work. ROTs introduce a new key rotation primitive: the npm token rotates, the reference does not. This is useful for operations, especially CI/CD.

## CI/CD

Previously, our CI/CD had `npm publish` with a hardcoded `secrets.NPM_TOKEN`:

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

#### Step 1

We first replaced `secrets.NPM_TOKEN` with `env.NODE_AUTH_TOKEN`.

{% raw %}
```yaml
npm:
  ...
  runs-on: ubuntu-latest
  steps:
    ...
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ env.NODE_AUTH_TOKEN }}
```
{% endraw %}

#### Step 2

Then we added a step to:

- <a href="https://dotenvx.com/docs/ops/install">Install dotenvx-ops</a>
- Run `dotenvx-ops get` to echo its value to `NODE_AUTH_TOKEN`

{% raw %}
```yaml
npm:
  ...
  runs-on: ubuntu-latest
  steps:
    ...
    - run: |
        curl -sfS https://dotenvx.sh/ops | sh
        echo "NODE_AUTH_TOKEN=$(dotenvx-ops get dotenvx://rot_a2c4 --token '${{ secrets.DOTENVX_OPS_TOKEN }}')" >> $GITHUB_ENV
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ env.NODE_AUTH_TOKEN }}
```
{% endraw %}

#### Step 3

Last, we set `DOTENVX_OPS_TOKEN` in <a href="https://github.com/username/project/settings/secrets/actions">GitHub Actions Secrets</a> (or GitLab CI, CircleCI, or wherever you run your automated npm publishing).

<img src="https://github.com/user-attachments/assets/db12882b-8b35-40db-a62f-238df32ff3f6" />

Tip: Find your `DOTENVX_OPS_TOKEN` on your <a href="https://ops.dotenvx.com/settings">Dotenvx Settings Page</a>.

<img src="https://github.com/user-attachments/assets/df4f6146-5cf9-44a7-9a22-b967d675f3d8" />

On your next CI run, it will inject the latest rotated NPM token and successfully publish your npm module(s).

<img src="https://github.com/user-attachments/assets/7a201f23-c255-4d75-a46e-326ddf22f0d9" />

Incredible!

## Conclusion

Publishing now works indefinitely with rotating NPM tokens, powered by a new rotation primitive (ROTs) and passcard connectors.

- *NPM token leaked?* Just rotate it - all your operations still work.
- *Employee left who knew the old token?* Rotate it - all your operations still work.
- *NPM token should be rotated every N days for compliance?* Put it on a schedule - all your operations still work. 

This has worked really well for us. If it sounds useful, you can use it too. Sign up for <a href="https://dotenvx.com/ops">Dotenvx Ops</a>.

> P.S. If you're running this at enterprise scale with compliance requirements, scheduled rotation, or broader CI/CD concerns, please <a href="mailto:scott@dotenvx.com">get in touch</a>. We'd like to help.

---

<small><sup id="footnote1">1</sup> <a href="https://github.blog/changelog/2025-09-29-strengthening-npm-security-important-changes-to-authentication-and-token-management/">Strengthening npm security: Important changes to authentication and token management</a></small>
