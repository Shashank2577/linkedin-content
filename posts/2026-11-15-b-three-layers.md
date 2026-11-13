# The agent stack is splitting into three layers

**SUN 2026-11-15 · 7:00pm IST · Slot B · OPINION · Hook #7 The Callout · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic: Operate Claude Managed Agents inside your security perimeter (Nov 12)](https://claude.com/resources/articles/self-hosted-claude-managed-agents)
**Also:** https://openai.com/index/control-room/ · https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/ · https://www.anthropic.com/research/components-of-agent-memory
**People named:** OpenAI, Anthropic, Google DeepMind, Meta  |  **Tag:** no
**Strategy stack:** synthesis: control, execution, memory + trend-ride: agent architecture separates + hot take: name the layers before adding agents

---

## Post body (copy from here)

If you're still buying one model and calling it an agent architecture, stop.

The agent stack is splitting into three layers. Control, execution, memory.

Control is where you decide what the agent can do and how to stop it. OpenAI's Control Room checks every inference request against a job_id and fails closed if the control plane goes down. Anthropic's self-hosted Managed Agents puts the harness, sandbox, credentials, and session history in your VPC. Control is now a deployment choice.

Execution is multi-model by default. Google's Orchestrator switches between Carbon and Hydrogen in one session. /swarm runs planners, workers, and verifiers in parallel. Muse Ember is priced for high-volume subagent calls.

Memory is where experience persists. Anthropic's memory work separates transcripts, notes, wikis, and injected context, with a dreaming loop that corrects notes against transcripts. Claude Meetings writes the artifact during the call, so the meeting itself becomes memory.

The teams that get value decide three things: where the control plane runs, which model handles each step, and what the agent remembers.

I'd have that conversation before adding another agent.

Sources:
https://openai.com/index/control-room/
https://claude.com/resources/articles/self-hosted-claude-managed-agents
https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
https://www.anthropic.com/research/components-of-agent-memory

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Sunday synthesis: control (Control Room, self-hosted Managed Agents), execution (Orchestrator, /swarm, Muse Ember), memory (Anthropic memory/dreaming, Claude Meetings artifacts). The architect's job is to decide where each layer runs, who can stop it, and what it remembers. Caveat: early and vendor-specific.
