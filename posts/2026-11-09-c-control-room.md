# Your agent needs a kill switch that works when the agent doesn't

**MON 2026-11-09 · 7:00pm IST · Slot C · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [OpenAI: Control Room](https://openai.com/index/control-room/)
**Also:** https://openai.com/index/how-we-detect-frontier-model-misalignment/
**People named:** OpenAI  |  **Tag:** no
**Strategy stack:** newsjack: OpenAI control plane + trend-ride: agent safety as infrastructure + hot take: fail closed or don't call it a control

---

## Post body (copy from here)

OpenAI can stop a model's output in 35 seconds. The part I'd actually read is what happens when the kill switch itself fails.

Control Room tracks every research inference workload across OpenAI's infrastructure. Each job gets a job_id tied to an approved safety case. Before an inference engine fulfills a request, it checks with Control Room. If the job is stopped, the engine refuses. The workload code can keep running; it just can't produce more tokens.

The design choice is the lesson. OpenAI put the enforcement in the inference layer, not in the workload code, because workload code changes constantly and is a bad place for a load-bearing safety control. It also runs sweeps to catch rogue engines with Control Room disabled.

And it fails closed. If Control Room goes down, or someone tampers with it, every inference request is denied until it comes back. The 35-second lag comes from an authorization cache. OpenAI says it's working toward zero.

This is research infrastructure, not the customer API. But the architecture applies to any team running unattended agents: put the stop at the narrowest chokepoint, make it independent of the agent, and decide now what happens when the control plane is unavailable.

Source:
https://openai.com/index/control-room/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

OpenAI's Control Room, read as an architecture pattern: enforce at the inference layer, tie every job to an approved safety case, and fail closed. 35-second lag comes from an authorization cache. Caveat: research infrastructure, not the public API.
