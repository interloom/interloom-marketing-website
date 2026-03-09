# Release Notes Tagging System

This document defines how release notes should be tagged and published.

## Purpose

Use one primary tag per release note so updates can be filtered cleanly on the release page.

## Allowed Tags

- `Platform` — Core product capabilities, workflow engine, editor, navigation, files.
- `Integrations` — Connectors and external systems (for example Salesforce, SAP, SharePoint).
- `Security` — Access control, permission boundaries, encryption, secure retrieval behavior.
- `Enterprise` — Governance, auditability, compliance, administrative controls.
- `Context Layer` — Knowledge memory, retrieval grounding, context graph behavior.

## Tagging Rules

1. Use exactly one tag per release note.
2. Choose the tag by primary user impact, not by implementation detail.
3. If multiple features ship together, split into separate release notes when themes differ.
4. Keep titles specific and dates explicit in frontmatter.
5. Keep each note short and complete in one paragraph.

## Publishing Format

Each release note should follow:

```md
---
title: <Feature Name>
date: YYYY-MM-DD
tag: <One tag from allowed list>
---

<One concise paragraph: what shipped, where it works, and why it matters.>
```

## Future Roadmap Examples

1. **Agent Handover Safeguards**  
   Date: `2026-05-14`  
   Tag: `Enterprise`  
   Example: Adds explicit handover checkpoints and audit markers for human review in regulated workflows.

2. **SAP Object Sync for Case Updates**  
   Date: `2026-06-03`  
   Tag: `Integrations`  
   Example: Synchronizes case status and key fields between Interloom and SAP objects in both directions.

3. **Context Graph Drift Alerts**  
   Date: `2026-07-22`  
   Tag: `Context Layer`  
   Example: Detects when operational behavior diverges from stored context and prompts teams to update guidance.
