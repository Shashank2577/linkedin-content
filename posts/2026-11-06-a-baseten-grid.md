# 72% lower cost per coding task, 0.8 points off Opus 5.5

**FRI 2026-11-06 · 8:30am IST · Slot A · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Baseten: Introducing Baseten Router (Nov 4)](https://www.baseten.co/blog/introducing-baseten-router)
**Also:** https://www.baseten.co/blog/introducing-baseten-grid
**People named:** Baseten  |  **Tag:** no
**Strategy stack:** newsjack: Nov 4 Grid launch + trend-ride: the routing layer for coding agents + hot take: cost per completed task, not cost per token

---

## Post body (copy from here)

72% lower cost per coding task. 0.8 points off Opus 5.5.

That's Baseten's own benchmark for its new router, and it's the number that matters in the launch. Baseten Grid, in public preview since Nov 4, is three things in one place: a gateway for model access, a router that picks the model per task, and guardrails that apply policies at the gateway.

The router is the interesting part. In the published experiment it routes between Opus 5.5 and GLM 5.3 Flash. It doesn't rank models by token price. It estimates the cost of completing the task, including retries, failed tool calls and incomplete answers, and picks a model that meets the quality bar.

The gateway covers OpenAI, Anthropic, Gemini, Bedrock and Baseten, and connects Claude Code, Codex, OpenCode and Pi with one command. Guardrails sit in front of every request and response, with per-workload policies and a record of what was flagged.

Two honest notes. This is a vendor benchmark on one model pair, not an independent bake-off. And the routing threshold is a dial; you can move along the cost-quality curve.

The part I'd steal for any agent platform: measure cost per completed task, not cost per token. The retries are where the money goes.

Source:
https://www.baseten.co/blog/introducing-baseten-router

Also:
https://www.baseten.co/blog/introducing-baseten-grid

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Baseten Grid, read as the control plane for enterprise coding agents. The 72% and 0.8-point figures are Baseten's own benchmark on one model pair; the post says that. The 'cost per completed task' framing is the author's.
