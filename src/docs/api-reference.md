---
title: API Reference
date: 2025-01-13
order: 4
---

The Interloom API provides programmatic access to every entity in the platform. All operations available in the UI are also available via the API.

## Authentication

All requests require a bearer token in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

API keys are scoped to an organization. Contact your administrator to generate a key, or create one under **Settings → API Keys** if you have admin access.

## Base URL

```
https://api.interloom.io/v1
```

## Response Format

All responses return JSON with a consistent envelope:

```json
{
  "data": { ... },
  "meta": {
    "request_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "timestamp": "2025-01-15T09:30:00Z"
  }
}
```

List endpoints return paginated results:

```json
{
  "data": [ ... ],
  "meta": {
    "request_id": "...",
    "total": 142,
    "page": 1,
    "per_page": 50
  }
}
```

---

## Spaces

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/spaces` | List spaces in the organization |
| POST | `/spaces` | Create a new space |
| GET | `/spaces/{id}` | Get a space by ID |
| PATCH | `/spaces/{id}` | Update a space |
| GET | `/spaces/{id}/members` | List space memberships |
| POST | `/spaces/{id}/members` | Add a member to a space |

## Cases

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cases` | List cases (filterable by space, phase, motion, priority) |
| POST | `/cases` | Create a new case |
| GET | `/cases/{id}` | Get a case by ID |
| PATCH | `/cases/{id}` | Update a case (title, description, priority, assignment) |
| POST | `/cases/{id}/commence` | Transition from intake to active |
| POST | `/cases/{id}/resolve` | Transition to resolved |
| POST | `/cases/{id}/reopen` | Reopen a resolved case (requires reason) |
| POST | `/cases/{id}/close` | Transition to closed (terminal) |
| PATCH | `/cases/{id}/motion` | Set motion (working, waiting, blocked, paused) |
| GET | `/cases/{id}/subcases` | List subcases of a case |

### Filtering Cases

The `GET /cases` endpoint supports query parameters:

| Parameter | Type | Example |
|-----------|------|---------|
| `space_id` | uuid | Filter by space |
| `phase` | enum | `active`, `intake`, `resolved`, `closed` |
| `motion` | enum | `working`, `waiting`, `blocked`, `paused`, `idle` |
| `priority` | enum | `critical`, `high`, `medium`, `low` |
| `assigned_actor_id` | uuid | Filter by assigned actor |
| `procedure_id` | uuid | Filter by procedure |

## Stages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cases/{id}/stages` | List stages for a case |
| GET | `/stages/{id}` | Get a stage by ID |
| PATCH | `/stages/{id}` | Update a stage (assignment, motion) |
| POST | `/stages/{id}/complete` | Mark stage as completed |
| POST | `/stages/{id}/skip` | Mark stage as skipped |
| POST | `/stages/{id}/spawn-subcase` | Spawn a subcase from this stage |

## Instructions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/stages/{id}/instructions` | List instructions for a stage |
| POST | `/stages/{id}/instructions` | Add an instruction to a stage |
| PATCH | `/instructions/{id}` | Update an instruction |
| POST | `/instructions/{id}/complete` | Mark instruction as completed |

## Procedures

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/procedures` | List procedures (filterable by space) |
| POST | `/procedures` | Create a new procedure |
| GET | `/procedures/{id}` | Get a procedure by ID |
| PATCH | `/procedures/{id}` | Update a procedure |
| GET | `/procedures/{id}/stages` | List procedure stage templates |
| POST | `/procedures/{id}/stages` | Add a stage template to a procedure |
| POST | `/cases/{id}/apply-procedure` | Apply a procedure to an existing case |

## Actors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/actors` | List actors in the organization |
| POST | `/actors` | Create an actor (human or AI) |
| GET | `/actors/{id}` | Get an actor by ID |
| PATCH | `/actors/{id}` | Update an actor |

### AI Actor Configuration

When creating an AI actor, include the agent configuration:

```json
{
  "type": "ai",
  "name": "Claims Triage Agent",
  "model_id": "claude-sonnet-4-5-20250929",
  "system_prompt": "You are a claims triage specialist...",
  "capabilities": ["triage", "document-review", "correspondence"]
}
```

## Threads

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/threads` | List threads (filterable by space, case) |
| POST | `/threads` | Create a standalone thread |
| GET | `/threads/{id}` | Get a thread by ID |
| GET | `/threads/{id}/activities` | List activities in a thread |
| POST | `/threads/{id}/activities` | Post an activity to a thread |

### Activity Types

When posting an activity, specify the type:

```json
{
  "type": "comment",
  "content": "Reviewed the police report — liability is clear.",
  "visibility": "public"
}
```

Valid types: `comment`, `status_change`, `stage_transition`, `tool_call`, `note_edit`, `system_event`.

## Artifacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/artifacts` | List artifacts (filterable by case, thread, space) |
| POST | `/artifacts` | Upload an artifact |
| GET | `/artifacts/{id}` | Get artifact metadata |
| GET | `/artifacts/{id}/download` | Download artifact content |
| DELETE | `/artifacts/{id}` | Remove an artifact |

## DataTables

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/datatables` | List data tables |
| POST | `/datatables` | Create a data table |
| GET | `/datatables/{id}` | Get data table metadata and schema |
| GET | `/datatables/{id}/rows` | Query rows (supports filtering, sorting, pagination) |

## EmailMessages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/emails` | List email messages |
| POST | `/emails` | Create a draft email |
| GET | `/emails/{id}` | Get an email by ID |
| PATCH | `/emails/{id}` | Update a draft email |
| POST | `/emails/{id}/send` | Queue an email for sending |

## Tools

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/spaces/{id}/tools` | List tools available in a space |
| POST | `/spaces/{id}/tools` | Register a tool in a space |
| POST | `/tools/{id}/attach` | Attach a tool to an actor |

## Labels

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/spaces/{id}/labels` | List labels in a space |
| POST | `/spaces/{id}/labels` | Create a label |
| POST | `/cases/{id}/labels` | Apply a label to a case |
| DELETE | `/cases/{id}/labels/{label_id}` | Remove a label from a case |

---

## Rate Limits

API requests are limited to 1,000 requests per minute per API key. Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 947
X-RateLimit-Reset: 1705312800
```

## Errors

Errors follow a consistent format:

```json
{
  "error": {
    "code": "case_not_found",
    "message": "No case found with ID a1b2c3d4-...",
    "status": 404
  }
}
```

## Need Help?

For API support, contact us at [hello@interloom.io](mailto:hello@interloom.io).
