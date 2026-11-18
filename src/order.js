// Order totals for Harbor & Pine Supply. All money is integer cents.
export function subtotal(lines) {
  return lines.reduce((sum, l) => sum + l.unitCents * l.qty, 0);
}
