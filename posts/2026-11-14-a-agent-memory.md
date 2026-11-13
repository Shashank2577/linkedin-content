# Your agent doesn't need a bigger context window. It needs a sleep cycle.

**SAT 2026-11-14 · 9:00am IST · Slot A · TEACH · Hook #11 Myth Bust · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic: The components of agent memory (Nov 6)](https://www.anthropic.com/research/components-of-agent-memory)
**Also:** https://platform.claude.com/docs/en/managed-agents/dreams
**People named:** Anthropic, Lance Martin  |  **Tag:** no
**Strategy stack:** research read: Nov 6 memory post + trend-ride: memory as maintenance, not capacity + hot take: dreaming is the missing loop

---

## Post body (copy from here)

Your agent doesn't need a bigger context window. It needs a sleep cycle.

Anthropic published a useful piece last week on the components of agent memory. The hierarchy: transcripts are the searchable event log. Memory notes are salient observations Claude writes during a session. Memory representations like wikis link those notes into a map. Injected context is the small layer loaded into every session.

Dreaming is the part I'd steal. Between sessions, Claude can review its notes against the original transcripts, catch mistakes, merge duplicates, and build representations. In a Pokemon Red run, Claude wrote down that a landmark was on the wrong side of a mountain, walked off a ledge, and concluded it had overshot. With dreaming, it checked the note against the transcript, corrected it, went back into the cave, and reached the next city. The run without dreaming never got past the mountain.

The benchmark numbers are concrete. On a 25-question corpus of about 350,000 files, scaling dreaming from 2 to 128 sessions raised wiki-only accuracy from 13% to 48% of graded criteria. Wiki plus search reached 61%, versus 53% for search alone.

The caveat is real: this is a research post, and dreaming costs compute. But the architecture is right. If you're building an agent, that's the loop I'd copy. Memory isn't a bigger window. It's maintenance.

Source:
https://www.anthropic.com/research/components-of-agent-memory

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Anthropic's Nov 6 memory post, read as an architecture pattern: transcripts, memory notes, wikis, injected context, and dreaming to correct notes against transcripts. Pokemon example; CL-Bench; wiki experiment 13% to 48%; wiki + search 61% vs 53%. Caveat: research post, compute cost.
