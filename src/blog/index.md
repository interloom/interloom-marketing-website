---
layout: base.njk
title: Blog
---

# Blog

<ul class="post-list">
{%- for post in collections.posts -%}
<li>
  <a href="{{ post.url }}">{{ post.data.title }}</a>
  <time>{{ post.date | dateFormat }}</time>
</li>
{%- endfor -%}
</ul>
