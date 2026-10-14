---
layout: docs-markdown
title: "PHP"
social_title: "Encrypt a .env file in PHP"
description: "Encrypt a .env file in PHP with dotenvx, commit it safely, and inject its secrets at runtime."
icon: php
permalink: /docs/php/
redirect_from:
  - /docs/languages/php
  - /docs/languages/php/
  - /docs/secrets-in-php/
  - /docs/secrets-in-php
quickstart_pager: true
---

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Encrypt your .env file.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime with `dotenvx run`.


```php
<?php

echo "Hello {$_SERVER['HELLO']}\n";
```

```console
$ dotenvx run -- php index.php
```
{: copy="dotenvx run -- php index.php"}
