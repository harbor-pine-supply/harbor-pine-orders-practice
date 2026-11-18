// One command for every check, run the same way locally and in CI: syntax check, then tests.
import { readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
const files = ["src", "test", "scripts"].flatMap((d) => readdirSync(d).filter((f) => f.endsWith(".js") || f.endsWith(".mjs")).map((f) => `${d}/${f}`));
for (const f of files) execFileSync(process.execPath, ["--check", f], { stdio: "inherit" });
console.log(`lint: ${files.length} files OK`);
execFileSync(process.execPath, ["--test", "--test-reporter=spec"], { stdio: "inherit" });
