# 35% faster to first token. Same token bill.

**FRI 2026-11-06 · 1:30pm IST · Slot B · NEWS ANALYSIS · Hook #12 The Comparison · Status: DRAFTED**

**Format:** text
**Anchor:** [Anthropic: Make long-running agents faster with message threads (Nov 2)](https://claude.com/resources/articles/message-threads)
**People named:** Anthropic  |  **Tag:** no
**Strategy stack:** newsjack: Nov 2 public beta + trend-ride: long-running agent sessions + hot take: latency is not cost

---

## Post body (copy from here)

35% faster to first token. Same token bill.

Anthropic put message threads into public beta this week. The idea is simple: send the full conversation once, then send only the new messages plus the ID of the previous response. The API keeps the earlier turns, the system prompt and the tool definitions.

For long-running coding agents, that removes a lot of repeated upload. Anthropic says requests with 500k to 1M tokens saw median time to first token drop by about 35%, and threads are on by default for most Claude Code users.

The catch is what it doesn't do. Claude still reads the full conversation every turn, so token usage is unchanged. Prices and rate limits are unchanged. This is a latency feature, not a cost feature.

There's a second catch: threads expire five minutes after the last request. Your agent has to resend the full conversation to start a new one. And threads aren't eligible for zero data retention or HIPAA workloads.

So treat the thread as a cache, not as state. Keep the client-side transcript as the source of truth, and design for a cold start at any turn. The 35% is real if your sessions are long and active. If your agent idles, you're paying the resend anyway.

Source:
https://claude.com/resources/articles/message-threads

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Anthropic's Nov 2 message threads beta, read as a latency feature with a cache-like TTL. The 35% is Anthropic's own median for 500k-1M token Claude Code requests; the post says that. The 'treat the thread as a cache' framing is the author's.
