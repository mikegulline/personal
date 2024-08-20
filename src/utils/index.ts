export function toUrlSafeString(input: string): string {
  return input
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s]/g, '') // Remove all special characters and punctuation
    .trim() // Remove any leading or trailing spaces
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}
