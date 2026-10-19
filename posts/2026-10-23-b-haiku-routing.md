# Haiku 5.5 or Sonnet 5.5 for the same agent step?

**FRI 2026-10-23 · 1:30pm IST · Slot B · TEACH · Hook #8 Question Trap · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic: Introducing Claude Haiku 5.5 (Oct 7), benchmark and pricing tables](https://www.anthropic.com/claude-haiku-5-5)
**People named:** Anthropic  |  **Tag:** no
**Strategy stack:** brandjack: Anthropic + trend-ride: model-routing week + question trap: a real fork

---

## Post body (copy from here)

Haiku 5.5 scores 72.4% on Anthropic's OSWorld benchmark. Sonnet 5.5 scores 83.9%. Haiku costs $0.10 per million input tokens. Sonnet costs $2.00. Which do you run for an agent step?

Those are Anthropic's own numbers, on the OSWorld 2.1 offline subset, so treat them as a starting point. But the gap is real and so is the price: 20 times on input, and 20 times on output ($0.50 versus $10).

The cheap answer is Haiku. The expensive answer is Sonnet. I think the honest answer is that it depends on what a wrong step costs you.

If a failed step gets retried automatically and nobody notices, run the cheap model and watch the retry rate. If a wrong step sends an email, moves money or edits a customer record, the gap is exactly what you're paying to close.

Terminal-Bench is where it gets lopsided: 39.2% for Haiku 5.5 against 70.6% for Sonnet 5.5. Anthropic itself says Sonnet and Opus remain the better choice for complex agentic coding.

What do you do? I'd start cheap, escalate on failure, and log every escalation.

Source:
https://www.anthropic.com/claude-haiku-5-5

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Replaces the planned RAM-shortage post: The Verge blocked my fetch, so I couldn't verify a single price. This one uses only numbers from Anthropic's own Haiku 5.5 page.
