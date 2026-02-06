---
title: Improved Document Extraction and Email Parsing
date: 2025-01-06
tag: Platform
---

**Better handling of scanned documents and handwritten annotations.** The extraction pipeline now uses a two-pass approach — first an OCR pass for machine-readable text, then a vision model pass for handwritten notes, stamps, and annotations. Accuracy on mixed documents improved from 82% to 94%.

**Automated email thread analysis.** Workflows can now ingest full email threads and reconstruct conversation context — who said what, when, and which attachments belong to which message. Particularly useful for claims intake and customer support routing.

Also in this release: faster processing for high-volume periods, enhanced accuracy for German-language documents, and reduced false positive rates in anomaly detection.
