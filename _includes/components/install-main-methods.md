{% for method in include.methods %}
{% assign method_id = method.name | slugify %}
<section class="main-install-method"{% if include.code_only %} id="{{ method.id | default: method_id }}"{% endif %} markdown="block">

{% unless include.code_only %}
## {% if method.package_url %}[{{ method.name }}]({{ method.package_url }}){% else %}{{ method.name }}{% endif %}
{: #{{ method.id | default: method_id }}}
{% endunless %}

{% capture install_command %}{{ method.command }}{% if method.main_extra_command %}
{{ method.main_extra_command }}{% endif %}{% endcapture %}
{% assign install_commands = install_command | newline_to_br | split: '<br />' %}
{% capture install_display %}{% for command in install_commands %}$ {{ command | strip }}
{% endfor %}{% endcapture %}
{% include components/design-codeblock.html value=install_display format='cli' copy_text=install_command %}

{% if method.description %}{{ method.description }}{% endif %}

</section>
{% endfor %}
