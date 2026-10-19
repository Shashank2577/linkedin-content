# Deno could allow-list network hosts. Node still can't.

**THU 2026-10-22 · 1:30pm IST · Slot B · TEACH · Hook #12 The Comparison · Status: DRAFTED**

**Format:** text
**Anchor:** [Deno: Deno is joining Cloudflare (Ryan Dahl, Oct 9)](https://deno.com/blog/cloudflare)
**Also:** https://news.ycombinator.com/item?id=50019911#50023277 · https://nodejs.org/api/permissions.html · https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/
**People named:** Ryan Dahl, Cloudflare, Simon Willison  |  **Tag:** no
**Strategy stack:** namejack: Dahl + teach + framework-vs-protocol positioning

---

## Post body (copy from here)

Deno's permissions vs Node's permissions. Deno can allow-list network hosts. Node, per Simon Willison, still can't.

Deno announced on October 9 that its team is joining Cloudflare. Cloudflare will support the Deno runtime for one more year with monthly bug and security releases, then development of it ends. It stays open source and others are invited to carry it on. Ryan Dahl wrote the announcement, and on Hacker News said Deno got "sucked into the gravity well of node compatibility."

The part I care about is Deno's permissions system, which Willison singles out as a favorite: you tell a script which files, folders and network hosts it can touch. Node added a permission model in v20 in April 2023 and declared it stable in v22.13.0 in January 2025. Willison notes its network access is still on or off, with no host allow-list.

That gap matters more now than it did in 2023, because the thing running your scripts is increasingly an agent. Least privilege only works if you can express it. "Can reach the network" is not a policy.

If you're betting an agent stack on a runtime, check what its permission model can actually say. Then check who's going to keep maintaining it.

Sources:
Deno's announcement (Ryan Dahl): https://deno.com/blog/cloudflare
Dahl's Hacker News comment: https://news.ycombinator.com/item?id=50019911#50023277
Node's permission model docs: https://nodejs.org/api/permissions.html
Willison's note on the network gap: https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Changed from the planned framework-vs-protocol angle. Simon Willison's post gives a stronger, checkable one: Deno's permissions model can allow-list network hosts, Node's can't, and least privilege matters more now that agents run the scripts.
