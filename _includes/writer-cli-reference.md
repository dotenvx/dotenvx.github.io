> {{ page.description }}

{% assign cli_parent = page.eyebrow | default: 'CLI' %}
{% assign cli_parent_href = page.eyebrow_href | default: '/docs/cli/' %}
[{{ cli_parent }}]({{ cli_parent_href }})

{% if page.layout == 'docs-cli' %}
{% capture command %}{% include components/docs-cli-command.html eyebrow=cli_parent %}{% endcapture %}
{% assign command = command | strip %}
{% assign command_display = command %}
{% unless page.command_prompt == false %}{% assign command_display = command | prepend: '$ ' %}{% endunless %}
{% include components/design-codeblock.html value=command_display format='cli' copy_text=command %}
{% endif %}

{% if page.video %}
{% assign video = site.data.videos[page.video].url | default: page.video %}
[{{ page.video_title | default: 'Watch demo' }}]({{ video }})
{% endif %}

{% if cli_body != blank %}
## {{ page.usage_title | default: 'Usage' }}

{{ cli_body | strip }}
{% endif %}

{% if page.options.size > 0 %}
## {{ page.options_title | default: 'Options' }}

{% for option in page.options -%}
- <a href="{{ option.href | escape }}">{{ option.title | escape }}</a>
{% endfor %}
{% endif %}

{% if page.related.size > 0 %}
## {{ page.related_title | default: 'Related' }}

{% for item in page.related -%}
- <a href="{{ item.href | escape }}">{{ item.title | escape }}</a>
{% endfor %}
{% endif %}

{% capture pager %}{% include components/docs-cli-pager.html items=cli_nav %}{% endcapture %}
{{ pager | strip }}
