// Split receipts into batches for the nightly archive job.
import chunk from "lodash/chunk.js";

export function batches(receipts, size = 50) {
  return chunk(receipts, size);
}
