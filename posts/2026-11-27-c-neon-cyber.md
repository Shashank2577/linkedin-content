# 51.26% on WebExploitBench: the best model still fails half the time

**FRI 2026-11-27 · 7:00pm IST · Slot C · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Google: Gemini 4 Neon security results](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)
**People named:** Google DeepMind  |  **Tag:** no
**Strategy stack:** newsjack: Gemini 4 Neon + receipt: 51.26% SOTA + hot take: cost per successful find

---

## Post body (copy from here)

51.26% on WebExploitBench v1.2.

That's the number Google is putting on Gemini 4 Neon for security work, and it's a strange kind of progress.

The benchmark asks a model to find and exploit real vulnerabilities in web targets. Google says Neon sets the state of the art at 51.26%, at half the cost of the large competing models. The best model in the world still fails roughly half the time. Sit with that. The useful comparison isn't the score, it's the cost per successful find.

That's where Neon's pricing matters. At $3 per million input tokens and $15 output, a security team can run a lot more attempts than it could on a frontier model. More attempts at 50% success can beat fewer attempts at 60%. That's the math.

The limitation is the same one that applies to every cyber benchmark. A lab target is not your production app. The model doesn't know your auth flow, your internal APIs, or which findings your team will actually fix. Neither does the benchmark.

I'd use it for first-pass triage and exploit reproduction, with a human reviewing every finding before it touches a ticket. I wouldn't let it loose on a live target without scope controls. That's not a model problem. It's a process problem.

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Gemini 4 Neon claims state of the art on WebExploitBench v1.2 at 51.26%, at half the cost of large competitors. The useful metric is cost per successful find, not raw score. A lab target is not a production app; use it for first-pass triage with scope controls.
