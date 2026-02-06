---
title: 3x Throughput & Sub-Second Latency
date: 2025-06-02
tag: Platform
---

**Execution engine rewrite.** The core workflow engine has been rewritten to process steps concurrently where the execution graph allows it. Independent branches now run in parallel, and the system automatically identifies which steps can be parallelised. Result: 3x throughput on complex, multi-branch workflows.

**Sub-second latency for deterministic steps.** Validation, formatting, field mapping, and lookup steps now execute in under 100ms. Only LLM-based steps (extraction, classification, summarisation) carry model inference latency — and those are now routed to the fastest available provider automatically.

**Streaming results.** Workflow outputs are now streamed as they become available. If a workflow produces a 10-field summary and the first 5 fields are ready, they're delivered immediately. Downstream systems and human reviewers see results incrementally rather than waiting for full completion.
