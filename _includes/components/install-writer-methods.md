{% for method in include.methods %}
{% assign method_id = method.name | slugify %}
<section class="writer-install-method" markdown="block">

{% unless include.paragraph_labels %}## {% endunless %}{% if method.package_url %}[{{ method.name }}]({{ method.package_url }}){% else %}{{ method.name }}{% endif %}
{: #{{ method.id | default: method_id }}}

```bash
{{ method.command }}
{% if method.writer_extra_command -%}
{{ method.writer_extra_command }}
{% endif -%}
```

{% if method.description %}{{ method.description }}{% endif %}

</section>
{% endfor %}
