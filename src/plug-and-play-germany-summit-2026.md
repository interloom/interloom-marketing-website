---
layout: base.njk
title: Plug and Play Germany Summit 2026
permalink: /plug-and-play-germany-summit-2026/index.html
description: Conference landing page for Plug and Play Germany Summit 2026.
---

<section class="relative !pb-0 overflow-hidden" style="min-height: calc(100vh - 84px);">
  <iframe
    id="landscape-iframe"
    src="{{ '/images/landscape-sculpted-93661-512-interactive.html?zoom=27&enableZoom=false&ty=5' | url }}"
    loading="lazy"
    class="absolute inset-0 w-full h-full border-0 z-0 opacity-45"
    aria-hidden="true"
  ></iframe>

  <div class="mx-auto max-w-[1480px] w-full relative z-10 min-h-[calc(100vh-84px)] flex flex-col justify-between px-6 py-10 md:px-10 md:py-12">
    <div class="max-w-5xl">
      <div class="flex items-center gap-3 mb-8">
        <a href="{{ '/video/' | url }}" class="announcement-pill announcement-pill--inverted no-underline" style="max-width:1320px; min-height:64px; font-size:30px; padding-inline:1rem;">
          <span class="announcement-pill-label" style="font-size:14px;">News</span>
          <span class="announcement-pill-track">
            <span class="announcement-pill-text">Interloom raises $16.5m seed round from DN Capital, BEK Ventures and Air Street Capital</span>
          </span>
          <svg class="announcement-pill-arrow" width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <p class="text-sm md:text-base text-fg-3 font-medium tracking-[0.12em] uppercase mb-4">Plug and Play Germany Summit 2026</p>
      <h1 class="text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-5xl" data-scramble>Workflows that learn from your experts.</h1>
      <p class="text-2xl md:text-[2.2rem] text-fg-3 leading-[1.12] tracking-tight max-w-4xl mt-7 mb-0" data-scramble="150">Interloom helps enterprises capture their operational memory, and power faster and more accurate decisions on expert precedent.</p>
    </div>

    <section id="customer-stories" class="mt-10">
      <div class="mx-auto max-w-5xl">
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <article class="rounded-lg border border-line bg-surface-1 flex flex-col items-start" style="padding: 1.25rem; min-height: 190px; height: 100%;">
            <img src="{{ '/images/logos/Comdirect_Bank_AG_Logo 2.svg' | url }}" alt="Comdirect" class="h-7 w-auto">
            <p class="mt-2 text-fg-2 text-sm leading-relaxed">Operational teams turn years of support email history into a living knowledge base that surfaces documentation gaps before they become escalations.</p>
            <a href="{{ '/customer-stories/2026-02-comdirect-knowledge-mining/' | url }}" class="inline-flex pt-3 text-sm text-fg-1 hover:opacity-80" style="margin-top: auto;">Read story &rarr;</a>
          </article>
          <article class="rounded-lg border border-line bg-surface-1 flex flex-col items-start" style="padding: 1.25rem; min-height: 190px; height: 100%;">
            <img src="{{ '/images/logos/volkswagen-group-services.svg' | url }}" alt="Volkswagen Group Services" class="h-7 w-auto">
            <p class="mt-2 text-fg-2 text-sm leading-relaxed">Cross-functional teams connect business processes across tools while keeping every decision and action traceable in one flow.</p>
            <a href="{{ '/customer-stories/2026-03-volkswagen-group-services-cross-system-workflows/' | url }}" class="inline-flex pt-3 text-sm text-fg-1 hover:opacity-80" style="margin-top: auto;">Read story &rarr;</a>
          </article>
          <article class="rounded-lg border border-line bg-surface-1 flex flex-col items-start" style="padding: 1.25rem; min-height: 190px; height: 100%;">
            <img src="{{ '/images/logos/zurich-insurance.svg' | url }}" alt="Zurich Insurance Group" class="h-7 w-auto">
            <p class="mt-2 text-fg-2 text-sm leading-relaxed">Operational experts coordinate underwriting workflows with AI-assisted extraction, guided validation, and transparent case context.</p>
            <a href="{{ '/customer-stories/2026-01-zurich-underwriting-operations/' | url }}" class="inline-flex pt-3 text-sm text-fg-1 hover:opacity-80" style="margin-top: auto;">Read story &rarr;</a>
          </article>
        </div>
      </div>
    </section>
  </div>
</section>

<section class="py-20 md:py-28 px-4 bg-surface-1">
  <div class="mx-auto max-w-5xl">
    <div class="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
      <article class="rounded-lg border border-line bg-surface-1 flex flex-col overflow-hidden">
        <img src="{{ '/images/expert-guidance.svg' | url }}" alt="Precedent cases feeding into execution logic" class="w-full border-b border-line bg-surface-2" style="height: 160px; object-fit: cover;">
        <div style="padding: 1.25rem;">
          <h3 class="text-fg-1 text-base font-medium">Grounded in expert guidance</h3>
          <p class="mt-2 text-fg-3 text-sm leading-relaxed">Workflows learn from precedent. Every completed case adds context for what good execution looks like in the real world.</p>
        </div>
      </article>

      <div>
        <p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">Everything your agents need, connected as a graph.</span> The Context Graph resolves operational entities into first-class objects with stable identities and typed semantic relationships. Not rows in a database, but nodes in a living knowledge structure.</p>
        <div class="mt-6 rounded-lg border border-line overflow-hidden" style="position:relative; height:520px; background:var(--color-surface-2);">
          <div id="entity-graph" style="width:100%;height:100%;"></div>
          <div id="graph-tooltip" style="position:absolute;pointer-events:none;opacity:0;transition:opacity 0.15s;background:var(--color-surface-1);border:1px solid var(--color-line);border-radius:0.5rem;padding:0.5rem 0.75rem;font-size:0.75rem;color:var(--color-fg-2);box-shadow:0 4px 12px rgba(0,0,0,0.08);z-index:10;max-width:220px;"></div>
        </div>
        <p class="text-sm text-fg-3 mt-4 max-w-2xl">Drag nodes to explore. All connections are typed, directed edges that carry inherent meaning like <em>governs</em>, <em>references</em>, and <em>supervises</em>.</p>
      </div>
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
<script>
(function() {
  const container = document.getElementById('entity-graph');
  const tooltip = document.getElementById('graph-tooltip');
  if (!container || !tooltip || typeof d3 === 'undefined') return;

  const style = getComputedStyle(document.documentElement);
  const fg1 = style.getPropertyValue('--fg-1').trim();
  const fg3 = style.getPropertyValue('--fg-3').trim();
  const line = style.getPropertyValue('--color-line').trim() || 'rgba(0,0,0,0.10)';

  const nodes = [
    { id: 'Case',       group: 'core',   description: 'The business process — a customer inquiry, a claim, a request.' },
    { id: 'Thread',     group: 'core',   description: 'An active conversation or execution strand within a case.' },
    { id: 'Procedures', group: 'entity', description: 'Reusable workflow templates that define how work gets done.' },
    { id: 'Agents',     group: 'entity', description: 'AI agents that execute steps autonomously within boundaries.' },
    { id: 'People',     group: 'entity', description: 'Human actors — experts, reviewers, approvers.' },
    { id: 'Files',      group: 'entity', description: 'Documents, attachments, and uploads linked to cases.' },
    { id: 'Citations',  group: 'entity', description: 'References to knowledge articles and precedent decisions.' },
    { id: 'E-Mails',    group: 'entity', description: 'Inbound and outbound email messages tied to a case.' },
    { id: 'Notes',      group: 'entity', description: 'Annotations, comments, and decision rationale.' },
    { id: 'Articles',   group: 'entity', description: 'Structured knowledge entries — the readable context layer.' },
  ];

  const links = [
    { source: 'Case',       target: 'Thread',     label: 'contains' },
    { source: 'Case',       target: 'Procedures', label: 'follows' },
    { source: 'Case',       target: 'People',     label: 'involves' },
    { source: 'Case',       target: 'Files',      label: 'attaches' },
    { source: 'Case',       target: 'E-Mails',    label: 'receives' },
    { source: 'Thread',     target: 'Agents',     label: 'invokes' },
    { source: 'Thread',     target: 'Notes',      label: 'produces' },
    { source: 'Thread',     target: 'Citations',  label: 'references' },
    { source: 'Agents',     target: 'Articles',   label: 'grounded by' },
    { source: 'Procedures', target: 'Articles',   label: 'governed by' },
    { source: 'Citations',  target: 'Articles',   label: 'points to' },
    { source: 'People',     target: 'Notes',      label: 'authors' },
    { source: 'People',     target: 'Agents',     label: 'supervises' },
    { source: 'Articles',   target: 'Articles',   label: 'links to' },
  ];

  const width = container.clientWidth;
  const height = container.clientHeight;
  if (!width || !height) return;

  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${width} ${height}`);

  svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '0 -4 8 8')
    .attr('refX', 20)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-3L7,0L0,3')
    .attr('fill', fg3);

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(130))
    .force('charge', d3.forceManyBody().strength(-420))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(36))
    .force('x', d3.forceX(width / 2).strength(0.06))
    .force('y', d3.forceY(height / 2).strength(0.06));

  const linkGroup = svg.append('g');
  const linkLine = linkGroup.selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke', line)
    .attr('stroke-width', 1)
    .attr('marker-end', 'url(#arrowhead)');

  const linkLabel = linkGroup.selectAll('text')
    .data(links)
    .join('text')
    .text(d => d.label)
    .attr('fill', fg3)
    .attr('font-size', '9px')
    .attr('text-anchor', 'middle')
    .attr('dy', '-4')
    .style('pointer-events', 'none')
    .style('user-select', 'none')
    .style('opacity', 0.7);

  const nodeGroup = svg.append('g');
  const node = nodeGroup.selectAll('g')
    .data(nodes)
    .join('g')
    .style('cursor', 'grab')
    .call(d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
        d3.select(event.sourceEvent.target.closest('g')).style('cursor', 'grabbing');
      })
      .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
        d3.select(event.sourceEvent.target.closest('g')).style('cursor', 'grab');
      })
    );

  node.append('circle')
    .attr('r', d => d.group === 'core' ? 22 : 16)
    .attr('fill', d => d.group === 'core' ? fg1 : 'var(--color-surface-1)')
    .attr('stroke', d => d.group === 'core' ? fg1 : line)
    .attr('stroke-width', 1);

  node.append('text')
    .text(d => d.id)
    .attr('text-anchor', 'middle')
    .attr('dy', d => d.group === 'core' ? '0.35em' : (d.group === 'entity' ? '-1.6em' : '0.35em'))
    .attr('fill', d => d.group === 'core' ? 'var(--color-surface-1)' : fg1)
    .attr('font-size', d => d.group === 'core' ? '9px' : '11px')
    .attr('font-weight', '500')
    .style('pointer-events', 'none')
    .style('user-select', 'none');

  node.on('mouseenter', (event, d) => {
    const r = container.getBoundingClientRect();
    tooltip.innerHTML = '<strong style="color:var(--color-fg-1)">' + d.id + '</strong><br>' + d.description;
    tooltip.style.opacity = '1';
    tooltip.style.left = (event.clientX - r.left + 12) + 'px';
    tooltip.style.top = (event.clientY - r.top - 10) + 'px';
  }).on('mousemove', (event) => {
    const r = container.getBoundingClientRect();
    tooltip.style.left = (event.clientX - r.left + 12) + 'px';
    tooltip.style.top = (event.clientY - r.top - 10) + 'px';
  }).on('mouseleave', () => {
    tooltip.style.opacity = '0';
  });

  simulation.on('tick', () => {
    linkLine
      .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x).attr('y2', d => d.target.y);

    linkLabel
      .attr('x', d => (d.source.x + d.target.x) / 2)
      .attr('y', d => (d.source.y + d.target.y) / 2);

    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });
})();
</script>
