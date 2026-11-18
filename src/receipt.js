// One receipt line: name on the left, the amount on the right. Money is integer cents.
import { formatCents } from "./format.js";

export function receiptLine(name, cents, width = 32) {
  const amount = formatCents(cents);
  return name.slice(0, width - amount.length - 1).padEnd(width - amount.length) + amount;
}

// A discount line: the amount off, shown as a negative.
export function discountLine(cents) {
  return receiptLine("Discount", -cents);
}

// A sales-tax line. Rate in basis points (825 = 8.25%), rounded half up to the cent.
export function taxLine(subtotalCents, rateBp) {
  return receiptLine("Sales tax", Math.floor((subtotalCents * rateBp + 5000) / 10000));
}
