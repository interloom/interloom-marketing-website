---
title: Getting Started
date: 2025-01-13
order: 2
---

This guide walks you through the core workflow: creating a space, opening a case, applying a procedure, and collaborating with both human and AI actors.

## Create a Space

Spaces are workspace containers where related cases, procedures, and actors operate together. A space might represent a department ("Claims Operations"), a project ("Q1 Onboarding"), or a client engagement.

1. Navigate to your organization in the sidebar
2. Click **New Space**
3. Give it a descriptive name and optional description
4. Invite team members by adding them as **members** — each person gets a role: owner, admin, member, or observer

Every user also has a **private space** created automatically. Standalone threads (quick conversations with an AI agent, for example) start here and can be moved to a shared space later.

## Create a Procedure

Procedures are reusable templates that define how a type of case should be handled. Before creating cases, define the stages they'll follow.

1. Inside your space, go to **Procedures** and click **New Procedure**
2. Add stages in sequence — each stage has a name, instructions, and optionally a required actor type (human, AI, or either)
3. For each stage, add **default instructions** — checklist items that will be created when the procedure is applied

**Example: Customer Onboarding**

| Stage | Instructions | Actor |
|-------|-------------|-------|
| 1. Intake Review | Verify contact details, confirm service tier | AI |
| 2. Account Setup | Provision credentials, configure integrations | AI |
| 3. Kickoff Call | Schedule and conduct welcome call | Human |
| 4. Compliance Check | Run KYC/AML screening, file documentation | AI |

## Open a Case

Cases are the primary unit of work in Interloom.

1. Inside your space, click **New Case**
2. Add a title — something specific like "Onboard Northwind Group" rather than "New customer"
3. Select a **Procedure** to apply (optional but recommended). This creates the stages and their instructions automatically
4. Set a **priority** if needed: critical, high, medium, or low
5. **Assign** the case to an actor, or leave it unassigned for the team to pick up

The case starts in the **intake** phase with **idle** motion — work hasn't begun yet.

## Start Working

When you're ready to begin, **commence** the case:

1. Click **Start** (or an AI agent can invoke the start action based on a trigger)
2. The case transitions to **active** phase, **working** motion
3. If the case has stages, the first stage activates automatically

Work through each stage by completing its instructions:

- **Todo items** — check them off as you go
- **Subcases** — spawn child cases for work that needs to be delegated (e.g., "Run fraud screening" becomes its own case with its own lifecycle)
- **Implicit instructions** — the system evaluates conditions automatically

When all instructions in a stage are satisfied, the stage completes and the next one activates.

## Collaborate in the Thread

Every case has a **Thread** — a chronological timeline of everything that happens:

- **Comments** from human and AI actors
- **Status changes** (phase transitions, motion changes)
- **Stage transitions** as work progresses
- **Artifacts** attached — documents, images, data files
- **Subcase summaries** posted when child cases complete

The thread is the single source of truth for what happened, when, and by whom. All activity is logged with visibility controls: public (all participants), internal (assigned actors and admins), or system (audit log only).

## Resolve and Close

When the business-relevant work is done:

1. **Resolve** the case — phase moves to **resolved**, motion to **idle**. This is a soft close: the case can be reopened if needed (with explicit confirmation and a reason)
2. **Close** the case — phase moves to **closed**. This is terminal. The case is archived, though meta-computations like indexing, grading, and knowledge extraction may still run

## Next Steps

- Read [Core Concepts](/docs/core-concepts/) to understand the full domain model — the environment tree, phase+motion lifecycle, and how entities relate
- Check the [API Reference](/docs/api-reference/) for programmatic access to every entity
