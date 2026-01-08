---
layout: base.njk
title: Release Notes
---

<section>

# Release Notes

Updates and improvements to the Interloom platform.

<ul class="post-list">
{%- for release in collections.releases -%}
<li>
  <a href="{{ release.url | url }}">{{ release.data.title }}</a>
  <time>{{ release.date | dateFormat }}</time>
</li>
{%- endfor -%}
</ul>

</section>
