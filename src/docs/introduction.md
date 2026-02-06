---
title: Introduction
date: 2025-01-13
order: 1
---

Interloom is a case management and orchestration platform where human operators and AI agents collaborate on structured work. It gives domain experts — not developers — the tools to define how work flows through their organization, with full auditability and the flexibility to handle exceptions as they arise.

## Why Interloom?

Most automation tools force a choice: either you hard-code a rigid workflow, or you give an AI agent free rein and hope for the best. Interloom provides a middle path.

**Cases** are the primary unit of work. Each case tracks two dimensions simultaneously — *where* it is in its lifecycle (phase) and *how fast* it's moving (motion). This lets you see at a glance whether work is progressing, waiting on a dependency, or blocked by something unexpected.

**Procedures** are reusable templates that define the stages a case moves through. They encode your team's best practices without locking anyone into rigid automation. Stages can be assigned to human operators, AI agents, or either — and the procedure adapts as work unfolds.

**Actors** — both human users and AI agents — work side by side within the same context. An AI agent can triage incoming cases, draft correspondence, and complete checklist items, while a human supervisor reviews high-stakes decisions and handles exceptions.

## How It Works

Work in Interloom flows through a clear hierarchy:

1. **Organizations** hold one or more **Spaces** — logical workspaces for a team, department, or project
2. Within a Space, **Cases** represent discrete units of work (a claim, a support ticket, an onboarding request)
3. Cases can follow **Procedures** — staged workflows with defined instructions and completion criteria
4. Each case has a **Thread** where all activity, conversation, and status changes are logged chronologically
5. **Artifacts**, **DataTables**, and **EmailMessages** attach to cases, threads, or spaces as the supporting materials of work

## Quick Links

- **[Getting Started](/docs/getting-started/)** — Set up your first space, create a case, and apply a procedure
- **[Core Concepts](/docs/core-concepts/)** — The complete domain model: Cases, Stages, Procedures, Actors, and more
- **[API Reference](/docs/api-reference/)** — REST endpoints for every entity in the platform

## Need Help?

Contact us at [hello@interloom.io](mailto:hello@interloom.io) to get started with your first workflow.
