---
title: Context Is the Moat
date: 2025-02-18
draft: true
author: Erik Collinder
description: AI models are commoditising fast. The durable competitive advantage isn't the model — it's the structured institutional knowledge you feed it. Companies that capture decisions, not just data, build something no model upgrade can replicate.
layout: post.njk
permalink: /blog/context-is-the-moat/
---

Last year I watched two teams inside the same financial services firm try to automate claims triage. Same budget, same timeline, same model — GPT-4 Turbo at the time. Team A hired a prompt engineering consultancy. They spent eight weeks crafting elaborate system prompts, testing temperature settings, building evaluation harnesses. Team B spent those eight weeks doing something less glamorous: they sat with senior claims handlers and wrote down how they actually make decisions. Which signals matter. What the common edge cases look like. How a €12,000 water damage claim in a multi-tenant building differs from the same amount in a single-family home, and why that difference changes the process.

After two months, Team A had a sophisticated prompt chain that performed at roughly 74% accuracy on their test set. Team B had a messy but growing collection of structured decision articles — about 60 of them — and a much simpler prompt that referenced those articles at runtime. They hit 89%.

When the firm switched to Claude three months later, Team A's carefully tuned prompts broke. They spent three weeks re-engineering. Team B swapped the model endpoint in an afternoon. Their accuracy went up, because the new model was better at reasoning over the context they'd already built. The knowledge transferred. The prompt engineering didn't.

## The model upgrade treadmill

The default AI playbook is: pick the best model, optimise your prompts for it, fine-tune if you can afford to, and when the next model comes out, repeat. You're always running and never accumulating anything.

GPT-4 doesn't know that your Hamburg office handles Scandinavian claims differently from your Munich office, or that a certain class of supplier invoice needs a second sign-off not because of policy but because of a billing error three years ago that nobody documented properly. No model will ever learn these things from its training data. They have to be told. The question is whether you've built a system that does the telling well.

## What a context layer actually is

We use the term "context layer" at Interloom. It's not a wiki, not a knowledge base in the traditional sense, and not a vector store. It's a structured collection of decision-relevant knowledge — written in natural language, organised by domain, and referenced dynamically by workflows at the point where a decision is being made.

**Decision rationales.** Not just "claim approved" but "claim approved because the policyholder's renovation receipt predated the damage event by 14 months, which is consistent with legitimate home improvement rather than pre-loss inflation." The reasoning, not just the outcome.

**Exception patterns.** A good context layer accumulates these so the system learns that a €500 plumbing invoice from a specific region might be normal pricing, not inflated, because labour costs there are 40% above the national average. The kind of thing a senior handler knows intuitively and a junior handler learns the hard way.

**Domain rules in plain language.** Not buried in code, not encoded in a decision tree. "If the claimant is a commercial tenant and the damage affects shared infrastructure, route to the property management liaison before assessing — the lease agreement may shift liability."

**Worked examples.** Real cases, anonymised, that show how a decision was actually made. A single well-chosen example in context is often worth more than pages of abstract instruction.

All of this is stored as human-readable text. Not vector embeddings, not fine-tuning data, not opaque model weights. Text that a domain expert can open, read, correct, and improve. You give up some retrieval speed in exchange for auditability, portability, and the ability for humans to stay in the loop.

## How context compounds

On day one, the context layer is thin. A dozen articles covering the most common scenarios. The model gets obvious cases right and stumbles on anything nuanced.

But every correction is captured. When a handler overrides a decision, the system doesn't just record the override — it captures why. "Model recommended standard water damage process, but this is a listed heritage building; restoration requires specialist contractors and municipal approval. Re-routing to heritage property workflow." That reasoning becomes a new article, or refines an existing one.

By month three, the model handles heritage properties, multi-tenant liability splits, and seasonal weather event surges without intervention. The handlers spend their time on genuinely novel cases.

By month twelve, the context layer has become an institutional memory. It encodes not just the rules, but the exceptions to the rules, and the exceptions to the exceptions. It reflects the specific portfolio, geography, and risk appetite of that particular insurer. A competitor could buy the same model and the same software. They could not buy the twelve months of accumulated operational knowledge.

## The counterarguments

**"Just fine-tune the model."** Three problems. Fine-tuning is opaque — the knowledge gets absorbed into weights you can't inspect, correct, or show to an auditor. It locks you to a vendor — fine-tuning on GPT-4 is non-transferable to Claude or whatever comes next year. And it doesn't compound incrementally — you can't fine-tune on Tuesday's edge case and have it available Wednesday morning. You batch, retrain, evaluate, deploy. A context article is live immediately.

**"RAG solves this."** RAG is a retrieval mechanism, and a context layer uses retrieval. But most RAG implementations retrieve from existing corporate documents — policy manuals, Confluence pages — written for humans browsing a knowledge base, not for models making operational decisions. Full of narrative preamble and formatting that wastes tokens without improving decision quality. A context layer is different because every article is written to help a model make a better choice in a specific scenario. That's a content design discipline, not a retrieval architecture.

**"Better models will make context unnecessary."** This misunderstands what institutional knowledge is. It's not complexity that needs more intelligence — it's specificity that no amount of general intelligence can substitute for. A superintelligent model still doesn't know that your company changed its returns policy last Thursday, or that the client in case #4,721 has a history of legitimate but unusual claims that shouldn't be flagged as suspicious. Better models actually make context layers *more* valuable — a more capable model reasons more effectively over richer context. The gains from model upgrades are largest for teams that already have good context to give.

## Portability

If your institutional knowledge lives inside fine-tuned model weights, you're locked to that vendor. If it's in a proprietary vector store, you're locked to that architecture. If it's in human-readable text, you can switch models in an afternoon — which, in a market where the landscape shifts every few months, is a hedge against the only certainty in AI: whatever you're using today won't be the best option in eighteen months.

## Where to start

Pick one process. Something operational, repetitive, and decision-heavy — where experienced people make judgment calls that newer people struggle with.

Then do the unsexy work. Sit with the people who are good at it. Ask them how they decide. Write it down in plain language articles that capture the reasoning. "When you see X, check for Y, because Z." Build twenty or thirty of these. Feed them to a model alongside real cases. Then start capturing corrections — every time a human overrides the model, turn the reasoning into a new article.

It won't make for a good keynote demo. But after six months you'll have something no consultant can build for you and no vendor can sell you: the structured knowledge of how your organisation actually operates, in a format that any model — current or future — can use to make better decisions.

That's the moat. Not the model. The context.
