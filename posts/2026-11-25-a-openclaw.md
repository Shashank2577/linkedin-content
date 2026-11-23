# 395,070 stars in under a year: OpenClaw keeps the assistant on your hardware

**WED 2026-11-25 · 8:30am IST · Slot A · TOOL REVIEW · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [openclaw/openclaw on GitHub (MIT, created Nov 24, 2025)](https://github.com/openclaw/openclaw)
**Also:** https://openclaw.ai · https://docs.openclaw.ai/gateway/security
**People named:** OpenClaw Foundation, Peter Steinberger  |  **Tag:** no
**Strategy stack:** receipt: 395,070 stars + trend-ride: local-first agents + tool review: architecture and security posture

---

## Post body (copy from here)

395,070 stars in under a year.

That's OpenClaw, an open-source assistant that runs on your own hardware and meets you in the chat apps you already use.

The repo was created on November 24, 2025. It's MIT licensed, has 82,959 forks, and is stewarded by the OpenClaw Foundation, an independent 501(c)(3). There's no paid tier, no hosted service, and no token. State, memory and credentials stay on your machine. Models are plugins, so Claude, Codex or a local model can sit behind the same gateway. That's the headline.

The architecture is the part I'd steal. A local Gateway is the control plane for sessions, tools, events and channels. The Control UI, CLI and TUI connect to it. Channels bring in WhatsApp, Telegram, Slack, Discord, iMessage and 20-plus others. Companion apps add voice, camera and screen access. One gateway, many surfaces.

The security section is unusually direct. Inbound messages are untrusted input. Tools run on the host for the main session unless you configure sandboxing. DM-capable channels pair unknown senders by default. That's the right way to document a system with this much local access. No buried caveat.

I'd use it for a personal or small-team assistant across chat apps. I wouldn't expose the Gateway remotely without reading the exposure runbook and turning on sandboxing first. That's the line I'd hold.

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

OpenClaw is an MIT-licensed local-first assistant with a Gateway control plane, chat channels and swappable model plugins. State, memory and credentials stay on your hardware. The security docs are unusually direct about untrusted input and host tools. Use it for personal or small-team assistants, not remote exposure without sandboxing.
