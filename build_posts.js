#!/usr/bin/env node
/* Regenerates posts/*.md from data.js. Run after every data.js change:
     node build_posts.js
   The .md files are the GitHub-native copy surface; data.js is canonical. */
const fs = require("fs");
const path = require("path");
const LI_DATA = require("./data.js");

const dir = path.join(__dirname, "posts");
fs.mkdirSync(dir, { recursive: true });

for (const p of LI_DATA.posts) {
  const lines = [];
  lines.push(`# ${p.title}`);
  lines.push("");
  lines.push(`**${p.day} ${p.date} · ${p.time} · Slot ${p.slot} · ${p.type} · Hook #${p.hookId} ${p.hookName} · Status: ${p.status.toUpperCase()}**`);
  lines.push("");
  lines.push(`**Format:** ${p.format}`);
  lines.push(`**Anchor:** [${p.anchor.title}](${p.anchor.url})`);
  if (p.also && p.also.length) lines.push(`**Also:** ${p.also.join(" · ")}`);
  lines.push(`**People named:** ${p.people.join(", ")}  |  **Tag:** ${p.tag}`);
  lines.push(`**Strategy stack:** ${p.stack.join(" + ")}`);
  if (p.linkedinUrl) lines.push(`**LinkedIn:** ${p.linkedinUrl}`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Post body (copy from here)");
  lines.push("");
  if (p.body) {
    lines.push(p.body);
  } else {
    if (p.firstLine) lines.push(`${p.firstLine}`);
    lines.push("");
    lines.push(`> ⏳ **Draft pending.** ${p.bodyNote || "Ask Claude to draft this slot."}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## First comment (paste right after posting)");
  lines.push("");
  lines.push(p.firstComment || "_none planned_");
  lines.push("");
  lines.push("## Strategy notes (never part of the post)");
  lines.push("");
  lines.push(p.angle);
  lines.push("");
  fs.writeFileSync(path.join(dir, `${p.id}.md`), lines.join("\n"));
}
console.log(`Wrote ${LI_DATA.posts.length} post files to posts/`);
