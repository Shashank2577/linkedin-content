# Deno could allow-list network hosts. Node still can't.

**THU 2026-10-22 · 1:30pm IST · Slot B · TEACH · Hook #12 The Comparison · Status: DRAFTED**

**Format:** text
**Anchor:** [Simon Willison — Deno is joining Cloudflare (Oct 9)](https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/)
**People named:** Ryan Dahl, Cloudflare, Simon Willison  |  **Tag:** no
**Strategy stack:** namejack: Dahl + teach + framework-vs-protocol positioning

---

## Post body (copy from here)

Deno's permissions vs Node's permissions. Deno could allow-list network hosts. Node, three years after adding a permission model, couldn't when Simon Willison last checked.

Cloudflare is acquiring Deno. It will support the Deno runtime for another year with monthly bug and security releases, then stop developing it. Deno stays open source. Ryan Dahl wrote on Hacker News that it was a joint decision, and that Deno got "sucked into the gravity well of node compatibility."

The part I care about is what Simon calls his favorite Deno feature: you tell a script which files, folders and network hosts it can touch. Node added a permission model in v20 in April 2023 and called it stable in v22.13.0 in January 2025. But network access is on or off. No host allow-list.

That gap matters more now than it did in 2023, because the thing running your scripts is increasingly an agent. Least privilege only works if you can express it. "Can reach the network" is not a policy.

If you're betting an agent stack on a runtime, check what its permission model can actually say. Then check who's going to keep maintaining it.

Source:
https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Changed from the planned framework-vs-protocol angle. Simon Willison's post gives a stronger, checkable one: Deno's permissions model can allow-list network hosts, Node's can't, and least privilege matters more now that agents run the scripts.
