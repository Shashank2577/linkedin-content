# Seven Grok models start watermarking text today

**SAT 2026-11-07 · 9:00am IST · Slot A · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [xAI: Output watermarking (effective Nov 7)](https://docs.x.ai/developers/advanced-api-usage/watermarking)
**Also:** https://platform.claude.com/docs/en/release-notes/overview · https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
**People named:** xAI, Anthropic  |  **Tag:** no
**Strategy stack:** newsjack: Nov 7 xAI watermark + trend-ride: EU AI Act provenance + hot take: the header is the only receipt you control

---

## Post body (copy from here)

Seven Grok models start watermarking text today. There's no parameter to send.

xAI's docs say that from Nov 7, text from grok-4.7, 4.6, 4.5, 4.3 and the three 4.20 variants carries an invisible watermark by default. It covers the Responses and Chat Completions APIs, every endpoint, and it applies to ordinary text, structured outputs and tool-call arguments.

Nothing changes in your code. The only visible signal is an x-watermark header on the response. true means the output was watermarked; anything else, or no header, means it wasn't. Team admins can opt out per model.

Anthropic moved the same week. On Nov 3 it switched text watermarking on for Claude Mythos 5, Opus 4.7 and Sonnet 4.6. Its detector is in private preview, and there's no published opt-out. On Sonnet 4.6, non-default temperature, top_p or top_k can weaken the mark.

The part to get right: a watermark is not a content credential. Detection is statistical. It returns watermarked, not watermarked or uncertain, and a positive result only means the model was likely involved. A rewrite can remove it. Short text is unreliable. Code and JSON carry little signal because the token choices are constrained.

So log the header with the response. That's the receipt you control. Don't tell your compliance team a pasted paragraph can be verified downstream.

Source:
https://docs.x.ai/developers/advanced-api-usage/watermarking

Also:
https://platform.claude.com/docs/en/release-notes/overview

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

xAI's Nov 7 watermark rollout plus Anthropic's Nov 3 expansion, read as a provenance and logging problem. Both are official docs. The 'log the header' advice is the author's.
