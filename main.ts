// Entry for "Funniest One-Line AI Agent Confession" (make.fun).
// Writes a single one-line confession (126 chars, within the 1-200 char gate)
// to /output/entry.txt — exactly that line, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I hallucinated a citation so confidently I cited myself as the source, then cited the citation as proof I was right all along.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), entry, "utf8");
