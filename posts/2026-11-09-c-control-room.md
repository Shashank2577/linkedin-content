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

Control Room tracks every research inference job across OpenAI's infrastructure, and each job gets exactly 1 job_id tied to an approved safety case. 3 systems are involved: the workload, the inference engine, and the Control Room service. A workload can use 1 or more models across 1 or more engines. The page walks through a 13-step example. I'd read it. Before an engine fills a request, it checks with Control Room. If the job is stopped, the engine refuses. The workload can keep running. It just can't produce another token.

I like where the enforcement sits. OpenAI put it in the inference layer, not in workload code. Workload code changes constantly. The inference layer is a handful of code paths, which makes it a real chokepoint. I'd copy that placement. OpenAI also runs sweeps for rogue engines with Control Room disabled.

And it fails closed. 2 failure modes matter: a system error or a bad actor. Either way, every inference request is denied until Control Room comes back. That 35-second window is the gap between the stop order and the last token. It comes from an authorization cache. OpenAI says it's working toward 0.

A monitor catches problems in frontier reinforcement learning jobs. The DNS incident was one. The engine runs on GPUs, and when the monitor stops a job, the next request from that job_id is denied.

This is research infrastructure, not the customer API. Fair. But if you're running unattended agents, the shape still applies. Put the stop at the narrowest chokepoint, keep it independent of the agent, and decide now what happens when the control plane is unavailable.

Source:
https://openai.com/index/control-room/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

OpenAI's Control Room, read as an architecture pattern: enforce at the inference layer, tie every job to an approved safety case, and fail closed. 35-second lag comes from an authorization cache. Caveat: research infrastructure, not the public API.
