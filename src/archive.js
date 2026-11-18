// Archive finished receipts to blob storage.
// The connection string comes from the environment, never from the code.
const RECEIPTS_STORAGE = process.env.RECEIPTS_STORAGE_CONNECTION;

export function archiveTarget(orderId) {
  if (!RECEIPTS_STORAGE) throw new Error("Set RECEIPTS_STORAGE_CONNECTION (see .env.example)");
  return { connection: RECEIPTS_STORAGE, container: "receipts", blob: `${orderId}.txt` };
}
