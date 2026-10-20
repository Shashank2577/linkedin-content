# LinkedIn Content Engine

The public workspace for Shashank Saxena's LinkedIn content system — weekly
plans, per-post copy files, and a visual dashboard with LinkedIn-style
previews, one-tap copy, and engagement tracking.

**Dashboard:** <https://shashank2577.github.io/linkedin-content/>
(also works offline — open `index.html` locally)

## What's in here

| path | what it is |
| --- | --- |
| `index.html` + `data.js` | the dashboard (calendar, previews, copy buttons, tracking) |
| `posts/*.md` | one file per post — copy-friendly canonical text (with source link) + strategy notes |
| `plans/*.md` | the weekly plans (strategy, times, engage lists, 5-strategy stacks) |
| `tracking/README.md` | how post verification + engagement tracking works |
| `build_posts.js` | regenerates `posts/*.md` from `data.js` — `node build_posts.js` |

`data.js` is the single source of truth. Everything else is generated from it.

## The weekly loop

1. **Plan** — the week lives in `plans/` (3 posts/day, slots A 8:30am /
   B 1:30pm / C 7:00pm IST; slot B is the droppable one).
2. **Draft** — posts are drafted in batches (Sun night: Mon–Wed; Wed night:
   Thu–Sun) via the `li-post` skill, then committed here.
3. **Post** — manual or LinkedIn's native scheduler. The link to the
   original article is already in the post text.
4. **Track** — paste the live post URL on the dashboard card → send the
   generated line to Claude → engagement gets pulled through your own
   logged-in browser and the page updates. See `tracking/README.md`.

## The 5 attention strategies (applied to every post)

Newsjacking · Namejacking · Brandjacking · Hot take · Trend-riding —
defined with guardrails in `plans/week-oct-20-reverse-engineering.md`.

Deliberately **not** in this repo: `voice.md` (the private voice profile that
drives drafting).
