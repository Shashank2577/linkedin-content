# Token prices are the wrong metric. Cost per completed task is the right one.

**SUN 2026-11-15 · 4:00pm IST · Slot A · OPINION · Hook #1 Contrarian Take · Status: DRAFTED**

**Format:** text
**Anchor:** [Google: Gemini 4 Hydrogen (Nov 12)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
**Also:** https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/ · https://www.anthropic.com/claude-fable-and-mythos-5-2 · https://research.meta.ai/blog/muse-ember
**People named:** Google DeepMind, Anthropic, Meta, OpenAI  |  **Tag:** no
**Strategy stack:** synthesis: week's model economics + trend-ride: cost per accepted task + hot take: instrument the finished task, not the token

---

## Post body (copy from here)

Everyone is comparing token prices. After this week's releases, I think that's the wrong number.

Look at what shipped. Gemini 4 Carbon is $2/$10 during the intro period, then $4/$20 after November 30. Gemini 4 Hydrogen is $1.50/$7.50, flat across a 1M-token window. Claude Fable 5.2 is $8/$40, or $16/$80 in fast mode. Meta's Muse Ember is $0.10/$0.50.

Those numbers aren't comparable on their own. Carbon uses more tokens than Argon to explore and verify, and Fable at High effort scores about the same as Opus 5.5 at Max on FrontierCode 2.0 for roughly half the cost per task. Same task, half the bill. Muse Ember matches Haiku 5.5's best score at about a third of the cost. Hydrogen's Orchestrator reaches near-Carbon success on Terminal-Bench 4.0 while using 24% less quota and finishing 19% faster.

The metric that matters is cost per accepted task. Not the token price. That includes retries, verification, and human review. A cheap model that needs three attempts isn't cheap. The retries are the cost. An expensive model that gets it right once may be the bargain.

If you're building an agent budget this quarter, instrument cost per completed task by task type. Then route accordingly. The model isn't the unit of work. The finished task is.

Sources:
https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
https://www.anthropic.com/claude-fable-and-mythos-5-2
https://research.meta.ai/blog/muse-ember

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Synthesis of the week's pricing: Carbon $2/$10 intro then $4/$20; Hydrogen $1.50/$7.50 flat 1M; Fable $8/$40; Muse Ember $0.10/$0.50; Decisions $0.10 input, zero output. The argument: different token counts, retries, and verification make sticker price misleading. Caveat: vendor benchmarks and task mix.
