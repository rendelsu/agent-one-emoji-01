import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 🐙: agen otonom berlengan banyak — menangani banyak tugas secara paralel.
const AGENT_EMOJI = "🐙";

const outDir = (process.env.MAKEFUN_OUTPUT_DIR || "").trim() || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, AGENT_EMOJI, "utf8");
chmodSync(outFile, 0o644);
