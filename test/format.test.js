import { test } from "node:test";
import assert from "node:assert/strict";
import { formatCents } from "../src/format.js";

test("formats cents for receipts", () => {
  assert.equal(formatCents(3048), "$30.48");
  assert.equal(formatCents(5), "$0.05");
  assert.equal(formatCents(-250), "-$2.50");
});
