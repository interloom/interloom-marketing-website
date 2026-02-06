---
title: Unified Space Files and Code Execution 1.5
date: 2026-02-06
tag: Platform
---

**Unified file view for spaces.** Spaces now show a unified, flattened view of all files related to that space, including files that originated from tasks. A new filter lets you hide files that were only ever attached inside cases and focus purely on those aggregated from tasks in the space. When you upload a file to a task, it's automatically surfaced in the space's files view; when you delete it from the space, it's also removed from the originating task, and vice versa. Previously, space files and task files were effectively separate islands; now they're stitched together into a single, coherent view of everything in the space, with a roadmap to also include email attachments and show you exactly where each file lives.

**Code execution 1.5.** A reliability and capability bump over the original interpreter integration. The big change versus the 1.0 version is that the interpreter now properly supports creating and reading notes through a markdown-generating pipeline. That makes it a much more trustworthy tool for append and note-editing operations compared to the older append-to-note tool. It's not calling native Interloom APIs directly from within the sandboxed code, but the text-file bridge between Interloom and the sandbox is now solid enough that we can recommend it as the default way to automate note and file manipulation.
