{% for section in include.sections -%}
{% assign section_anchor = section.title | downcase | replace: ' ', '-' | remove: '.' | remove: '&' -%}
{% for guide in section.links -%}
{% assign guide_href = preview_links[guide.href] | default: guide.href -%}
- {% if forloop.first %}{: #{{ section_anchor }} } {% endif %}[{{ guide.label }}]({{ guide_href | relative_url }})
{% endfor -%}
{% endfor -%}
{: .writer-guide-list}
