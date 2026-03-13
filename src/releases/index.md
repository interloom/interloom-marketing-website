---
layout: base.njk
title: Release Notes
---

<section class="pt-24 pb-12 px-4 flex items-end min-h-[30vh]">
<div class="mx-auto max-w-5xl w-full">

<h1>Release Notes</h1>
<p class="text-fg-3 mt-6 mb-0">Workflows that learn from every case to make operations faster, smarter, and more reliable.</p>
<div class="mt-6 flex flex-wrap gap-2" data-release-filters>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line bg-fg-1 text-surface-1 text-xs font-mono font-medium uppercase cursor-pointer transition-opacity hover:opacity-85" data-filter="all" aria-pressed="true">All</button>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-mono font-medium uppercase cursor-pointer transition-colors hover:bg-surface-3" data-filter="tools-and-integrations" aria-pressed="false">Tools &amp; Integrations</button>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-mono font-medium uppercase cursor-pointer transition-colors hover:bg-surface-3" data-filter="agent-experience" aria-pressed="false">Agent Experience</button>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-mono font-medium uppercase cursor-pointer transition-colors hover:bg-surface-3" data-filter="user-experience" aria-pressed="false">User Experience</button>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-mono font-medium uppercase cursor-pointer transition-colors hover:bg-surface-3" data-filter="context-graph" aria-pressed="false">Context Graph</button>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-mono font-medium uppercase cursor-pointer transition-colors hover:bg-surface-3" data-filter="security" aria-pressed="false">Security</button>
</div>

</div>
</section>

{%- for release in collections.releases -%}
{% set tagRaw = (release.data.tag or 'tools') | lower | trim %}
{% if tagRaw == 'ax' or tagRaw == 'agent experience' %}
  {% set normalizedTag = 'agent-experience' %}
  {% set displayTag = 'Agent Experience' %}
{% elseif tagRaw == 'ux' or tagRaw == 'user experience' %}
  {% set normalizedTag = 'user-experience' %}
  {% set displayTag = 'User Experience' %}
{% elseif tagRaw == 'context graph' or tagRaw == 'context layer' %}
  {% set normalizedTag = 'context-graph' %}
  {% set displayTag = 'Context Graph' %}
{% elseif tagRaw == 'security' or tagRaw == 'enterprise' or tagRaw == 'security & governance' or tagRaw == 'security and governance' %}
  {% set normalizedTag = 'security' %}
  {% set displayTag = 'Security' %}
{% else %}
  {% set normalizedTag = 'tools-and-integrations' %}
  {% set displayTag = 'Tools & Integrations' %}
{% endif %}
<section class="py-14 px-4" data-release-entry data-tag="{{ normalizedTag }}">
<div class="mx-auto max-w-5xl">
<div class="release-grid">
  <div>
    <p class="text-2xl md:text-3xl leading-snug tracking-tight mb-3 font-serif">{{ release.data.title }}</p>
    <time class="text-sm font-mono text-fg-3 block">{{ release.date | monthYear }}</time>
    <span class="inline-block text-xs font-medium text-fg-3 bg-surface-3 px-2 py-0.5 rounded mt-2">{{ displayTag }}</span>
  </div>
  <div class="prose text-sm">
    {{ release.templateContent | safe }}
  </div>
</div>
</div>
</section>
{%- endfor -%}
