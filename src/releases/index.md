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

<section class="py-10 px-4 md:hidden">
  <div class="mx-auto max-w-5xl">
    {% set lastQuarterKey = '' %}
    {%- for release in collections.releases -%}
    {% set releaseMonth = release.date.getMonth() %}
    {% set releaseYear = release.date.getFullYear() %}
    {% if releaseMonth < 3 %}
      {% set releaseQuarter = 1 %}
    {% elseif releaseMonth < 6 %}
      {% set releaseQuarter = 2 %}
    {% elseif releaseMonth < 9 %}
      {% set releaseQuarter = 3 %}
    {% else %}
      {% set releaseQuarter = 4 %}
    {% endif %}
    {% set releaseQuarterKey = releaseYear ~ '-Q' ~ releaseQuarter %}
    {% if releaseQuarterKey != lastQuarterKey %}
    <div class="pt-3 pb-3">
      <p class="text-sm font-medium tracking-wide text-fg-2 m-0 mb-3">Q{{ releaseQuarter }} {{ releaseYear }}</p>
      <div class="border-t border-line-faint"></div>
    </div>
    {% set lastQuarterKey = releaseQuarterKey %}
    {% endif %}
    {% set releaseType = (release.data.releaseType or release.data.type or 'delivered') | lower %}
    {% set releaseAbstract = (release.data.description or (release.templateContent | striptags | trim)) %}
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
    <article
      data-release-entry
      data-release-list-entry
      data-tag="{{ normalizedTag }}"
      data-release-date="{{ release.date }}"
      class="relative h-[16rem] overflow-hidden rounded-lg border border-line bg-surface-1 p-4 mb-4 flex flex-col"
    >
      <time class="text-xs font-mono text-fg-3 block">{{ release.date | monthYear }}</time>
      <p class="text-base leading-snug tracking-tight mt-1 mb-0">
        <a href="{{ release.url | url }}" class="text-fg-1 no-underline hover:underline">{{ release.data.title }}</a>
      </p>
      <div class="mt-2 mb-3 flex flex-wrap gap-2">
        <span class="inline-block text-xs font-medium text-fg-3 bg-surface-3 px-2 py-0.5 rounded">{{ displayTag }}</span>
        <span
          class="inline-block text-xs font-medium px-2 py-0.5 rounded border"
          style="{% if releaseType == 'roadmap' and releaseQuarter == 1 %}background: color-mix(in srgb, #3b82f6 18%, transparent); color: #3b82f6; border-color: color-mix(in srgb, #3b82f6 45%, transparent);{% elseif releaseType == 'roadmap' %}background: color-mix(in srgb, #f59e0b 18%, transparent); color: #f59e0b; border-color: color-mix(in srgb, #f59e0b 45%, transparent);{% else %}background: color-mix(in srgb, #22c55e 18%, transparent); color: #22c55e; border-color: color-mix(in srgb, #22c55e 45%, transparent);{% endif %}"
        >
          {% if releaseType == 'roadmap' and releaseQuarter == 1 %}In Progress{% elseif releaseType == 'roadmap' %}Roadmap{% else %}Delivered{% endif %}
        </span>
      </div>
      <div class="flex-1 overflow-hidden">
        <p
          class="text-sm text-fg-2 mt-0 mb-0"
          style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;"
        >
          {{ releaseAbstract }}
        </p>
      </div>
      <p class="mt-3 mb-0">
        <a href="{{ release.url | url }}" class="text-sm text-fg-2 no-underline hover:text-fg-1">Read full update -></a>
      </p>
    </article>
    {%- endfor -%}
  </div>
</section>

<section class="py-10 px-4 hidden md:block">
  <div class="mx-auto max-w-5xl">
  </div>
  <div class="w-full">
    <div class="overflow-x-auto pb-2" data-release-quarter-scroll>
      <div class="grid auto-cols-[minmax(260px,1fr)] grid-flow-col gap-4 min-w-full" data-release-quarter-board></div>
    </div>
  </div>
</section>

<noscript>
  <section class="py-10 px-4">
    <div class="mx-auto max-w-5xl">
      <p class="text-sm text-fg-3">Enable JavaScript to use the quarterly release horizon view.</p>
    </div>
  </section>
</noscript>

<script>
  (function () {
    var board = document.querySelector('[data-release-quarter-board]');
    var sourceItems = Array.prototype.slice.call(document.querySelectorAll('[data-release-list-entry]'));
    if (!board || !sourceItems.length) return;

    var now = new Date();
    var currentQuarterIndex = Math.floor(now.getMonth() / 3);
    var currentQuarterStart = new Date(now.getFullYear(), currentQuarterIndex * 3, 1);
    var quarterSlots = [];
    var quarterMap = {};

    function quarterLabel(date) {
      var quarter = Math.floor(date.getMonth() / 3) + 1;
      return 'Q' + quarter + ' ' + date.getFullYear();
    }

    function quarterKey(date) {
      var quarter = Math.floor(date.getMonth() / 3) + 1;
      return date.getFullYear() + '-Q' + quarter;
    }

    function keyFromDateString(dateString) {
      var parsed = new Date(dateString);
      if (Number.isNaN(parsed.getTime())) return null;
      return quarterKey(parsed);
    }

    for (var offset = -4; offset <= 1; offset++) {
      var quarterDate = new Date(currentQuarterStart.getFullYear(), currentQuarterStart.getMonth() + offset * 3, 1);
      var key = quarterKey(quarterDate);

      var column = document.createElement('div');
      column.className = 'rounded-xl border border-line bg-surface-2 min-h-[18rem] flex flex-col';

      var header = document.createElement('div');
      header.className = 'px-4 py-3 border-b border-line flex items-center justify-between gap-3';
      if (offset === 0) {
        header.style.background = 'color-mix(in srgb, var(--color-fg-1) 6%, transparent)';
      }

      var title = document.createElement('p');
      title.className = 'text-sm font-medium text-fg-1 m-0';
      title.textContent = quarterLabel(quarterDate);

      var relative = document.createElement('span');
      relative.className = 'text-xs text-fg-3';
      if (offset === 0) {
        relative.textContent = 'Current';
      } else if (offset < 0) {
        relative.textContent = Math.abs(offset) + 'Q ago';
      } else {
        relative.textContent = '+' + offset + 'Q';
      }

      header.appendChild(title);
      header.appendChild(relative);
      column.appendChild(header);

      var list = document.createElement('div');
      list.className = 'p-3 flex flex-col gap-3';
      list.setAttribute('data-quarter-list', key);
      column.appendChild(list);

      board.appendChild(column);
      quarterSlots.push({ key: key, list: list });
      quarterMap[key] = list;
    }

    sourceItems.forEach(function (item) {
      var key = keyFromDateString(item.getAttribute('data-release-date'));
      if (!key || !quarterMap[key]) return;

      var card = item.cloneNode(true);
      card.removeAttribute('data-release-list-entry');
      quarterMap[key].appendChild(card);
    });

    quarterSlots.forEach(function (slot) {
      if (slot.list.children.length) return;
      var emptyState = document.createElement('p');
      emptyState.className = 'text-xs text-fg-3 rounded border border-dashed border-line px-3 py-2 m-0';
      emptyState.textContent = 'Roadmap planning is ongoing.';
      slot.list.appendChild(emptyState);
    });
  })();
</script>
