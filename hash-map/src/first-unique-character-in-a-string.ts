/**
 * Finds the first non-repeating character in string string
 * @param {string} s - String of lowercase english letters
 * @returns {number} - The index of first non-repeating character if it exists, otherwise -1
 * @time O(n)
 * @space O(1)
 */
function firstUniqChar(s: string): number {
  const charactersCount = new Map<string, number>();
  for (const char of s) {
    charactersCount.set(char, (charactersCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charactersCount.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

export default firstUniqChar;