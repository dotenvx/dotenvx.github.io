---
title: PHP
description: Load encrypted .env files in PHP.
permalink: /docs/sdk/php/
eyebrow: SDKs
eyebrow_href: /docs/sdk/
icon: php
---

{% assign sdk = site.data.install_sdks_v2 | where: 'name', 'PHP' | first %}
## Package

[dotenvx/phpdotenvx]({{ sdk.package_url }})

## Install

Use [PIE](https://php.github.io/pie/) for the native extension and Composer for the PHP package.

```bash
{{ sdk.command }}
```

## Usage

Load the `.env` file alongside `index.php` before reading variables in your app.

```php
<?php

require __DIR__ . '/vendor/autoload.php';

Dotenvx\Dotenvx::createImmutable(__DIR__)->safeLoad();
```

See the [PHP quickstart](/docs/php/) for the full encryption workflow.
