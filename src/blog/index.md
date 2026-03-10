---
layout: base.njk
title: Blog
---

<section class="pt-24 pb-12 px-4 flex items-end min-h-[30vh]">
<div class="mx-auto max-w-5xl w-full">

<h1>Blog</h1>
<p class="text-fg-3 mt-6 mb-0">Thinking about workflows, context, and the future of operational AI.</p>
{%- set years = [] -%}
{%- for post in collections.posts -%}
  {%- set year = post.date.getFullYear() -%}
  {%- if years.indexOf(year) == -1 -%}
    {%- set years = years.concat([year]) -%}
  {%- endif -%}
{%- endfor -%}
<div class="mt-6 flex flex-wrap gap-2" data-blog-filters>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line bg-fg-1 text-surface-1 text-xs font-mono font-medium uppercase cursor-pointer transition-opacity hover:opacity-85" data-year-filter="all" aria-pressed="true">All</button>
  {%- for year in years -%}
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-mono font-medium uppercase cursor-pointer transition-colors hover:bg-surface-3" data-year-filter="{{ year }}" aria-pressed="false">{{ year }}</button>
  {%- endfor -%}
</div>

</div>
</section>

{%- for post in collections.posts -%}
<section class="py-14 px-4" data-blog-entry data-year="{{ post.date.getFullYear() }}">
<div class="mx-auto max-w-5xl">
<div class="blog-grid">
  <div>
    <p class="text-2xl md:text-3xl leading-snug tracking-tight mb-4 font-serif"><a href="{{ post.url | url }}" class="text-fg-1 no-underline hover:text-fg-1 transition-colors">{{ post.data.title }}</a></p>
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
