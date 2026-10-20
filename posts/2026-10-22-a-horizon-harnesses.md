# 281 differential harnesses: how a Minecraft rewrite checks itself

**THU 2026-10-22 · 8:30am IST · Slot A · TEACH · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [ludovic111/horizon: Minecraft Java 26.3 reimplemented in Rust](https://github.com/ludovic111/horizon)
**People named:** Ludovic Marie (Horizon), Mojang / Microsoft  |  **Tag:** Tier 1: tag Ludovic Marie if you find their profile (positive, specific praise)
**Strategy stack:** newsjack: Oct 16 HN story, so post as analysis + namejack: Ludovic Marie + brandjack: Minecraft (Mojang, Microsoft) + teach: differential testing for migrations

---

## Post body (copy from here)

281 differential harnesses. That's how a Minecraft rewrite in Rust checks itself against the original.

Horizon is a native Rust reimplementation of Minecraft: Java Edition 26.3, by Ludovic Marie. It's free, MIT licensed and unofficial. The README says it reads the same worlds, follows the same rules and generates the same terrain as the Java game, and reports 100% parity across its listed subsystems, last audited October 13.

How it checks matters more than the claim. A differential harness runs the original and the rewrite on the same input and compares the output. If you've ever migrated a service, that's the playbook: run old and new side by side, diff the results, don't trust a demo.

Two details I liked. Decompiled source stays on your own machine and isn't in the public repo, and you need your own legally obtained copy of the game. The README says it isn't approved by or associated with Mojang or Microsoft.

The catch: the parity audit is the author's own, and the harnesses need a copy of the game, so they run on a maintainer's computer, not in public CI. I haven't run it.

Source:
https://github.com/ludovic111/horizon

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Microsoft/Mojang and games angle. The README doesn't say how AI was used, so the post doesn't claim it. The teachable part is differential testing for rewrites and migrations.
