---
layout: base.njk
title: Blog
---

<section class="pt-24 pb-12 px-4 flex items-end min-h-[30vh]">
<div class="mx-auto max-w-5xl w-full">

<h1 class="text-4xl md:text-5xl font-normal tracking-tight font-serif">Blog</h1>
<p class="text-fg-3 mt-6 mb-0">Thinking about workflows, context, and the future of operational AI.</p>

</div>
</section>

{%- for post in collections.posts -%}
<section class="py-14 px-4">
<div class="mx-auto max-w-5xl">
<div class="blog-grid">
  <div>
    <p class="text-xl md:text-2xl leading-snug tracking-tight mb-4"><a href="{{ post.url | url }}" class="text-fg-1 no-underline hover:text-fg-1 transition-colors">{{ post.data.title }}</a></p>
    {% if post.data.description %}<p class="text-fg-2 mb-0">{{ post.data.description }}</p>{% endif %}
  </div>
  <div class="blog-meta">
    <time class="text-sm font-mono text-fg-3 block">{{ post.date | monthYear }}</time>
    {% if post.data.author %}<span class="text-sm text-fg-3 block mt-1">{{ post.data.author }}</span>{% endif %}
  </div>
</div>
</div>
</section>
{%- endfor -%}
