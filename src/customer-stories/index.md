---
layout: base.njk
title: Customer Stories
---

<section class="pt-24 pb-12 px-4 flex items-end min-h-[30vh]">
<div class="mx-auto max-w-5xl w-full">

<h1>Customer Stories</h1>
<p class="text-fg-3 mt-6 mb-0">How teams deploy, iterate, and scale operational workflows with Interloom.</p>
{%- set storyTags = [] -%}
{%- for story in collections.customerStories -%}
  {%- for tag in story.data.tags or [] -%}
    {%- set normalizedTag = tag | lower | replace(" ", "-") -%}
    {%- if storyTags.indexOf(normalizedTag) == -1 -%}
      {%- set storyTags = storyTags.concat([normalizedTag]) -%}
    {%- endif -%}
  {%- endfor -%}
{%- endfor -%}
<div class="mt-6 flex flex-wrap gap-2" data-story-filters>
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line bg-fg-1 text-surface-1 text-xs font-medium cursor-pointer transition-opacity hover:opacity-85" data-filter="all" aria-pressed="true">All</button>
  {%- for story in collections.customerStories -%}
    {%- for tag in story.data.tags or [] -%}
      {%- set normalizedTag = tag | lower | replace(" ", "-") -%}
    {%- endfor -%}
  {%- endfor -%}
  {%- set renderedTags = [] -%}
  {%- for story in collections.customerStories -%}
    {%- for tag in story.data.tags or [] -%}
      {%- set normalizedTag = tag | lower | replace(" ", "-") -%}
      {%- if renderedTags.indexOf(normalizedTag) == -1 -%}
        {%- set renderedTags = renderedTags.concat([normalizedTag]) -%}
  <button type="button" class="inline-flex items-center h-[28px] px-3 rounded border border-line text-fg-2 text-xs font-medium cursor-pointer transition-colors hover:bg-surface-3" data-filter="{{ normalizedTag }}" aria-pressed="false">{{ tag }}</button>
      {%- endif -%}
    {%- endfor -%}
  {%- endfor -%}
</div>

</div>
</section>

{%- for story in collections.customerStories -%}
{%- set storyTagList = [] -%}
{%- for tag in story.data.tags or [] -%}
  {%- set storyTagList = storyTagList.concat([tag | lower | replace(" ", "-")]) -%}
{%- endfor -%}
<section class="py-14 px-4" data-story-entry data-tags="{{ storyTagList | join(',') }}">
<div class="mx-auto max-w-5xl">
<div class="blog-grid">
  <div>
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
      {% if story.data.logo %}
      <span style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 6px; border: 1px solid var(--color-line); overflow: hidden; flex-shrink: 0; padding: 7px; background: var(--color-surface-1);">
        <img src="{{ story.data.logo | url }}" alt="{{ story.data.company }}" style="width: 100%; height: 100%; object-fit: contain;">
      </span>
      {% endif %}
      <div>
        {% if story.data.company %}<span class="text-sm text-fg-3" style="display: block;">{{ story.data.company }}</span>{% endif %}
        <time class="text-xs font-mono text-fg-3" style="display: block;">{{ story.date | monthYear }}</time>
      </div>
    </div>
    <p class="text-xl md:text-2xl leading-snug tracking-tight mb-3"><a href="{{ story.url | url }}" class="text-fg-1 no-underline hover:text-fg-1 transition-colors">{{ story.data.title }}</a></p>
    {% if story.data.description %}<p class="text-fg-2 mb-0">{{ story.data.description }}</p>{% endif %}
    {% if story.data.tags and story.data.tags.length %}
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
      {% for tag in story.data.tags %}
      <span style="display: inline-block; font-size: 0.75rem; font-weight: 500; color: var(--color-fg-3); background: var(--color-surface-3); padding: 0.125rem 0.5rem; border-radius: 0.25rem;">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </div>
  <div class="blog-meta">
  </div>
</div>
</div>
</section>
{%- endfor -%}

<script>
(function () {
  var filterWrap = document.querySelector('[data-story-filters]');
  if (!filterWrap) return;
  var buttons = filterWrap.querySelectorAll('[data-filter]');
  var entries = document.querySelectorAll('[data-story-entry]');
  function activate(btn) {
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
      b.classList.remove('bg-fg-1', 'text-surface-1');
      b.classList.add('text-fg-2');
    });
    btn.setAttribute('aria-pressed', 'true');
    btn.classList.add('bg-fg-1', 'text-surface-1');
    btn.classList.remove('text-fg-2');
  }
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      activate(btn);
      entries.forEach(function (entry) {
        if (filter === 'all') {
          entry.style.display = '';
        } else {
          var tags = (entry.getAttribute('data-tags') || '').split(',');
          entry.style.display = tags.indexOf(filter) !== -1 ? '' : 'none';
        }
      });
    });
  });
})();
</script>
