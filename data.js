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
    "updatedAt": "2026-10-20",
    "text": "Scrapped every unposted draft on Oct 20 and rebuilt around one theme: reverse engineering got cheap (REA, the Adobe and Microsoft Office clones, decomp.dev, Horizon, Schaller's driver work, attack research). Every post links the original: repos, notices, papers and the people's own write-ups, with live GitHub numbers from Oct 20. Tracking starts when the first post URLs come in; the Oct 13 post is the baseline.",
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
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-20-c-photocraft-stars",
      "date": "2026-10-20",
      "day": "TUE",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "NEWS ANALYSIS",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "68,700 stars in 20 days: the free Photoshop-style app",
      "angle": "Adobe angle. Numbers are live GitHub API figures from Oct 20 and the storytold-stats README. The ArtCraft site itself makes no parity or clean-room claim, so the post says that and doesn't repeat press parity claims.",
      "anchor": {
        "title": "storytold/photocraft on GitHub (created Sep 30, Apache-2.0)",
        "url": "https://github.com/storytold/photocraft"
      },
      "also": [
        "https://github.com/antstanley/storytold-stats",
        "https://getartcraft.com/"
      ],
      "people": [
        "storytold / ArtCraft",
        "Adobe"
      ],
      "tag": "no",
      "stack": [
        "newsjack: Adobe-clone wave, Oct 7-20",
        "brandjack: Adobe",
        "trend-ride: reverse engineering got cheap",
        "receipt: numbers in line 1"
      ],
      "bodyNote": "Star counts move daily. Re-check on github.com/storytold/photocraft before posting and update the numbers. If 7pm IST has already passed, post tomorrow morning instead.",
      "body": "68,700 stars. That's what a repo called PhotoCraft has collected in 20 days.\n\nIt was created on September 30 and is Apache-2.0. Press coverage and Hacker News describe it as a Photoshop-style app, one of a family of free apps from a group called storytold under the ArtCraft banner. A week later came WordCraft and GridCraft, Word-style and Excel-style apps, created October 7 and already at about 14,800 and 5,900 stars.\n\nThe number I'd look at is in the repo that tracks them. storytold-stats counts 9,741 released changes across the org repos it covers. Of those, 7,012, or 72%, disclose an AI agent, and Claude accounts for 6,819 of the disclosures.\n\nSo the headline isn't the stars. It's that a free suite of creative and office apps is being built mostly by agents, in the open, and saying so.\n\nTwo honest notes. The ArtCraft site lists 13 apps and says free, no subscription, but makes no parity claim and no clean-room claim. Those words come from the coverage. And I haven't run any of them, so I can't tell you how close they get to the originals.\n\nSources:\nhttps://github.com/storytold/photocraft\nhttps://github.com/antstanley/storytold-stats\nhttps://getartcraft.com/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-21-a-rea-338k",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "A",
      "time": "8:30am IST",
      "type": "NEWS ANALYSIS",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "338,115 stars: REA, the tool that lets agents take software apart",
      "angle": "REA ('Reverse Engineer Anything') is the tool you named. Star count, creation date and license verified through the GitHub API on Oct 20. README and rea.tools read in full. Bigger claims (DX-Ball) are labeled as the project's own.",
      "anchor": {
        "title": "morluto/rea on GitHub (MIT, created Apr 14, 2026)",
        "url": "https://github.com/morluto/rea"
      },
      "also": [
        "https://rea.tools/"
      ],
      "people": [
        "morluto (REA's author)",
        "Microsoft (Calculator example)"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: reverse engineering got cheap",
        "brandjack: Microsoft (Windows Calculator demo)",
        "namejack: morluto",
        "hot take: read the data policy before you point it at anything"
      ],
      "bodyNote": "Re-check the star count before posting; it grows daily. Say 'over 338,000' or the fresh number.",
      "body": "338,115 stars. That's REA, a tool that lets your coding agent take software apart, six months after the repo was created.\n\nREA stands for Reverse Engineer Anything. It's MIT licensed and runs as one local MCP server. Point Claude Code, Codex, Cursor or Gemini CLI at a binary, an Android APK, an Electron app or a website, and it returns findings with the evidence behind them. Deep native analysis uses a Hopper, Ghidra or IDA install you already have.\n\nMy favorite example on its site is small. In Windows Calculator, 200 + 10% gives 220, because the percent key takes 10% of the first number after a plus sign. The agent found the logic, and the page checks it against Microsoft's published Calculator source.\n\nThe README also lists bigger claims, like a DX-Ball sound calculation rebuilt to pass 3,205 original test cases. Those are the project's own results and I haven't reproduced them.\n\nOne thing I'd read before using it: the README says analysis runs locally, but your agent's model provider still has its own data policy. Check both before you point it at anything that isn't yours.\n\nSources:\nhttps://github.com/morluto/rea\nhttps://rea.tools/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-21-b-schaller-scanner",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "STORY",
      "hookId": 17,
      "hookName": "Time Anchor",
      "title": "A scanner with no Linux driver got one in days",
      "angle": "The constructive side of AI reverse engineering. Every figure is from Christian Schaller's own write-up (Oct 15). The personal reason for buying the scanner is deliberately left out.",
      "anchor": {
        "title": "Christian Schaller: AI and reverse engineering hardware (Oct 15)",
        "url": "https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/"
      },
      "also": [
        "https://www.phoronix.com/news/AI-Reverse-Engineer-Linux-HW"
      ],
      "people": [
        "Christian Schaller",
        "Claude Code (Anthropic)"
      ],
      "tag": "Tier 1: tag Christian Schaller if you find their LinkedIn profile (positive coverage of their work)",
      "stack": [
        "newsjack: Oct 15 write-up, so post as analysis",
        "namejack: Christian Schaller",
        "brandjack: Anthropic (Claude Code)",
        "trend-ride: reverse engineering got cheap"
      ],
      "body": "A scanner with no Linux driver got one in a few days. Not from the vendor. From Claude Code and a Windows VM.\n\nChristian Schaller, a Fedora and GNOME developer, bought a Plustek OpticFilm 8200i listed as Linux-compatible. Their unit turned out to have a newer controller, a Genesys GL128, with no Linux support. The project sat for months.\n\nThen the method changed. Schaller had Claude set up a Windows VM running the vendor's driver, capture the USB traffic beneath it, run the same operations on Linux, and diff the two traces. A first scan under Linux came within a few hours. A near-complete driver, with infrared dust removal, followed a few days later.\n\nThe numbers as Schaller reports them: 300 to 7200 dpi, 8 or 16 bit, and 34.6 seconds for a 3600 dpi scan against 54.4 for the upstream SANE driver. One unit, one frame, so treat it as a data point, not a benchmark.\n\nThe lesson I'd take: the agent didn't guess. It had a working reference to compare against.\n\nSources:\nhttps://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/\nhttps://www.phoronix.com/news/AI-Reverse-Engineer-Linux-HW"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-21-c-decomp-dev",
      "date": "2026-10-21",
      "day": "WED",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "NEWS ANALYSIS",
      "hookId": 11,
      "hookName": "Myth Bust",
      "title": "AI is not why decomp.dev closed. The notice says so.",
      "angle": "Games angle. 404 Media's headline blames AI; the maintainer's own notice is more careful (hostile forks, rushed ports, a leaderboard). Both are linked so readers can compare. Lesson: a published progress number becomes a leaderboard.",
      "anchor": {
        "title": "decomp.dev closing notice (by @encounter)",
        "url": "https://decomp.dev/"
      },
      "also": [
        "https://www.404media.co/video-game-reverse-engineering-community-shuts-down-because-ai-has-made-it-too-easy/"
      ],
      "people": [
        "@encounter (decomp.dev)",
        "Jason Koebler (404 Media)"
      ],
      "tag": "no",
      "stack": [
        "newsjack: closure announced Oct 15, so post as analysis",
        "namejack: @encounter",
        "hot take: not AI alone, the leaderboard",
        "trend-ride: reverse engineering got cheap"
      ],
      "bodyNote": "The notice carries no date. 404 Media's byline is Oct 15 and says the announcement was on a Thursday, so the post says 'last Thursday'.",
      "body": "AI is not why decomp.dev closed. The notice says so itself.\n\ndecomp.dev tracked progress on community game decompilation projects, where the goal is code that matches the original. Last Thursday its developer, a self-described sole hobbyist, disabled the main index and new project submissions. The headlines blamed AI. 404 Media's title says AI has made reverse engineering too easy.\n\nThe closing notice is more specific. It names hostile forks, where someone finishes another team's project with AI without contributing back. It names rushed ports built on decompilations the porter didn't help create. It says \"decomp\" had come to mean \"PC port\". And it says the progress tracking had become \"a hollow numbers game.\"\n\nThen the line that matters: \"AI is not the issue by itself.\" Enforcing quality across hundreds of projects was more than one hobbyist could do.\n\nThat's a pattern I see at work too. Publish a progress number and it becomes a leaderboard. Agents just make the race faster.\n\nSources:\nThe notice: https://decomp.dev/\n404 Media's report: https://www.404media.co/video-game-reverse-engineering-community-shuts-down-because-ai-has-made-it-too-easy/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-22-a-horizon-harnesses",
      "date": "2026-10-22",
      "day": "THU",
      "slot": "A",
      "time": "8:30am IST",
      "type": "TEACH",
      "hookId": 10,
      "hookName": "The Receipt",
      "title": "281 differential harnesses: how a Minecraft rewrite checks itself",
      "angle": "Microsoft/Mojang and games angle. The README doesn't say how AI was used, so the post doesn't claim it. The teachable part is differential testing for rewrites and migrations.",
      "anchor": {
        "title": "ludovic111/horizon: Minecraft Java 26.3 reimplemented in Rust",
        "url": "https://github.com/ludovic111/horizon"
      },
      "also": [],
      "people": [
        "Ludovic Marie (Horizon)",
        "Mojang / Microsoft"
      ],
      "tag": "Tier 1: tag Ludovic Marie if you find their profile (positive, specific praise)",
      "stack": [
        "newsjack: Oct 16 HN story, so post as analysis",
        "namejack: Ludovic Marie",
        "brandjack: Minecraft (Mojang, Microsoft)",
        "teach: differential testing for migrations"
      ],
      "body": "281 differential harnesses. That's how a Minecraft rewrite in Rust checks itself against the original.\n\nHorizon is a native Rust reimplementation of Minecraft: Java Edition 26.3, by Ludovic Marie. It's free, MIT licensed and unofficial. The README says it reads the same worlds, follows the same rules and generates the same terrain as the Java game, and reports 100% parity across its listed subsystems, last audited October 13.\n\nHow it checks matters more than the claim. A differential harness runs the original and the rewrite on the same input and compares the output. If you've ever migrated a service, that's the playbook: run old and new side by side, diff the results, don't trust a demo.\n\nTwo details I liked. Decompiled source stays on your own machine and isn't in the public repo, and you need your own legally obtained copy of the game. The README says it isn't approved by or associated with Mojang or Microsoft.\n\nThe catch: the parity audit is the author's own, and the harnesses need a copy of the game, so they run on a maintainer's computer, not in public CI. I haven't run it.\n\nSource:\nhttps://github.com/ludovic111/horizon"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-22-b-injection-re-agents",
      "date": "2026-10-22",
      "day": "THU",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "NEWS ANALYSIS",
      "hookId": 15,
      "hookName": "The Warning",
      "title": "Your reverse-engineering agent reads whatever the binary wants",
      "angle": "Security angle tied to REA. Paper facts from the arXiv abstract; test setup and the Navy description come from Denis Laskov's write-up and are attributed to it. Fear with an exit (sandbox, least privilege, untrusted-input handling).",
      "anchor": {
        "title": "Automatically Attacking Software Reverse Engineering AI Agents (arXiv 2605.30667)",
        "url": "https://arxiv.org/abs/2605.30667"
      },
      "also": [
        "https://arxiv.org/abs/2605.30677",
        "https://it4sec.substack.com/p/attacking-ai-based-reverse-engineering",
        "https://github.com/morluto/rea"
      ],
      "people": [
        "Brian Crawford",
        "Justin Phillips",
        "Patrick McClure",
        "Denis Laskov"
      ],
      "tag": "Tier 1: tag Denis Laskov if you find their profile (their write-up surfaced the paper)",
      "stack": [
        "newsjack: Oct 12 write-up, so post as analysis",
        "namejack: Denis Laskov",
        "hot take: treat decompiler output as untrusted input",
        "trend-ride: reverse engineering got cheap, so defenders matter"
      ],
      "body": "Your AI reverse-engineering agent reads whatever the binary wants it to read.\n\nResearchers Brian Crawford, Justin Phillips and Patrick McClure, described by Denis Laskov as U.S. Navy security researchers, published a paper on attacking software reverse-engineering agents. The trick: hide instructions in extra string variables in a program. They don't change what the executable does, but they survive decompilation, so the text lands in front of the LLM doing the analysis. The aim is to make it misread the binary and corrupt its output.\n\nLaskov's write-up says the tested setup included Cline, GhidraMCP, Ghidra and Qwen3-8B, and that the approach worked there. No success rates are given. One practical limit: Ghidra truncates strings longer than 2,048 characters, so the injected text has to be short.\n\nWhy this matters beyond security researchers: any agent that analyzes untrusted files has the same shape. And REA's README notes that runtime capture runs the target with your user permissions.\n\nSo treat decompiler output as untrusted input. Run the agent in a sandbox, give its tools the least access they need, and don't let it act on what it reads without a check.\n\nSources:\nPaper: https://arxiv.org/abs/2605.30667\nFollow-up on detection: https://arxiv.org/abs/2605.30677\nLaskov's write-up: https://it4sec.substack.com/p/attacking-ai-based-reverse-engineering\nREA's README: https://github.com/morluto/rea"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-22-c-popcar-years-days",
      "date": "2026-10-22",
      "day": "THU",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "NEWS ANALYSIS",
      "hookId": 12,
      "hookName": "The Comparison",
      "title": "Years by hand. Days with AI. A 30 FPS Flash game now runs at 165.",
      "angle": "Games angle from the original post (Popcar's blog), not from Simon Willison's summary. Keeps both sides, as Popcar does. Pronouns avoided: Popcar's aren't stated.",
      "anchor": {
        "title": "Popcar: AI is mass decompiling games. That's both awesome and scary.",
        "url": "https://popcar.bearblog.dev/ai-is-mass-decompiling-games-thats-both-awesome-and-scary/"
      },
      "also": [
        "https://news.ycombinator.com/item?id=50088534"
      ],
      "people": [
        "Popcar"
      ],
      "tag": "no (Popcar writes on a blog)",
      "stack": [
        "newsjack: Oct 14 post, so post as analysis",
        "namejack: Popcar",
        "hot take: both wonderful for preservation and a risk for your product",
        "trend-ride: reverse engineering got cheap"
      ],
      "body": "Years by hand. Days with AI. A 2011 Flash game that was locked to 30 FPS now runs at 165.\n\nThat's from Popcar, an indie game developer who says up front they dislike generative AI. Their post, \"AI is mass decompiling games,\" lists what changed. Decompilation that once took years of volunteer work can now take days, \"or maybe less.\" The Binding of Isaac's original Flash version has been ported to C++ and runs at native 1440p, interpolated to 165 FPS. There are hundreds of such projects, and old games can finally get ports, mods and a life after the servers shut down.\n\nThen Popcar lists the risks, and they're the ones I'd put in front of a product team: software copied or open-sourced against its owner's will, competitors reading each other's code, open-source licenses getting harder to enforce, and companies responding with heavier DRM. Popcar expects major applications to be decompiled within the next few months.\n\nI like that the post holds both. You can think this is wonderful for preservation and a problem for your product at the same time.\n\nSources:\nhttps://popcar.bearblog.dev/ai-is-mass-decompiling-games-thats-both-awesome-and-scary/\nDiscussion: https://news.ycombinator.com/item?id=50088534"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-23-a-trace-diff-method",
      "date": "2026-10-23",
      "day": "FRI",
      "slot": "A",
      "time": "8:30am IST",
      "type": "TEACH",
      "hookId": 21,
      "hookName": "The Direct Value",
      "title": "The four-step trace-diff method, adapted for legacy integrations",
      "angle": "Your lane: legacy integration. Steps and conclusions are Schaller's, from the original write-up. The ERP/network adaptation is labeled as the author's own, not Schaller's.",
      "anchor": {
        "title": "Christian Schaller: AI and reverse engineering hardware (Oct 15)",
        "url": "https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/"
      },
      "also": [],
      "people": [
        "Christian Schaller"
      ],
      "tag": "no (already tagged on Wednesday's post)",
      "stack": [
        "namejack: Christian Schaller (method credited by name)",
        "trend-ride: reverse engineering got cheap",
        "teach: legacy integration, your lane",
        "newsjack: Oct 15 write-up, so post as a how-to"
      ],
      "body": "Here's the method I'd steal for any undocumented legacy integration. It comes from a hardware driver.\n\nChristian Schaller's write-up describes how Claude Code got a scanner and a laptop webcam working on Linux. The core is four steps. Record a reference session with the vendor's own Windows driver. Capture the traffic beneath it. Run the same operations with your Linux version and capture that. Diff the two traces, and you get a concrete list of what your driver does differently.\n\nSchaller's own conclusion is that reference captures are the key input. The AI did the tedious parts: decoding captures, writing probes, cross-checking constants. A human supplied the hardware and decided what to build. And \"real hardware is the only judge\": every claim was checked on the actual device.\n\nMy adaptation, not Schaller's: swap the USB bus for the network. When a client's old ERP has no usable docs, proxy the working vendor client, record a reference session, replay it from your integration, and diff the traffic. Ask the agent for the differences, then verify each one against the real system.\n\nSource (Schaller's write-up):\nhttps://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-23-b-backrooms-copy",
      "date": "2026-10-23",
      "day": "FRI",
      "slot": "B",
      "time": "1:30pm IST",
      "type": "STORY",
      "hookId": 19,
      "hookName": "Curiosity Gap",
      "title": "The copy of their game still had their family videos inside",
      "angle": "The unglamorous side of cheap decompilation. Reported by 404 Media; the developer's decompiler claim is a belief and the post says so. Pronouns avoided. Take-away for builders: keep personal data and secrets out of shipped binaries.",
      "anchor": {
        "title": "404 Media: AI Made Cloning Games Easier Than Ever",
        "url": "https://www.404media.co/ai-made-cloning-games-easier-than-ever/"
      },
      "also": [],
      "people": [
        "Steelkrill Studio",
        "Cool Devs",
        "TrueMotion Interactive",
        "404 Media"
      ],
      "tag": "no",
      "stack": [
        "newsjack: 404 Media report, recent, so post as analysis",
        "trend-ride: reverse engineering got cheap, copy-and-resell side",
        "hot take: assume your binary will be read"
      ],
      "bodyNote": "Check the 404 Media article's date and re-read the Steelkrill section before posting. The decompiler claim is the developer's belief, not a finding.",
      "body": "The copy of their game still had their family videos inside.\n\nSteelkrill Studio made The Backrooms 1998, a found-footage horror game released in 2025. Then a near-identical copy appeared for sale under a different publisher. The developer believes the copier used a decompiler. The giveaway: the copy still contained their personal and family videos.\n\nAccording to 404 Media's reporting, the publisher, Cool Devs, appears to have been banned. The game later resurfaced under other names, including The Bad Parents from TrueMotion Interactive.\n\nI'm telling this one because it's the unglamorous side of cheap decompilation. Preservation projects get the headlines. Copy-and-resell gets the same tools, and it doesn't clean up after itself.\n\nFor anyone shipping a game or an app: assume your binary will be read. Keep personal data and secrets out of what you ship, because they travel with the copy.\n\nSource (404 Media, AI Made Cloning Games Easier Than Ever):\nhttps://www.404media.co/ai-made-cloning-games-easier-than-ever/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-23-c-three-words",
      "date": "2026-10-23",
      "day": "FRI",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "OPINION",
      "hookId": 11,
      "hookName": "Myth Bust",
      "title": "Reverse engineered, cloned and clean-room are three different claims",
      "angle": "Adobe + Microsoft angle on the language. The ArtCraft site makes no parity or clean-room claim; the coverage does. Legal point is attributed to the attorney quoted by 404 Media and is not legal advice.",
      "anchor": {
        "title": "ArtCraft: the apps and what the site actually claims",
        "url": "https://getartcraft.com/"
      },
      "also": [
        "https://www.404media.co/ai-made-cloning-games-easier-than-ever/",
        "https://news.ycombinator.com/item?id=50043110",
        "https://news.ycombinator.com/item?id=50045579"
      ],
      "people": [
        "Michael Wang (attorney, via 404 Media)",
        "storytold / ArtCraft",
        "Adobe",
        "Microsoft"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Adobe and Microsoft",
        "hot take: the vendor's answer matters more than the star count",
        "trend-ride: reverse engineering got cheap",
        "newsjack: Oct 7-11 coverage, so post as analysis"
      ],
      "bodyNote": "Tom's Hardware's article bodies are blocked for me; I used only their headlines. Open both before posting if you want to quote them.",
      "body": "Reverse engineered, cloned and clean-room are three different claims. The coverage this month treats them as one.\n\nTom's Hardware's headlines describe free Office-style apps as \"replications\" and the earlier Adobe-style apps as rebuilt, and say it \"targets 100 percent parity in one month.\" Hacker News commenters argued over whether \"reverse engineered\" is even the right label. The ArtCraft site itself says none of it: no parity claim, no clean-room claim, just free and open source.\n\nHere's what the words usually mean. Reverse engineering is studying how software behaves. A clean-room reimplementation traditionally has one team study the original and write a spec, and a separate team build from the spec only. Cloning is copying what it does or looks like. One Hacker News commenter pointed out that an agent can now do the spec step by clicking through a UI, with no decompiler at all.\n\nOn the legal side, attorney Michael Wang, quoted by 404 Media, put it simply: ideas can't be copyrighted or patented, exact copies of code and assets are clear violations, and similar ideas often aren't. I'm not a lawyer.\n\nIf you're evaluating one of these tools for a client, ask which of the three it is. The vendor's answer matters more than the star count.\n\nSources:\nhttps://getartcraft.com/\nhttps://www.404media.co/ai-made-cloning-games-easier-than-ever/\nHacker News: https://news.ycombinator.com/item?id=50043110\nHacker News: https://news.ycombinator.com/item?id=50045579"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-24-a-peisach-journey",
      "date": "2026-10-24",
      "day": "SAT",
      "slot": "A",
      "time": "9:00am IST",
      "type": "OPINION",
      "hookId": 19,
      "hookName": "Curiosity Gap",
      "title": "A decompilation can run and still not be understood",
      "angle": "Games angle from the original post by Joshua Peisach (LEGO Island decompilation contributor). Pronouns avoided. Their claims are attributed as theirs. Lesson for teams shipping agent-written code: 'it runs' is the start of review.",
      "anchor": {
        "title": "Joshua Peisach: Decompilations, AI, and the Chase for Clout (Oct 16)",
        "url": "https://jpeisach.github.io/blog/ai/legoisland/decompilation/porting/reverse-engineering/2026/10/16/decomps-clout-consoom.html"
      },
      "also": [],
      "people": [
        "Joshua Peisach"
      ],
      "tag": "Tier 1: tag Joshua Peisach if you find their profile (you quote and credit them)",
      "stack": [
        "namejack: Joshua Peisach",
        "trend-ride: reverse engineering got cheap, quality side",
        "hot take: it runs is the start of review",
        "newsjack: Oct 16 post, so post as analysis"
      ],
      "body": "A decompilation can run and still not be understood. That's the part AI doesn't hand you.\n\nJoshua Peisach, who has contributed nearly 200 functions to the LEGO Island decompilation, wrote a post this month about the race to decompile games with AI. Their point is that decompilation is valued for the process of understanding the code, not just the result. In their words: \"It's not about the destination, it's about the journey.\"\n\nPeisach isn't anti-AI. They say it can help experienced decompilers. What bothers them is people using agents to race to the first working port, sometimes by finishing other teams' public projects without contributing back.\n\nThe example that stuck with me: a Halo 2 decompilation they looked at, with over a thousand files in one folder, many placeholder names like unknown_ and function_, and structs where C++ classes would fit better. It's the engineering version of code that passes the demo and that nobody can maintain.\n\nIf your team ships agent-written code, \"it runs\" is the start of the review, not the end.\n\nSource:\nhttps://jpeisach.github.io/blog/ai/legoisland/decompilation/porting/reverse-engineering/2026/10/16/decomps-clout-consoom.html"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-24-c-policy-question",
      "date": "2026-10-24",
      "day": "SAT",
      "slot": "C",
      "time": "6:00pm IST",
      "type": "OPINION",
      "hookId": 8,
      "hookName": "Question Trap",
      "title": "Your vendor's license says no reverse engineering. What's your policy?",
      "angle": "Engagement post with a real fork. Anchored on REA's own disclaimer and Popcar's 'years to days'. Not legal advice; says so.",
      "anchor": {
        "title": "REA README: disclaimer and authorized-use notes",
        "url": "https://github.com/morluto/rea"
      },
      "also": [
        "https://github.com/morluto/rea/blob/main/DISCLAIMER.md",
        "https://popcar.bearblog.dev/ai-is-mass-decompiling-games-thats-both-awesome-and-scary/"
      ],
      "people": [
        "morluto (REA)",
        "Popcar"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: reverse engineering got cheap",
        "brandjack: vendors (generic)",
        "hot take: 'nobody decided' is the risky policy"
      ],
      "body": "Your vendor's license says no reverse engineering. An agent can now do in days what used to take years. What's your team's policy?\n\nREA, the agent toolkit with over 330,000 stars, ships a disclaimer worth reading. It's for lawful research, education, interoperability, software preservation, and analysis of software you own or are authorized to examine. It also says cracked copies and license bypassing aren't authorized.\n\nThat puts the burden where it always was, on the person typing the prompt. What's changed is that the work is fast and cheap enough for a junior engineer to do it without noticing they crossed a line. Popcar's \"years by hand, days with AI\" is the same shift seen from the games side.\n\nI see three reasonable policies. Ban it outright. Allow it for interoperability only, with legal sign-off first. Or allow it only for software you own. A fourth, \"nobody decided\", is the one I'd worry about.\n\nI'm not a lawyer, and the rules differ by country. Which would your company pick?\n\nSources:\nhttps://github.com/morluto/rea\nhttps://github.com/morluto/rea/blob/main/DISCLAIMER.md\nhttps://popcar.bearblog.dev/ai-is-mass-decompiling-games-thats-both-awesome-and-scary/"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "carousel: 7 slides, build with /li-carousel",
      "id": "2026-10-25-b-flagship-carousel",
      "date": "2026-10-25",
      "day": "SUN",
      "slot": "B",
      "time": "4:00pm IST",
      "type": "TREND RECAP",
      "hookId": 5,
      "hookName": "The List Promise",
      "title": "5 things that follow when reverse engineering gets cheap (carousel copy)",
      "firstLine": "5 things that follow when reverse engineering gets cheap. Slides below.",
      "angle": "Flagship recap of the week, built only from sources used in the other posts. Carousel: paste the caption as the post, then build the 7 slides.",
      "anchor": {
        "title": "REA (morluto/rea)",
        "url": "https://github.com/morluto/rea"
      },
      "also": [
        "https://github.com/storytold/photocraft",
        "https://decomp.dev/",
        "https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/",
        "https://arxiv.org/abs/2605.30667"
      ],
      "people": [
        "storytold / ArtCraft",
        "morluto (REA)",
        "Christian Schaller",
        "Joshua Peisach"
      ],
      "tag": "no",
      "stack": [
        "trend-ride: owning the week's narrative",
        "list promise: highest save rate",
        "brandjack: Adobe and Microsoft apps"
      ],
      "bodyNote": "Refresh the star counts the same day. Slide 5 webcam figures are Schaller's.",
      "body": "5 things that follow when reverse engineering gets cheap. Slides below, sources at the end.\n\nSLIDE 1\n5 things that follow when reverse engineering gets cheap.\n\nSLIDE 2\n1. Clones arrive in days.\nPhotoCraft, a Photoshop-style app, reached 68,700 GitHub stars in 20 days. 72% of the released changes across the repos its org tracks disclose an AI agent.\n\nSLIDE 3\n2. The tools are free and everywhere.\nREA: MIT licensed, over 330,000 stars, works with Claude Code, Codex, Cursor and Gemini CLI.\n\nSLIDE 4\n3. Communities strain.\ndecomp.dev's closing notice names hostile forks, rushed ports, and a progress number that became a leaderboard.\n\nSLIDE 5\n4. It's genuinely useful.\nA scanner with no Linux driver: first scan within hours. A laptop webcam: brightness from 31.1 to 90.9 in a controlled low-light test. (Christian Schaller)\n\nSLIDE 6\n5. The tools can be attacked.\nHidden strings in a binary can mislead the LLM analyzing it. (arXiv 2605.30667)\n\nSLIDE 7\nWhat I'd do Monday:\n1. Assume your binary gets read. Keep secrets and personal data out.\n2. Decide a policy on reverse engineering your vendors.\n3. Treat decompiler output as untrusted input.\n\nSources:\nhttps://github.com/storytold/photocraft\nhttps://github.com/morluto/rea\nhttps://decomp.dev/\nhttps://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/\nhttps://arxiv.org/abs/2605.30667"
    },
    {
      "week": "oct19",
      "linkedinUrl": null,
      "metrics": null,
      "firstComment": null,
      "status": "drafted",
      "format": "text",
      "id": "2026-10-25-c-clone-checks",
      "date": "2026-10-25",
      "day": "SUN",
      "slot": "C",
      "time": "7:00pm IST",
      "type": "TEACH",
      "hookId": 7,
      "hookName": "The Callout",
      "title": "Five checks before you trust a free clone with a client file",
      "angle": "Practical close to the Adobe/Microsoft thread. The checks are the author's own advice, not claims about any specific app; the post says it hasn't run them. Hacker News reports are cited as varied.",
      "anchor": {
        "title": "Hacker News discussion: open-source Office replications",
        "url": "https://news.ycombinator.com/item?id=50043110"
      },
      "also": [
        "https://github.com/storytold/wordcraft",
        "https://github.com/antstanley/storytold-stats"
      ],
      "people": [
        "storytold / ArtCraft"
      ],
      "tag": "no",
      "stack": [
        "brandjack: Adobe and Microsoft",
        "teach: evaluation checklist",
        "trend-ride: reverse engineering got cheap"
      ],
      "body": "If you're about to trust a free clone of Word or Photoshop with a client file, run these five checks first.\n\nReports on Hacker News about the new Office-style apps ran from \"works well\" to \"barely functions,\" so it's worth testing before you rely on them. These are my checks, not results. I haven't run the apps.\n\n1. Round-trip a real file. Open a document the original app made, save it, and compare. Did anything change that you didn't touch?\n\n2. Read the license and the repo. The storytold apps I looked at are Apache-2.0. Know what that covers and what it doesn't.\n\n3. Look at who maintains it. The org's own stats show 116 releases and over 870 human contributors, with most changes disclosing an agent. Decide if you're comfortable with that for your use.\n\n4. Test the painful edges: large files, undo history, odd characters, export and print.\n\n5. Keep the original app for the final export until you've compared the output side by side.\n\nA free tool that fails on the one file that matters isn't free.\n\nSources:\nhttps://news.ycombinator.com/item?id=50043110\nhttps://github.com/storytold/wordcraft\nhttps://github.com/antstanley/storytold-stats"
    }
  ]
};
if (typeof window !== "undefined") window.LI_DATA = LI_DATA;
if (typeof module !== "undefined") module.exports = LI_DATA;
