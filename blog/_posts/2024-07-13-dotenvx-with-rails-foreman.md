---
layout: blog
author: "Scott Motte – Mot"
title: "Protip – dotenvx with Rails foreman"
image: "/assets/img/blog/protip.png"
excerpt: "With decrypt now supported, dotenvx is feature complete."
---

To get dotenvx working with [Rails foreman](https://github.com/ddollar/foreman) modify the following:

* Procfile.dev
* bin/dev

## Procfile.dev

Place `dotenvx run` ahead of `bin/rails server` to inject your encrypted .env files.

```sh
# Procfile.dev
web: dotenvx run -- bin/rails server
css: bin/rails tailwindcss:watch
```

## bin/dev

Then modify foreman to turn off default `.env` loading – by loading from `/dev/null`. 

```sh
...
# -e /dev/null prevents foreman loading .env by default
exec foreman start -f Procfile.dev -e /dev/null "$@"
```

Otherwise, foreman will load your `.env` file first – without decrypting it properly.

## Run

Lastly, run `bin/dev` – [dotenvx](https://github.com/dotenvx/dotenvx) will inject your environment variables, and Rails will boot up.

```
$ bin/dev
11:10:20 web.1  | [dotenvx@1.6.2] injecting env (6) from .env
11:10:21 web.1  | => Booting Puma
11:10:21 web.1  | => Rails 7.1.3.4 application starting in development
```

Great! Enjoy development with encrypted .env files and Rails. 🎉
