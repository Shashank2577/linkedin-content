# Gemini 4 Neon: 32% cheaper per task, first on the Coding Agent Index

**MON 2026-11-23 · 7:00pm IST · Slot C · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Google: Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)
**People named:** Google DeepMind, Artificial Analysis  |  **Tag:** no
**Strategy stack:** newsjack: Gemini 4 Neon + receipt: 32% lower cost per task + hot take: context length is not context quality

---

## Post body (copy from here)

32% cheaper per task than Gemini 4 Carbon.

That's the number Google is leading with for Gemini 4 Neon, and it's the one that matters if you run coding agents at volume.

Neon is $3 per million input tokens, $0.15 cached, and $15 output, with a 1M context window. Artificial Analysis puts it third overall on its Intelligence Index at 61, second on its Agent Arena Index at 1336, and first on its Coding Agent Index at 58.6. Google also claims state of the art on WebExploitBench v1.2 at 51.26%, at half the cost of the large competing models.

The caveat is the same one that follows every launch: cost per task depends on effort setting, retries and task mix. Google's 32% is measured at the default high setting against Carbon. Your workload may not look like that.

The 1M window is useful, but context length isn't the same as context quality. I'd test needle-in-a-repo retrieval before I trust it with a 600-file service.

Where I'd use it: long coding sessions, security triage, and any agent that currently gets rate-limited by cost. Not the final architecture call.

Sources:
https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Neon is $3/$15 with a 1M context, third on the AA Intelligence Index, first on the AA Coding Agent Index, and second on the Agent Arena Index. Google claims 32% lower cost per task than Carbon and state of the art on WebExploitBench v1.2. The caveat is effort setting and task mix; test retrieval quality before trusting 1M context.
