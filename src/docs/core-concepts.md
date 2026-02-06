---
title: Core Concepts
date: 2025-01-13
order: 3
---

Interloom's domain model is built around a small set of entities that compose into rich workflows. This page covers every core entity, how they relate, and the key patterns that tie them together.

## The Environment Tree

Every entity in Interloom occupies a unique position in a containment hierarchy rooted at the Space. This hierarchy — the **environment tree** — determines where things live, how breadcrumbs render, and what context is available to actors working on a case.

```
Organization
└── Space: Claims Operations
    ├── Case: Auto Claim #5179
    │   ├── Artifact: Police Report.pdf
    │   ├── Artifact: Repair Estimate.pdf
    │   ├── DataTable: Damage Line Items
    │   ├── Subcase: Fraud Screening  [closed]
    │   ├── Subcase: Bodily Injury Evaluation
    │   └── Subcase: Subrogation Recovery
    ├── Case: Homeowner Claim #7713
    │   ├── Subcase: Emergency Water Extraction  [resolved]
    │   └── Subcase: Mold Assessment
    ├── EmailMessage: Coverage Denial Notice  [sent]
    ├── Thread: Q1 Planning
    └── DataTable: Claims Register
```

Each entity resolves to a unique path from root to leaf — this is what the breadcrumb displays in the UI. Subcases can nest arbitrarily deep.

---

## Organization

The top-level business account. An organization owns one or more spaces and provides the tenancy boundary for billing, configuration, and identity.

## Space

A workspace container where cases, procedures, and actors operate together. Spaces provide isolation between organizational units and membership-based access control.

Spaces can represent departments, projects, client engagements, or any logical grouping. Every user also has a **private space** — created automatically, with no other human members. AI actors can still be members of a private space.

### Membership Roles

| Role | Permissions |
|------|-------------|
| **Owner** | Full control including space deletion |
| **Admin** | Manage members and settings |
| **Member** | Work on cases |
| **Observer** | Read-only access |

---

## Case

The primary unit of work. A case represents a discrete task, issue, request, or project that needs to be completed — an insurance claim, a support ticket, an onboarding request, a compliance review.

### Phase + Motion

Cases track status across two orthogonal dimensions:

**Phase** — where the case is in its lifecycle arc:

```
intake ──→ active ──→ resolved ──→ closed
              ▲          │
              └──────────┘  (reopen — with friction)
```

| Phase | Meaning |
|-------|---------|
| `intake` | Case exists but work has not begun |
| `active` | Work is underway |
| `resolved` | Business-relevant work is done (soft close, can reopen) |
| `closed` | Terminal — archived |

**Motion** — how fast the case is moving toward its goal:

| Motion | Meaning |
|--------|---------|
| `idle` | At rest — natural state at intake and after resolution |
| `working` | Actively progressing |
| `waiting` | Suspended pending a dependency (subcase, approval, external event) |
| `blocked` | Halted by something unexpected |
| `paused` | Deliberately stopped by a human — the kill switch |

Every phase × motion combination is valid. Common examples:

| State | Scenario |
|-------|----------|
| `active` + `working` | The hot path — work is actively happening |
| `active` + `waiting` | Waiting on a subcase or human approval |
| `active` + `blocked` | Something went wrong, needs intervention |
| `intake` + `waiting` | Case received, awaiting initial documents |
| `resolved` + `idle` | Work done, case at rest |

When motion is `waiting`, a **waitingOn** reference describes the dependency — its kind (`subcase`, `approval`, `external`, `actor`), an optional reference ID, and a human-readable reason.

### Subcases

A subcase is a case spawned from a specific stage of a parent case. Subcases have their own lifecycle, can be assigned to different actors, and can follow their own procedures. When a subcase completes, its summary is automatically posted to the parent case's thread.

This enables hierarchical delegation: a claims case can spawn subcases for fraud screening, bodily injury evaluation, and subrogation recovery — each progressing independently.

---

## Stage

A sequential step within a case's execution plan. When a case follows a procedure, it has an ordered list of stages that define what work needs to happen and in what order.

Stages have their own phase (`pending` → `active` → `completed` or `skipped`) and motion (same values as cases). At most one stage per case is active at a time.

### Instructions

Instructions define the completion criteria for a stage — the things that must be satisfied before the stage can be marked complete:

| Type | Behavior |
|------|----------|
| **Todo** | Manual checklist item — an actor checks it off |
| **Subcase** | Links to a child case that must complete |
| **Implicit** | System-evaluated condition |

When all instructions in a stage are satisfied, the stage completes and the next stage activates automatically.

---

## Procedure

A reusable template that defines a sequence of stages for handling a type of case. When applied to a case, each procedure stage generates an actual stage instance with its instructions.

Procedures encode best practices — a "Standard Claims Process" might define stages for intake review, investigation, evaluation, negotiation, and settlement. Each stage can specify a required actor type (human, AI, or either) and default instructions.

Applying a procedure to a case creates the stages but does **not** start the case. The case remains in intake until explicitly commenced.

---

## Actor

Any entity that can be assigned work and take actions within Interloom. Actors come in two types:

**Human actors** — team members who log in, review work, make decisions, and handle exceptions.

**AI actors** — agents configured with a model, system prompt, and capabilities. AI actors can be assigned to cases and stages, complete instructions, post comments, and invoke tools — all within the same context as human collaborators.

Actors are assigned to cases and stages, and their work is logged in the thread timeline with full attribution.

### Tools

Tools are external capabilities or integrations scoped to a space — document search, email sending, database queries, calendar access. Tools are attached to actors via permissions, determining what each actor (human or AI) can do within the workspace.

---

## Thread

A chronological sequence of activity entries. Threads are the audit trail and communication backbone of Interloom.

Most commonly, each case has one thread that captures everything: comments, status changes, stage transitions, tool calls, artifact attachments, and subcase completion summaries.

Threads can also exist **standalone** — outside any case — functioning as a chatbot or agent conversation. Standalone threads start in the user's private space and can later be moved to a shared space or attached to a case.

### Activity

An individual entry in a thread's timeline. Activities are typed:

| Type | Example |
|------|---------|
| `comment` | "Reviewed the police report — liability is clear" |
| `status_change` | Case phase changed from intake to active |
| `stage_transition` | Stage "Investigation" completed |
| `subcase_created` | Spawned subcase "Fraud Screening" |
| `subcase_completed` | Subcase resolved with summary |
| `artifact_added` | Police Report.pdf attached |
| `tool_call` | Document search executed |

Each activity has a visibility level: **public** (all participants), **internal** (assigned actors and admins), or **system** (audit log only).

---

## Artifact

A file or digital asset attached to a case, thread, or space. Artifacts can be documents, images, spreadsheets, notes, or any other content. Each artifact has a type, MIME classification, and storage reference.

## DataTable

A structured collection of homogeneous records — closer to a list or spreadsheet than a single file. DataTables have a defined column schema and are backed by a source file (CSV or JSON). They can be queried, sorted, and filtered.

DataTables attach to cases, threads, or spaces, just like artifacts. Example: a "Claims Register" at the space level, or "Damage Line Items" within a specific case.

## EmailMessage

An email that can be drafted, reviewed, and sent from within Interloom. Emails follow a forward-only lifecycle (`draft` → `queued` → `sent` → `delivered`) and attach to cases, threads, or spaces. Reply chains are linked for conversation threading.

## Label

Tags for categorizing cases within a space. Labels are space-scoped and support filtering, organization, and visual identification.
