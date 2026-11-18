import { test } from "node:test";
import assert from "node:assert/strict";
import { batches } from "../src/batch.js";

test("batches split receipts by size", () => {
  assert.deepEqual(batches([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});
