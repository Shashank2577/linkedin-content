# Voice won't replace the keyboard (Simon's own post says so)

**MON 2026-10-19 · 7:00pm IST · Slot C · OPINION · Hook #1 Contrarian Take · Status: PARKED**

**Format:** text
**Anchor:** [Simon Willison: A new feature for my blog, built using my voice (Oct 9)](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)
**Also:** https://gist.github.com/simonw/a65a22204f6f7228cc59b4bc34d7c7c8 · https://github.com/simonw/simonwillisonblog/pull/719
**People named:** Simon Willison  |  **Tag:** no (already tagged him today)
**Strategy stack:** namejack: Willison + trend-ride: voice-coding week

---

## Post body (copy from here)

Everyone says voice is about to replace the keyboard for coding. The person who just shipped a feature by voice doesn't think so.

Simon Willison built a Newsletters page for their blog by talking to the Codex tab in the ChatGPT desktop app, for about half an hour, while cooking dinner. A data model, a migration, admin config, four importers, archive pages and search all came out of that conversation.

Then it was back to the keyboard. The pull request got reviewed by typing, and one importer that shelled out to Git was replaced, because one of the sources is a private repo. Another half hour of typed prompts before deploying. By Willison's own account the voice-built code was nearly what was needed, and voice isn't expected to become the daily driver.

So the pattern I'd take from it: voice for the first pass when your hands are busy, keyboard for anything you have to point at. Pasting an error. Naming a function. Reading a diff.

What I'd still like to see is how the review time holds up across different feature sizes. One kitchen session isn't a benchmark.

Sources:
Simon Willison's write-up: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
The full voice transcript: https://gist.github.com/simonw/a65a22204f6f7228cc59b4bc34d7c7c8
The pull request: https://github.com/simonw/simonwillisonblog/pull/719

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Willison shipped a blog feature by voice dictation to a coding agent while cooking dinner; BetterWispr hit HN's front page the same week. The shift nobody puts in the keynote: the keyboard is becoming the review surface, not the authoring surface.
