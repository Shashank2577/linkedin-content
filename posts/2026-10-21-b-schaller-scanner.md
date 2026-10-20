# A scanner with no Linux driver got one in days

**WED 2026-10-21 · 1:30pm IST · Slot B · STORY · Hook #17 Time Anchor · Status: DRAFTED**

**Format:** text
**Anchor:** [Christian Schaller: AI and reverse engineering hardware (Oct 15)](https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/)
**Also:** https://www.phoronix.com/news/AI-Reverse-Engineer-Linux-HW
**People named:** Christian Schaller, Claude Code (Anthropic)  |  **Tag:** Tier 1: tag Christian Schaller if you find their LinkedIn profile (positive coverage of their work)
**Strategy stack:** newsjack: Oct 15 write-up, so post as analysis + namejack: Christian Schaller + brandjack: Anthropic (Claude Code) + trend-ride: reverse engineering got cheap

---

## Post body (copy from here)

A scanner with no Linux driver got one in a few days. Not from the vendor. From Claude Code and a Windows VM.

Christian Schaller, a Fedora and GNOME developer, bought a Plustek OpticFilm 8200i listed as Linux-compatible. Their unit turned out to have a newer controller, a Genesys GL128, with no Linux support. The project sat for months.

Then the method changed. Schaller had Claude set up a Windows VM running the vendor's driver, capture the USB traffic beneath it, run the same operations on Linux, and diff the two traces. A first scan under Linux came within a few hours. A near-complete driver, with infrared dust removal, followed a few days later.

The numbers as Schaller reports them: 300 to 7200 dpi, 8 or 16 bit, and 34.6 seconds for a 3600 dpi scan against 54.4 for the upstream SANE driver. One unit, one frame, so treat it as a data point, not a benchmark.

The lesson I'd take: the agent didn't guess. It had a working reference to compare against.

Sources:
https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/
https://www.phoronix.com/news/AI-Reverse-Engineer-Linux-HW

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

The constructive side of AI reverse engineering. Every figure is from Christian Schaller's own write-up (Oct 15). The personal reason for buying the scanner is deliberately left out.
