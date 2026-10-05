---
layout: docs-cli
title: Proxy
description: Associate a secret with its destination domain.
permalink: "/docs/envfile/proxy/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: 'env "STRIPE_SECRET_KEY", proxy: { domain: "api.stripe.com" }'
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
A proxy rule associates a secret with its destination domain:

```ruby
env "STRIPE_SECRET_KEY", proxy: { domain: "api.stripe.com" }
```

The domain must be a DNS hostname. Schemes, ports, paths, wildcards, and IP addresses are not allowed. Domain names are normalized to lowercase.

`proxy: false` disables proxying for that variable, including an inherited rule. `proxy: true` is not supported. A proxy declaration does not start a proxy by itself; it is used by Dotenvx's credential-proxy integration.

Proxying is off by default.
