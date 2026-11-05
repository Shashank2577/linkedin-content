# AI didn't create a new security problem. It repriced an old one.

**SAT 2026-11-07 · 6:00pm IST · Slot B · OPINION · Hook #1 Contrarian Take · Status: DRAFTED**

**Format:** text
**Anchor:** [IEEE Spectrum: PHP2Shell Is a Wakeup Call for AI in Cybersecurity (Nov 2)](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability)
**People named:** PHP Foundation, Calif, OpenAI, Suman Jana, Matt Suiche, Matthew Green  |  **Tag:** no
**Strategy stack:** newsjack: Nov 2 IEEE analysis + trend-ride: legacy software exposure + hot take: finding got cheap, fixing didn't

---

## Post body (copy from here)

AI didn't create a new security problem. It repriced an old one.

The PHP2Shell bug is the clean example. It was reported to the PHP Foundation in 2024 as an out-of-memory crash. Nobody treated it as an attack surface, because it was just a crash. This year, a researcher at Calif, working with AI tools on an OpenAI-sponsored audit, turned it into arbitrary code execution on the host in about two weeks. Four engineers then spent two months building the patch.

That's the asymmetry Suman Jana from Columbia names in IEEE Spectrum: finding bugs and fixing bugs are different jobs. Finding is now cheap enough to automate. Fixing still means proving every path is closed without breaking anything else.

The rest of the article is the part I'd sit with. Matt Suiche says the last 40 years of human-written software is being exposed, and the technical debt is now due. Matthew Green expects nothing to change until something bad enough happens, maybe early 2027.

For teams, the action isn't to buy an AI scanner. It's to shorten the gap between disclosure and patch. Inventory the runtimes you forgot, know which services still run legacy PHP or an old Node image, and treat a low-privileged account on an unpatched box as root.

The scanners got better. The maintenance budget didn't.

Source:
https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

IEEE Spectrum's Nov 2 PHP2Shell analysis, read as an asymmetry problem: finding is cheap, fixing is not. All facts and quotes are from the article; the 'maintenance budget' conclusion is the author's.
