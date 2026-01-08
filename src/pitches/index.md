---
layout: base.njk
title: Pitches
tags: []
---

<section>

# Pitches

<ul class="post-list">
{%- for pitch in collections.pitches -%}
<li>
  <a href="{{ pitch.url | url }}">{{ pitch.data.title }}</a>
</li>
{%- endfor -%}
</ul>

</section>
