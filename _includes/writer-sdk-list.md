{% for sdk in include.languages -%}
{% assign sdk_path = sdk.slug | prepend: '/docs/sdk/' | append: '/' -%}
{% assign sdk_href = preview_links[sdk_path] | default: sdk_path -%}
- [{{ sdk.label }}]({{ sdk_href | relative_url }})
{% endfor %}
