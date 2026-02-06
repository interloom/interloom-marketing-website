---
title: Why We Chose Natural Language for Workflow Authoring
date: 2025-03-24
author: Erik Collinder
description: Most workflow tools make you think like an engineer. We wanted subject matter experts to describe their processes in their own words. The people who understand a process best — the analysts, the compliance officers, the operations leads — shouldn't need to learn a visual programming language to codify what they already know. Natural language authoring closes that gap.
layout: post.njk
---

Traditional workflow tools assume you'll have a developer available to build and maintain every automation. Drag-and-drop builders helped, but they still require you to think in terms of nodes, branches, and conditional logic.

## The expert bottleneck

The people who understand the work best — claims adjusters, operations managers, compliance officers — can describe their processes clearly. They just can't express them in a visual programming language. So they write requirements documents, hand them to developers, and wait weeks for something that's almost right.

## Describe the outcome, not the graph

In Interloom, you describe what should happen: "When a new claim comes in, extract the key fields, check them against our underwriting guidelines, flag anything unusual for human review, and write a summary to the case file."

The system figures out the execution graph. It decides which steps need an LLM, which are simple lookups, and where to parallelize. You review the result and adjust.

## When natural language isn't enough

Sometimes you need precision. A date parsing rule, a validation formula, a specific API call. For those cases, you can drop into code within any workflow step. The natural language description and the code coexist — the system uses whichever is more appropriate for each step.

## The maintenance advantage

When a process changes — a new regulation, a new product type, a new exception — the subject matter expert can update the workflow description directly. No sprint planning, no developer handoff, no two-week wait. The change is live in minutes.
