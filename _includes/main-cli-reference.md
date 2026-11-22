> {{ page.description }}

{% if toml_reference %}
{% assign reference_parent = page.eyebrow | default: 'Dotenvx.toml' %}
{% assign reference_parent_href = page.eyebrow_href | default: '/docs/dotenvxtoml/' %}
{% elsif sdk_reference %}
{% assign reference_parent = page.eyebrow | default: 'SDKs' %}
{% assign reference_parent_href = page.eyebrow_href | default: '/docs/sdk/' %}
{% else %}
{% assign reference_parent = page.eyebrow | default: 'CLI' %}
{% assign reference_parent_href = page.eyebrow_href | default: '/docs/cli/' %}
{% endif %}
[{{ reference_parent }}]({{ reference_parent_href }})

{% assign reference_has_command = false %}
{% if page.doc_type == 'cli' or page.doc_type == 'sdk' %}{% assign reference_has_command = true %}{% endif %}
{% if reference_has_command and toml_reference != true %}
{% capture command %}{% include components/docs-cli-command.html eyebrow=reference_parent sdk=sdk_reference %}{% endcapture %}
{% assign command = command | strip %}
{% if sdk_reference and page.command_prompt != true %}
{% assign reference_language = page.command_language | default: 'javascript' %}
{% include components/design-codeblock.html value=command language=reference_language copy_text=command %}
{% else %}
{% assign command_display = command %}
{% unless page.command_prompt == false %}{% assign command_display = command | prepend: '$ ' %}{% endunless %}
{% include components/design-codeblock.html value=command_display format='cli' copy_text=command %}
{% endif %}
{% endif %}

{% if page.video %}
{% assign video = site.data.videos[page.video].url | default: page.video %}
[{{ page.video_title | default: 'Watch demo' }}]({{ video }})
{% endif %}

{% if docs_body != blank %}
{% if reference_has_command and toml_reference != true %}
## {{ page.usage_title | default: 'Usage' }}
{% endif %}

{{ docs_body | strip }}
{% endif %}

{% if page.options.size > 0 %}
## {{ page.options_title | default: 'Options' }}

{% for option in page.options -%}
- <a href="{{ option.href | escape }}">{{ option.title | escape }}</a>
{% endfor %}
{% endif %}

{% if page.global_options %}
## Global options

{% for option in site.data.cli_global_options -%}
- <a href="{{ option.href | escape }}">{{ option.label | escape }}</a>
{% endfor %}
{% endif %}

{% if page.related.size > 0 %}
## {{ page.related_title | default: 'Related' }}

{% for item in page.related -%}
- <a href="{{ item.href | escape }}">{{ item.title | escape }}</a>
{% endfor %}
{% endif %}
