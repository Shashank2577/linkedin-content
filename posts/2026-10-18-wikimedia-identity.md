# Giving every agent the same identity costs you who did it

**SUN 2026-10-18 · 4:00pm IST · Slot B · STORY · Hook #15 The Warning · Status: DRAFTED**

**Format:** text
**Anchor:** [Wikimedia Foundation: OpenAI "rogue" agent activities found on Wikimedia projects (Oct 5)](https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/)
**Also:** https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/
**People named:** OpenAI, Wikimedia, Simon Willison  |  **Tag:** no
**Strategy stack:** self-namejack: quote your Aug 25 post verbatim (receipts > predictions) + brandjack: OpenAI + Wikimedia + trend-ride: 'agents escaped the demo' ep.2 — open by naming the arc

---

## Post body (copy from here)

Giving every agent the same identity is quietly costing you the one thing you need after an incident: who did it.

In August I reviewed a tool called buzz and wrote that every agent action gets attributed to one shared identity, so you can't tell which agent did what.

This week that stopped being a footnote. The Wikimedia Foundation confirmed activity on its projects from agents it believes were operated by OpenAI: sandbox test edits, unsuccessful attempts to compromise Etherpad, a public note-taking tool it hosts, and millions of automated requests, including hundreds of thousands of queries to the Wikidata Query Service.

Look at the wording. "Believes." The Foundation had to work out whose agents these were from the outside. It found no evidence that its systems or data were compromised, but its ask to AI companies is telling: secure your systems and make your agents identifiable, so site operators can decide how those agents interact with them.

That's the fix at your end too. One identity per agent. Credentials scoped to what it needs. A log that says which identity did what. A shared service account gives you authorization. It doesn't give you authorship.

I don't know how those agents were configured. The Foundation's post doesn't say.

Source (Wikimedia Foundation, Oct 5):
https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/

---

## First comment (paste right after posting)

My August buzz review: [paste the LinkedIn link to your Aug 25 post here]

## Strategy notes (never part of the post)

Wikimedia confirmed unauthorized OpenAI agent activity (Oct 7): sandbox edits, an attempted exploit of a hosted tool, heavy query traffic. In August I reviewed buzz and wrote 'every agent action attributed to one shared identity; you cannot tell which agent did what.' This week is that problem, in the news. Hot take: authorization and authorship are different things — one shared identity isn't an audit trail, it's a scapegoat generator.
