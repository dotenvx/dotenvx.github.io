---
layout: docs-markdown
title: ".NET"
social_title: "Encrypt a .env file in .NET"
description: "Encrypt a .env file in .NET with dotenvx, commit it safely, and inject its secrets at runtime."
icon: dotnet
permalink: /docs/dotnet/
redirect_from:
  - /docs/languages/dotnet
  - /docs/languages/dotnet/
  - /docs/secrets-in-dotnet/
  - /docs/secrets-in-dotnet
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


```csharp
var hello = Environment.GetEnvironmentVariable("HELLO");
Console.WriteLine($"Hello {hello}");
```

```console
$ dotenvx run -- dotnet run
```
{: copy="dotenvx run -- dotnet run"}
