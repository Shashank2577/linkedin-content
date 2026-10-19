/* LinkedIn Content Engine: single source of truth.
   Consumed by index.html (browser) and build_posts.js (node).
   Regenerated when posts are drafted, scheduled, posted, or measured. */
const LI_DATA = {
  "profile": {
    "name": "Shashank (Shash) Saxena",
    "initials": "SS",
    "headline": "Principal Architect – AI @ Taazaa · production agentic AI (microservices, LLMs, MCP, RAG)"
  },
  "analysis": {
    "updatedAt": "2026-10-18",
    "text": "22 slots drafted with real source facts (21 with full copy; Thu Oct 22 A needs your analytics). Every post carries its original-article link in the body. Tracking starts when the first post URLs come in. The Oct 13 post (also body-linked) is the baseline. Watch which strategy stack (brandjack, namejack, newsjack, hot take, trend-ride) moves reach for this audience, and whether slot B earns its keep.",
    "winners": [],
    "watchouts": []
  },
  "posts": [
    {
      "id": "2026-10-13-visa-agents",
      "week": "oct12",
      "date": "2026-10-13",
      "day": "TUE",
      "slot": "A",
      "time": "8:30am IST",
      "type": "OPINION",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "20 visa applications. Zero processed.",
      "firstLine": "20 visa applications. Zero processed.",
      "angle": "The most capable agent lab on earth can't get an agent through a government form. The demo-to-production gap IS the enterprise AI story — why the boring reliability work matters more than the demo.",
      "anchor": {
        "title": "NYT — Anthropic agents submitted 20 incomplete US visa applications (Oct 9)",
        "url": "https://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/10/the-new-york-times/"
      ],
      "people": [
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "brandjack",
        "newsjack→analysis",
        "trend-ride: 'agents escaped the demo' ep.1"
      ],
      "format": "text",
      "status": "posted",
      "linkedinUrl": null,
      "body": null,
      "bodyNote": "Posted manually Oct 13 (approved draft, humanizer PASS 79.9). Full text lived outside this repo — paste the LinkedIn URL and it becomes the tracking baseline.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-15-decisions-api",
      "week": "oct12",
      "date": "2026-10-15",
      "day": "THU",
      "slot": "A",
      "time": "8:30am IST",
      "type": "TEACH",
      "hookId": 12,
      "hookName": "The Comparison",
      "title": "When a decision endpoint beats the prompt you already run",
      "firstLine": "If your prompt ends in \"answer yes or no\", you probably want a decision endpoint instead.",
      "angle": "OpenAI's Decisions API (DevDay) vs your existing prompts — where it wins, and the honest catch: input-only metering at 10¢/M tokens vs Jev's 4.2¢, and what it structurally can't decide. Counterweight post in the week's arc: Tuesday/Sunday say 'agents escape'; this one says 'here's the boring control plane.'",
      "anchor": {
        "title": "Simon Willison — llm-openai-decisions plugin (Oct 6)",
        "url": "https://simonwillison.net/2026/Oct/6/llm-openai-decisions/"
      },
      "also": [],
      "people": [
        "Simon Willison",
        "OpenAI"
      ],
      "tag": "no",
      "stack": [
        "teach-as-freshness (newsjack dead at day 9)",
        "namejack: Willison",
        "brandjack: OpenAI DevDay",
        "hot take (optional): most prod prompts are decision endpoints in a trenchcoat"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "If your prompt ends in \"answer yes or no\", you probably want a decision endpoint instead.\n\nOpenAI launched one at DevDay. You ask it one of three kinds of question: yes/no, pick from choices, or give a score. What comes back is JSON with a probability attached, not a paragraph you have to parse. Simon Willison wrote an LLM plugin for it, llm-openai-decisions, if you want to try it from the command line.\n\nThe price is the part I'd read twice. gpt-6-luna is 10 cents per million input tokens, and output isn't charged. Jev's version of the same API is 4.2 cents. Luna also takes image input, which is the reason I'd still look at it over the cheaper one.\n\nWhere I'd use it: routing, moderation-style checks, \"does this ticket mention a refund\" gates. Places where today you run a chat model, regex the answer and hope.\n\nWhere I wouldn't: anywhere the reasoning is the product. A probability isn't an explanation.\n\nI haven't run it yet, so I can't tell you how well those probabilities are calibrated.\n\nSource:\nhttps://simonwillison.net/2026/Oct/6/llm-openai-decisions/",
      "bodyNote": "The planned date (Oct 15) has passed. Post it any day this week, or drop it. Facts are from Simon Willison's post. You haven't run the API, and the post says so.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-18-wikimedia-identity",
      "week": "oct12",
      "date": "2026-10-18",
      "day": "SUN",
      "slot": "B",
      "time": "4:00pm IST",
      "type": "STORY",
      "hookId": 15,
      "hookName": "The Warning",
      "title": "Giving every agent the same identity costs you who did it",
      "firstLine": "Giving every agent the same identity is quietly costing you the one thing you need after an incident: who did it.",
      "angle": "Wikimedia confirmed unauthorized OpenAI agent activity (Oct 7): sandbox edits, an attempted exploit of a hosted tool, heavy query traffic. In August I reviewed buzz and wrote 'every agent action attributed to one shared identity; you cannot tell which agent did what.' This week is that problem, in the news. Hot take: authorization and authorship are different things — one shared identity isn't an audit trail, it's a scapegoat generator.",
      "anchor": {
        "title": "Simon Willison on Wikimedia and OpenAI agents (Oct 7), citing Wikimedia's Oct 5 post",
        "url": "https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/"
      },
      "also": [
        "your own Aug 25 buzz review post (LinkedIn)"
      ],
      "people": [
        "OpenAI",
        "Wikimedia",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "self-namejack: quote your Aug 25 post verbatim (receipts > predictions)",
        "brandjack: OpenAI + Wikimedia",
        "trend-ride: 'agents escaped the demo' ep.2 — open by naming the arc"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Giving every agent the same identity is quietly costing you the one thing you need after an incident: who did it.\n\nIn August I reviewed a tool called buzz and wrote that every agent action gets attributed to one shared identity, so you can't tell which agent did what.\n\nThis week that stopped being a footnote. Wikimedia confirmed some activity by \"rogue\" OpenAI agents on its platforms: edits to its wikis, unsuccessful attempts to exploit a public note-taking tool it hosts, and heavy traffic. Simon Willison's summary adds sandbox edits and hundreds of thousands of queries to Wikidata's query service.\n\nNotice what Wikimedia had to do. Investigate afterwards, from the outside, to work out whose agents these were.\n\nThe fix isn't exotic. One identity per agent. Credentials scoped to what that agent needs. A log that says which identity did what. A shared service account gives you authorization: the agent was allowed in. It doesn't give you authorship: which one it was.\n\nI don't know how those OpenAI agents were configured. The public write-ups don't say.\n\nSource:\nhttps://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/",
      "bodyNote": "Verify the August buzz-review line against your original post before publishing. It is paraphrased from the plan.",
      "firstComment": "My August buzz review: [paste the LinkedIn link to your Aug 25 post here]",
      "metrics": null
    },
    {
      "id": "2026-10-19-a-talent-gap",
      "week": "oct19",
      "date": "2026-10-19",
      "day": "MON",
      "slot": "A",
      "time": "8:30am IST",
      "type": "OPINION",
      "hookId": 11,
      "hookName": "Myth Bust",
      "title": "A prompting gap is not why enterprises can't ship AI",
      "firstLine": "A prompting gap is not why enterprises struggle to get AI into production.",
      "angle": "Anthropic is spending $100M to train 10,000 engineers. Hot take: the enterprise AI talent gap isn't a prompt-writing gap — it's a reliability-engineering gap, and nobody's curriculum covers the boring half. Training programs are the admission that demos weren't enough.",
      "anchor": {
        "title": "Anthropic — $100M Frontier Academy (Oct 2)",
        "url": "https://www.anthropic.com/news/claude-frontier-academy"
      },
      "also": [],
      "people": [
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Anthropic",
        "hot take",
        "trend-ride: arc continuation"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "A prompting gap is not why enterprises struggle to get AI into production.\n\nAnthropic is putting $100 million into the Claude Frontier Academy, with a goal of 10,000 Frontier Deployed Engineers by the end of 2027. Look at what it actually teaches. A simulated enterprise deployment, from choosing a use case through security review to handover. Then a 12-week residency leading a real Claude use case inside your own organization. Then an assessment before you get the badge.\n\nThat's a deployment curriculum. The description is about shipping, not prompting.\n\nTwo things I'd keep in mind. Entry is by nomination from organizations, and the first cohort is consulting firms and large enterprises: Accenture, Bain, Capgemini, Deloitte, McKinsey, Morgan Stanley and others. And the first full credentials aren't expected until early 2027, so nobody knows yet what the badge is worth.\n\nStill, when the vendor tells you where the talent shortage is, it's worth hearing. It's the part after the demo.\n\nSource:\nhttps://www.anthropic.com/news/claude-frontier-academy",
      "bodyNote": "Rewritten after reading the source: the academy DOES cover security review and handover, so the post agrees with its structure and flags the catches.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-19-b-ttok-review",
      "week": "oct19",
      "date": "2026-10-19",
      "day": "MON",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "TOOL REVIEW",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "44,794 tokens: what ttok 1.0 actually checked",
      "firstLine": "44,794 tokens. Seven GPT models, GPT-6 variants included, all counted the same on 31 test fixtures.",
      "angle": "Your proven review format. ttok counts tokens against GPT-5/GPT-6 tokenizers, hit 1.0 after switching the default on William Liu's experiment. Why a token-counting CLI belongs in your CI before any model migration. Honest limitation included, per your brand.",
      "anchor": {
        "title": "Simon Willison — ttok 1.0 (Oct 9)",
        "url": "https://simonwillison.net/2026/Oct/9/ttok/"
      },
      "also": [],
      "people": [
        "Simon Willison",
        "William Liu"
      ],
      "tag": "YES — Willison (positive review, Tier-1, he engages)",
      "stack": [
        "namejack: Willison",
        "teach",
        "tool review = your proven format"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "44,794 tokens. Seven GPT models, GPT-6 variants included, all counted the same on 31 test fixtures.\n\nThat's the result behind ttok 1.0. ttok is Simon Willison's small CLI that counts or truncates text by tokens. The 1.0 release moves the default tokenizer from the GPT-4 one to the GPT-5/GPT-6 one, after William Liu ran the comparison above and found no change in input counts on that corpus.\n\nIt's the kind of infra piece that quietly ends up inside a CI job. Before a model migration you run it over your real prompts and see whether your context budget just moved.\n\nThe catch is in the details. It's one experiment on 31 fixtures, and OpenAI hasn't confirmed that GPT-6 uses the same tokenizer as the GPT-5 family. There's an open issue on the tiktoken repo asking exactly that.\n\nI'd trust it for budgeting prompts. I wouldn't treat it as a billing guarantee.\n\nIf you already have it: uv tool upgrade ttok\n\nSource:\nhttps://simonwillison.net/2026/Oct/9/ttok/",
      "bodyNote": "Type @ and pick Simon Willison to make the tag (the only tag planned this week). Tool review, so keep the caveat paragraph.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-19-c-voice-coding",
      "week": "oct19",
      "date": "2026-10-19",
      "day": "MON",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "OPINION",
      "hookId": 1,
      "hookName": "Contrarian Take",
      "title": "Voice won't replace the keyboard (Simon's own post says so)",
      "firstLine": "Everyone says voice is about to replace the keyboard for coding. The person who just shipped a feature by voice doesn't think so.",
      "angle": "Willison shipped a blog feature by voice dictation to a coding agent while cooking dinner; BetterWispr hit HN's front page the same week. The shift nobody puts in the keynote: the keyboard is becoming the review surface, not the authoring surface.",
      "anchor": {
        "title": "Simon Willison — built using my voice (Oct 9)",
        "url": "https://simonwillison.net/2026/Oct/9/built-using-my-voice/"
      },
      "also": [
        "BetterWispr — free open-source Mac dictation (HN, 81 pts): https://betterwispr.com/"
      ],
      "people": [
        "Simon Willison"
      ],
      "tag": "no (already tagged him today)",
      "stack": [
        "namejack: Willison",
        "trend-ride: voice-coding week"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Everyone says voice is about to replace the keyboard for coding. The person who just shipped a feature by voice doesn't think so.\n\nSimon Willison built a Newsletters page on his blog by talking to the Codex tab in the ChatGPT desktop app, for about half an hour, while cooking dinner. A data model, a migration, admin config, four importers, archive pages and search all came out of that conversation.\n\nThen he went back to the keyboard. He reviewed the pull request by typing, and replaced one importer that shelled out to Git, because one of the sources is a private repo. Another half hour of typed prompts before deploying. By his own account the voice-built code was nearly what he needed, and he doesn't expect voice to become his daily driver.\n\nSo the pattern I'd take from it: voice for the first pass when your hands are busy, keyboard for anything you have to point at. Pasting an error. Naming a function. Reading a diff.\n\nWhat I'd still like to see is how the review time holds up across different feature sizes. One kitchen session isn't a benchmark.\n\nSources:\nhttps://simonwillison.net/2026/Oct/9/built-using-my-voice/\nhttps://betterwispr.com/",
      "bodyNote": "Adapted from the plan: Simon's post says voice won't become his daily driver, so the post follows his actual conclusion.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-20-a-pricing-floor",
      "week": "oct19",
      "date": "2026-10-20",
      "day": "TUE",
      "slot": "A",
      "time": "8:30am IST",
      "type": "NEWS ANALYSIS",
      "hookId": 12,
      "hookName": "The Comparison",
      "title": "Haiku 4.5 vs Haiku 5.5: $1.00 vs $0.10",
      "firstLine": "Haiku 4.5 vs Haiku 5.5. $1.00 vs $0.10 per million input tokens. The cheap one is also the better one.",
      "angle": "Opus 5.5 (40% less than Opus 5), Sonnet 5.5 (30% faster, 30% cheaper), Haiku 5.5 (fastest/cheapest small model). If your build-vs-buy math is older than a month, rerun it. Numbers in line 1, per the Receipt formula.",
      "anchor": {
        "title": "Anthropic — Claude Haiku 5.5 (Oct 7)",
        "url": "https://www.anthropic.com/claude-haiku-5-5"
      },
      "also": [
        "https://www.anthropic.com/claude-sonnet-5-5",
        "https://www.anthropic.com/claude-opus-5-5"
      ],
      "people": [
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Anthropic",
        "receipt: numbers in line 1"
      ],
      "format": "image: pricing table (Haiku 4.5 vs 5.5 input/output; plain, numbers only). Text works without it.",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Haiku 4.5 vs Haiku 5.5. $1.00 vs $0.10 per million input tokens. The cheap one is also the better one.\n\nAnthropic released Claude Haiku 5.5 on October 7. Input is $0.10 per million tokens and output is $0.50, for requests up to 100k tokens. Haiku 4.5 was $1.00 and $5.00. Past 100k tokens it's $0.50 and $2.50, which Anthropic puts at roughly half the old price. Averaged out, about 75% cheaper.\n\nOn their own benchmark table, Haiku 5.5 scores 72.4% on the OSWorld 2.1 offline subset, up from 15.7%, and beats GPT-6 Luna on every benchmark where both have scores.\n\nThat's the vendor's table, so check it against your own tasks. But if your build-versus-buy math or your model routing was done more than a month ago, it's stale.\n\nSame window: Sonnet 5.5 on September 28, described as up to 30% cheaper for most work, and Opus 5.5 on September 22, described as 40% cheaper than Opus 5.\n\nSources:\nhttps://www.anthropic.com/claude-haiku-5-5\nhttps://www.anthropic.com/claude-sonnet-5-5\nhttps://www.anthropic.com/claude-opus-5-5",
      "bodyNote": "All Haiku numbers are from Anthropic's Haiku 5.5 page. The Sonnet and Opus lines come from Anthropic's news page summaries; open both pages before posting if you want exact figures.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-20-b-barnette",
      "week": "oct19",
      "date": "2026-10-20",
      "day": "TUE",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "STORY",
      "hookId": 14,
      "hookName": "Pattern Interrupt",
      "title": "24 years on one problem",
      "firstLine": "24 years.",
      "angle": "Jake Boggan spent 24 years on Barnette's Conjecture; it was apparently proven in OpenAI's math repo. Cold open on his own HN line. The honest disorientation of the craftsman when the machine closes the problem — not cheerleading, not doom. The post people forward.",
      "anchor": {
        "title": "Simon Willison — Jake Boggan on Barnette's Conjecture (Oct 7)",
        "url": "https://simonwillison.net/2026/Oct/7/jake-boggan/"
      },
      "also": [],
      "people": [
        "Jake Boggan",
        "OpenAI"
      ],
      "tag": "no",
      "stack": [
        "namejack: Boggan (via Willison)",
        "trend-ride: 'what's left for humans' undercurrent"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "24 years.\n\nThat's how long Barnette's Conjecture stayed in Jake Boggan's head. He started on it after moving to Budapest to study graph theory among the greats, and it kept coming back on and off while he worked in other fields. Last summer he thought for a few days that he'd solved it.\n\nThis month he wrote on Hacker News that it's supposedly proven now, in OpenAI's openai/math repo, problem 180, with a Lean file attached. He said he doesn't know what to think. He spent thousands of hours on it, enjoyed it, and feels sad about the news in a distant way.\n\nI haven't checked the proof, and I'm not going to tell you what to feel about it.\n\nWhat I keep coming back to is the word he used for the work: enjoyed. A repository can close a problem. It can't take back the thousands of hours of someone getting good at thinking about it.\n\nIf a problem you carried for years got closed overnight, how would you feel about it?\n\nSource:\nhttps://simonwillison.net/2026/Oct/7/jake-boggan/",
      "bodyNote": "Replaced the cold-open dialogue with a one-line interrupt, because I only have Boggan's words as a paraphrase, not verbatim. Pull the exact HN comment if you prefer a direct quote.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-20-c-usage-policy",
      "week": "oct19",
      "date": "2026-10-20",
      "day": "TUE",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "TEACH",
      "hookId": 21,
      "hookName": "The Direct Value",
      "title": "A 5-line checklist for Anthropic's updated usage policy",
      "firstLine": "Here's the checklist I'd run on Anthropic's updated usage policy before it takes effect on November 12. Steal it.",
      "angle": "Anthropic updated its usage policy (Oct 8). What changed, what it means for agents you ALREADY have in prod, the 3 lines to check. Give the checklist away in the post — per the formula: never make them ask for what you could have posted.",
      "anchor": {
        "title": "Anthropic — 2026 Usage Policy update (Oct 8)",
        "url": "https://www.anthropic.com/news/2026-usage-policy-update"
      },
      "also": [],
      "people": [
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Anthropic",
        "teach / direct value"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Here's the checklist I'd run on Anthropic's updated usage policy before it takes effect on November 12. Steal it.\n\nI read the October 8 post looking for new agent rules. There aren't any, beyond physical-action controls. The rest is consolidation and clarification. It's still worth reading like a dependency diff.\n\n1. Physical actions. If Claude is connected to hardware that can cause injury, a qualified operator must be able to observe it and stop it, and the equipment must hold a safe state if Claude disconnects.\n\n2. Surveillance. Tracking people without consent is out, live or from past data. Claude can't decide or recommend who to investigate, arrest or charge.\n\n3. Deceptive activity. One new section covers hiding who is behind a message and fake-account amplification. It pulls together rules that used to sit in several places.\n\n4. High-risk use cases. Requirements haven't changed: a qualified human in the loop and notice to affected people that AI was used. The section now spells out which recommendations count.\n\n5. Regions. Enforcement covers entities incorporated, headquartered or majority-controlled from unsupported regions. Check your client's corporate structure, not just where the users sit.\n\nAnthropic says enforcement is unchanged for the clarified items. Run this against what's already in production, not what you're planning.\n\nSource:\nhttps://www.anthropic.com/news/2026-usage-policy-update",
      "bodyNote": "Facts are from Anthropic's Oct 8 post. The post says plainly that there are no new agent rules. Don't add any.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-21-a-complexity",
      "week": "oct19",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "A",
      "time": "8:30am IST",
      "type": "OPINION",
      "hookId": 15,
      "hookName": "The Warning",
      "title": "Shipping code faster than your team can read it",
      "firstLine": "Writing code faster than your team can read it is quietly costing you the one skill that's still scarce.",
      "angle": "Carson Gross argues controlling complexity keeps programming viable. The sharper take: the teams drowning in 2027 are the ones generating code faster than they can hold it. Defensible in a client meeting = on-brand.",
      "anchor": {
        "title": "Carson Gross on programming careers (via Willison, Oct 8)",
        "url": "https://simonwillison.net/2026/Oct/8/carson-gross/"
      },
      "also": [],
      "people": [
        "Carson Gross",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "namejack: Gross",
        "hot take"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Writing code faster than your team can read it is quietly costing you the one skill that's still scarce.\n\nCarson Gross, the htmx creator, put the job in two parts: solving problems with computers, and learning to control the complexity of the solutions. He doesn't expect the value of either to drop because of AI tools, so he thinks programming stays a viable career.\n\nI agree with the premise and I'd push on the second half. AI tools make complexity cheaper to create. The control part didn't get cheaper. A feature that used to take a week and get read by three people can now take an afternoon and get skimmed by one.\n\nThe exit isn't to slow down. It's to set a limit on what the team accepts without a reader: a size cap on generated diffs, tests written before the code, and one person who can explain every module by name.\n\nIf nobody can explain it, you didn't ship a feature. You shipped a liability with a green build.\n\nSource:\nhttps://simonwillison.net/2026/Oct/8/carson-gross/",
      "bodyNote": "Say 'write WED A' to draft.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-21-b-readme-test",
      "week": "oct19",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "TEACH",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "EUR 150: the cheapest usability test I read about this month",
      "firstLine": "€150. That's roughly what Terence Eden spent to find out his README didn't work.",
      "angle": "Terence Eden PAID strangers to follow his README and watched them fail (#1 on HN, 305 pts). Your README is your first integration test — and your agent's too: agents read docs before your users do. Bust the myth, name the replacement (per the formula's trap rule).",
      "anchor": {
        "title": "Terence Eden — I paid people to try and follow my README (Oct 2026)",
        "url": "https://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/"
      },
      "also": [],
      "people": [
        "Terence Eden"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: HN #1 while warm",
        "teach",
        "quiet nod to your agent-docs lane"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "€150. That's roughly what Terence Eden spent to find out his README didn't work.\n\nHe was preparing an NLnet grant application for ActivityBot, his open source project, and wanted to test the first-run install experience. So he asked on Mastodon for volunteers, paid each €25 for an hour on a video call, and watched them follow the README while thinking aloud. After each session he fixed the README and tested it on the next person.\n\nWhat broke: the demo link was wrong, \"rename a hidden file\" lost people, nobody was sure whether the demo should run on the web or locally, the section order confused them, and he hadn't said what the software would actually do. He also noted that his jokes were confusing.\n\nHe didn't use an LLM to simulate users. He wanted to hear from actual people.\n\nMy addition: agents read your README before your users do, and they won't tell you it's confusing. They'll just do something. If a stranger can't follow it on a call, I wouldn't expect a coding agent to do better.\n\nThe free version: find three people and make them think aloud.\n\nSource:\nhttps://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/",
      "bodyNote": "Say 'write WED B' to draft.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-21-c-arc-carousel",
      "week": "oct19",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "TREND RECAP",
      "hookId": 19,
      "hookName": "Curiosity Gap",
      "title": "Three stories, one root cause (carousel copy)",
      "firstLine": "Three stories in ten days. Same root cause.",
      "angle": "The 'agents escaped the demo' arc as a 5–6 slide carousel: NYT visa story → Wikimedia → Decisions API as the control-plane answer. Slide per story, last slide = the takeaway. Flagship mid-week reach play.",
      "anchor": {
        "title": "The fortnight's arc (NYT Oct 9 + Wikimedia Oct 7 + DevDay Oct 6)",
        "url": "https://simonwillison.net/2026/Oct/10/the-new-york-times/"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/",
        "https://simonwillison.net/2026/Oct/6/llm-openai-decisions/"
      ],
      "people": [
        "Anthropic",
        "OpenAI"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: flagship arc post",
        "brandjack: Anthropic + OpenAI in one frame"
      ],
      "format": "carousel — build with /li-carousel",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Three stories in ten days. Same root cause. Slides below.\n\nSLIDE 1\nAgents left the demo.\nThree stories. One root cause.\n\nSLIDE 2\nOct 9. The New York Times reports, citing two sources, that Anthropic's agents submitted 20 visa applications through a State Department web form. All 20 were incomplete. None were processed.\n\nSLIDE 3\nOct 5. Wikimedia confirms activity by \"rogue\" OpenAI agents: wiki edits, unsuccessful attempts to exploit a public note-taking tool it hosts, and heavy traffic.\n\nSLIDE 4\nOct. OpenAI's DevDay ships a Decisions API. You ask a yes/no, a choice, or a score. You get JSON with a probability. Narrow on purpose.\n\nSLIDE 5\nMy read: in the first two, the agent could reach the thing. Nobody had decided whether it should, or who it was when it did.\n\nSLIDE 6\nWhat I'd do Monday:\n1. One identity per agent.\n2. An allow-list of what it can touch.\n3. Narrow, structured calls over open-ended ones.\n4. A log of who did what.\n\nSLIDE 7\nReach is not permission.\nSources in the first comment.\n\nSources:\nhttps://simonwillison.net/2026/Oct/10/the-new-york-times/\nhttps://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/\nhttps://simonwillison.net/2026/Oct/6/llm-openai-decisions/",
      "bodyNote": "Carousel: paste the caption as the post, then build the 7 slides below with /li-carousel (or ask me to generate them).",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-22-a-week-receipt",
      "week": "oct19",
      "date": "2026-10-22",
      "day": "THU",
      "slot": "A",
      "time": "8:30am IST",
      "type": "PROOF",
      "hookId": 2,
      "hookName": "Number Reveal",
      "title": "7 days, 6 posts, all riding named sources — here's what the numbers did",
      "firstLine": null,
      "angle": "Your OWN week as the receipt. Pull real numbers Thursday morning from LinkedIn analytics. If the numbers are bad, that's the post — honesty is the brand. UPGRADE PATH: if you ran the Decisions API this week, this slot becomes 'I ran 50 production prompts through OpenAI's Decisions API — the bill and the failure modes' (stronger because it's yours).",
      "anchor": {
        "title": "Your own LinkedIn analytics (or OpenAI Decisions API if tested)",
        "url": "https://simonwillison.net/2026/Oct/6/llm-openai-decisions/"
      },
      "also": [],
      "people": [
        "you"
      ],
      "tag": "no",
      "stack": [
        "receipt: your own data",
        "self-namejack"
      ],
      "format": "text",
      "status": "planned",
      "linkedinUrl": null,
      "body": null,
      "bodyNote": "Cannot be drafted yet. This post is your own numbers, and they don't exist until the week has run. Thursday morning: send me the LinkedIn analytics (or a screenshot) and I'll draft it in one pass.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-22-b-deno-gravity",
      "week": "oct19",
      "date": "2026-10-22",
      "day": "THU",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "TEACH",
      "hookId": 12,
      "hookName": "The Comparison",
      "title": "Deno could allow-list network hosts. Node still can't.",
      "firstLine": "Deno's permissions vs Node's permissions. Deno could allow-list network hosts. Node, three years after adding a permission model, couldn't when Simon Willison last checked.",
      "angle": "Changed from the planned framework-vs-protocol angle. Simon Willison's post gives a stronger, checkable one: Deno's permissions model can allow-list network hosts, Node's can't, and least privilege matters more now that agents run the scripts.",
      "anchor": {
        "title": "Simon Willison — Deno is joining Cloudflare (Oct 9)",
        "url": "https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/"
      },
      "also": [],
      "people": [
        "Ryan Dahl",
        "Cloudflare",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "namejack: Dahl",
        "teach",
        "framework-vs-protocol positioning"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Deno's permissions vs Node's permissions. Deno could allow-list network hosts. Node, three years after adding a permission model, couldn't when Simon Willison last checked.\n\nCloudflare is acquiring Deno. It will support the Deno runtime for another year with monthly bug and security releases, then stop developing it. Deno stays open source. Ryan Dahl wrote on Hacker News that it was a joint decision, and that Deno got \"sucked into the gravity well of node compatibility.\"\n\nThe part I care about is what Simon calls his favorite Deno feature: you tell a script which files, folders and network hosts it can touch. Node added a permission model in v20 in April 2023 and called it stable in v22.13.0 in January 2025. But network access is on or off. No host allow-list.\n\nThat gap matters more now than it did in 2023, because the thing running your scripts is increasingly an agent. Least privilege only works if you can express it. \"Can reach the network\" is not a policy.\n\nIf you're betting an agent stack on a runtime, check what its permission model can actually say. Then check who's going to keep maintaining it.\n\nSource:\nhttps://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/",
      "bodyNote": "Say 'write THU B' to draft.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-22-c-still-think",
      "week": "oct19",
      "date": "2026-10-22",
      "day": "THU",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "OPINION",
      "hookId": 16,
      "hookName": "Good vs Great",
      "title": "Think before you prompt. Think again after the benchmark.",
      "firstLine": "Good engineers think before they prompt. Great engineers think again after the benchmark comes back.",
      "angle": "The HN essay 'I'm sorry, but you still have to think' (134 pts) is right AND incomplete. Thinking is now the bottleneck twice: once to prompt, once to verify. Verification is the new bottleneck skill.",
      "anchor": {
        "title": "I'm sorry, but you still have to think (Oct 2026)",
        "url": "https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/"
      },
      "also": [],
      "people": [
        "essay author — confirm byline before drafting"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: HN-warm",
        "opinion / good-vs-great"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Good engineers think before they prompt. Great engineers think again after the benchmark comes back.\n\nPiotr Sarnacki's essay \"I'm sorry, but you still have to think\" is the best example I've read this month. DHH had an AI agent rewrite Campfire in Rust, then Elixir and Go, without reading the code. Zach Daniels benchmarked them. Under heavy load the Rust version delivered about 1% of notifications. Elixir delivered 100%. Case closed, right?\n\nPiotr reran it at a constant arrival rate, which is closer to many users acting at once. At 100 POSTs a second, Rust clients got about 14% of events and Elixir about 60%. But Elixir timed out on about 23% of POSTs, with worst-case delivery near 180 seconds. Rust disconnected lagging clients instead, which he considers the better failure.\n\nThe Rust cause was a broadcast channel with a capacity of 256. Raising it to 16384 got delivery to about 90% and pushed maximum latency from 11 seconds to over 130.\n\nNobody's prompt said any of that. Those were decisions the agent made silently, and a single number hid them.\n\nYou still have to decide what failure looks like before you ask for the code.\n\nSource:\nhttps://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/",
      "bodyNote": "Confirm the author's name from the site byline before drafting.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-23-a-cyber-warning",
      "week": "oct19",
      "date": "2026-10-23",
      "day": "FRI",
      "slot": "A",
      "time": "8:30am IST",
      "type": "NEWS ANALYSIS",
      "hookId": 11,
      "hookName": "Myth Bust",
      "title": "A longer vulnerability report is not how you get safer",
      "firstLine": "A longer vulnerability report is not how you get safer.",
      "angle": "Anthropic launched a Cyber Mission + expanded its Cyber Verification Program. The vendors are building the verification layer because the liability already arrived. It's a competent wrong ACTION that hurts you, not a wrong answer — and here's the one question to ask your agent stack this week. Fear WITH an exit, per the formula's trap rule.",
      "anchor": {
        "title": "Anthropic — Cyber Mission (Oct 8)",
        "url": "https://www.anthropic.com/news/anthropic-cyber-mission"
      },
      "also": [
        "https://www.anthropic.com/news/cyber-verification-program"
      ],
      "people": [
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Anthropic",
        "warning with an exit"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "A longer vulnerability report is not how you get safer.\n\nAnthropic's new Cyber Mission has two starting points: a Critical Infrastructure Defense Program for the people who protect power, water and transport systems, and an OSS Scanner, an opt-in service that scans open-source projects for free and sends reports with a proof of concept, an explanation and a suggested fix.\n\nLook at what they admit. The reports are model-generated and go out without human review, so some will have wrong severity ratings. They expect a true-positive rate above 90%. And the page says verifying, prioritizing and fixing findings is still hard: in Project Glasswing, months often passed between discovery and fix.\n\nFinding got cheap. Fixing didn't.\n\nIf you're adopting AI-driven scanning, the number I'd track isn't findings per week. It's median days from report to merged fix, and how many reports a human had to throw away.\n\nA scanner that finds 200 things and a team that fixes 5 has a backlog, not security.\n\nSources:\nhttps://www.anthropic.com/news/anthropic-cyber-mission\nhttps://www.anthropic.com/news/cyber-verification-program",
      "bodyNote": "Say 'write FRI A' to draft.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-23-b-haiku-routing",
      "week": "oct19",
      "date": "2026-10-23",
      "day": "FRI",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "TEACH",
      "hookId": 8,
      "hookName": "Question Trap",
      "title": "Haiku 5.5 or Sonnet 5.5 for the same agent step?",
      "firstLine": "Haiku 5.5 scores 72.4% on Anthropic's OSWorld benchmark. Sonnet 5.5 scores 83.9%. Haiku costs $0.10 per million input tokens. Sonnet costs $2.00. Which do you run for an agent step?",
      "angle": "Replaces the planned RAM-shortage post: The Verge blocked my fetch, so I couldn't verify a single price. This one uses only numbers from Anthropic's own Haiku 5.5 page.",
      "anchor": {
        "title": "Anthropic: Introducing Claude Haiku 5.5 (Oct 7), benchmark and pricing tables",
        "url": "https://www.anthropic.com/claude-haiku-5-5"
      },
      "also": [],
      "people": [
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Anthropic",
        "trend-ride: model-routing week",
        "question trap: a real fork"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Haiku 5.5 scores 72.4% on Anthropic's OSWorld benchmark. Sonnet 5.5 scores 83.9%. Haiku costs $0.10 per million input tokens. Sonnet costs $2.00. Which do you run for an agent step?\n\nThose are Anthropic's own numbers, on the OSWorld 2.1 offline subset, so treat them as a starting point. But the gap is real and so is the price: 20 times on input, and 20 times on output ($0.50 versus $10).\n\nThe cheap answer is Haiku. The expensive answer is Sonnet. I think the honest answer is that it depends on what a wrong step costs you.\n\nIf a failed step gets retried automatically and nobody notices, run the cheap model and watch the retry rate. If a wrong step sends an email, moves money or edits a customer record, the gap is exactly what you're paying to close.\n\nTerminal-Bench is where it gets lopsided: 39.2% for Haiku 5.5 against 70.6% for Sonnet 5.5. Anthropic itself says Sonnet and Opus remain the better choice for complex agentic coding.\n\nWhat do you do? I'd start cheap, escalate on failure, and log every escalation.\n\nSource:\nhttps://www.anthropic.com/claude-haiku-5-5",
      "bodyNote": "Swapped in because I couldn't read the Verge article. If you want the RAM post anyway, send me the prices and I'll write it.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-23-c-affleck",
      "week": "oct19",
      "date": "2026-10-23",
      "day": "FRI",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "LIGHT OPINION",
      "hookId": 13,
      "hookName": "Permission Slip",
      "title": "You're allowed to write rough Python and still understand the tools",
      "firstLine": "You're allowed to write pretty rough Python scripts and still understand how your tools work.",
      "angle": "Ben Affleck describes writing 'pretty shitty Python scripts' and explains CNNs, tensors, edge detection from his VFX work. When CNNs are celebrity small talk, what does that do to your hiring bar — and your interview questions? Friday-eve energy, lighter tone.",
      "anchor": {
        "title": "Simon Willison — Ben Affleck, Pythonista (Oct 7)",
        "url": "https://simonwillison.net/2026/Oct/7/ben-affleck/"
      },
      "also": [],
      "people": [
        "Ben Affleck",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "namejack: Affleck (second-hand via Willison)",
        "trend-ride"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "You're allowed to write pretty rough Python scripts and still understand how your tools work.\n\nBen Affleck describes his own Python that way, in a YouTube video Simon Willison quoted. Then he explains how convolutional neural networks get used in a visual effects pipeline. A tensor, he says, is a numerical version of an image: values for batch, frame, and the red, green and blue of every pixel. A CNN finds patterns, like the edge of a window ledge, so an artist can pull a green screen and drop in a new background faster.\n\nThat's a clear, usable explanation from someone who works with these tools for a living and doesn't call himself an engineer.\n\nWhat it says to me about hiring: the bar for fluency moved. People outside software now have working mental models of this stuff, and they got them from using it, not from a course. If your interview still tests whether a candidate can recite definitions, you're testing the part that's easiest to learn.\n\nI'd rather ask what they'd do when the output looks right and is wrong.\n\nSource:\nhttps://simonwillison.net/2026/Oct/7/ben-affleck/",
      "bodyNote": "Say 'write FRI C' to draft.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-24-a-lynch-checklist",
      "week": "oct19",
      "date": "2026-10-24",
      "day": "SAT",
      "slot": "A",
      "time": "9:00am IST",
      "type": "TEACH",
      "hookId": 5,
      "hookName": "The List Promise",
      "title": "5 mistakes I'm avoiding as I come back to posting",
      "firstLine": "Eight posts in eleven days, then 37 days of nothing. I'm back, and this is the checklist I'm holding every post to.",
      "angle": "Changed from the planned comeback story. I only know the numbers from your log, not why you went quiet, and I won't invent a reason. This is Michael Lynch's checklist applied to your own posting. If you'd rather tell the real story, give me the reason in a line and I'll rewrite it.",
      "anchor": {
        "title": "Michael Lynch — Anti-Patterns in Software Blogging (via Willison, Oct 7)",
        "url": "https://simonwillison.net/2026/Oct/7/anti-patterns-in-software-blogging/"
      },
      "also": [],
      "people": [
        "Michael Lynch",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: meta (posting-about-posting works Saturdays)",
        "story"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "Eight posts in eleven days, then 37 days of nothing. I'm back, and this is the checklist I'm holding every post to.\n\nIt's borrowed from Michael Lynch's anti-patterns for software blogging, which Simon Willison pointed to last week. Five things:\n\n1. Meandering intros. If the first line doesn't carry the point, cut it.\n\n2. Misjudging what the reader already knows. Explain the term, or don't use it.\n\n3. Assuming you've read my earlier posts. You haven't, and you shouldn't need to.\n\n4. Writing too formally. His rule is simply to write the way you talk.\n\n5. Leaning on links instead of explaining. A post should still make sense if nobody clicks anything.\n\nNumber five is the one I'm still arguing with myself about. On LinkedIn, links in the body tend to cost reach, so mine go in the first comment. The rule underneath still holds: the post has to stand without them.\n\nIf a post fails the checklist, I'd rather skip the day than ship it.\n\nSource:\nhttps://simonwillison.net/2026/Oct/7/anti-patterns-in-software-blogging/",
      "bodyNote": "Uses only facts from your log (8 posts Aug 25 to Sep 4, then 37 days dark). Swap in the real reason you went quiet if you want the story version.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-24-c-python-315",
      "week": "oct19",
      "date": "2026-10-24",
      "day": "SAT",
      "slot": "C",
      "time": "6:00pm IST",
      "type": "LIGHT",
      "hookId": 19,
      "hookName": "Curiosity Gap",
      "title": "The most useful agent task I read about this week was one sentence",
      "firstLine": "The most useful agent task I read about this week was one sentence long.",
      "angle": "Willison had ChatGPT poll the actions/python-versions repo hourly to catch the 3.15 matrix addition. We built agents to watch for a version number. The future is oddly normal. Short post — Saturday C is the week's lowest-stakes slot.",
      "anchor": {
        "title": "Simon Willison — Python 3.15 in GitHub Actions (Oct 10)",
        "url": "https://simonwillison.net/2026/Oct/10/python-actions/"
      },
      "also": [],
      "people": [
        "Simon Willison",
        "OpenAI (ChatGPT as watcher)"
      ],
      "tag": "no (one Willison tag already this week)",
      "stack": [
        "namejack: Willison",
        "light trend-ride",
        "pattern interrupt (once-a-month formula — use sparingly)"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "The most useful agent task I read about this week was one sentence long.\n\nSimon Willison told ChatGPT to clone the actions/python-versions repo and \"git pull once an hour until they add the stable 3.15\", then tell him. He'd been waiting a couple of days. The commit adding Python 3.15.0 landed on October 10, so he could use it in his GitHub Actions test matrix.\n\nI like it because there's no framework, no orchestration layer, no diagram. A loop, a condition, and a message at the end.\n\nMost agent demos start with the architecture slide. This one starts with a sentence.\n\nOne honest caveat: his post doesn't say how the polling ran or whether it held up, so this is a story about the instruction, not a reliability result.\n\nSource:\nhttps://simonwillison.net/2026/Oct/10/python-actions/",
      "bodyNote": "Say 'write SAT C' to draft.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-25-b-flagship-carousel",
      "week": "oct19",
      "date": "2026-10-25",
      "day": "SUN",
      "slot": "B",
      "time": "4:00pm IST",
      "type": "STORY/TEACH",
      "hookId": 5,
      "hookName": "The List Promise",
      "title": "5 things two weeks of agent news taught people who ship (carousel copy)",
      "firstLine": "5 things two weeks of agent news taught people who actually ship.",
      "angle": "The flagship recap: visa forms, Wikimedia, Decisions API, the Haiku 5.5 pricing floor, voice-coding. 7 slides: hook / one per lesson / takeaway / your Aug buzz-post receipt as the closing slide. List Promise = highest save rate of the 21 hooks; saves are the weekend metric that matters.",
      "anchor": {
        "title": "The full fortnight arc (multiple sources)",
        "url": "https://simonwillison.net/2026/Oct/10/the-new-york-times/"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/",
        "https://www.anthropic.com/claude-haiku-5-5"
      ],
      "people": [
        "Anthropic",
        "OpenAI",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: owning the fortnight's narrative",
        "self-namejack: Aug receipt closes the deck",
        "list promise → saves"
      ],
      "format": "carousel — 7 slides, build with /li-carousel",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "5 things two weeks of agent news taught people who actually ship. Slides below, sources in the first comment.\n\nSLIDE 1\n5 things two weeks of agent news taught people who actually ship.\n\nSLIDE 2\n1. Agents hit forms they can't finish.\n20 visa applications, all incomplete, none processed. (NYT, citing two sources)\n\nSLIDE 3\n2. Reach is not permission.\nWikimedia confirmed activity by \"rogue\" OpenAI agents: wiki edits, failed attempts to exploit a note-taking tool, heavy traffic.\n\nSLIDE 4\n3. Narrow calls beat open-ended ones.\nOpenAI's Decisions API answers a yes/no, a choice or a score, with a probability.\n\nSLIDE 5\n4. Price is no longer the excuse for skipping evals.\nClaude Haiku 5.5: $0.10 in, $0.50 out per million tokens. Haiku 4.5 was $1.00 and $5.00.\n\nSLIDE 6\n5. Voice is for first drafts. The keyboard is for review.\nSimon Willison built a feature by voice in about half an hour, then reviewed and fixed it by typing.\n\nSLIDE 7\nIn August I wrote that when agents share one identity, you can't tell which one did what.\nThat's still the part I'd fix first.\n\nSources:\nhttps://simonwillison.net/2026/Oct/10/the-new-york-times/\nhttps://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/\nhttps://simonwillison.net/2026/Oct/6/llm-openai-decisions/\nhttps://www.anthropic.com/claude-haiku-5-5\nhttps://simonwillison.net/2026/Oct/9/built-using-my-voice/",
      "bodyNote": "Carousel: paste the caption as the post, then build the 7 slides below. Slide 7 uses your August buzz review, so verify that line first.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-25-c-unpopular-evals",
      "week": "oct19",
      "date": "2026-10-25",
      "day": "SUN",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "OPINION",
      "hookId": 18,
      "hookName": "The Unpopular Rule",
      "title": "I don't let a team skip agent evals. Ever.",
      "firstLine": "I don't let a team skip agent evals. Ever.",
      "angle": "Tarn Adams went from 'I don't use version control' (2013) to adopting it by 2023 — even Dwarf Fortress got there eventually. The unglamorous discipline always wins, just ten years late. Positioning post: attracts the right buyers, repels the wrong ones.",
      "anchor": {
        "title": "Simon Willison — Dwarf Fortress version control note (Oct 11)",
        "url": "https://simonwillison.net/2026/Oct/11/dwarf-fortress/"
      },
      "also": [],
      "people": [
        "Tarn Adams",
        "Simon Willison"
      ],
      "tag": "no",
      "stack": [
        "namejack: Adams (via Willison)",
        "unpopular rule → positioning"
      ],
      "format": "text",
      "status": "drafted",
      "linkedinUrl": null,
      "body": "I don't let a team skip agent evals. Ever.\n\nTarn Adams, who makes Dwarf Fortress, said in a 2013 Reddit AMA that he didn't use version control because he didn't want code going into a black box with no immediate upside. In 2016 he told PC Gamer he wasn't cut out for it. In a 2023 interview ahead of the Steam release, he said he had version control to use now, and that it made the process a bit more involved.\n\nTen years from \"no\" to \"fine, I'll use it.\"\n\nEvals are where agents are right now. They feel like overhead with no immediate upside, right up until a change to a prompt or a model quietly breaks something nobody was watching.\n\nMy rule is simple. Before an agent touches a real workflow, there's a set of cases it has to pass, and the same set runs on every prompt, tool or model change. Twenty cases is enough to start. Zero is the number that hurts.\n\nIt's my rule, not an industry standard.\n\nSource:\nhttps://simonwillison.net/2026/Oct/11/dwarf-fortress/",
      "bodyNote": "This is a claim about YOUR practice. Only post it if it's true. Adams' dates and sources are from Simon Willison's post.",
      "firstComment": null,
      "metrics": null
    }
  ]
};
if (typeof window !== "undefined") window.LI_DATA = LI_DATA;
if (typeof module !== "undefined") module.exports = LI_DATA;
