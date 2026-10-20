# Your reverse-engineering agent reads whatever the binary wants

**THU 2026-10-22 · 1:30pm IST · Slot B · NEWS ANALYSIS · Hook #15 The Warning · Status: DRAFTED**

**Format:** text
**Anchor:** [Automatically Attacking Software Reverse Engineering AI Agents (arXiv 2605.30667)](https://arxiv.org/abs/2605.30667)
**Also:** https://arxiv.org/abs/2605.30677 · https://it4sec.substack.com/p/attacking-ai-based-reverse-engineering · https://github.com/morluto/rea
**People named:** Brian Crawford, Justin Phillips, Patrick McClure, Denis Laskov  |  **Tag:** Tier 1: tag Denis Laskov if you find their profile (their write-up surfaced the paper)
**Strategy stack:** newsjack: Oct 12 write-up, so post as analysis + namejack: Denis Laskov + hot take: treat decompiler output as untrusted input + trend-ride: reverse engineering got cheap, so defenders matter

---

## Post body (copy from here)

Your AI reverse-engineering agent reads whatever the binary wants it to read.

Researchers Brian Crawford, Justin Phillips and Patrick McClure, described by Denis Laskov as U.S. Navy security researchers, published a paper on attacking software reverse-engineering agents. The trick: hide instructions in extra string variables in a program. They don't change what the executable does, but they survive decompilation, so the text lands in front of the LLM doing the analysis. The aim is to make it misread the binary and corrupt its output.

Laskov's write-up says the tested setup included Cline, GhidraMCP, Ghidra and Qwen3-8B, and that the approach worked there. No success rates are given. One practical limit: Ghidra truncates strings longer than 2,048 characters, so the injected text has to be short.

Why this matters beyond security researchers: any agent that analyzes untrusted files has the same shape. And REA's README notes that runtime capture runs the target with your user permissions.

So treat decompiler output as untrusted input. Run the agent in a sandbox, give its tools the least access they need, and don't let it act on what it reads without a check.

Sources:
Paper: https://arxiv.org/abs/2605.30667
Follow-up on detection: https://arxiv.org/abs/2605.30677
Laskov's write-up: https://it4sec.substack.com/p/attacking-ai-based-reverse-engineering
REA's README: https://github.com/morluto/rea

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Security angle tied to REA. Paper facts from the arXiv abstract; test setup and the Navy description come from Denis Laskov's write-up and are attributed to it. Fear with an exit (sandbox, least privilege, untrusted-input handling).
