// Format integer cents for receipts: 3048 -> "$30.48".
export function formatCents(cents) {
  if (!Number.isInteger(cents)) throw new TypeError("cents must be an integer");
  return "$" + (cents / 100).toFixed(2);
}
