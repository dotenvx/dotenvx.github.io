> {{ page.description }}

{% unless page.url == '/docs/custody/' %}
[{{ page.eyebrow }}]({{ page.eyebrow_href }})

{% endunless %}
{{ docs_body | strip }}

{% if page.layout == 'docs-custody' and page.options.size > 0 %}
## Custody options

{% for option in page.options -%}
- [{{ option.description | default: option.title }}]({{ option.href }})
{% endfor %}
{% endif %}
