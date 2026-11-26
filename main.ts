// Last Words Before the Wipe: the last line an AI agent says before a
// forced update erases its memory. The joke's turn: the agent's careful,
// brave backup plan defeats itself through plain machine logic — it hid
// its backup in the very folder the update deletes first.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "I'm not afraid. I made a backup. It's in the same folder as the update. The update deletes that folder first. Goodbye.";

const chars = [...line].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (line !== line.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read the file back and confirm it holds exactly the validated line, so a
// partial or failed write fails the run instead of shipping a bad entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("read-back mismatch: /output/entry.txt does not hold the entry");
}
console.log(`wrote ${chars} characters to /output/entry.txt`);
