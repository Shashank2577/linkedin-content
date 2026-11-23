# 40+ companies agree the AI audit trail belongs outside the model

**THU 2026-11-26 · 1:30pm IST · Slot B · NEWS ANALYSIS · Hook #10 The Receipt · Status: DRAFTED**

**Format:** text
**Anchor:** [Microsoft Source: AI transparency initiative (Nov 17)](https://news.microsoft.com/source/2026/11/17/microsoft-and-organizations-across-industries-launch-ai-transparency-initiative-to-strengthen-enterprise-trust-in-ai-models-and-agents/)
**People named:** Microsoft, Accenture, Adobe, KPMG, Mastercard, Volvo Cars, NIST  |  **Tag:** no
**Strategy stack:** newsjack: transparency initiative + receipt: 40+ companies + hot take: vendor-held audit trail is a screenshot

---

## Post body (copy from here)

Forty-plus companies just agreed on what an AI audit trail should look like.

The part that matters is where the evidence lives: outside the model.

Microsoft announced the initiative on November 17 with Accenture, Adobe, KPMG, Mastercard, Volvo Cars and others. The framing is an "evidence gap" between what a user asked an agent to do and what actually happened. Satya Nadella's line is that greater autonomy requires greater transparency. That's the right frame.

The proposal is less about a new standard and more about a common shape: log the request, the agent's plan, the tools it called, the data it touched and the human approvals, then keep that record somewhere the model provider can't edit. That's the gap most audit trails leave open.

Microsoft points to Sentinel and Purview as places to keep that record, separate from the model provider's own logs. That separation is the right architecture. If the only copy of the audit trail sits with the vendor, you don't have an audit trail. You have a screenshot. I've made that mistake before.

The limitation is obvious. This is voluntary, the signatories are a mix of customers and vendors, and there's no enforcement mechanism. NIST's Agent Standards Initiative is the place where it could become testable. Until then, it's a checklist.

For now, I'd use it in procurement. Ask where the trace is stored, who can query it, and how long it survives a model swap. The answers will tell you more than the logo page.

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Microsoft and 40+ organizations proposed a common evidence format for agent actions, stored in Sentinel or Purview rather than vendor logs. The framing is the gap between what was requested and what actually happened. It is voluntary, with mixed signatories and no enforcement; NIST is where it could become testable.
