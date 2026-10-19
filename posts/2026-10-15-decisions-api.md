# When a decision endpoint beats the prompt you already run

**THU 2026-10-15 · 8:30am IST · Slot A · TEACH · Hook #12 The Comparison · Status: DRAFTED**

**Format:** text
**Anchor:** [OpenAI Decisions API documentation](https://developers.openai.com/api/docs/guides/decisions)
**Also:** https://simonwillison.net/2026/Oct/6/llm-openai-decisions/ · https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
**People named:** Simon Willison, OpenAI  |  **Tag:** no
**Strategy stack:** teach-as-freshness (newsjack dead at day 9) + namejack: Willison + brandjack: OpenAI DevDay + hot take (optional): most prod prompts are decision endpoints in a trenchcoat

---

## Post body (copy from here)

If your prompt ends in "answer yes or no", you probably want a decision endpoint instead.

OpenAI's Decisions API takes text, images or both and answers typed questions. A predicate returns the probability that a condition is true. A choice picks one of your values, with probabilities and a confidence. A score rates the input against ordered levels. You get structured answers back, not a paragraph to parse.

The price is the part I'd read twice. OpenAI lists $0.10 per million input tokens for gpt-6-luna, with no charge for output or cache. Simon Willison puts Jev, Vercel's model, at 4.2 cents for the same kind of call, and notes that Luna also accepts images.

Read the limits too. It's in public beta, gpt-6-luna is the only supported model, decisions are independent per request, and images have to be inline base64, not URLs.

Where I'd use it: routing, moderation-style checks, "does this ticket mention a refund" gates. Where I wouldn't: anywhere the reasoning is the product. A probability isn't an explanation.

I haven't run it, so I can't tell you how well those probabilities are calibrated.

Sources:
OpenAI's Decisions API docs: https://developers.openai.com/api/docs/guides/decisions
Simon Willison's plugin and the Jev price: https://simonwillison.net/2026/Oct/6/llm-openai-decisions/
Jev adoption (TechCrunch): https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

OpenAI's Decisions API (DevDay) vs your existing prompts — where it wins, and the honest catch: input-only metering at 10¢/M tokens vs Jev's 4.2¢, and what it structurally can't decide. Counterweight post in the week's arc: Tuesday/Sunday say 'agents escape'; this one says 'here's the boring control plane.'
