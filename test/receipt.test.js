import { test } from "node:test";
import assert from "node:assert/strict";
import { receiptLine } from "../src/receipt.js";

test("receipt line pads the name and right-aligns the amount", () => {
  assert.equal(receiptLine("Cedar planter box", 3048), "Cedar planter box         $30.48");
  assert.equal(receiptLine("Cedar planter box", 3048).length, 32);
});

test("discount line shows the amount off", () => {
  assert.equal(receiptLine("Discount", -457).endsWith("-$4.57"), true);
});
