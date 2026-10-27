# A 9.2 in Node's Brotli decoder: patch before Monday

**SUN 2026-10-25 · 4:00pm IST · Slot B · WARNING · Hook #17 Time Anchor · Status: DRAFTED**

**Format:** text
**Anchor:** [Node.js: October 21, 2026 security releases (CVE-2026-111497)](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)
**Also:** https://www.cve.org/CVERecord?id=CVE-2026-111497 · https://www.imperva.com/blog/node2shell-from-brotli-data-to-remote-code-execution/
**People named:** Node.js, OpenAI Codex Security (Khai Tran, Sylvie Mayer), Imperva  |  **Tag:** no
**Strategy stack:** newsjack: Oct 21 security release, still live + teach: patch checklist for image-based teams + trend-ride: AI code review finds real production bugs

---

## Post body (copy from here)

Check your Node version before Monday. The CVE scores 9.2.

CVE-2026-111497, nicknamed Node2Shell, is an out-of-bounds write in the Brotli decoder bundled with Node.js. A crafted compressed stream makes the decoder keep appending to an eight-byte internal buffer. Node's advisory says it can crash the process, leak memory, or run attacker code. Imperva reproduced command execution on the official node:24.22.0 Linux arm64 image. No debug build, no special flags.

Affected: Node 22.x, 24.x, 26.x.
Fixed: 22.23.4, 24.22.1, 26.12.1. Released Oct 21.

The reach is the part people will miss. You don't have to call a Brotli API. If your service reads a Brotli-compressed response or accepts compressed request bodies, the decoder is already in the path. Same for sidecars, CI images, and that one Lambda nobody owns.

The same release fixes a dns.resolve NUL-byte truncation bug and three TLS hostname bypasses. Read the advisory before you assume those don't affect you.

This is a patch-and-redeploy, not a research project. Run node -v against every image in the stack, not just the app.

Source:
https://nodejs.org/en/blog/vulnerability/october-2026-security-releases

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Node2Shell (CVE-2026-111497) from the Oct 21 Node.js security release, with the Imperva reproduction. Written as an operational checklist, not a scare post. Scores and fixed versions match the CVE record and Node advisory.
