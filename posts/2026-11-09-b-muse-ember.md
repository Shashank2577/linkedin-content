# The cheapest useful agent model is $0.10 per million tokens

**MON 2026-11-09 · 1:30pm IST · Slot B · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Meta: Introducing Muse Ember (Nov 9)](https://research.meta.ai/blog/muse-ember)
**People named:** Meta Superintelligence Labs  |  **Tag:** no
**Strategy stack:** newsjack: Nov 9 small model + trend-ride: multi-model agent economics + hot take: route volume to cheap models

---

## Post body (copy from here)

Meta just put a competent agent model at $0.10 per million input tokens.

Muse Ember is Meta's smallest model, built for the work agents repeat all day: tool calls, routing, extraction, coding subtasks, long document parsing. At max reasoning it scores 37.8 on AutomationBench-AA, against 13.9 for Claude Haiku 5.5 and 20.2 for GPT-6 Luna. On Agents' Last Exam it scores 61.6, against 57.0 and 57.1.

The pricing is the story. $0.10 per million input tokens, $0.50 per million output, 1M-token context, up to 512K output tokens, and $0.004 per million cached input tokens. Meta says it matches Haiku's best score at about a third of the cost.

The caveat is specific. On FrontierCode 2.0, which grades whether code changes would actually be merged, Haiku still wins: 34.9 vs 27.2. So don't put Ember on your hardest engineering task. Put it on the 80% of agent calls that are classification, retrieval, and small edits.

That's the architecture decision most teams haven't made yet: one frontier model for judgment, a cheap model for volume. Ember makes the volume line item almost disappear.

Source:
https://research.meta.ai/blog/muse-ember

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Meta's Muse Ember, Nov 9, as an economics story for agent architects. It matches Haiku 5.5's best Artificial Analysis score at about a third of the cost and beats GPT-6 Luna, but trails Haiku on FrontierCode 2.0. The point is the subagent line item, not the frontier.
