---
description: "Explore Dotenvx open source projects and the community building tools for environment variables and encrypted .env files."
title: Open Source
permalink: /opensource/
main_layout: columns
projects:
  - name: dotenv
    href: https://github.com/motdotla/dotenv
    summary: loads .env files into Node.js applications.
    stars: "20,539"
  - name: dotenvx
    href: https://github.com/dotenvx/dotenvx
    summary: encrypts .env files so secrets can ship with code.
    stars: "5,799"
  - name: dotenv-expand
    href: https://github.com/dotenvx/dotenv-expand
    summary: expands variable references in .env files.
    stars: "1,056"
  - name: react-native-dotenv
    href: https://github.com/dotenvx/react-native-dotenv
    summary: loads environment variables in React Native.
    stars: "858"
  - name: vestauth
    href: https://github.com/vestauth/vestauth
    summary: authenticates agents with signed requests.
    stars: "169"
  - name: llmstxt
    href: https://github.com/dotenvx/llmstxt
    summary: generates llms.txt from a sitemap.
    stars: "149"
  - name: python-dotenvx
    href: https://github.com/dotenvx/python-dotenvx
    summary: loads encrypted .env files in Python.
    stars: "8"
  - name: dotenvx-ruby
    href: https://github.com/dotenvx/dotenvx-ruby
    summary: loads encrypted .env files in Ruby.
    stars: "3"
  - name: "@dotenvx/primitives"
    href: https://www.npmjs.com/package/@dotenvx/primitives
    summary: provides Dotenvx primitives for JavaScript.
  - name: dotenvx-primitives (Rust)
    href: https://crates.io/crates/dotenvx-primitives
    summary: provides Dotenvx primitives for Rust.
  - name: KEYSEE⎔
    href: https://keysee.io
    summary: turns public keys into deterministic visuals.
papers:
  - name: "Dotenvx: Reducing Secrets Risk with Cryptographic Separation"
    href: https://dotenvx.com/whitepaper.pdf
  - name: "KEYSEE⎔: Deterministic Visual Identity for Public Keys"
    href: https://keysee.io/whitepaper.pdf
talks:
  - name: How HTTP Message Signatures Remove the Need for API Keys
    href: https://www.youtube.com/watch?v=CDXFEbqLsB0
    event: AAuth Night
  - name: The Dark Ages of App Configuration
    href: https://www.youtube.com/watch?v=BCKGvKTk3cU&t=3205s
    event: SF Ruby
sponsorships:
  - name: yao-pkg/pkg
    href: https://github.com/yao-pkg/pkg
    annual: "$1,200"
  - name: ecies/js
    href: https://github.com/ecies/js
    annual: "$384"
  - name: abetomo
    href: https://github.com/abetomo
    annual: "$240"
---


> Tools for environment variables, encryption, and agent identity

[Dotenvx on GitHub](https://github.com/dotenvx)

## Projects

{% for project in page.projects -%}
- [{{ project.name }}]({{ project.href }}) {{ project.summary }}
{% endfor -%}
{: .main-docs-list}

## Papers

{% for paper in page.papers -%}
- [{{ paper.name }}]({{ paper.href }}) (PDF)
{% endfor -%}
{: .main-docs-list}

## Talks

{% for talk in page.talks -%}
- [{{ talk.name }}]({{ talk.href }}) at {{ talk.event }}
{% endfor -%}
{: .main-docs-list}

## Sponsorship

{% for sponsor in page.sponsorships -%}
- [{{ sponsor.name }}]({{ sponsor.href }}) · {{ sponsor.annual }} per year
{% endfor -%}
{: .main-docs-list}
