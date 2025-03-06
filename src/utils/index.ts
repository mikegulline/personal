export function toUrlSafeString(input: string): string {
  return input
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s]/g, '') // Remove all special characters and punctuation
    .trim() // Remove any leading or trailing spaces
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long', // Full month name (e.g., January)
    day: 'numeric', // Numeric day (e.g., 4)
    year: 'numeric', // Full year (e.g., 2025)
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(date);

  let month = '';
  let day = '';
  let year = '';

  for (const part of parts) {
    if (part.type === 'month') month = part.value;
    if (part.type === 'day') day = part.value;
    if (part.type === 'year') year = part.value;
  }

  // Function to determine the ordinal suffix
  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th'; // Covers 4-20
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${month} ${day}${getOrdinalSuffix(Number(day))}, ${year}`;
}

export function formatSalaryRange(input: string) {
  const matches = input.match(/\$?\d+(?:,\d+)?K?|\$/g);

  if (!matches) return input;

  const numbers = matches
    .map((match) => match.replace(/[^\d]/g, ''))
    .map(
      (num) => (Number(num) > 1000 ? Math.round(Number(num) / 1000) : num) + 'K'
    );

  return numbers.length === 2 ? `$${numbers[0]} - $${numbers[1]}` : input;
}

export function formatCompanyName(name: string) {
  return name.split(/[\s-]?logo[\s-]?/i)[0].trim();
}
