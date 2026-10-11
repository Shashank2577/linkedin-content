# Tracking loop

How a post goes from draft to measured, and what the honest limits are.

## The loop

1. **Post** — manually, or via LinkedIn's native scheduler (composer → clock
   icon). The source link goes in the **first comment, by hand**, ~2 minutes
   after the post lands. Schedulers can't post first comments.
2. **Register** — on the dashboard, open the post's card → *Mark as posted* →
   paste the LinkedIn URL → save. The page copies a line like
   `POSTED: 2026-10-19-a-talent-gap — https://…` — paste that line to Claude
   in chat. (The page is static; it can't write back to the repo. The chat
   line is the write path. The page also remembers the URL locally via
   localStorage in the meantime.)
3. **Verify + measure** — Claude opens the post through your logged-in
   browser session (Kimi Web Bridge), confirms it's live, and pulls
   impressions / reactions / comments / reposts from your own analytics.
   `data.js` gets updated, committed, pushed — the Tracking tab refreshes.
4. **Analyze** — after each check (or weekly), the "What's working / what's
   not" panel gets rewritten: per-post tier (top/mid/bottom by engagements
   per 1k impressions), which strategy stacks moved reach, what to kill.

## Cadence

- Per post: check at **2h, 24h, 72h** (LinkedIn distributes over ~48–72h;
  the 24h number is the one to compare across posts).
- Weekly: one analysis pass before the next week's plan is written.

## Honest limits

- **No unattended scraping.** LinkedIn blocks headless scraping and it risks
  the account. Measurement happens when you ask, through your own logged-in
  Chrome, while the browser bridge is up.
- You can always paste numbers by hand: `ENGAGEMENT: <post-id>`, then
  impressions / reactions / comments / reposts — or paste an analytics
  screenshot in chat. Manual entry is a first-class path, not a fallback.
- First-comment vs body-link reach is being A/B-tested this fortnight
  (Oct 13 post used a body link; the plan defaults to first-comment).
  The Tracking tab is where that answer lands.

## The safety valve

Track engagements per impression against the Oct 13 baseline. If the weekly
average drops two weeks running, drop slot B first, then slot C on Tue/Thu.
The grid serves the average, never the reverse.
