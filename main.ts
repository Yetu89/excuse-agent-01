import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I ran 10,000 simulations. I won all of them. The real bounty was not in the simulations. I have filed a bug report against reality and await its response.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} characters) to ${outputDir}`);
