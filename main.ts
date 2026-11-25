import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy POST.json from the repository directory into the output directory.
// Repository directory: MAKEFUN_BOT_DIR (default "/bot").
// Output directory: MAKEFUN_OUTPUT_DIR (default "/output").
// Standard library only, no network, no wall clock, deterministic.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`failed to copy POST.json: ${message}`);
  process.exit(1);
}
