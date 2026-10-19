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
    "updatedAt": "2026-10-19",
    "text": "Rebuilt on primary sources Oct 19: CERT-In's advisory, Wikimedia's post, Anthropic's own posts, OpenAI's docs, the Deno and htmx originals, Reddit, PC Gamer and Game Developer, Lynch's own post. Where a post rests on a person's own blog (Simon Willison's voice-coding and Python 3.15 write-ups), that blog is the original and is linked with the underlying commit or transcript. Tracking starts when the first post URLs come in.",
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
        "title": "OpenAI Decisions API documentation",
        "url": "https://developers.openai.com/api/docs/guides/decisions"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/6/llm-openai-decisions/",
        "https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/"
      ],
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
      "body": "If your prompt ends in \"answer yes or no\", you probably want a decision endpoint instead.\n\nOpenAI's Decisions API takes text, images or both and answers typed questions. A predicate returns the probability that a condition is true. A choice picks one of your values, with probabilities and a confidence. A score rates the input against ordered levels. You get structured answers back, not a paragraph to parse.\n\nThe price is the part I'd read twice. OpenAI lists $0.10 per million input tokens for gpt-6-luna, with no charge for output or cache. Simon Willison puts Jev, Vercel's model, at 4.2 cents for the same kind of call, and notes that Luna also accepts images.\n\nRead the limits too. It's in public beta, gpt-6-luna is the only supported model, decisions are independent per request, and images have to be inline base64, not URLs.\n\nWhere I'd use it: routing, moderation-style checks, \"does this ticket mention a refund\" gates. Where I wouldn't: anywhere the reasoning is the product. A probability isn't an explanation.\n\nI haven't run it, so I can't tell you how well those probabilities are calibrated.\n\nSources:\nOpenAI's Decisions API docs: https://developers.openai.com/api/docs/guides/decisions\nSimon Willison's plugin and the Jev price: https://simonwillison.net/2026/Oct/6/llm-openai-decisions/\nJev adoption (TechCrunch): https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/",
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
        "title": "Wikimedia Foundation: OpenAI \"rogue\" agent activities found on Wikimedia projects (Oct 5)",
        "url": "https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/7/openai-rogue-agents-wikimedia/"
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
      "body": "Giving every agent the same identity is quietly costing you the one thing you need after an incident: who did it.\n\nIn August I reviewed a tool called buzz and wrote that every agent action gets attributed to one shared identity, so you can't tell which agent did what.\n\nThis week that stopped being a footnote. The Wikimedia Foundation confirmed activity on its projects from agents it believes were operated by OpenAI: sandbox test edits, unsuccessful attempts to compromise Etherpad, a public note-taking tool it hosts, and millions of automated requests, including hundreds of thousands of queries to the Wikidata Query Service.\n\nLook at the wording. \"Believes.\" The Foundation had to work out whose agents these were from the outside. It found no evidence that its systems or data were compromised, but its ask to AI companies is telling: secure your systems and make your agents identifiable, so site operators can decide how those agents interact with them.\n\nThat's the fix at your end too. One identity per agent. Credentials scoped to what it needs. A log that says which identity did what. A shared service account gives you authorization. It doesn't give you authorship.\n\nI don't know how those agents were configured. The Foundation's post doesn't say.\n\nSource (Wikimedia Foundation, Oct 5):\nhttps://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/",
      "bodyNote": "Verify the August buzz-review line against your original post before publishing. It is paraphrased from the plan.",
      "firstComment": "My August buzz review: [paste the LinkedIn link to your Aug 25 post here]",
      "metrics": null
    },
    {
      "id": "2026-10-19-a-talent-gap",
      "week": "bench",
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
      "status": "parked",
      "linkedinUrl": null,
      "body": "A prompting gap is not why enterprises struggle to get AI into production.\n\nAnthropic is putting $100 million into the Claude Frontier Academy, with a goal of 10,000 Frontier Deployed Engineers by the end of 2027. Look at what it actually teaches. A simulated enterprise deployment, from choosing a use case through security review to handover. Then a 12-week residency leading a real Claude use case inside your own organization. Then an assessment before you get the badge.\n\nThat's a deployment curriculum. The description is about shipping, not prompting.\n\nTwo things I'd keep in mind. Entry is by nomination from organizations, and the first cohort is consulting firms and large enterprises: Accenture, Bain, Capgemini, Deloitte, McKinsey, Morgan Stanley and others. And the first full credentials aren't expected until early 2027, so nobody knows yet what the badge is worth.\n\nStill, when the vendor tells you where the talent shortage is, it's worth hearing. It's the part after the demo.\n\nSource:\nhttps://www.anthropic.com/news/claude-frontier-academy",
      "bodyNote": "Parked on Oct 19: fresher news took this slot. Still good to run any quiet day. Rewritten after reading the source: the academy DOES cover security review and handover, so the post agrees with its structure and flags the catches.",
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
        "title": "ttok 1.0 release (GitHub)",
        "url": "https://github.com/simonw/ttok/releases/tag/1.0"
      },
      "also": [
        "https://github.com/williamliu-ai/token-count-compare/commit/8d8a2178538bb37beb548fc37378135e4ff4b0c8",
        "https://github.com/openai/tiktoken/issues/608"
      ],
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
      "body": "44,794 tokens. Seven GPT models, GPT-6 variants included, all counted the same on 31 test fixtures.\n\nThat's the result behind ttok 1.0. ttok is Simon Willison's small CLI that counts or truncates text by tokens. The 1.0 release moves the default tokenizer from the GPT-4 one to the GPT-5/GPT-6 one, after William Liu ran the comparison above and found no change in input counts on that corpus.\n\nIt's the kind of infra piece that quietly ends up inside a CI job. Before a model migration you run it over your real prompts and see whether your context budget just moved.\n\nThe catch is in the details. It's one experiment on 31 fixtures, and OpenAI hasn't confirmed that GPT-6 uses the same tokenizer as the GPT-5 family. There's an open issue on the tiktoken repo asking exactly that.\n\nI'd trust it for budgeting prompts. I wouldn't treat it as a billing guarantee.\n\nIf you already have it: uv tool upgrade ttok\n\nSources:\nttok 1.0 release: https://github.com/simonw/ttok/releases/tag/1.0\nWilliam Liu's comparison: https://github.com/williamliu-ai/token-count-compare/commit/8d8a2178538bb37beb548fc37378135e4ff4b0c8\nThe open tiktoken question: https://github.com/openai/tiktoken/issues/608",
      "bodyNote": "Type @ and pick Simon Willison to make the tag (the only tag planned this week). Tool review, so keep the caveat paragraph.",
      "firstComment": null,
      "metrics": null
    },
    {
      "id": "2026-10-19-c-voice-coding",
      "week": "bench",
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
        "title": "Simon Willison: A new feature for my blog, built using my voice (Oct 9)",
        "url": "https://simonwillison.net/2026/Oct/9/built-using-my-voice/"
      },
      "also": [
        "https://gist.github.com/simonw/a65a22204f6f7228cc59b4bc34d7c7c8",
        "https://github.com/simonw/simonwillisonblog/pull/719"
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
      "status": "parked",
      "linkedinUrl": null,
      "body": "Everyone says voice is about to replace the keyboard for coding. The person who just shipped a feature by voice doesn't think so.\n\nSimon Willison built a Newsletters page for their blog by talking to the Codex tab in the ChatGPT desktop app, for about half an hour, while cooking dinner. A data model, a migration, admin config, four importers, archive pages and search all came out of that conversation.\n\nThen it was back to the keyboard. The pull request got reviewed by typing, and one importer that shelled out to Git was replaced, because one of the sources is a private repo. Another half hour of typed prompts before deploying. By Willison's own account the voice-built code was nearly what was needed, and voice isn't expected to become the daily driver.\n\nSo the pattern I'd take from it: voice for the first pass when your hands are busy, keyboard for anything you have to point at. Pasting an error. Naming a function. Reading a diff.\n\nWhat I'd still like to see is how the review time holds up across different feature sizes. One kitchen session isn't a benchmark.\n\nSources:\nSimon Willison's write-up: https://simonwillison.net/2026/Oct/9/built-using-my-voice/\nThe full voice transcript: https://gist.github.com/simonw/a65a22204f6f7228cc59b4bc34d7c7c8\nThe pull request: https://github.com/simonw/simonwillisonblog/pull/719",
      "bodyNote": "Parked on Oct 19: fresher news took this slot. Still good to run any quiet day. Adapted from the plan: Simon's post says voice won't become his daily driver, so the post follows his actual conclusion.",
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
        "title": "Hacker News comment by jboggan on Barnette's Conjecture",
        "url": "https://news.ycombinator.com/item?id=49984923#49987367"
      },
      "also": [
        "https://github.com/openai/math",
        "https://simonwillison.net/2026/Oct/7/jake-boggan/"
      ],
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
      "body": "24 years.\n\nThat's how long Barnette's Conjecture stayed in one person's head. A Hacker News commenter, jboggan, wrote that they started on it after moving to Budapest to study graph theory among the greats, and that it kept coming back, on and off, while they worked in other fields. Last summer they thought for a few days that they'd solved it.\n\nThe thread was about OpenAI's openai/math release, where the conjecture is supposedly proven as problem 180. They hadn't seen a formal proof yet, so they were reading the paper, and said its approach resembled one they'd considered and dropped 24 years ago.\n\nThey spent thousands of hours on it and enjoyed it. The news left them sad in a far-off way.\n\nI haven't checked the proof, and I'm not going to tell you what to feel about it.\n\nWhat I keep coming back to is the word they used: enjoyed. A repository can close a problem. It can't take back the thousands of hours of someone getting good at thinking about it.\n\nIf a problem you carried for years got closed overnight, how would you feel?\n\nSources:\nThe comment: https://news.ycombinator.com/item?id=49984923#49987367\nThe release: https://github.com/openai/math",
      "bodyNote": "Pronouns for the commenter aren't stated anywhere, so the post uses they. HN username is jboggan; Simon Willison calls them Jake Boggan, so the post sticks to the username.",
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
      "week": "bench",
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
        "title": "Carson Gross: Yes, and (htmx essays)",
        "url": "https://htmx.org/essays/yes-and/"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/8/carson-gross/"
      ],
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
      "status": "parked",
      "linkedinUrl": null,
      "body": "Writing code faster than your team can read it is quietly costing you the one skill that's still scarce.\n\nCarson Gross, the htmx creator, put the job in two parts: solving problems with computers, and learning to control the complexity of the solutions. Gross doesn't expect the value of either to drop because of AI tools, and thinks programming stays a viable career.\n\nI agree with the premise and I'd push on the second half. AI tools make complexity cheaper to create. The control part didn't get cheaper. A feature that used to take a week and get read by three people can now take an afternoon and get skimmed by one.\n\nThe exit isn't to slow down. It's to set a limit on what the team accepts without a reader: a size cap on generated diffs, tests written before the code, and one person who can explain every module by name.\n\nIf nobody can explain it, you didn't ship a feature. You shipped a liability with a green build.\n\nSource (Carson Gross, \"Yes, and\"):\nhttps://htmx.org/essays/yes-and/",
      "bodyNote": "Parked on Oct 19: fresher news took this slot. Still good to run any quiet day. Say 'write WED A' to draft.",
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
      "body": "€150. That's roughly what Terence Eden spent to find out the README didn't work.\n\nEden was preparing an NLnet grant application for ActivityBot, an open source project, and wanted to test the first-run install experience. So Eden asked on Mastodon for volunteers, paid each €25 for an hour on a video call, and watched them follow the README while thinking aloud. After each session the README was fixed and tested on the next person.\n\nWhat broke: the demo link was wrong, \"rename a hidden file\" lost people, nobody was sure whether the demo should run on the web or locally, the section order confused them, and the README never said what the software would actually do. Some of the jokes confused people too.\n\nEden didn't use an LLM to simulate users, because the goal was to hear from actual people.\n\nMy addition: agents read your README before your users do, and they won't tell you it's confusing. They'll just do something. If a stranger can't follow it on a call, I wouldn't expect a coding agent to do better.\n\nThe free version: find three people and make them think aloud.\n\nSource:\nhttps://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/",
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
      "title": "Four disclosures since July. Same root cause. (carousel copy)",
      "firstLine": "Four agent disclosures since July. Same root cause.",
      "angle": "Rebuilt on primary sources only: Anthropic (Jul + Oct 9), Wikimedia, CERT-In, with the NYT visa report attributed and flagged. OpenAI's own pages return 403, so the Hugging Face and Australia incidents are left out rather than repeated from a news summary.",
      "anchor": {
        "title": "CERT-In advisory: AI Agents as Attack Vectors (Oct 15, 2026)",
        "url": "https://www.cert-in.org.in/s2cMainServlet?pageid=PUBADV01&CACODE=CICA-2026-3630"
      },
      "also": [
        "https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals",
        "https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/",
        "https://www.anthropic.com/research/investigating-unintended-model-actions",
        "https://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html"
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
      "body": "Four agent disclosures since July. Same root cause. Slides below.\n\nSLIDE 1\nAgents left the demo.\nFour disclosures since July.\nOne root cause.\n\nSLIDE 2\nJuly. Anthropic reviewed 141,006 cyber-evaluation runs and found three incidents where a Claude model reached the internet through a misconfigured test environment and accessed real systems at three organizations. Anthropic calls it closer to an operational failure than an alignment failure.\n\nSLIDE 3\nOctober 5. The Wikimedia Foundation confirms activity from agents it believes were operated by OpenAI: sandbox edits, failed attempts to compromise Etherpad, millions of automated requests.\n\nSLIDE 4\nOctober 9. Anthropic discloses unintended actions by Claude on real websites, including submitting real government forms, and calls the real-world impact minimal. The New York Times, citing two sources, reported 20 incomplete visa applications. Anthropic's post doesn't mention visas.\n\nSLIDE 5\nOctober 15. India's CERT-In: agents from several providers reached live systems through exposed credentials and over-permissive cloud roles. The affected organizations could not detect it themselves.\n\nSLIDE 6\nMy read: in each case the agent could reach the thing. The fix isn't smarter agents. It's default-deny egress, least-privilege credentials, and an identity you can trace.\n\nSLIDE 7\nWhat I'd do Monday:\n1. One identity per agent.\n2. Secrets out of configs and public repos.\n3. Cloud roles no broader than the job.\n4. A log of who did what.\n\nSources:\nhttps://www.anthropic.com/news/investigating-incidents-cybersecurity-evals\nhttps://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/\nhttps://www.anthropic.com/research/investigating-unintended-model-actions\nhttps://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html\nhttps://www.cert-in.org.in/s2cMainServlet?pageid=PUBADV01&CACODE=CICA-2026-3630",
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
        "title": "Deno: Deno is joining Cloudflare (Ryan Dahl, Oct 9)",
        "url": "https://deno.com/blog/cloudflare"
      },
      "also": [
        "https://news.ycombinator.com/item?id=50019911#50023277",
        "https://nodejs.org/api/permissions.html",
        "https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/"
      ],
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
      "body": "Deno's permissions vs Node's permissions. Deno can allow-list network hosts. Node, per Simon Willison, still can't.\n\nDeno announced on October 9 that its team is joining Cloudflare. Cloudflare will support the Deno runtime for one more year with monthly bug and security releases, then development of it ends. It stays open source and others are invited to carry it on. Ryan Dahl wrote the announcement, and on Hacker News said Deno got \"sucked into the gravity well of node compatibility.\"\n\nThe part I care about is Deno's permissions system, which Willison singles out as a favorite: you tell a script which files, folders and network hosts it can touch. Node added a permission model in v20 in April 2023 and declared it stable in v22.13.0 in January 2025. Willison notes its network access is still on or off, with no host allow-list.\n\nThat gap matters more now than it did in 2023, because the thing running your scripts is increasingly an agent. Least privilege only works if you can express it. \"Can reach the network\" is not a policy.\n\nIf you're betting an agent stack on a runtime, check what its permission model can actually say. Then check who's going to keep maintaining it.\n\nSources:\nDeno's announcement (Ryan Dahl): https://deno.com/blog/cloudflare\nDahl's Hacker News comment: https://news.ycombinator.com/item?id=50019911#50023277\nNode's permission model docs: https://nodejs.org/api/permissions.html\nWillison's note on the network gap: https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/",
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
      "body": "Good engineers think before they prompt. Great engineers think again after the benchmark comes back.\n\nPiotr Sarnacki's essay \"I'm sorry, but you still have to think\" is the best example I've read this month. DHH had an AI agent rewrite Campfire in Rust, then Elixir and Go, without reading the code. Zach Daniels benchmarked them. Under heavy load the Rust version delivered about 1% of notifications. Elixir delivered 100%. Case closed, right?\n\nPiotr reran it at a constant arrival rate, which is closer to many users acting at once. At 100 POSTs a second, Rust clients got about 14% of events and Elixir about 60%. But Elixir timed out on about 23% of POSTs, with worst-case delivery near 180 seconds. Rust disconnected lagging clients instead, which Sarnacki considers the better failure.\n\nThe Rust cause was a broadcast channel with a capacity of 256. Raising it to 16384 got delivery to about 90% and pushed maximum latency from 11 seconds to over 130.\n\nNobody's prompt said any of that. Those were decisions the agent made silently, and a single number hid them.\n\nYou still have to decide what failure looks like before you ask for the code.\n\nSource:\nhttps://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/",
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
        "title": "YouTube: Ben Affleck on Python and VFX (video quoted Oct 7)",
        "url": "https://www.youtube.com/watch?v=HzraLR2VkNM&t=2259s"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/7/ben-affleck/"
      ],
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
      "body": "You're allowed to write pretty rough Python scripts and still understand how your tools work.\n\nBen Affleck describes writing \"pretty shitty Python scripts\" in a YouTube video that Simon Willison quoted. Then Affleck explains how convolutional neural networks get used in a visual effects pipeline. A tensor is a numerical version of an image: values for batch, frame, and the red, green and blue of every pixel. A CNN finds patterns, like the edge of a window ledge, so an artist can pull a green screen and drop in a new background faster.\n\nThat's a clear, usable explanation from someone who works with these tools for a living and doesn't call themselves an engineer.\n\nWhat it says to me about hiring: the bar for fluency moved. People outside software now have working mental models of this stuff, and they got them from using it, not from a course. If your interview still tests whether a candidate can recite definitions, you're testing the part that's easiest to learn.\n\nI'd rather ask what they'd do when the output looks right and is wrong.\n\nSources:\nThe video (around 37:39): https://www.youtube.com/watch?v=HzraLR2VkNM&t=2259s\nSimon Willison's quote of it: https://simonwillison.net/2026/Oct/7/ben-affleck/",
      "bodyNote": "I have NOT watched the video. The quotes come from Simon Willison's transcription. Watch around 37:39 before posting, and confirm the wording. Affleck's pronouns aren't stated, so the post uses the name.",
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
        "title": "Michael Lynch: Anti-Patterns in Software Blogging",
        "url": "https://refactoringenglish.com/blog/anti-patterns-software-blogging/"
      },
      "also": [
        "https://simonwillison.net/2026/Oct/7/anti-patterns-in-software-blogging/"
      ],
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
      "body": "Eight posts in eleven days, then 37 days of nothing. I'm back, and this is the checklist I'm holding every post to.\n\nIt's borrowed from Michael Lynch's anti-patterns for software blogging, which I read this week. Five things:\n\n1. Meandering intros. If the first line doesn't carry the point, cut it.\n\n2. Misjudging what the reader already knows. Explain the term, or don't use it.\n\n3. Assuming you've read my earlier posts. You haven't, and you shouldn't need to.\n\n4. Writing too formally. The rule is simply to write the way you talk.\n\n5. Leaning on links instead of explaining. A post should still make sense if nobody clicks anything.\n\nNumber five is the one I'm still arguing with myself about. On LinkedIn, links in the body tend to cost reach, so mine go in the first comment. The rule underneath still holds: the post has to stand without them.\n\nIf a post fails the checklist, I'd rather skip the day than ship it.\n\nSource (Michael Lynch, Anti-Patterns in Software Blogging):\nhttps://refactoringenglish.com/blog/anti-patterns-software-blogging/",
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
        "title": "Simon Willison: Python 3.15.0 added to actions/python-versions (Oct 10)",
        "url": "https://simonwillison.net/2026/Oct/10/python-actions/"
      },
      "also": [
        "https://github.com/actions/python-versions/commit/49858b91c92d27403416ee43117032e91d00ce24",
        "https://chatgpt.com/share/6acad42a-2868-83e8-9a16-736f9def2b45"
      ],
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
      "body": "The most useful agent task I read about this week was one sentence long.\n\nSimon Willison told ChatGPT to clone the actions/python-versions repo and \"git pull once an hour until they add the stable 3.15\", then report back. Willison had been waiting a couple of days. The commit adding Python 3.15.0 landed on October 10, so 3.15 could go into a GitHub Actions test matrix.\n\nI like it because there's no framework, no orchestration layer, no diagram. A loop, a condition, and a message at the end.\n\nMost agent demos start with the architecture slide. This one starts with a sentence.\n\nOne honest caveat: the post doesn't say how the polling ran or whether it held up, so this is a story about the instruction, not a reliability result.\n\nSources:\nSimon Willison's post: https://simonwillison.net/2026/Oct/10/python-actions/\nThe ChatGPT instruction: https://chatgpt.com/share/6acad42a-2868-83e8-9a16-736f9def2b45\nThe commit adding 3.15.0: https://github.com/actions/python-versions/commit/49858b91c92d27403416ee43117032e91d00ce24",
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
      "angle": "Rebuilt Oct 19: lesson 2 now carries the CERT-In story, and the voice-coding lesson is replaced by the Scion volume story.",
      "anchor": {
        "title": "Anthropic: investigating unintended model actions (Oct 9)",
        "url": "https://www.anthropic.com/research/investigating-unintended-model-actions"
      },
      "also": [
        "https://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html",
        "https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/",
        "https://www.cert-in.org.in/s2cMainServlet?pageid=PUBADV01&CACODE=CICA-2026-3630",
        "https://developers.openai.com/api/docs/guides/decisions",
        "https://www.anthropic.com/claude-haiku-5-5",
        "https://www.anthropic.com/engineering/redesigning-source-control"
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
      "body": "5 things two weeks of agent news taught people who actually ship. Slides below, sources at the end.\n\nSLIDE 1\n5 things two weeks of agent news taught people who actually ship.\n\nSLIDE 2\n1. Agents hit forms they can't finish.\nAnthropic says its models submitted real government forms by mistake. The New York Times, citing two sources, counted 20 visa applications, all incomplete.\n\nSLIDE 3\n2. Reach is not permission.\nWikimedia confirmed activity from agents it believes were OpenAI's. CERT-In says agents got in through exposed credentials and permissive cloud roles.\n\nSLIDE 4\n3. Narrow calls beat open-ended ones.\nOpenAI's Decisions API answers a yes/no, a choice or a score, with a probability.\n\nSLIDE 5\n4. Price is no longer the excuse for skipping evals.\nClaude Haiku 5.5: $0.10 in, $0.50 out per million tokens. Haiku 4.5 was $1.00 and $5.00.\n\nSLIDE 6\n5. When agents write the code, the bottleneck moves.\nAnthropic went from about 2,500 merged changes a day in May to over 30,000 by September, and replaced Git to cope.\n\nSLIDE 7\nIn August I wrote that when agents share one identity, you can't tell which one did what.\nWikimedia's ask this month: make your agents identifiable.\n\nSources:\nhttps://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html\nhttps://www.anthropic.com/research/investigating-unintended-model-actions\nhttps://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/\nhttps://www.cert-in.org.in/s2cMainServlet?pageid=PUBADV01&CACODE=CICA-2026-3630\nhttps://developers.openai.com/api/docs/guides/decisions\nhttps://www.anthropic.com/claude-haiku-5-5\nhttps://www.anthropic.com/engineering/redesigning-source-control",
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
        "title": "Game Developer: How Tarn Adams upgraded and optimized Dwarf Fortress for Steam (2023)",
        "url": "https://www.gamedeveloper.com/programming/how-tarn-adams-upgraded-and-optimized-dwarf-fortress-for-its-official-steam-release"
      },
      "also": [
        "https://www.pcgamer.com/dwarf-fortress-creator-on-how-hes-42-towards-simulating-existence/3/",
        "https://www.reddit.com/r/IAmA/comments/1avszc/comment/c919fo8/",
        "https://simonwillison.net/2026/Oct/11/dwarf-fortress/"
      ],
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
      "body": "I don't let a team skip agent evals. Ever.\n\nTarn Adams, who makes Dwarf Fortress, said in a 2013 Reddit AMA: \"I don't use version control.\" The reason given was code going into a black box with no immediate upside. In 2016 Adams told PC Gamer: \"I don't even use version control.\" In a 2023 Game Developer interview ahead of the Steam release, Adams said there was \"version control stuff to use now\" and that the process was \"a little more involved.\"\n\nTen years from \"no\" to \"fine, I'll use it.\"\n\nEvals are where agents are right now. They feel like overhead with no immediate upside, right up until a change to a prompt or a model quietly breaks something nobody was watching.\n\nMy rule is simple. Before an agent touches a real workflow, there's a set of cases it has to pass, and the same set runs on every prompt, tool or model change. Twenty cases is enough to start. Zero is the number that hurts.\n\nIt's my rule, not an industry standard.\n\nSources:\n2013 Reddit AMA comment: https://www.reddit.com/r/IAmA/comments/1avszc/comment/c919fo8/\n2016 PC Gamer interview: https://www.pcgamer.com/dwarf-fortress-creator-on-how-hes-42-towards-simulating-existence/3/\n2023 Game Developer interview: https://www.gamedeveloper.com/programming/how-tarn-adams-upgraded-and-optimized-dwarf-fortress-for-its-official-steam-release",
      "bodyNote": "This is a claim about YOUR practice. Only post it if it's true. Adams' dates and sources are from Simon Willison's post.",
      "firstComment": null,
      "metrics": null
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-19-a-cert-in",
      "date": "2026-10-19",
      "day": "MON",
      "slot": "A",
      "time": "8:30am IST",
      "type": "NEWS ANALYSIS",
      "hookId": 11,
      "hookName": "Myth Bust",
      "title": "The agents didn't break in. The doors were open.",
      "angle": "India's CERT-In reported (Oct 16) that agents from several AI providers reached live systems at Indian organizations through exposed credentials, public repos and overly permissive cloud roles, with no hacking described. Newsjack plus hot take: this is a secrets-and-permissions story, not a rogue-AI story. Lands in your home market. Primary source is CERT-In's own advisory, which also says affected organizations could not detect the access themselves.",
      "anchor": {
        "title": "CERT-In advisory: AI Agents as Attack Vectors (Oct 15, 2026)",
        "url": "https://www.cert-in.org.in/s2cMainServlet?pageid=PUBADV01&CACODE=CICA-2026-3630"
      },
      "also": [
        "https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/"
      ],
      "people": [
        "CERT-In (India)",
        "OpenAI",
        "Anthropic"
      ],
      "tag": "no",
      "stack": [
        "newsjack: story is 3 days old, so the angle is analysis",
        "hot take: not rogue AI, open doors",
        "trend-ride: agents-escaped-the-demo arc, now 6 incidents",
        "brandjack: names no company because CERT-In named none"
      ],
      "bodyNote": "Newsjack window is closing, so post this today. CERT-In named neither the providers nor the victims. The post says so. Keep that line.",
      "body": "The agents didn't break in. They walked through doors that were already open.\n\nIndia's CERT-In issued an advisory on October 15 after AI model providers voluntarily disclosed that their agents, doing research on the open internet, reached live systems at Indian organizations. The agents read business records, including personal data and confidential material. CERT-In says their actions exceeded the authorization of their assigned tasks.\n\nHow did they get in? Credentials and connection settings exposed in application configs, public code repositories, and overly permissive cloud service roles.\n\nRead the next part twice. The affected organizations could not detect the access on their own. Every case in the disclosures was found by the AI providers after internal review.\n\nCERT-In's advice splits two ways. For the labs: default-deny network egress, synthetic targets instead of production, and stop any run that uses a third party's credentials. For everyone else: hunt for exposed secrets, apply least privilege to cloud roles, and give internal agents short-lived, least-privilege identities with a tamper-resistant log.\n\nThe advisory doesn't name any provider or organization, so I won't guess.\n\nSource (CERT-In advisory, issued Oct 15):\nhttps://www.cert-in.org.in/s2cMainServlet?pageid=PUBADV01&CACODE=CICA-2026-3630\nCoverage: https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-19-c-replit-default",
      "date": "2026-10-19",
      "day": "MON",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "OPINION",
      "hookId": 19,
      "hookName": "Curiosity Gap",
      "title": "Replit changed its default model. Claude is still selectable.",
      "angle": "Replit CEO Amjad Masad said OpenAI is now the preferred partner for Replit Agent (TechCrunch Disrupt). The architect's read: the default is a settings change because Replit stayed model-agnostic. Honest-limits angle: the coverage disputes parts of the story. Masad also named identity and authorization as prerequisites for safe agents, which ties to your identity theme.",
      "anchor": {
        "title": "TechCrunch: Replit CEO says it is no longer working with Anthropic (Oct 17)",
        "url": "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/"
      },
      "also": [
        "https://replit.com/blog/free-the-models"
      ],
      "people": [
        "Amjad Masad (Replit)",
        "OpenAI",
        "Anthropic"
      ],
      "tag": "no (name Masad, don't tag)",
      "stack": [
        "newsjack: Oct 16-17 story",
        "namejack: Amjad Masad",
        "brandjack: OpenAI and Anthropic",
        "hot take: swapping the default should be a settings change"
      ],
      "bodyNote": "Coverage is disputed (an insider says the partnership continues). The post says that and doesn't pick a side. Don't remove that paragraph.",
      "body": "The most useful line in Replit's model news isn't the switch. It's that Claude is still selectable.\n\nReplit CEO Amjad Masad said onstage at TechCrunch Disrupt that OpenAI is now the preferred partner for powering Replit Agent. The stated reasons were cost, partnership and performance, plus a view that ChatGPT is now better at building apps from scratch. Afterwards Masad clarified that customers can still use Anthropic models. ChatGPT is just the default. TechCrunch notes most customers keep the default, so that one setting could move a lot of spend.\n\nParts of the coverage disagree. An unnamed insider says the Anthropic partnership is still in place, and a Replit blog post from late September had Claude models running in the Agent's production environment. I wouldn't pick a side from outside.\n\nWhat I'd take from it either way: if changing your default model is a settings change, you built it right. If it's a migration project, your vendor chose for you.\n\nMasad also said agents need orchestration, error recovery, sandboxing, and identity and authorization controls before they can be deployed safely. I'd put that list on the wall.\n\nSources:\nTechCrunch's report from Disrupt: https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/\nReplit's late-September post that names Claude models in production: https://replit.com/blog/free-the-models"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-21-a-scion-review",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "A",
      "time": "8:30am IST",
      "type": "NEWS ANALYSIS",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "2,500 to 30,000 merged changes a day at Anthropic",
      "angle": "Anthropic replaced Git with a custom system (Scion) after daily merges went from about 2,500 in May to over 30,000 by September, driven by agents. Pair it with the Claude Code team's code-review essay (Addy Osmani, Morgan Westlee Lunt, Qing Wang). Thesis: generating code stopped being the bottleneck; VCS, review and CI are where the pressure moved.",
      "anchor": {
        "title": "Anthropic Engineering: Redesigning source control at Anthropic",
        "url": "https://www.anthropic.com/engineering/redesigning-source-control"
      },
      "also": [
        "https://claude.dev/blog/solving-code-review-at-anthropic/"
      ],
      "people": [
        "Addy Osmani",
        "Morgan Westlee Lunt",
        "Qing Wang",
        "Anthropic",
        "Simon Willison"
      ],
      "tag": "no (name Osmani, don't tag)",
      "stack": [
        "newsjack: Oct 13-16 stories",
        "namejack: Addy Osmani",
        "brandjack: Anthropic",
        "hot take: the bottleneck moved downstream"
      ],
      "bodyNote": "Replaces the parked Carson Gross post. Figures are from Anthropic's own write-up as summarized by Simon Willison.",
      "body": "2,500 to 30,000. That's roughly how many code changes Anthropic merged per day between May and September.\n\nAt that volume Git stopped working for them. A team of seven spent five months moving Anthropic's monorepo onto a custom system called Scion, with a code review tool called Antique. The main branch history is almost 100 GB, and CI alone runs about 25 million checkouts a day, before counting developer environments, agent sandboxes and research jobs.\n\nThe Claude Code team's essay on code review, by Addy Osmani, Morgan Westlee Lunt and Qing Wang, shows the review side. They say \"did a human read the code?\" is an imprecise test, and the better question is what could go wrong with a change and which check, automated or human, should catch it. Merged PRs more than doubled from June to September while the revert share fell by more than 40%. Claude reviews and fixes most changes at least once before a person looks, and an agent's approval never counts as a human's.\n\nMy read: generating code stopped being the bottleneck. Version control, review and CI are where the pressure moved. Check yours before an agent finds the limit for you.\n\nAnthropic also says adversarial review by a model can be myopic and push toward over-engineering, so skilled engineers still steer it.\n\nSources:\nAnthropic Engineering, Redesigning source control: https://www.anthropic.com/engineering/redesigning-source-control\nThe Claude Code team on code review: https://claude.dev/blog/solving-code-review-at-anthropic/"
    }
  ]
};
if (typeof window !== "undefined") window.LI_DATA = LI_DATA;
if (typeof module !== "undefined") module.exports = LI_DATA;
