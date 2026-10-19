# 2,500 to 30,000 merged changes a day at Anthropic

**WED 2026-10-21 · 8:30am IST · Slot A · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic Engineering: Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control)
**Also:** https://claude.dev/blog/solving-code-review-at-anthropic/
**People named:** Addy Osmani, Morgan Westlee Lunt, Qing Wang, Anthropic, Simon Willison  |  **Tag:** no (name Osmani, don't tag)
**Strategy stack:** newsjack: Oct 13-16 stories + namejack: Addy Osmani + brandjack: Anthropic + hot take: the bottleneck moved downstream

---

## Post body (copy from here)

2,500 to 30,000. That's roughly how many code changes Anthropic merged per day between May and September.

At that volume Git stopped working for them. A team of seven spent five months moving Anthropic's monorepo onto a custom system called Scion, with a code review tool called Antique. The main branch history is almost 100 GB, and CI alone runs about 25 million checkouts a day, before counting developer environments, agent sandboxes and research jobs.

The Claude Code team's essay on code review, by Addy Osmani, Morgan Westlee Lunt and Qing Wang, shows the review side. They say "did a human read the code?" is an imprecise test, and the better question is what could go wrong with a change and which check, automated or human, should catch it. Merged PRs more than doubled from June to September while the revert share fell by more than 40%. Claude reviews and fixes most changes at least once before a person looks, and an agent's approval never counts as a human's.

My read: generating code stopped being the bottleneck. Version control, review and CI are where the pressure moved. Check yours before an agent finds the limit for you.

Anthropic also says adversarial review by a model can be myopic and push toward over-engineering, so skilled engineers still steer it.

Sources:
Anthropic Engineering, Redesigning source control: https://www.anthropic.com/engineering/redesigning-source-control
The Claude Code team on code review: https://claude.dev/blog/solving-code-review-at-anthropic/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Anthropic replaced Git with a custom system (Scion) after daily merges went from about 2,500 in May to over 30,000 by September, driven by agents. Pair it with the Claude Code team's code-review essay (Addy Osmani, Morgan Westlee Lunt, Qing Wang). Thesis: generating code stopped being the bottleneck; VCS, review and CI are where the pressure moved.
