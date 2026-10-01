---
title: Python
description: Load and manage encrypted env from Python.
permalink: /docs/sdk/python/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="SDKs"
  eyebrow_href="/docs/sdk"
  title="Python"
  description="Load and manage encrypted env from Python."
  icon="python"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Packages

<div class="design-list">
<ul class="design-list-items">
<li>
<a class="design-link" href="https://pypi.org/project/python-dotenvx/" target="_blank" rel="noopener noreferrer">python-dotenvx</a>
<span class="design-list-meta">PyPI</span>
</li>
</ul>
</div>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Install

```console
$ pip install python-dotenvx
```
{: copy="pip install python-dotenvx"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Usage

```python
from dotenvx import load_dotenv

load_dotenv()
```
{: copy="false"}

See the [Python](/docs/python/), [Flask](/docs/flask/), or [uv](/docs/uv/) quickstart for a full walkthrough.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
