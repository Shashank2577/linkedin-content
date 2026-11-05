# Your agent probably doesn't need a 1M-token context window

**SUN 2026-11-08 · 7:00pm IST · Slot B · NEWS ANALYSIS · Hook #11 Myth Bust · Status: DRAFTED**

**Format:** text
**Anchor:** [You don't need long context (arXiv 2611.05306, Nov 3)](https://arxiv.org/abs/2611.05306)
**Also:** https://huggingface.co/papers/2611.05306
**People named:** Peter Belcak, NVIDIA Research  |  **Tag:** no
**Strategy stack:** newsjack: Nov 3 paper + trend-ride: context engineering + hot take: compaction is architecture

---

## Post body (copy from here)

Your agent probably doesn't need a 1M-token context window.

A paper from Peter Belcak and co-authors, submitted this week, tested what happens when you keep the live context short. The finding: on long-horizon and long-input tasks, frequent compaction preserved task accuracy across a broad set of benchmarks. On software engineering tasks, performance didn't collapse even when the agent took at most one action per context.

The cost argument is the part that got my attention. On frontier open-weight models, generating later tokens can cost up to 7x more than earlier tokens. If your agent carries the whole transcript, you're paying that premium on every turn.

The paper's recipe is not exotic. Store long inputs as files, let the agent read them selectively, and compact the conversation into a forward-looking brief. It introduces the idea of a semantic state space model, but the practical takeaway is simpler: keep a compact state, retrieve what you need, and treat the transcript as a searchable log.

Two caveats. This is a preprint, and the benchmarks and cost models are the authors' own. It doesn't prove long context is never useful.

But it does challenge the default. Context window size is a budget, not a feature. The teams that win will be the ones that decide what deserves to stay in the window.

Source:
https://arxiv.org/abs/2611.05306

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

The Nov 3 'You don't need long context' paper, read as an architecture lesson: context is a budget, compaction is a policy. The 7x figure and benchmark results are the authors'; the post flags that it is a preprint.
