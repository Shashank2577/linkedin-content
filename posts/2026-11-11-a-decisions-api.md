# 1,000 questions. 150 milliseconds. No output tokens.

**WED 2026-11-11 · 8:30am IST · Slot A · NEWS ANALYSIS · Hook #2 Number Reveal · Status: DRAFTED**

**Format:** text
**Anchor:** [Google: Gemini Decisions API (Nov 11)](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)
**Also:** https://aistudio.google.com/docs/decisions-api
**People named:** Google DeepMind  |  **Tag:** no
**Strategy stack:** newsjack: Nov 11 Decisions API + trend-ride: agents need cheap control-plane calls + hot take: most agent decisions are classification, not generation

---

## Post body (copy from here)

1,000 questions. 150 milliseconds. No output tokens billed.

Google's new Gemini Decisions API is a narrow but important primitive. You pass one multimodal input, up to 256K tokens across text, images, audio, video and PDFs, plus up to 1,000 independent yes/no, multiple-choice or rubric questions. Gemini Decision 1 scores the options in a single forward pass instead of generating answer text token by token.

The output is probabilities and confidence scores. That's it. No prose, no thinking tokens, no separate OCR or transcription bill. Latency is 150-250ms end-to-end, and it stays nearly flat from 1 to 100 questions per request.

The pricing is $0.10 per million input tokens and zero output tokens. Google says it's nearly 5x cheaper than Gemini 3.5 Flash-Lite on the shared benchmark suite.

Where I'd use it: routing a query to the right model tier, grading retrieved context before generation, checking policy rules against a document, picking a tool. All the decisions agents make constantly and currently implement with a full generative call.

The limit is the point: it only answers from a closed set you define. It can't write the response. But most agent loops don't need another essay. They need a fast, calibrated yes.

Source:
https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Gemini Decisions API, Nov 11: a closed-set decision primitive for agent routing, policy checks, context grading, and tool selection. 1,000 questions, 256K multimodal tokens, 150-250ms, $0.10/M input, zero output tokens. Caveat: it can't generate answers; it scores options you define.
