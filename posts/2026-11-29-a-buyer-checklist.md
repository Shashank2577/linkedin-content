# The 6-question agent platform checklist

**SUN 2026-11-29 · 4:00pm IST · Slot A · OPINION · Hook #21 The Direct Value · Status: DRAFTED**

**Format:** text
**Anchor:** [Microsoft: MAI Licensed Weights](https://microsoft.ai/news/introducing-mai-licensed-weights/)
**Also:** https://news.microsoft.com/source/2026/11/17/microsoft-and-organizations-across-industries-launch-ai-transparency-initiative-to-strengthen-enterprise-trust-in-ai-models-and-agents/ · https://openai.com/index/introducing-gpt-6-2-astra-sol/ · https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/ · https://microsoft.ai/news/introducing-mai-cyber-2-flash/ · https://aws.amazon.com/blogs/machine-learning/new-in-aws-quick-more-capable-flows-an-updated-web-experience-and-agents-that-work-together/ · https://github.com/openclaw/openclaw
**People named:** Microsoft, OpenAI, Google DeepMind, AWS, OpenClaw  |  **Tag:** no
**Strategy stack:** direct value: six-question checklist + synthesis: procurement questions + hot take: the contract is where projects die

---

## Post body (copy from here)

Here is the 6-question checklist I'd use before buying another agent platform.

Steal it. I'd bring these to the demo instead of a benchmark chart, because the questions that decide whether a rollout survives year one rarely show up in a slide, and the ones that do are usually answered by the vendor's own reference customer.

One: where does the audit trace live? If the only copy sits in the vendor's logs, you don't have a trace. Ask for the destination account and the retention period. Microsoft's 40-plus-company group points at Sentinel and Purview for a reason.

Two: can you route per step? A planner, a coder and a summarizer don't need the same model. GPT-6.2 Astra is $8 input and $40 output. Gemini 4 Neon is $3 and $15. MAI Cyber 2 Flash is $0.10 and $0.50. If the platform forces one model for the whole run, you're overpaying somewhere.

Three: what is cost per accepted task, by task type? Token price is a vendor metric. Ask for retries, tool calls and human review in the number. Then ask for it weekly.

Four: where is the data boundary? Microsoft's MAI Licensed Weights runs in your Azure tenant. AWS Quick says data stays in your environment. OpenClaw keeps state on local hardware. The answer should be a diagram, not a sentence.

Five: what is the kill switch, and who can pull it? A control plane that can't stop a running agent isn't a control plane. Test it during the demo.

Six: can you export memory and state? If the answer is no, your agent's experience is a lock-in asset. OpenClaw's 395,070 stars suggest people care about this.

I'd score each answer red, amber or green before the demo. The demo will be fine. The contract is where the project dies.

No source list on this one. The checklist is mine. The examples are from this week's releases.

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

A buyer checklist: audit trace location, per-step routing, cost per accepted task, data boundary, kill switch and memory export. Grounded in this week's launches. The checklist is not a security review; demand evidence for each answer.
