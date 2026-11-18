// One receipt line: name on the left, the amount on the right. Money is integer cents.
import { formatCents } from "./format.js";

export function receiptLine(name, cents, width = 32) {
  const amount = formatCents(cents);
  return name.slice(0, width - amount.length - 1).padEnd(width - amount.length) + amount;
}
