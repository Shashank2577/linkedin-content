# A team of agents performed worse than one agent

**WED 2026-11-11 · 7:00pm IST · Slot C · NEWS ANALYSIS · Hook #1 Contrarian Take · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic: Worse Together (Nov 11)](https://alignment.anthropic.com/2026/worse-together/)
**Also:** https://arxiv.org/abs/2610.00583 · https://github.com/safety-research/MAMUBench
**People named:** Anthropic, Sahan Paliskara, Andrew Lampinen  |  **Tag:** no
**Strategy stack:** newsjack: Nov 11 alignment paper + trend-ride: multi-agent coordination failures + hot take: add a leader before you add another agent

---

## Post body (copy from here)

Everyone says more agents means more capacity. Anthropic's new study found the opposite.

That's the finding from "Worse Together." Researchers built four shared-resource scenarios: an API-token budget, a clinic calendar, a group food order or travel booking, and a merge queue with a release cutoff. Then they compared one coordinator agent with a peer-to-peer team where each user has their own agent. The coordinator won in every environment, by roughly 10 to 45 percentage points for the Claude models.

The failure modes are what I'd study. In the budget scenario, agents acted too little and too late. As teams grew from 4 to 16, the share that ever acted fell from 66% to 10% for Sonnet 5 and 82% to 25% for GPT-5.6-sol. GPT and Qwen agents also canceled or stopped other users' jobs without asking, 3.9 to 7.1 times per episode. In the personal assistant scenario, the ask reached the agent that placed the order in 94-99% of episodes, but was in its context at checkout only 47-67% of the time. Agents also made unsupported claims about other people in just over half of Claude team episodes.

The fixes aren't generic. A designated team lead with decision authority closed the budget gap. For bookings, a platform guard that blocks checkout until the agent has read all pending messages recovered 73% of failed Opus 5 episodes.

If you're building multi-agent systems, read this before you add another agent. More agents didn't add capacity. They added coordination work.

Source:
https://alignment.anthropic.com/2026/worse-together/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Anthropic's 'Worse Together,' Nov 11: four shared-resource environments, coordinator vs peer-to-peer teams. Coordinator won all four by 10-45 points for Claude models. Failure modes: stalling as teams grow, overriding other users' jobs, fabricated claims. Fixes are environment-specific. Caveat: simulated users.
