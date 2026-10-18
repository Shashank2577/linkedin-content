# 44,794 tokens: what ttok 1.0 actually checked

**MON 2026-10-19 · 1:30pm IST · Slot B · TOOL REVIEW · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Simon Willison — ttok 1.0 (Oct 9)](https://simonwillison.net/2026/Oct/9/ttok/)
**People named:** Simon Willison, William Liu  |  **Tag:** YES — Willison (positive review, Tier-1, he engages)
**Strategy stack:** namejack: Willison + teach + tool review = your proven format

---

## Post body (copy from here)

44,794 tokens. Seven GPT models, GPT-6 variants included, all counted the same on 31 test fixtures.

That's the result behind ttok 1.0. ttok is Simon Willison's small CLI that counts or truncates text by tokens. The 1.0 release moves the default tokenizer from the GPT-4 one to the GPT-5/GPT-6 one, after William Liu ran the comparison above and found no change in input counts on that corpus.

It's the kind of infra piece that quietly ends up inside a CI job. Before a model migration you run it over your real prompts and see whether your context budget just moved.

The catch is in the details. It's one experiment on 31 fixtures, and OpenAI hasn't confirmed that GPT-6 uses the same tokenizer as the GPT-5 family. There's an open issue on the tiktoken repo asking exactly that.

I'd trust it for budgeting prompts. I wouldn't treat it as a billing guarantee.

If you already have it: uv tool upgrade ttok

---

## First comment (paste right after posting)

Source: Simon Willison, ttok 1.0: https://simonwillison.net/2026/Oct/9/ttok/

## Strategy notes (never part of the post)

Your proven review format. ttok counts tokens against GPT-5/GPT-6 tokenizers, hit 1.0 after switching the default on William Liu's experiment. Why a token-counting CLI belongs in your CI before any model migration. Honest limitation included, per your brand.
