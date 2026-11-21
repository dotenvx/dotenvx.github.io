{% for sdk in include.languages -%}
{% assign sdk_path = sdk.slug | prepend: '/docs/sdk/' | append: '/' -%}
- [{{ sdk.label }}]({{ sdk_path | relative_url }})
{% endfor %}
