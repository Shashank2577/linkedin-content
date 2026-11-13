# Your agent's control plane can now live in your VPC

**THU 2026-11-12 · 1:30pm IST · Slot B · NEWS ANALYSIS · Hook #19 Curiosity Gap · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic: Operate Claude Managed Agents inside your security perimeter (Nov 12)](https://claude.com/resources/articles/self-hosted-claude-managed-agents)
**Also:** https://platform.claude.com/docs/en/managed-agents/self-hosted
**People named:** Anthropic  |  **Tag:** no
**Strategy stack:** newsjack: Nov 12 private beta + trend-ride: agent control planes move on-prem + hot take: session history is the audit trail

---

## Post body (copy from here)

The most important agent release this week isn't a model. It's a deployment option.

Anthropic put self-hosted Managed Agents into private beta yesterday. The hosted version already let you keep the sandbox in your environment. This goes further: the harness, sandboxes, credentials, and session history all run in your infrastructure. You operate the server, the database, and the workers. Model requests go where you choose: Anthropic directly, Amazon Bedrock, Google's Agent Platform, Microsoft Foundry, or your own gateway.

The security model is worth stealing even if you never use Claude. Four principles: the brain and the hands are split, so the agent loop and secrets stay outside the sandbox; credentials are injected by a proxy, not placed in the sandbox; each environment gets a network allowlist; and every session leaves a full record that exports over OpenTelemetry.

That last one is the difference between an agent you can audit and an agent you hope is behaving. If session history is in your database, you can join it to the rest of your telemetry.

Caveat: private beta, and self-hosting means you own the operational burden. But for teams that couldn't send code or session history to a vendor, this removes the main blocker.

The control plane is becoming a deployment choice, not a SaaS default.

Source:
https://claude.com/resources/articles/self-hosted-claude-managed-agents

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Self-hosted Claude Managed Agents, Nov 12 private beta: harness, sandboxes, credentials, and session history all in your cloud or on-prem; model requests to Anthropic, Bedrock, Google Agent Platform, Microsoft Foundry, or your gateway. Four security principles: split brain/hands, credentials outside sandbox, network allowlist, OpenTelemetry record. Caveat: private beta and you operate it.
