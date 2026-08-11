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
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Packages</h2>
    <div class="design-list">
      <ul class="design-list-items">
        <li>
          <a class="design-link" href="https://pypi.org/project/python-dotenvx/" target="_blank" rel="noopener noreferrer">python-dotenvx</a>
          <span class="design-list-meta">PyPI</span>
        </li>
      </ul>
    </div>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    {% capture sdk_python_install %}
$ pip install python-dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_python_install copy_text="pip install python-dotenvx" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Usage</h2>
    {% capture sdk_python_usage %}
from dotenvx import load_dotenv

load_dotenv()
    {% endcapture %}
    {% include components/design-codeblock.html value=sdk_python_usage copy=false %}

    <p class="design-paragraph">See the <a class="design-link" href="/docs/python/">Python quickstart</a> for encrypting and running with the CLI.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
