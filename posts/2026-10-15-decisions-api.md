# When a decision endpoint beats the prompt you already run

**THU 2026-10-15 · 8:30am IST · Slot A · TEACH · Hook #12 The Comparison · Status: DRAFTED**

**Format:** text
**Anchor:** [Simon Willison — llm-openai-decisions plugin (Oct 6)](https://simonwillison.net/2026/Oct/6/llm-openai-decisions/)
**People named:** Simon Willison, OpenAI  |  **Tag:** no
**Strategy stack:** teach-as-freshness (newsjack dead at day 9) + namejack: Willison + brandjack: OpenAI DevDay + hot take (optional): most prod prompts are decision endpoints in a trenchcoat

---

## Post body (copy from here)

If your prompt ends in "answer yes or no", you probably want a decision endpoint instead.

OpenAI launched one at DevDay. You ask it one of three kinds of question: yes/no, pick from choices, or give a score. What comes back is JSON with a probability attached, not a paragraph you have to parse. Simon Willison wrote an LLM plugin for it, llm-openai-decisions, if you want to try it from the command line.

The price is the part I'd read twice. gpt-6-luna is 10 cents per million input tokens, and output isn't charged. Jev, Vercel's model, is 4.2 cents for the same kind of call. Luna also takes image input, which is the reason I'd still look at it over the cheaper one.

Where I'd use it: routing, moderation-style checks, "does this ticket mention a refund" gates. Places where today you run a chat model, regex the answer and hope.

Where I wouldn't: anywhere the reasoning is the product. A probability isn't an explanation.

I haven't run it yet, so I can't tell you how well those probabilities are calibrated.

Source:
https://simonwillison.net/2026/Oct/6/llm-openai-decisions/
https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

OpenAI's Decisions API (DevDay) vs your existing prompts — where it wins, and the honest catch: input-only metering at 10¢/M tokens vs Jev's 4.2¢, and what it structurally can't decide. Counterweight post in the week's arc: Tuesday/Sunday say 'agents escape'; this one says 'here's the boring control plane.'
