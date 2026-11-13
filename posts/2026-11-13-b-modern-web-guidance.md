# Your coding agent is writing 2019 web code

**FRI 2026-11-13 · 1:30pm IST · Slot B · TEACH · Hook #1 Contrarian Take · Status: DRAFTED**

**Format:** text
**Anchor:** [Chrome for Developers: Modern Web Guidance 1.0 (Nov 10)](https://developer.chrome.com/blog/modern-web-guidance-v1)
**Also:** https://developer.chrome.com/docs/modern-web-guidance · https://goo.gle/mwg-evals
**People named:** Chrome, Philip Walton, Firefox, Edge  |  **Tag:** no
**Strategy stack:** newsjack: Nov 10 v1.0 + trend-ride: agent skills for platform knowledge + hot take: speed is no longer the differentiator

---

## Post body (copy from here)

Everyone says coding agents are good at frontend now. Chrome's evals say they still miss the basics.

Chrome's Modern Web Guidance hit 1.0 this week. It's a set of skills that put web platform expertise, best practices, and browser compatibility data directly into coding agents. The 1.0 release adds a modernization workflow that scans existing HTML, CSS, JavaScript and package.json for safe upgrades, and a guide database targeting hundreds of verified AI knowledge gaps, with accessibility review on user-facing guides. Firefox and Edge have joined Chrome as maintainers.

The install is one command: npx modern-web-guidance@latest install. It works across Claude Code, Codex, Cursor, Antigravity, Copilot, WebStorm, Kimi Code, and Grok Build.

The evidence is more useful than the pitch. note inc. ran 180 evaluations on its production codebase and raised pass rates on modern web checks from 61% to 94%. MetaMask ran it as a review bot on every PR: about 480 PRs in five weeks, comments on 64, 43 findings fixed, median 15 minutes from comment to fix.

Caveat: the modernization workflow uses static analysis and covers a limited set of patterns in this release. It's not a replacement for a web expert.

But if your agent is generating frontend code, this is the cheapest quality upgrade I've seen this week.

Source:
https://developer.chrome.com/blog/modern-web-guidance-v1

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Modern Web Guidance 1.0, Nov 10: skills that embed web platform expertise, browser compatibility data, and a modernization workflow into coding agents. note inc. 61% to 94% on modern web checks; MetaMask 480 PRs, 43 findings, median 15 minutes to fix. Caveat: static analysis with limited patterns in v1.
