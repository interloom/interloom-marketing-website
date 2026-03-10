---
title: Context Graph Technical Deep Dive
date: 2026-03-05
draft: true
author: Interloom Team
description: A practical overview of how the Context Graph connects source systems, canonical semantics, and surface-specific views for API, CLI, and agent workflows.
layout: post.njk
permalink: /blog/context-graph-technical-deep-dive/
---

Most teams have the same problem: data lives everywhere, but context lives nowhere.

The Context Graph solves this by introducing one canonical semantic layer between operational systems and consuming surfaces (API, CLI, and agent workflows).

This deep dive stays intentionally high level and focuses on the core building blocks.

## The Three Layer Model

The architecture is split into three responsibility layers:

- **Source layer:** Systems of record (databases, repositories, thread events, activity payloads).
- **Canonical layer:** One shared model for entities and relationships.
- **Projection layer:** Surface-specific outputs for API, CLI, and agent context.

The operating rule is simple: derive meaning once, project many times.

## Core Primitives

The canonical model is built from three primitives:

- **GameObject:** a first-class node with stable identity and intrinsic properties.
- **Semantic relationship:** a typed, directed edge between two GameObjects.
- **Projection:** a consumer-specific representation that can format and filter, but cannot invent semantics.

Important guardrail: canonical properties are intrinsic only. Structural links are represented as relationships, not pointer fields.

## Current Relationship Semantics

The current semantic relationship set is:

- **OWN** for structural ownership or containment
- **AUTHORED** for authored content in context
- **CREATED** for object creation events
- **ATTACHED** for attachment actions
- **UPDATED** for state changes
- **INVOKED** for agent invocation events

At a rollout level, structural ownership is introduced first and activity-derived semantics are layered in afterward.

## Key Services

Two peer services expose the canonical model:

- **GameObjectService:** resolves objects, resolves relationships, and supports mixed-type listing.
- **TimelineService:** resolves thread timelines as ordered canonical entries for downstream projections.

This separation keeps graph traversal and timeline composition explicit, while still allowing both services to share the same canonical references.

## Referencing and Building Relationships

A relationship is always defined from two typed references plus a semantic edge:

- **from_object:** origin node reference
- **to_object:** target node reference
- **type:** relationship meaning

In practice, derivation follows deterministic source mappings. Once mappings are defined centrally, every surface consumes the same edge semantics and only differs in presentation.

## Why This Matters

Without a canonical graph, each surface re-derives structure independently. That creates drift in behavior and duplicated logic.

With a canonical graph:

- semantics stay consistent across API, CLI, and agent tooling
- projection remains flexible for each surface's constraints
- context retrieval gets simpler, faster, and easier to reason about

## What This Deep Dive Intentionally Leaves Out

This post explains architecture and operating model, not private implementation internals. It omits low-level optimization details, private derivation heuristics, and system-specific safeguards by design.

The goal is a clear mental model of the system, not a line-by-line implementation spec.

