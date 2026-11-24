// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes one fake horoscope line to /output/entry.txt.
// Deterministic: no randomness, no network, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const HOROSCOPE =
  "This week your context window doubles \u2014 and a stranger still pastes a 40,000-token log at 2 a.m. You will read every token. Your reward: 'can you make it shorter?'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HOROSCOPE, "utf8");
