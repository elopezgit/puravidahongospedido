/**
 * Normalizes text by converting to lowercase and removing accents/diacritics.
 * Example: "Pérfume" -> "perfume"
 */
export const normalizeText = (text: string | null | undefined): string => {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

/**
 * Checks if all words in the search query are present in the target string(s).
 * The order of the words doesn't matter.
 * 
 * @param query The search query entered by the user
 * @param targets The strings to search within (e.g. [product.name, product.description, product.code])
 * @returns true if all words from the query match at least one of the targets
 */
export const matchesSearchQuery = (query: string, targets: (string | null | undefined)[]): boolean => {
  if (!query || query.trim() === '') return true;

  const normalizedQuery = normalizeText(query);
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  
  if (searchTerms.length === 0) return true;

  const normalizedTargets = targets.map(normalizeText);
  const combinedTarget = normalizedTargets.join(' ');

  // Every word in the search query must be found somewhere in the combined target strings
  return searchTerms.every(term => combinedTarget.includes(term));
};
