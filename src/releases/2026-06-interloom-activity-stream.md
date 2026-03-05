---
title: Interloom Activity Stream
description: Interloom Activity Stream introduces a central event bus for all user and agent activity, structured as subject, activity type, object, and data to power context graph traces, process mining, and procedure iteration.
date: 2026-06-20
tag: Context Graph
releaseType: roadmap
contentPage: true
---

Interloom Activity Stream is a central event bus that captures all activities across the platform, and selected activities outside the platform, in one structured pipeline.

Every event follows a consistent schema:

- **subject**: who initiated the activity,
- **activity type**: what happened,
- **object**: what the activity acted on,
- **data**: the structured payload and context.

### Central pipeline for downstream consumers

The stream is designed as a core pipeline for downstream use cases and consumers, including the Context Graph. It enables retrieval of complete traces of user and agent activity within one case, across a related case set, or across broader process segments for analysis.

This supports high-value scenarios such as:

- process mining,
- procedure iteration loops,
- operational quality analytics,
- reliability and governance reporting.

### Activity references through the Context Graph

Like everything in Interloom, activities reference other objects through the Context Graph. This creates a durable relationship model between operational entities and the work performed on them.

Activities can be aggregated in two primary ways:

- **by object**, for example all messages an agent posted across the workspace,
- **by primitive scope**, for example all activities in a space or all activities in a case.

That aggregation model forms the trace layer needed for deep operational visibility.

### Second pillar of the Context Graph

Interloom's Context Graph is built on two pillars:

- the **object graph** (business ontology, object-to-object relationships),
- the **activity stream graph** (activity-to-object relationships and observed patterns of work).

The first pillar captures business structure. The second captures execution behavior. Together they let Interloom reinforce successful work patterns for case resolution and continuously improve procedure design over time.
