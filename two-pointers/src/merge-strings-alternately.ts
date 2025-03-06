/**
 * Merged string by adding letters in alternating order, starting with `word1`
 * @param {string} word1 - String of lowercase english letters
 * @param {string} word2 - String of lowercase english letters
 * @returns {string} - Merged string
 * @time O(n + m)
 * @space O(n + m)
 */
function mergeAlternately(word1: string, word2: string): string {
  let mergedWord = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    mergedWord += word1[i];
    mergedWord += word2[j];
    i++;
    j++;
  }

  while (i < word1.length) {
    mergedWord += word1[i];
    i++;
  }

  while (j < word2.length) {
    mergedWord += word2[j];
    j++;
  }

  return mergedWord;
}

export default mergeAlternately;
