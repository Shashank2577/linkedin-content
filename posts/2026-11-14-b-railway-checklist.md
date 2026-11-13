# What I'd change in your agent stack after reading Railway's postmortem

**SAT 2026-11-14 · 6:00pm IST · Slot B · WARNING · Hook #21 The Direct Value · Status: DRAFTED**

**Format:** text
**Anchor:** [Railway: Incident Report, October 21st Security Attack (updated Nov 10)](https://blog.railway.com/p/incident-report-october-security-incident)
**Also:** https://github.com/openai/codex-security
**People named:** Railway, OpenAI  |  **Tag:** no
**Strategy stack:** newsjack follow-up: Railway postmortem + trend-ride: AI keys as production credentials + direct value: Monday checklist

---

## Post body (copy from here)

Here is the exact checklist I'd run after reading Railway's postmortem. Steal it.

The attacker's path is worth mapping onto your own stack. They escaped build isolation, stole a build credential, read build histories, found an OIDC misconfiguration, and used short-lived cloud credentials to reach a machine that could decrypt customer variables. The target was AI provider keys, selected by regex.

Here's what I'd change on Monday.

Inventory every AI key outside your secrets manager: CI, build caches, notebooks, local .env files, agent sandboxes. If a build can read it, an attacker who escapes the build can read it.

Scope keys per environment and per service. A key that can call every model for every customer is a liability. Use separate keys for production, staging, and experiments, with spend limits.

Make them short-lived where the provider supports it. Rotate the rest on a schedule, and have a tested runbook for invalidating every session and token at once. Railway did that at 20:19 UTC on October 21; it was necessary, but it was also disruptive because it wasn't a routine drill.

Watch spend, not just errors. The attacker's use looked like normal API traffic. Anomaly detection on token spend would have caught it earlier.

And keep build credentials away from runtime secrets. The first credential Railway lost was only supposed to push images. It was trusted by more systems than it should have been.

Source:
https://blog.railway.com/p/incident-report-october-security-incident

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

A practical follow-up to the Railway postmortem: inventory AI keys outside secrets managers, scope per environment, prefer short-lived credentials, rehearse global session/token invalidation, monitor token spend as a security signal, and keep build credentials away from runtime secrets. Caveat: not a compliance audit.
