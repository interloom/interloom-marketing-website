---
title: Getting Started
date: 2025-01-13
order: 2
---

This guide walks you through the core process of working with Interloom: creating a space, building a workflow or agent and collaborating with both human and AI actors.

## Navigating the UI

The left sidebar is your command center.

- **Home**: Your personal inbox showing assigned work, @mentions, and active cases.
- **Spaces**: Distinct areas for teams or projects.
- **Team**: Where you find and manage AI Agents.

## Spaces

### Spaces

Spaces separate teams, departments, and use cases. It is the top-level boundary and defines the environment, the available Agents, and the data isolation.

### Space Types

**My Tasks**: Your personal space. Only you (and your agents) can read/write. It is immutable (cannot be deleted). Any task not associated with another space is automatically assigned here.

**General Space**: A shared, immutable space available to all users for collaboration.

**Other Spaces**: Areas for teams/projects. Specialized Spaces are the most common way to organize a business. While the General Space is for everyone, Other Spaces are used to create "Departments" or "Project Rooms" with specific rules, specialized agents, and restricted access.

### Create a Space

1. Navigate to your organization in the sidebar
2. Click **New Space**
3. Give it a descriptive name and optional description
4. Invite team members by adding them as **members** — each person gets a role: owner, admin, member, or observer

## Workflows

This is the "Architect's Studio" for a Space. It is where you define the automated logic, procedures, and rules that govern how work is executed within that specific environment. It wires inputs into Interloom and defines automation triggers. Triggers can be flipped on with a toggle button, allowing users to configure automated workflows or define default agents that will be assigned to any opened case.

**Follow Procedure**: It serves as the library where you create, edit, and store Procedures, which are the standardized sets of instructions and subtasks used to automate recurring work.

**Notify**: It is where you assign specific Agents to specific subtasks, ensuring that the right "specialist" is automatically tasked when a new Case begins.

**Example: Customer Onboarding**

| Stage | Instructions | Actor |
|-------|-------------|-------|
| 1. Intake Review | Verify contact details, confirm service tier | AI |
| 2. Account Setup | Provision credentials, configure integrations | AI |
| 3. Kickoff Call | Schedule and conduct welcome call | Human |
| 4. Compliance Check | Run KYC/AML screening, file documentation | AI |

## Agents

Interloom agents are specialized AI agents assigned to specific tasks or subtasks within a structured workspace to execute defined instructions and automate complex workflows. They interact with the platform using a suite of tools to manage objects like notes and files, collaborating with humans and other agents by maintaining a continuous, shared context.

### Native Agents

These agents are present out-of-the-box. They help plan and organize work, manage tasks, index and extract from documents, etc.

### Custom Agents

You can add your own agents via **New Agent** in **Team**.

Describe what the agent should do, how it should respond, and when to use each tool.

You can write the agent's job description yourself or ask `@Thor` to draft a job description for an agent that fulfills a specific task or process.

## Cases

Cases are the primary unit of work in Interloom.

1. Inside your space, click **New Case**
2. Add a title — something specific like "Onboard Northwind Group" rather than "New customer"
3. Select a **Procedure** to apply (optional but recommended). This creates the stages and their instructions automatically
4. Set a **priority** if needed: critical, high, medium, or low
5. **Assign** the case to an actor, or leave it unassigned for the team to pick up

The case starts in the **intake** phase with **idle** motion — work hasn't begun yet.

### Start Working

When you're ready to begin, **commence** the case:

1. Click **Start** (or an AI agent can invoke the start action based on a trigger)
2. The case transitions to **active** phase, **working** motion
3. If the case has stages, the first stage activates automatically

Work through each stage by completing its instructions:

- **Todo items** — check them off as you go
- **Subcases** — spawn child cases for work that needs to be delegated (e.g., "Run fraud screening" becomes its own case with its own lifecycle)
- **Implicit instructions** — the system evaluates conditions automatically

When all instructions in a stage are satisfied, the stage completes and the next one activates.

### Collaborate in the Thread

Every case has a **Thread** — a chronological timeline of everything that happens:

- **Comments** from human and AI actors
- **Status changes** (phase transitions, motion changes)
- **Stage transitions** as work progresses
- **Artifacts** attached — documents, images, data files
- **Subcase summaries** posted when child cases complete

The thread is the single source of truth for what happened, when, and by whom. All activity is logged with visibility controls: public (all participants), internal (assigned actors and admins), or system (audit log only).

### Resolve and Close

When the business-relevant work is done:

1. **Resolve** the case — phase moves to **resolved**, motion to **idle**. This is a soft close: the case can be reopened if needed (with explicit confirmation and a reason)
2. **Close** the case — phase moves to **closed**. This is terminal. The case is archived, though meta-computations like indexing, grading, and knowledge extraction may still run

## Next Steps

- Read [Core Concepts](/docs/core-concepts/) to understand the full domain model — the environment tree, phase+motion lifecycle, and how entities relate
- Check the [API Reference](/docs/api-reference/) for programmatic access to every entity

## Need Help?

Contact us at [hello@interloom.com](mailto:hello@interloom.com) to get started with your first workflow.
