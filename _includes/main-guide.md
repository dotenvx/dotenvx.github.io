{% assign guide_description = page.hero_description | default: page.description %}
{% if guide_description %}
> {{ guide_description }}
{% endif %}

{% if page.parent_url %}
[← Back to {{ page.parent_title }}]({{ page.parent_url }})
{% endif %}

{% if page.video %}
{% assign guide_video = site.data.videos[page.video].url | default: page.video %}
[{{ page.video_title | default: 'Watch demo' }}]({{ guide_video }})
{% endif %}

{{ docs_body | strip }}
