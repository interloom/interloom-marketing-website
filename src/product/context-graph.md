---
layout: base.njk
title: Context Graph
permalink: /product/context-graph/index.html
---
{% from "components/split-block.njk" import render as splitBlock %}

<section id="hero" class="relative min-h-[50vh] flex flex-col justify-center py-16 md:py-24 px-4">
<div class="mx-auto max-w-5xl w-full relative z-10">
<p class="text-sm text-fg-3 font-medium tracking-wide uppercase mb-4">Product</p>
<h1 class="max-w-3xl" data-scramble>Codified operational context for every decision your team and agents make.</h1>
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-3xl mt-4" data-scramble="150"><span class="text-fg-2">Data is abundant. Context is scarce.</span> The Context Graph transforms raw workflows into a semantic memory layer that grounds agents and experts in verified precedent, structured relationships, and the collective intelligence of your operations.</p>
<div class="flex flex-wrap items-center gap-3 mt-8">
<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eEwV1c880TGi16I1QWst6PTzbawnSjH9mV1e49ihrW3raJf-nKrwUIua0S59qEtt5TkGFmrfr" class="inline-flex items-center h-[32px] bg-fg-1 text-surface-1 px-3 rounded font-medium no-underline hover:opacity-85 transition-opacity">Schedule Demo</a>
</div>
</div>
</section>


<section class="pt-20 md:pt-28 pb-10 md:pb-14 px-4 bg-surface-1">
<div class="mx-auto max-w-5xl">
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">Context Graph for Better Decisions.</span> When an agent acts, it draws from layers of context — from the immediate thread to the full organizational workspace. Closer rings carry higher relevance. The result is a precisely scoped, token-efficient context window for every invocation.</p>
</div>
<div id="context-rings" class="mt-16 mb-4 md:mb-6 mx-auto max-w-5xl w-full overflow-hidden" style="height: clamp(22rem, 52vw, 30rem);"></div>
</section>


<section class="py-20 md:py-28 px-4">
<div class="mx-auto max-w-5xl">
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">Everything your agents need, connected as a graph.</span> The Context Graph resolves operational entities into first-class objects with stable identities and typed semantic relationships. Not rows in a database — nodes in a living knowledge structure.</p>
<p class="text-sm text-fg-3 mt-4 max-w-2xl">Want a technical overview of how it works end to end? <a href="{{ '/blog/context-graph-technical-deep-dive/' | url }}" class="text-fg-1 no-underline hover:opacity-80">Read the deep dive &rarr;</a></p>

<div class="mt-6 rounded-lg border border-line overflow-hidden" style="position:relative; height:520px; background:var(--color-surface-2);">
<div id="entity-graph" style="width:100%;height:100%;"></div>
<div id="graph-tooltip" style="position:absolute;pointer-events:none;opacity:0;transition:opacity 0.15s;background:var(--color-surface-1);border:1px solid var(--color-line);border-radius:0.5rem;padding:0.5rem 0.75rem;font-size:0.75rem;color:var(--color-fg-2);box-shadow:0 4px 12px rgba(0,0,0,0.08);z-index:10;max-width:220px;"></div>
</div>
<p class="text-sm text-fg-3 mt-4 max-w-2xl">Drag nodes to explore. All connections are typed, directed edges that carry inherent meaning — <em>governs</em>, <em>matches precedent</em>, <em>references</em>, <em>escalated from</em>. Relationships are derived once in the canonical layer, ensuring a single version of the truth.</p>

</div>
</section>

<script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
<script>
(function () {
  const container = document.getElementById('context-rings');
  if (!container || typeof d3 === 'undefined') return;

  function drawLabel(svg, textValue, y, cx, color, lineColor, bgColor, width, accessText, ringRadius) {
    const group = svg.append('g');
    const text = group.append('text')
      .attr('x', cx)
      .attr('y', y + 3)
      .attr('text-anchor', 'middle')
      .attr('font-size', 12)
      .attr('font-weight', 500)
      .attr('fill', color)
      .text(textValue);

    const bbox = text.node().getBBox();

    group.insert('rect', 'text')
      .attr('x', bbox.x - 5)
      .attr('y', bbox.y - 1)
      .attr('width', bbox.width + 10)
      .attr('height', bbox.height + 2)
      .attr('fill', bgColor);

    if (!accessText) return;

    const annotationStart = Math.max(cx + ringRadius + 18, width * 0.55);

    const cliaGroup = svg.append('g');
    const cliaText = cliaGroup.append('text')
      .attr('x', annotationStart)
      .attr('y', y + 3)
      .attr('text-anchor', 'start')
      .attr('font-size', 10)
      .attr('font-family', 'var(--font-mono)')
      .attr('fill', color)
      .text('Agent CLI');

    const cliaBox = cliaText.node().getBBox();
    cliaGroup.insert('rect', 'text')
      .attr('x', cliaBox.x - 5)
      .attr('y', cliaBox.y - 1)
      .attr('width', cliaBox.width + 10)
      .attr('height', cliaBox.height + 2)
      .attr('rx', 3)
      .attr('fill', bgColor)
      .attr('stroke', lineColor)
      .attr('stroke-width', 0.8);

    const accessGroup = svg.append('g');
    const access = accessGroup.append('text')
      .attr('x', cliaBox.x + cliaBox.width + 10)
      .attr('y', y + 3)
      .attr('text-anchor', 'start')
      .attr('font-size', 9)
      .attr('font-family', 'var(--font-mono)')
      .attr('fill', color)
      .attr('opacity', 0.92)
      .text(accessText);

    const accessBox = access.node().getBBox();
    const overflow = accessBox.x + accessBox.width + 12 - width;
    if (overflow > 0) {
      access.attr('x', accessBox.x - overflow);
    }
    const finalAccessBox = access.node().getBBox();
    accessGroup.insert('rect', 'text')
      .attr('x', finalAccessBox.x - 4)
      .attr('y', finalAccessBox.y - 1)
      .attr('width', finalAccessBox.width + 8)
      .attr('height', finalAccessBox.height + 2)
      .attr('rx', 3)
      .attr('fill', bgColor);

    svg.append('line')
      .attr('x1', Math.min(width - 8, bbox.x + bbox.width + 10))
      .attr('y1', y)
      .attr('x2', Math.max(cliaBox.x - 8, bbox.x + bbox.width + 14))
      .attr('y2', y)
      .attr('stroke', lineColor)
      .attr('stroke-width', 1);
  }

  function render() {
    const style = getComputedStyle(document.documentElement);
    const fg1 = style.getPropertyValue('--fg-1').trim();
    const fg2 = style.getPropertyValue('--fg-2').trim();
    const fg3 = style.getPropertyValue('--fg-3').trim();
    const fg4 = style.getPropertyValue('--fg-4').trim();
    const line = style.getPropertyValue('--color-line').trim() || 'rgba(0,0,0,0.10)';
    const surface1 = style.getPropertyValue('--color-surface-1').trim() || '#fff';

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;

    d3.select(container).selectAll('*').remove();

    const svg = d3.select(container)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`);

    const cy = height * 0.56;
    const maxRadiusByHeight = Math.min(cy - 24, height - cy - 24);
    const outerRadius = Math.max(120, Math.min(maxRadiusByHeight, width * 0.27, 230));
    const cx = outerRadius + 14;
    const step = outerRadius / 5;
    const radii = [
      outerRadius,
      outerRadius - step,
      outerRadius - step * 2,
      outerRadius - step * 3,
      outerRadius - step * 4
    ];

    const ringDefs = [
      { label: 'External Systems', r: radii[0], stroke: line, strokeOpacity: 0.30, fill: 'none',   text: fg3, accessText: 'Salesforce, SAP, Jira, ServiceNow, Slack, ...' },
      { label: 'Space',            r: radii[1], stroke: line, strokeOpacity: 0.45, fill: 'none',   text: fg3, accessText: 'Files, E-Mails, Tables, Procedures, Notes, ...' },
      { label: 'Relevant',         r: radii[2], stroke: line, strokeOpacity: 0.65, fill: 'none',   text: fg2, accessText: 'Similar cases, policies, articles, citations, ...' },
      { label: 'Trace',            r: radii[3], stroke: line, strokeOpacity: 0.85, fill: 'none',   text: fg2, accessText: 'Actions, inputs, outputs, decisions, ...' },
      { label: 'Case',             r: radii[4], stroke: line, strokeOpacity: 1,    fill: surface1, text: fg1, accessText: 'Thread, actors, artifacts, activities, ...' }
    ];

    ringDefs.forEach((ring) => {
      svg.append('circle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', ring.r)
        .attr('fill', ring.fill)
        .attr('stroke', ring.stroke)
        .attr('stroke-opacity', ring.strokeOpacity ?? 1)
        .attr('stroke-width', 1);

      drawLabel(svg, ring.label, cy - ring.r, cx, ring.text, line, surface1, width, ring.accessText, ring.r);
    });

    // Center anchor with callout line
    const dotR = 4;
    svg.append('circle')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('r', dotR)
      .attr('fill', fg1);

    const linkX = Math.min(cx + radii[4] + 120, width - 170);
    svg.append('line')
      .attr('x1', cx + dotR + 2)
      .attr('y1', cy)
      .attr('x2', linkX)
      .attr('y2', cy)
      .attr('stroke', line)
      .attr('stroke-width', 1);

    svg.append('text')
      .attr('x', linkX + 8)
      .attr('y', cy + 5)
      .attr('text-anchor', 'start')
      .attr('font-size', 16)
      .attr('font-weight', 600)
      .attr('font-family', 'var(--font-mono)')
      .attr('fill', fg1)
      .text('Context Graph');
  }

  render();
  window.addEventListener('resize', render, { passive: true });
})();
</script>
<script>
(function() {
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

  const container = document.getElementById('entity-graph');
  const tooltip = document.getElementById('graph-tooltip');
  const rect = container.getBoundingClientRect();
  const width = container.clientWidth;
  const height = container.clientHeight;

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


<section class="px-4 bg-surface-1 feedback-reveal" id="layers-section">
<div class="mx-auto max-w-5xl" style="padding-top:5rem;">
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">Three layers, one unified abstraction.</span> The Memory Layer decouples the meaning of an event from its underlying storage. Raw data stays where it lives. The graph resolves it into context your agents can reason over.</p>
</div>
<div class="mx-auto max-w-5xl mt-12 grid gap-3">
  <div class="rounded-lg border border-line bg-surface-2" style="padding: 1rem 1.25rem;">
    <p class="text-sm font-medium text-fg-1">Projection</p>
    <p class="text-xs text-fg-3 mt-1">Human dashboards · Agent context windows</p>
  </div>
  <div class="rounded-lg border border-line bg-surface-2" style="padding: 1rem 1.25rem;">
    <p class="text-sm font-medium text-fg-1">Canonical</p>
    <p class="text-xs text-fg-3 mt-1">Entity resolution · Semantic relationships</p>
  </div>
  <div class="rounded-lg border border-line bg-surface-2" style="padding: 1rem 1.25rem;">
    <p class="text-sm font-medium text-fg-1">Source</p>
    <p class="text-xs text-fg-3 mt-1">Databases · Files · Email systems</p>
  </div>
</div>
</section>

<section class="py-20 md:py-28 px-4">
<div class="mx-auto max-w-5xl">
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">MemoryRank: precedent as outcome signal.</span> Back-office work repeats in patterns. Interloom captures the relationships behind successful resolutions, clusters new cases to matching precedent, and reranks the artifacts, actions, and know-how that most often led to strong outcomes.</p>

<div class="mt-12 rounded-lg border border-line overflow-hidden" style="position:relative; height:580px; background:var(--color-surface-2);">
<div id="memoryrank-graph" style="width:100%;height:100%;"></div>
<div id="mr-tooltip" style="position:absolute;pointer-events:none;opacity:0;transition:opacity 0.15s;background:var(--color-surface-1);border:1px solid var(--color-line);border-radius:0.5rem;padding:0.5rem 0.75rem;font-size:0.75rem;color:var(--color-fg-2);box-shadow:0 4px 12px rgba(0,0,0,0.08);z-index:10;max-width:260px;"></div>
<div style="position:absolute;bottom:0.75rem;left:0.75rem;display:flex;gap:0.75rem;align-items:center;font-size:0.6875rem;color:var(--color-fg-3);">
<span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#c05621;"></span> Current case</span>
<span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--color-fg-3);opacity:0.6;"></span> Precedent cases</span>
<span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;border:1px solid var(--color-line);background:var(--color-surface-1);"></span> Shared neighbours (sized by rank)</span>
</div>
</div>
<p class="text-sm text-fg-3 mt-4 max-w-2xl">Click the central case to highlight its precedent cluster. Hover nodes for details. Shared neighbours are sized by how many precedent cases reference them — the higher the count, the stronger the signal.</p>

<div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="rounded-lg border border-line" style="padding: 1.5rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Reinforced by Completed Cases</p>
<p class="text-sm text-fg-3 leading-relaxed mb-3">Each case outcome strengthens the graph connections it traversed. Over months, heavily-trodden paths become high-confidence precedent. Rarely-used paths signal edge cases worth human review.</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">The system doesn't just accumulate knowledge — it learns which knowledge matters most for which situations.</p>
</div>
<div class="rounded-lg border border-line" style="padding: 1.5rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Precedent Discovery via Triangulation</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">When a new case arrives, the graph automatically triangulates to find matching guidelines and precedent cases. Matches are ranked by request type, domain category, and recency — not keyword overlap.</p>
</div>
<div class="rounded-lg border border-line" style="padding: 1.5rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Cold-Start Your Corporate Memory</p>
<p class="text-sm text-fg-3 leading-relaxed mb-3">Interloom pre-processes your existing emails, notes, tickets, and cases to knowledge mine the corporate memory before a single new case arrives. The graph starts informed — no ramp-up period required.</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0"><a href="{{ '/customer-stories/2026-02-comdirect-knowledge-mining/' | url }}" class="text-fg-1 no-underline hover:opacity-80">See how Comdirect reduced undocumented cases from 50% to 5% &rarr;</a></p>
</div>
</div>

</div>
</section>

<script>
(function() {
  const style = getComputedStyle(document.documentElement);
  const fg1 = style.getPropertyValue('--fg-1').trim();
  const fg3 = style.getPropertyValue('--fg-3').trim();
  const lineColor = style.getPropertyValue('--color-line').trim() || 'rgba(0,0,0,0.10)';
  const surface1 = style.getPropertyValue('--color-surface-1').trim() || '#ffffff';
  const surface2 = style.getPropertyValue('--color-surface-2').trim() || '#fafafa';
  const accent = '#c05621';

  const container = document.getElementById('memoryrank-graph');
  const tooltip = document.getElementById('mr-tooltip');
  const W = container.clientWidth;
  const H = container.clientHeight;

  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${W} ${H}`)
    .style('font-family', 'var(--font-sans)');

  const ROW_H = 32;
  const CARD_W = 210;
  const CARD_R = 6;

  const currentCase = {
    id: 'current',
    label: 'Property Endorsement',
    sub: 'Broker Chat — Urgent',
    desc: 'The incoming broker chat. MemoryRank searches the graph for precedent cases with similar intent, trade type, and recency.'
  };

  const precedents = [
    { id: 'p1', label: 'IP Infringement — Alpha Inc',       tag: 'Property',    similarity: 94, desc: 'Resolved 3 weeks ago. Same trade type and urgency level.' },
    { id: 'p2', label: 'Breach of Contract — Beta LLC',     tag: 'Contract',    similarity: 91, desc: 'Identical clause structure. Approved via fast-track.' },
    { id: 'p3', label: 'Partnership Dispute — Gamma Corp',  tag: 'Contract',    similarity: 88, desc: 'Shares guideline and template references with current case.' },
    { id: 'p4', label: 'Licensing Agreement — Delta Ltd',   tag: 'Property',    similarity: 85, desc: 'Related trade type with shared escalation pattern.' },
    { id: 'p5', label: 'Employment Contract Dispute',       tag: 'Employment',  similarity: 82, desc: 'Different trade type but matched on urgency pattern.' },
    { id: 'p6', label: 'Patent Violation — Omega Systems',  tag: 'Property',    similarity: 78, desc: 'Matched on domain category within 3-month window.' },
    { id: 'p7', label: 'Service Agreement Breach',          tag: 'Contract',    similarity: 76, desc: 'Older case. Within recency window at time of match.' },
    { id: 'p8', label: 'Non-Compete Clause Dispute',        tag: 'Employment',  similarity: 74, desc: 'Edge case with partial overlap on escalation criteria.' },
  ];

  const neighbourGroups = [
    { category: 'People', icon: '👤', items: [
      { id: 'n1', label: 'Sarah Chen',         rank: 6, trend: '+2%', desc: 'Senior Underwriter. Handled 6 of 8 precedent cases.' },
      { id: 'n2', label: 'Michael Roberts',     rank: 5, trend: '+1%', desc: 'Claims specialist. Involved in 5 precedent cases.' },
      { id: 'n3', label: 'Jennifer Martinez',   rank: 4, trend: '-1%', desc: 'Compliance reviewer on 4 cases.' },
    ]},
    { category: 'Documents', icon: '📄', items: [
      { id: 'n4', label: 'Settlement Agreement Template', rank: 5, trend: '-1%', desc: 'Standard settlement template. Referenced by 5 cases.' },
      { id: 'n5', label: 'Expert Testimony Report',       rank: 4, trend: '+2%', desc: 'Expert report format. Used in 4 cases.' },
      { id: 'n6', label: 'Contract Comparison Matrix',    rank: 3, trend: '+2%', desc: 'Clause-by-clause comparison tool. Used in 3 cases.' },
    ]},
    { category: 'Notes', icon: '📝', items: [
      { id: 'n7', label: 'Client Meeting Minutes',     rank: 5, trend: '-1%', desc: 'Structured meeting notes. Captured in 5 cases.' },
      { id: 'n8', label: 'Mediation Strategy Notes',   rank: 4, trend: '+2%', desc: 'Strategy documentation from 4 mediations.' },
      { id: 'n9', label: 'Precedent Case Summary',     rank: 4, trend: '-1%', desc: 'Summary briefs referencing this cluster.' },
    ]},
    { category: 'Precedents', icon: '⚖️', items: [
      { id: 'n10', label: 'Smith v. Jones (2019)',              rank: 4, trend: '+2%', desc: 'Landmark contract dispute ruling. Referenced in 4 cases.' },
      { id: 'n11', label: 'Tech Industries v. Startup Co',     rank: 3, trend: '+2%', desc: 'IP precedent. Cited in 3 property disputes.' },
    ]},
  ];

  const COL_CASE = 80;
  const COL_PREC = W * 0.24;
  const COL_NEIGH = W * 0.58;
  const PREC_W = Math.min(CARD_W, W * 0.28);
  const NEIGH_W = Math.min(CARD_W + 30, W * 0.36);
  const precTotalH = precedents.length * (ROW_H + 6) - 6 + 22;
  const PREC_START_Y = Math.max(30, (H - precTotalH) / 2 + 22);

  let neighTotalH = 0;
  neighbourGroups.forEach(g => {
    neighTotalH += 22;
    neighTotalH += g.items.length * (ROW_H + 4);
    neighTotalH += 8;
  });
  neighTotalH -= 8;
  const NEIGH_START_Y = Math.max(18, (H - neighTotalH) / 2);

  const precPositions = precedents.map((p, i) => ({
    ...p,
    x: COL_PREC,
    y: PREC_START_Y + i * (ROW_H + 6),
    cy: PREC_START_Y + i * (ROW_H + 6) + ROW_H / 2
  }));

  let neighY = NEIGH_START_Y;
  const groupPositions = [];
  const neighPositions = [];
  neighbourGroups.forEach(g => {
    groupPositions.push({ ...g, x: COL_NEIGH, y: neighY });
    neighY += 22;
    g.items.forEach(item => {
      neighPositions.push({ ...item, category: g.category, x: COL_NEIGH, y: neighY, cy: neighY + ROW_H / 2 });
      neighY += ROW_H + 4;
    });
    neighY += 8;
  });

  const caseCY = H / 2;

  const refLinks = [];
  precPositions.forEach(p => {
    neighPositions.forEach(n => {
      if (Math.random() < (n.rank / 8)) {
        refLinks.push({ source: p, target: n });
      }
    });
  });

  const linkGen = d3.linkHorizontal()
    .x(d => d[0])
    .y(d => d[1]);

  const linksG = svg.append('g').attr('class', 'links');

  precPositions.forEach(p => {
    linksG.append('path')
      .attr('d', linkGen({ source: [COL_CASE + 16, caseCY], target: [p.x, p.cy] }))
      .attr('fill', 'none')
      .attr('stroke', accent)
      .attr('stroke-width', 1.2)
      .attr('stroke-opacity', 0.5);
  });

  const refPaths = linksG.selectAll('.ref-link')
    .data(refLinks)
    .join('path')
    .attr('class', 'ref-link')
    .attr('d', d => linkGen({ source: [d.source.x + PREC_W, d.source.cy], target: [d.target.x, d.target.cy] }))
    .attr('fill', 'none')
    .attr('stroke', lineColor)
    .attr('stroke-width', 0.6)
    .attr('stroke-opacity', 0.35)
    .attr('stroke-dasharray', '3,3');

  svg.append('circle')
    .attr('cx', COL_CASE).attr('cy', caseCY)
    .attr('r', 16)
    .attr('fill', accent);

  const caseLabel = svg.append('g').attr('transform', `translate(${COL_CASE}, ${caseCY + 28})`);
  caseLabel.append('text')
    .attr('text-anchor', 'middle')
    .attr('fill', fg1).attr('font-size', '10px').attr('font-weight', '500')
    .text(currentCase.label);
  caseLabel.append('text')
    .attr('y', 14).attr('text-anchor', 'middle')
    .attr('fill', fg3).attr('font-size', '9px')
    .text(currentCase.sub);

  const precPanel = svg.append('g').attr('class', 'prec-panel');

  const panelPad = 10;
  const panelH = precPositions.length * (ROW_H + 6) - 6 + panelPad * 2 + 22;
  precPanel.append('rect')
    .attr('x', COL_PREC - panelPad).attr('y', PREC_START_Y - panelPad - 22)
    .attr('width', PREC_W + panelPad * 2).attr('height', panelH)
    .attr('rx', 8).attr('fill', 'none')
    .attr('stroke', accent).attr('stroke-opacity', 0.25)
    .attr('stroke-dasharray', '4,3');

  precPanel.append('text')
    .attr('x', COL_PREC).attr('y', PREC_START_Y - panelPad - 6)
    .attr('fill', accent).attr('font-size', '10px').attr('font-weight', '600')
    .text('Similar Cases');

  const precRows = precPanel.selectAll('.prec-row')
    .data(precPositions)
    .join('g')
    .attr('class', 'prec-row')
    .attr('transform', d => `translate(${d.x}, ${d.y})`)
    .style('cursor', 'pointer');

  precRows.append('rect')
    .attr('width', PREC_W).attr('height', ROW_H)
    .attr('rx', CARD_R)
    .attr('fill', surface1)
    .attr('stroke', lineColor)
    .attr('stroke-width', 0.5);

  precRows.append('circle')
    .attr('cx', 14).attr('cy', ROW_H / 2)
    .attr('r', 5)
    .attr('fill', accent).attr('fill-opacity', 0.15)
    .attr('stroke', accent).attr('stroke-width', 0.8);

  precRows.append('text')
    .attr('x', 26).attr('y', ROW_H / 2 - 3)
    .attr('fill', fg1).attr('font-size', '8.5px').attr('font-weight', '500')
    .text(d => d.label.length > 28 ? d.label.slice(0, 28) + '…' : d.label);

  precRows.append('text')
    .attr('x', 26).attr('y', ROW_H / 2 + 9)
    .attr('fill', fg3).attr('font-size', '7.5px')
    .text(d => d.tag);

  precRows.append('text')
    .attr('x', PREC_W - 8).attr('y', ROW_H / 2 + 3)
    .attr('text-anchor', 'end')
    .attr('fill', accent).attr('font-size', '8px').attr('font-weight', '600')
    .text(d => d.similarity + '%');

  const neighG = svg.append('g').attr('class', 'neigh-panel');

  groupPositions.forEach(g => {
    neighG.append('text')
      .attr('x', g.x).attr('y', g.y + 12)
      .attr('fill', fg3).attr('font-size', '9px').attr('font-weight', '600')
      .attr('letter-spacing', '0.03em')
      .text(g.icon + '  ' + g.category);
  });

  neighPositions.forEach(g => {
    const grp = svg.append('g').attr('class', 'neigh-group');

    const gBox = neighG.append('g')
      .attr('transform', `translate(${g.x}, ${g.y})`)
      .style('cursor', 'pointer')
      .datum(g);

    gBox.append('rect')
      .attr('width', NEIGH_W).attr('height', ROW_H)
      .attr('rx', CARD_R)
      .attr('fill', surface1)
      .attr('stroke', lineColor)
      .attr('stroke-width', 0.5);

    gBox.append('circle')
      .attr('cx', 14).attr('cy', ROW_H / 2)
      .attr('r', 5)
      .attr('fill', fg3).attr('fill-opacity', 0.12)
      .attr('stroke', fg3).attr('stroke-width', 0.5).attr('stroke-opacity', 0.3);

    gBox.append('text')
      .attr('x', 26).attr('y', ROW_H / 2 + 3)
      .attr('fill', fg1).attr('font-size', '9px').attr('font-weight', '400')
      .text(g.label);

    gBox.append('text')
      .attr('x', NEIGH_W - 50).attr('y', ROW_H / 2 + 3)
      .attr('fill', fg3).attr('font-size', '8px')
      .text('(' + g.rank + ')');

    const trendColor = g.trend.startsWith('+') ? '#16a34a' : '#dc2626';
    gBox.append('text')
      .attr('x', NEIGH_W - 10).attr('y', ROW_H / 2 + 3)
      .attr('text-anchor', 'end')
      .attr('fill', trendColor).attr('font-size', '7.5px').attr('font-weight', '500')
      .text((g.trend.startsWith('+') ? '↗ ' : '↘ ') + g.trend);

    gBox.on('mouseenter', (event) => {
      const r = container.getBoundingClientRect();
      tooltip.innerHTML = '<strong style="color:var(--color-fg-1)">' + g.label + '</strong>'
        + '<br><span style="color:var(--color-fg-3)">' + g.category + '</span>'
        + ' · <span style="color:' + accent + '">Referenced by ' + g.rank + ' cases</span>'
        + '<br>' + g.desc;
      tooltip.style.opacity = '1';
      const x = event.clientX - r.left;
      tooltip.style.left = (x > W * 0.7 ? x - 240 : x + 14) + 'px';
      tooltip.style.top = (event.clientY - r.top - 10) + 'px';
    }).on('mousemove', (event) => {
      const r = container.getBoundingClientRect();
      const x = event.clientX - r.left;
      tooltip.style.left = (x > W * 0.7 ? x - 240 : x + 14) + 'px';
      tooltip.style.top = (event.clientY - r.top - 10) + 'px';
    }).on('mouseleave', () => { tooltip.style.opacity = '0'; });
  });

  precRows.on('mouseenter', function(event, d) {
    d3.select(this).select('rect')
      .transition().duration(150)
      .attr('stroke', accent).attr('stroke-width', 1.5);

    const connected = new Set();
    refLinks.forEach(l => { if (l.source.id === d.id) connected.add(l.target.id); });

    refPaths.transition().duration(200)
      .attr('stroke-opacity', l => l.source.id === d.id ? 0.7 : 0.08)
      .attr('stroke-width', l => l.source.id === d.id ? 1.2 : 0.4)
      .attr('stroke', l => l.source.id === d.id ? accent : lineColor);

    neighG.selectAll('g').each(function() {
      const el = d3.select(this);
      const nd = el.datum();
      if (nd && connected.has(nd.id)) {
        el.select('rect').transition().duration(150)
          .attr('stroke', accent).attr('stroke-width', 1.2);
      } else if (nd) {
        el.transition().duration(150).style('opacity', 0.35);
      }
    });

    const r = container.getBoundingClientRect();
    tooltip.innerHTML = '<strong style="color:var(--color-fg-1)">' + d.label + '</strong>'
      + '<br><span style="color:' + accent + '">Similarity: ' + d.similarity + '%</span>'
      + ' · <span style="color:var(--color-fg-3)">' + d.tag + '</span>'
      + '<br>' + d.desc;
    tooltip.style.opacity = '1';
    tooltip.style.left = (event.clientX - r.left + 14) + 'px';
    tooltip.style.top = (event.clientY - r.top - 10) + 'px';
  }).on('mousemove', (event) => {
    const r = container.getBoundingClientRect();
    tooltip.style.left = (event.clientX - r.left + 14) + 'px';
    tooltip.style.top = (event.clientY - r.top - 10) + 'px';
  }).on('mouseleave', function() {
    d3.select(this).select('rect')
      .transition().duration(150)
      .attr('stroke', lineColor).attr('stroke-width', 0.5);

    refPaths.transition().duration(200)
      .attr('stroke-opacity', 0.35)
      .attr('stroke-width', 0.6)
      .attr('stroke', lineColor);

    neighG.selectAll('g').each(function() {
      const el = d3.select(this);
      el.transition().duration(150).style('opacity', 1);
      el.select('rect').transition().duration(150)
        .attr('stroke', lineColor).attr('stroke-width', 0.5);
    });

    tooltip.style.opacity = '0';
  });
})();
</script>


<section class="py-20 md:py-28 px-4 bg-surface-1 feedback-reveal">
<div class="mx-auto max-w-5xl">
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">Grounding that agents can cite.</span> When an agent makes a decision, it references specific objects and relationships in the Context Graph. Every output links back to the knowledge and precedent that informed it.</p>
<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="rounded-lg border border-line bg-surface-2 flex flex-col" style="padding: 1.25rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Cited Outputs</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">Agent actions include citations to the specific knowledge objects, case precedent, and procedure steps that informed each decision. Reviewers verify reasoning in seconds.</p>
</div>
<div class="rounded-lg border border-line bg-surface-2 flex flex-col" style="padding: 1.25rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Single Source of Truth</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">The canonical layer ensures every agent, dashboard, and workflow draws from the same resolved graph. No conflicting copies, no stale caches, no drift between teams.</p>
</div>
<div class="rounded-lg border border-line bg-surface-2 flex flex-col" style="padding: 1.25rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Enterprise Governance</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">Granular permissions over specific nodes and relationships. Control who can read, write, and approve changes to the graph — down to individual entity types and connections.</p>
</div>
</div>
</div>
</section>


<section class="py-20 md:py-28 px-4 feedback-reveal">
<div class="mx-auto max-w-5xl">
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-2xl" data-scramble><span class="text-fg-1">What the human sees, the agents see. What the agents can do, the humans can do.</span> Knowledge is stored as structured articles that humans can read, edit, and approve — the same content is projected as token-efficient context for agents. Both sides operate on one shared truth, always in sync.</p>
<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="rounded-lg border border-line bg-surface-2 flex flex-col" style="padding: 1.25rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Structured Articles</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">Each knowledge entry is a readable article with sections, references, and metadata. No opaque vector stores. Humans audit, edit, and approve content directly.</p>
</div>
<div class="rounded-lg border border-line bg-surface-2 flex flex-col" style="padding: 1.25rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Version History</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">Every edit is tracked. See how knowledge evolved, who changed it, and why. Roll back to any previous version. Full audit trail by default.</p>
</div>
<div class="rounded-lg border border-line bg-surface-2 flex flex-col" style="padding: 1.25rem;">
<p class="text-sm font-medium text-fg-1 mb-2">Portable and Open</p>
<p class="text-sm text-fg-3 leading-relaxed mb-0">Export your full knowledge graph at any time in standard formats. Import existing documentation, process manuals, and knowledge bases. No lock-in.</p>
</div>
</div>
</div>
</section>


<section class="py-20 md:py-28 px-4 bg-surface-1">
<div class="mx-auto max-w-5xl">
<p class="text-xs text-fg-3 font-medium tracking-wide uppercase mb-2">Proof of Concept</p>
<h2 class="font-serif font-normal text-fg-1 tracking-tight" style="font-size: 2rem; margin: 0 0 2.5rem; line-height: 1.2;">Broker-Underwriter Chat Codification</h2>
{{ splitBlock([
  { title: "Challenge", content: "High-velocity broker chats were unstructured and undocumented. 50% of customer support interactions lacked traceable resolution, with no systematic way to extract intent, trade context, or apply institutional knowledge at scale." },
  { title: "Outcome", content: "AI agents extracted broker, underwriter, intent, sentiment, trade type, and solution from each interaction — then triangulated against guidelines and historical precedent to codify every chat into the context graph." }
]) }}
<div class="split-block" style="margin-top: 2.5rem;">
<div style="padding-top: 1.5rem; border-top: 1px solid var(--color-line);">
<span class="text-4xl md:text-5xl font-serif text-fg-1">&lt;3%</span>
<p class="text-fg-3" style="font-size: 0.8125rem; margin: 0.5rem 0 0;">Undocumented support requests, down from 50%</p>
</div>
<div style="padding-top: 1.5rem; border-top: 1px solid var(--color-line);">
<span class="text-4xl md:text-5xl font-serif text-fg-1">&gt;95%</span>
<p class="text-fg-3" style="font-size: 0.8125rem; margin: 0.5rem 0 0;">Accuracy on recommendations to knowledge teams</p>
</div>
</div>
</div>
</section>


<section class="min-h-[50vh] flex flex-col justify-center py-12 px-4">
<div class="mx-auto max-w-2xl text-center">
<blockquote class="text-2xl md:text-4xl md:leading-snug font-serif text-fg-3" data-scramble>
<p>&ldquo;The agents didn&rsquo;t have to guess — they were fueled by the collective, codified memory of the business. <span class="text-fg-1">A rules engine is as good on day one thousand as it is on day one. A context-driven system is measurably better.</span>&rdquo;</p>
</blockquote>
</div>
</section>


<section class="min-h-[50vh] flex flex-col justify-center py-16 px-4" id="contact">
<div class="mx-auto max-w-5xl">
<div class="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 md:items-start">
<div>
<p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight" data-scramble>Intelligence is abundant. Context is scarce. <span class="text-fg-1">The companies that capture context now will have an advantage that widens with every case processed.</span></p>
</div>
<div class="flex gap-3">
<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eEwV1c880TGi16I1QWst6PTzbawnSjH9mV1e49ihrW3raJf-nKrwUIua0S59qEtt5TkGFmrfr" class="inline-flex items-center h-[32px] bg-fg-1 text-surface-1 px-3 rounded font-medium no-underline hover:opacity-85 transition-opacity">Book a demo</a>
<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eEwV1c880TGi16I1QWst6PTzbawnSjH9mV1e49ihrW3raJf-nKrwUIua0S59qEtt5TkGFmrfr" class="inline-flex items-center h-[32px] border border-line text-fg-2 px-3 rounded font-medium no-underline hover:bg-surface-3 transition-colors">Join the waitlist</a>
</div>
</div>
</div>
</section>
