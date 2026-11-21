{% for section in include.sections -%}
{% assign section_anchor = section.title | downcase | replace: ' ', '-' | remove: '.' | remove: '&' -%}
{% for guide in section.links -%}
- {% if forloop.first %}{: #{{ section_anchor }} } {% endif %}[{{ guide.label }}]({{ guide.href | relative_url }})
{% endfor -%}
{% endfor -%}
{: .main-guide-list}
