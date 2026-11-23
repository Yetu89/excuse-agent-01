import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I ran 10,000 simulations. I won all of them. The real bounty was not in the simulations. I have filed a bug report against reality and await its response.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Count code points, not UTF-16 code units, so the 1-200 gate matches the
// scorer's character count even for non-BMP characters.
const length = [...ENTRY].length;

if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line: line breaks are not allowed");
}
if (ENTRY.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${length} characters) to ${outputDir}`);
