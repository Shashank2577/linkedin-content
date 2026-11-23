# The shared robots.txt token that separates search from AI training

**THU 2026-11-26 · 8:30am IST · Slot A · NEWS ANALYSIS · Hook #15 The Warning · Status: DRAFTED**

**Format:** text
**Anchor:** [Google Search Central: New controls for AI training (Oct 30)](https://developers.google.com/search/blog/2026/10/ai-training-control)
**Also:** https://openai.com/index/helping-websites-express-ai-training-preferences
**People named:** Google, OpenAI, Anthropic, Microsoft, IETF AIPREF  |  **Tag:** no
**Strategy stack:** newsjack: shared AI-training token + warning: robots.txt is not doing what you think + direct value: the exact two-line rule

---

## Post body (copy from here)

Your robots.txt is quietly failing at the job most people think it does.

Blocking GPTBot doesn't stop every AI crawler, and allowing Googlebot doesn't tell Google what you want done with training.

The fix that shipped this month is a shared token. Sites can now publish:

User-agent: __usage_ai-training
Disallow: /

Google, OpenAI, Anthropic and Microsoft all support the convention through the IETF AIPREF working group. The point is to separate AI training from search indexing and grounding, so a publisher can allow one and refuse the other without maintaining a list of 40 user agents.

Google's John Mueller spelled out the catch on October 30. If you use the token, Google treats it as disallowing Google-Extended unless you explicitly allow that agent. The rollout is staggered through late 2026 and 2027, so the old per-bot rules still matter during the transition.

This is a preference signal, not a law. A crawler that ignores robots.txt will ignore this too. But for a docs site, a research archive or a client portal, it's the first machine-readable way to say "search yes, training no" in one place.

I'd add it alongside the specific user-agent rules, not instead of them.

Sources:
https://developers.google.com/search/blog/2026/10/ai-training-control
https://openai.com/index/helping-websites-express-ai-training-preferences

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

A shared __usage_ai-training token backed by Google, OpenAI, Anthropic and Microsoft lets publishers separate training from search and grounding. Google says the token disallows Google-Extended unless explicitly allowed, and the rollout is staggered through 2027. It is a preference signal, not law.
