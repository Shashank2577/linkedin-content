# 2,500 to 30,000 merged changes a day at Anthropic

**WED 2026-10-21 · 8:30am IST · Slot A · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Simon Willison: Redesigning source control at Anthropic (Oct 13)](https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/)
**Also:** https://simonwillison.net/2026/Oct/16/code-review/
**People named:** Addy Osmani, Morgan Westlee Lunt, Qing Wang, Anthropic, Simon Willison  |  **Tag:** no (name Osmani, don't tag)
**Strategy stack:** newsjack: Oct 13-16 stories + namejack: Addy Osmani + brandjack: Anthropic + hot take: the bottleneck moved downstream

---

## Post body (copy from here)

2,500 to 30,000. That's roughly how many code changes Anthropic merged per day between May and September.

At that volume Git stopped working for them. A team of seven spent five months moving Anthropic's codebase onto a custom system called Scion, with a review tool called Antique. The main branch history is close to 100 GB, and CI alone runs about 25 million checkouts a day, before counting developer environments, agent sandboxes and research jobs. Anthropic says agents drove both the surge in changes and the checkout load.

One detail made me smile: Scion has no offline mode, because Claude is its heaviest user and is necessarily online.

Now put that next to the Claude Code team's essay on code review, by Addy Osmani, Morgan Westlee Lunt and Qing Wang. They say "did a human read the code?" is the wrong test. The better question is what could go wrong with a change and which check, automated or human, should catch it. Claude reviews and fixes most changes at least once before a person looks.

My read: generating code stopped being the bottleneck. Version control, review and CI are where the pressure moved. Check yours before an agent finds the limit for you.

Anthropic also found that adversarial review by a model can get myopic and over-engineer, so skilled engineers still steer it.

Sources:
https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/
https://simonwillison.net/2026/Oct/16/code-review/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Anthropic replaced Git with a custom system (Scion) after daily merges went from about 2,500 in May to over 30,000 by September, driven by agents. Pair it with the Claude Code team's code-review essay (Addy Osmani, Morgan Westlee Lunt, Qing Wang). Thesis: generating code stopped being the bottleneck; VCS, review and CI are where the pressure moved.
