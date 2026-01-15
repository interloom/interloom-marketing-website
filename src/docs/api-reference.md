---
title: API Reference
date: 2025-01-13
order: 4
---

The Interloom API provides programmatic access to your workspace, enabling integrations and automated workflows.

## Authentication

All API requests require authentication using an API key. Include your key in the request header:

```
Authorization: Bearer YOUR_API_KEY
```

Contact your administrator to obtain an API key for your organization.

## Base URL

```
https://api.interloom.io/v1
```

## Endpoints

### Spaces

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/spaces` | List all spaces |
| GET | `/spaces/{id}` | Get a specific space |
| POST | `/spaces` | Create a new space |

### Cases

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cases` | List all cases |
| GET | `/cases/{id}` | Get a specific case |
| POST | `/cases` | Create a new case |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | List all tasks |
| GET | `/tasks/{id}` | Get a specific task |
| POST | `/tasks` | Create a new task |
| PATCH | `/tasks/{id}` | Update a task |

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | List all notes |
| GET | `/notes/{id}` | Get a specific note |
| POST | `/notes` | Create a new note |

### Files

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/files/{id}` | Download a file |
| POST | `/files` | Upload a file |

## Response Format

All responses are returned in JSON format:

```json
{
  "data": { ... },
  "meta": {
    "request_id": "uuid",
    "timestamp": "2025-01-13T00:00:00Z"
  }
}
```

## Rate Limits

API requests are limited to 1000 requests per minute per API key. Rate limit headers are included in all responses.

## Need Help?

For API support, contact us at [api-support@interloom.io](mailto:api-support@interloom.io).
