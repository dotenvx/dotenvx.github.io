---
layout: blog
author: mot
title: "Dotenvx is Feature Complete"
image: "/assets/img/blog/blog-4.png"
excerpt: "With decrypt now supported, dotenvx is feature complete."
---

[dotenvx 1.6.0](https://github.com/dotenvx/dotenvx/blob/main/CHANGELOG.md#160) is released 🎉 – adding support for `decrypt`.

<video class="w-full rounded-md" controls>
  <source src="https://github.com/dotenvx/dotenvx/assets/3848/8cdb37eb-e01a-4807-a5ff-13e5d3a06908" type="video/mp4">
  your browser does not support the video tag
</video>

## Feature Complete

This release marks a *feature complete* status for dotenvx. There are five core features.

* `run`
* `get`
* `set`
* `encrypt`
* `decrypt`

Use `run` to inject your environment variables, `get/set` to set and get individual ones, and `encrypt/decrypt` to encrypt them.

## Custom Workflows with --stdout

Additionally, you can pipe `encrypt` and `decrypt` to any file using the `--stdout` flag. This makes it easy to create your own custom workflows for your CI or elsewhere.

Here's a basic example:

```sh
$ echo "HELLO=World" > .env
$ dotenvx encrypt --stdout > secrets.txt
$ dotenvx decrypt -f secrets.txt --stdout
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="0240666d1348173ef2713433a6125e0a27f2352415f5e6d96c68028521bad6f5f3"

# .env
HELLO="World"
```

I think this will be particularly useful to custom docker workflows.

## What's Next

Next, we're working on **dotenvx pro** – to manage your secrets across teams, environments, and infrastructure.

```
_______________________________________________________________
|                                                             |
|  coming soon! (for small business)                          |
|                                                             |
|      | |     | |                                            |
|    __| | ___ | |_ ___ _ ____   ____  __  _ __  _ __ ___     |
|   / _` |/ _ \| __/ _ \ '_ \ \ / /\ \/ / | '_ \| '__/ _ \    |
|  | (_| | (_) | ||  __/ | | \ V /  >  <  | |_) | | | (_) |   |
|   \__,_|\___/ \__\___|_| |_|\_/  /_/\_\ | .__/|_|  \___/    |
|                                         | |                 |
|                                         |_|                 |
| ## learn more on github 🐙                                  |
|                                                             |
| >> https://github.com/dotenvx/dotenvx/issues/259            |
|                                                             |
| ## subscribe on github to be notified 📣                    |
|                                                             |
| >> https://github.com/dotenvx/dotenvx/issues/259            |
|                                                             |
| ----------------------------------------------------------- |
| - thank you for using dotenvx! - @motdotla                  |
|_____________________________________________________________|
```

Thank you for using [dotenvx](https://github.com/dotenvx/dotenvx)!

P.S. You can [follow progress on dotenvx pro here](https://github.com/dotenvx/dotenvx/issues/259).
