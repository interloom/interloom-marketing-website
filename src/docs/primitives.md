---
title: Primitives
date: 2025-01-13
order: 3
---

Interloom is built on a set of core primitives that work together to enable collaborative task management. Understanding these primitives is essential for getting the most out of the platform.

## Objects

Each object in Interloom has a unique UUID.

### Task

The core unit of work. A task may act as a parent or child within a hierarchy (under a Case or another Task). Tasks have defined objectives and are always your primary context. Tasks may have subtasks at unlimited nesting levels. Each task object belongs to exactly one parent (e.g., Task → Case → Space).

### Case

A task without a `parent_task`. Cases are top-level work items organizing related tasks and can contain nested subtasks. They are the main containers for collaborative efforts.

### Subtask

A task with a `parent_task`. A task nested under a parent Task or Case, following the same structure and elements.

### Space

A compartment that groups related cases, tasks, notes, and files. Spaces define context and access. These groupings could be related to the topic, priority, teams, etc.

### Note

Textual document designed for capturing thoughts, reminders, or detailed project information. It has title, body and optionally files could be attached to the note. The note itself could be attached to a Task or Case.

### File

Any document or media attached to a Task, Case or Note.

### User

Represents both human and agent users that have access to the space, case or environment.

## Task Elements

Each Task has the following key properties:

| Property | Description |
|----------|-------------|
| **ID** | Unique identifier of an object in UUID (uuid7) format |
| **Title** | A concise description of the task's objective |
| **Instructions** | Guidance on how to complete the task |
| **Status** | The current state (e.g., open, started, completed, blocked, canceled). Indicates how far along a task is toward completion |
| **Assignee** | The user (human or agent) responsible for the task |
| **Thread** | Central space for conversation, updates, and artifacts of work. Users collaborate by posting messages in markdown format with links to other Interloom objects |
| **Task Summary** | Short summary capturing the objective, thread information, key milestones and results, and relevant tags |

## Referencing Objects

Platform objects are referenced through links in this format: `/[object_type]/[UUID]`

A "/" followed by the Interloom object type string, then the UUID (a valid uuid7 string).

### Reference Formats

| Object Type | Format |
|-------------|--------|
| Space | `[<space.title>](/spaces/<space.id>)` |
| Task | `[<task.title>](/tasks/<task.id>)` |
| Note | `[<note.title>](/notes/<note.id>)` |
| File | `[<file.name>](/api/v1/files/<file.id>)` |
| Agent | `[<agent.name>](/team/<agent.id>)` |

For PDF files, you can reference specific page numbers by appending `{page_number_anchor}` at the end of the reference.

Users can also be referenced with the pattern `<@U[UUID]>` — the `<@U` prefix followed by a UUID string and a closing `>`.
