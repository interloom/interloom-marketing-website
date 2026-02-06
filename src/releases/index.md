---
layout: base.njk
title: Release Notes
---

<section class="pt-24 pb-12 px-4 flex items-end min-h-[30vh]">
<div class="mx-auto max-w-5xl w-full">

<h1 class="text-4xl md:text-5xl font-normal tracking-tight font-serif">Release Notes</h1>
<p class="text-fg-3 mt-6 mb-0">Updates and improvements to the Interloom platform.</p>

</div>
</section>

{%- for release in collections.releases -%}
<section class="py-10 px-4">
<div class="mx-auto max-w-5xl">
<div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10">
  <div class="shrink-0">
    <time class="text-sm font-mono text-fg-3 block">{{ release.date | monthYear }}</time>
    <h2 class="text-xl md:text-2xl leading-snug tracking-tight mt-1 mb-0"><span class="text-fg-1">{{ release.data.title }}</span></h2>
    {% if release.data.tag %}<span class="inline-block text-xs font-medium text-fg-3 bg-surface-3 px-2 py-0.5 rounded mt-2">{{ release.data.tag }}</span>{% endif %}
  </div>
  <div class="prose">
    {{ release.templateContent | safe }}
  </div>
</div>
</div>
</section>
{%- endfor -%}
