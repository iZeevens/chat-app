export const copyToClipboard = async (message: string) => {
  await navigator.clipboard.writeText(message);
}