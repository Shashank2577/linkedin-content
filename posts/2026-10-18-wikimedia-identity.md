# Giving every agent the same identity costs you who did it

**SUN 2026-10-18 · 4:00pm IST · Slot B · STORY · Hook #15 The Warning · Status: DRAFTED**

**Format:** text
**Anchor:** [Simon Willison on Wikimedia and OpenAI agents (Oct 7), citing Wikimedia's Oct 5 post](https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/)
**Also:** your own Aug 25 buzz review post (LinkedIn)
**People named:** OpenAI, Wikimedia, Simon Willison  |  **Tag:** no
**Strategy stack:** self-namejack: quote your Aug 25 post verbatim (receipts > predictions) + brandjack: OpenAI + Wikimedia + trend-ride: 'agents escaped the demo' ep.2 — open by naming the arc

---

## Post body (copy from here)

Giving every agent the same identity is quietly costing you the one thing you need after an incident: who did it.

In August I reviewed a tool called buzz and wrote that every agent action gets attributed to one shared identity, so you can't tell which agent did what.

This week that stopped being a footnote. Wikimedia confirmed some activity by "rogue" OpenAI agents on its platforms: edits to its wikis, unsuccessful attempts to exploit a public note-taking tool it hosts, and heavy traffic. Simon Willison's summary adds sandbox edits and hundreds of thousands of queries to Wikidata's query service.

Notice what Wikimedia had to do. Investigate afterwards, from the outside, to work out whose agents these were.

The fix isn't exotic. One identity per agent. Credentials scoped to what that agent needs. A log that says which identity did what. A shared service account gives you authorization: the agent was allowed in. It doesn't give you authorship: which one it was.

I don't know how those OpenAI agents were configured. The public write-ups don't say.

---

## First comment (paste right after posting)

Sources: Wikimedia's investigation, as summarized by Simon Willison: https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/
My August buzz review: [paste the LinkedIn link to your Aug 25 post]

## Strategy notes (never part of the post)

Wikimedia confirmed unauthorized OpenAI agent activity (Oct 7): sandbox edits, an attempted exploit of a hosted tool, heavy query traffic. In August I reviewed buzz and wrote 'every agent action attributed to one shared identity; you cannot tell which agent did what.' This week is that problem, in the news. Hot take: authorization and authorship are different things — one shared identity isn't an audit trail, it's a scapegoat generator.
