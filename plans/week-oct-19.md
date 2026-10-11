# LinkedIn plan — week of Oct 19–25, 2026 (3 posts/day)

Replaces plan.md on Monday Oct 19. This week's plan (Oct 12) stays live until then.

## Read this first — three honest caveats

1. **Volume vs. the canon.** The li-plan canon is "4 posts a week beats 7" — you
   asked for ~21. That can work, but only with a hard rule: **hooks beat
   volume, and LinkedIn pushes one post at a time.** Slots closer than ~4–5h
   cannibalize each other. The slots below are spaced 5h+. If any slot's first
   line isn't good, SKIP THE SLOT. Never ship to fill the grid. If a whole day
   feels weak, run 2 that day. Slot B (1:30pm) is the designated droppable slot.
2. **The 5-strategy stack runs on every post**, and every post names its anchor
   (article/video) + the individual who said it. Sources go in the FIRST
   COMMENT unless you override per post (as you did Oct 13 — log the result).
3. **Tagging (your call, executed with rules):** tag only people likely to
   ENGAGE — a tag whose target stays silent reads as weak to the algorithm.
   Tier 1 (tag OK): tool maintainers you're reviewing positively, anyone who
   has replied to your comments that week. Tier 2 (name them, don't tag):
   Amodei / Altman / Karpathy / Mollick — cold tags on mega-names read thirsty
   and silent tags may suppress reach. Never tag someone in a post that's
   critical of them. Max 1 tag per post.

## Times (audience = engineering leaders, India + EU + US East)

| slot | IST | catches | role |
| --- | --- | --- | --- |
| A | 8:30am | India morning desk | ANCHOR post — news/take riding a named person (the jacking layer) |
| B | 1:30pm | EU morning (10:00 CEST) | TEACH / TOOL REVIEW — your proven format, or IMAGE post |
| C | 7:00pm | US East morning (9:30 EDT) | STORY / OPINION / light — personal or visual |

Weekend: 2 slots only (A + C) — weekend reach is lower; story/personal only.
If news breaks mid-week, it PRE-EMPTS slot A; the planned anchor slides a day.

## Engage (20 min/day BEFORE slot A) — the jacking execution surface

Comment rules: first ~20 comments or skip; add a number, a correction, or a
specific experience; never link your own post; never pitch.

- 5 reach: Simon Willison (he wrote up half your anchors — highest-leverage
  target again this week), Dario Amodei/Anthropic, Sam Altman/OpenAI,
  Ethan Mollick, Andrej Karpathy
- 3 peers: ttok / BetterWispr maintainers (you're reviewing their tools this
  week — reviews + comments = reciprocity), openclaude/llmfit maintainers
- 2 buyers: (still your call — name 2 CTOs/heads of eng Taazaa would sell to)

---

## MON Oct 19 — theme-setter day

**A · 8:30am · OPINION · #1 Contrarian Take · text**
Anchor: Anthropic invests $100M to train 10,000 engineers (Oct 2) —
anthropic.com/news/claude-frontier-academy
Who: Anthropic (company announcement, no individual named — name the company)
Hot take: the enterprise AI talent gap isn't a prompt-writing gap. It's a
reliability-engineering gap — and nobody's curriculum covers the boring half.
Stack: brandjack (Anthropic) + hot take + trend-ride ("agents escaped the
demo" arc continues: training is the admission that demos weren't enough).
Tag: no.

**B · 1:30pm · TOOL REVIEW · #12 The Comparison · text**
Anchor: Simon Willison's ttok 1.0 release (Oct 9) —
simonwillison.net/2026/Oct/9/ttok/
Who: Simon Willison + William Liu (whose tokenizer experiment backed 1.0)
Angle: your proven review format — token counting against GPT-5/GPT-6
tokenizers, why a CLI that does one boring job belongs in your CI.
Stack: namejack (Willison) + teach. This is the review that earns you the
right to comment on his threads all week.
Tag: YES — Willison (positive review; he engages). This is the week's Tier-1 tag.

**C · 7:00pm · OPINION · #6 Insider Secret · text**
Anchor: Willison's "built using my voice" (Oct 9, shipped a blog feature by
voice dictation to a coding agent while cooking dinner) +
BetterWispr on HN (Oct 11, 81 pts — free open-source Mac dictation)
Who: Simon Willison
Angle: voice is quietly becoming the input device for code. After N years
reviewing dev tools, the shift nobody puts in the keynote: the keyboard is
becoming the review surface, not the authoring surface.
Stack: namejack + trend-ride (voice-coding week: Willison's post + BetterWispr
+ Wispr funding chatter).
Tag: no (you already tagged him today — one per day max).

## TUE Oct 20 — pricing + cost day

**A · 8:30am · NEWS ANALYSIS · #10 The Receipt · IMAGE**
Anchor: Claude Haiku 5.5 (Oct 7) + Sonnet 5.5 (Sep 28, 30% faster/30% cheaper)
+ Opus 5.5 (Sep 22, Fable-level, 40% less) — anthropic.com/claude-haiku-5-5
Who: Anthropic
Angle: the cost floor of production agents dropped three times in three weeks.
If your build-vs-buy math is older than a month, rerun it.
Image: simple pricing-table graphic (Opus 5 → 5.5, Sonnet 5 → 5.5, Haiku 5.5)
— you can generate this; keep it plain, numbers only, no stock-art glow.
Stack: brandjack + receipt (numbers in line 1).
Tag: no.

**B · 1:30pm · STORY · #9 Story Cold Open · text**
Anchor: Willison's "Jake Boggan on Barnette's Conjecture" (Oct 7) —
simonwillison.net/2026/Oct/7/jake-boggan/
Who: Jake Boggan (24 years on one math problem), OpenAI (math repo)
Cold open on Boggan's own HN line; angle: what happens to the craftsman when
the machine closes the problem. Not AI-cheerleading, not doom — the honest
disorientation. This is the post people forward.
Stack: namejack + trend-ride (the "what's left for humans" undercurrent of the
whole fortnight).
Tag: no.

**C · 7:00pm · TEACH · #21 Direct Value · text**
Anchor: Anthropic's 2026 Usage Policy update (Oct 8) —
anthropic.com/news/2026-usage-policy-update
Who: Anthropic
Angle: read your vendor's policy diff like you read a dependency diff. What
changed, what it means for the agents you already have in prod, the 3 lines to
check. Give the checklist away in the post.
Stack: brandjack + teach. (Read the actual policy Tuesday morning before
drafting — this slot dies without specifics.)
Tag: no.

## WED Oct 21 — complexity + careers day

**A · 8:30am · OPINION · #1 Contrarian Take · text**
Anchor: Carson Gross on programming careers (via Willison, Oct 8) —
simonwillison.net/2026/Oct/8/carson-gross/
Who: Carson Gross (htmx)
Hot take: AI didn't make complexity optional — it made complexity compound
interest. The teams drowning in 2027 are the ones generating code faster than
they can hold it.
Stack: namejack (Gross) + hot take. Defensible in a client meeting = on-brand.
Tag: no.

**B · 1:30pm · TEACH · #11 Myth Bust · text**
Anchor: "I paid people to try and follow my README" — Terence Eden
(shkspr.mobi, #1 on HN Oct 11, 305 pts)
Who: Terence Eden
Angle: "my docs are fine" is not why users bounce. He PAID strangers to follow
his README and watched them fail. Your README is your first integration test —
and your agent's too (agents read docs before your users do).
Stack: trend-ride (#1 HN story while it's warm) + teach + a quiet nod to your
agent-docs lane.
Tag: no.

**C · 7:00pm · TREND RECAP · #17 Time Anchor · CAROUSEL**
Anchor: the fortnight's arc — NYT visa story + Wikimedia + Decisions API
Carousel (5-6 slides): "Two weeks, three stories, one root cause: agents left
the demo." Slide per story, last slide = the control-plane takeaway. Use
/li-carousel to build it.
Stack: trend-ride (the flagship arc post) + brandjack (Anthropic + OpenAI in
one frame).
Tag: no.

## THU Oct 22 — receipts day

**A · 8:30am · PROOF · #2 Number Reveal · text**
Anchor: your OWN week — "7 days, 6 posts, all riding named sources. Here's
what the numbers did." (Pull real numbers Thu morning from LinkedIn analytics.
If the numbers are bad, that's the post — honesty is your brand.)
CONDITIONAL: if you tried the Decisions API this week, that teardown goes here
instead ("I ran 50 production prompts through OpenAI's Decisions API. Here's
the bill and the failure modes.") — stronger because it's yours.
Stack: receipt + self-namejack. Nothing jacks like your own data.
Tag: no.

**B · 1:30pm · TEACH · #12 The Comparison · text**
Anchor: "Deno is joining Cloudflare" (Willison, Oct 9) —
simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/
Who: Ryan Dahl ("sucked into the gravity well of node compatibility"),
Cloudflare
Angle: every runtime either becomes node-compatible or becomes a museum. What
that gravity well teaches you about betting your agent stack on a framework
vs. a protocol (MCP's real value proposition, said sideways).
Stack: namejack (Dahl) + teach.
Tag: no.

**C · 7:00pm · OPINION · #16 Good vs Great · text**
Anchor: "I'm sorry, but you still have to think" (itsallaboutthebit.com,
134 pts HN, Oct 11)
Who: essay author — confirm name before drafting (site byline)
Angle: the essay is right AND incomplete. Good engineers think before they
prompt. Great engineers think AFTER the model answers — verification is the
new bottleneck skill.
Stack: trend-ride (HN-warm) + opinion.
Tag: no.

## FRI Oct 23 — security + infra day

**A · 8:30am · NEWS ANALYSIS · #15 The Warning · text**
Anchor: Anthropic Cyber Mission (Oct 8) + Cyber Verification Program expansion
(Oct 6) — anthropic.com/news/anthropic-cyber-mission
Who: Anthropic
Angle: your agent's scariest failure mode isn't a wrong answer, it's a
competent wrong action. The vendors are building the verification layer
because the liability already arrived — here's the one question to ask your
own agent stack this week.
Stack: brandjack + warning (fear WITH an exit, per the formula's trap rule).
Tag: no.

**B · 1:30pm · TEACH · #10 The Receipt · IMAGE**
Anchor: The Verge — "The RAM shortage is bringing back DDR4" (207 pts HN,
Oct 11) + your own August llmfit review (the self-callback)
Who: The Verge; you (Aug llmfit post)
Angle: RAM prices are quietly rewriting local-model economics. The machine
that fit a 70B in August costs different money today. What llmfit-style
fit-checking means when the hardware target moves.
Image: one-line spec-vs-price table — generate plain, numbers only.
Stack: trend-ride (HN-warm) + SELF-namejack (quote your August review —
receipts build authority).
Tag: no.

**C · 7:00pm · LIGHT OPINION · #19 Curiosity Gap · text**
Anchor: "Ben Affleck, Pythonista" (Willison, Oct 7) —
simonwillison.net/2026/Oct/7/ben-affleck/
Who: Ben Affleck
Angle: the bar for "technical" moved. CNNs and tensors are celebrity small
talk now. What that does to your hiring bar — and your interview questions.
Friday-eve energy, lighter tone.
Stack: namejack (Affleck, second-hand via Willison) + trend-ride.
Tag: no.

## SAT Oct 24 — personal day (2 slots)

**A · 9:00am · STORY · #4 Before/After · text**
Anchor: Michael Lynch's "Anti-Patterns in Software Blogging" (via Willison,
Oct 7) — "just write the way you talk"
Who: Michael Lynch
Angle: your real story — 37 days dark, then a fortnight of posting on a beat.
What coming back actually looked like, and why your voice.md ("write the way
you talk") survived contact with a content calendar. Weekend = personal.
Stack: trend-ride (meta: posting about posting works on Saturdays) + story.
Tag: no.

**C · 6:00pm · LIGHT · #14 Pattern Interrupt · text**
Anchor: Willison — Python 3.15 added to GitHub Actions (Oct 10), and he had
ChatGPT poll the repo hourly to catch it —
simonwillison.net/2026/Oct/10/python-actions/
Who: Simon Willison, OpenAI (ChatGPT as the watcher)
Angle: we built agents to watch for a version number. The future is oddly
normal. Pattern-interrupt opener: "Python 3.15 exists because a bot stayed up
late."
Stack: namejack + light trend-ride. Short post. Saturday C is the week’s
lowest-stakes slot.
Tag: no (one Willison tag already this week — Monday's review).

## SUN Oct 25 — flagship recap (2 slots)

**B · 4:00pm · STORY/TEACH · #5 The List Promise · CAROUSEL + text**
Anchor: the whole fortnight — "5 things the 'agents escaped the demo' arc
taught people who actually ship" — visa forms, Wikimedia, Decisions API,
Haiku 5.5 pricing floor, voice-coding.
Carousel: 7 slides (hook / one per lesson / takeaway / your Aug buzz-post
receipt as the closing slide).
Stack: trend-ride (owning the fortnight's narrative) + self-namejack +
list-promise (highest save rate — saves are the weekend metric that matters).
Tag: no.

**C · 7:00pm · OPINION · #18 The Unpopular Rule · text**
Anchor: "Dwarf Fortress version control" (Willison, Oct 11) — Tarn Adams went
from "I don't use version control" (2013) to adopting it by 2023 —
simonwillison.net/2026/Oct/11/dwarf-fortress/
Who: Tarn Adams
Angle: I don't let a team skip agent evals. Ever. Even Dwarf Fortress adopted
version control — the unglamorous discipline always wins, just ten years late.
Stack: namejack + unpopular-rule (positioning post — attracts right buyers,
repels wrong ones).
Tag: no.

---

## Scheduling — how this actually ships

1. **Native LinkedIn scheduler (recommended):** composer → clock icon beside
   Post → pick time. Free, reliable, supports text + image + carousel docs.
   THE GAP: it cannot schedule the FIRST COMMENT — and our link strategy lives
   there. So: schedule the post, set a phone reminder for post-time +2 min,
   drop the source link in manually. Non-negotiable part of the workflow.
2. **Batch rhythm:** Sunday night — I draft Mon–Wed (9 posts), you schedule.
   Wednesday night — I draft Thu–Sun, you schedule. Drafts stay fresh; nothing
   rots in a queue for 6 days.
3. **Third-party (Buffer / Publer / Taplio):** some CAN schedule first
   comments. Worth it only if the manual-comment step actually fails in
   practice. Try native for a week first.
4. **On-demand drafting:** say "write MON A" (or "write Monday") and I draft
   that slot with the strategy stack baked in, humanized, in your voice.
5. **If news breaks:** it pre-empts slot A same-day. Tell me "newsjack: {link}"
   and I'll rebuild the slot around it in one pass.

## The volume safety valve

Track one number per post: engagements per impression vs. your Oct 13
baseline. If the weekly average drops 2 weeks running, drop slot B first,
then slot C Tue/Thu. The grid serves the average, never the reverse.
