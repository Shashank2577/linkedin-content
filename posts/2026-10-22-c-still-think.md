# Think before you prompt. Think again after the benchmark.

**THU 2026-10-22 · 7:00pm IST · Slot C · OPINION · Hook #16 Good vs Great · Status: DRAFTED**

**Format:** text
**Anchor:** [I'm sorry, but you still have to think (Oct 2026)](https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/)
**People named:** essay author — confirm byline before drafting  |  **Tag:** no
**Strategy stack:** trend-ride: HN-warm + opinion / good-vs-great

---

## Post body (copy from here)

Good engineers think before they prompt. Great engineers think again after the benchmark comes back.

Piotr Sarnacki's essay "I'm sorry, but you still have to think" is the best example I've read this month. DHH had an AI agent rewrite Campfire in Rust, then Elixir and Go, without reading the code. Zach Daniels benchmarked them. Under heavy load the Rust version delivered about 1% of notifications. Elixir delivered 100%. Case closed, right?

Piotr reran it at a constant arrival rate, which is closer to many users acting at once. At 100 POSTs a second, Rust clients got about 14% of events and Elixir about 60%. But Elixir timed out on about 23% of POSTs, with worst-case delivery near 180 seconds. Rust disconnected lagging clients instead, which he considers the better failure.

The Rust cause was a broadcast channel with a capacity of 256. Raising it to 16384 got delivery to about 90% and pushed maximum latency from 11 seconds to over 130.

Nobody's prompt said any of that. Those were decisions the agent made silently, and a single number hid them.

You still have to decide what failure looks like before you ask for the code.

---

## First comment (paste right after posting)

Source: Piotr Sarnacki, I'm sorry, but you still have to think: https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/

## Strategy notes (never part of the post)

The HN essay 'I'm sorry, but you still have to think' (134 pts) is right AND incomplete. Thinking is now the bottleneck twice: once to prompt, once to verify. Verification is the new bottleneck skill.
