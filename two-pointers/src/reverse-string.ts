/**
 * Reverses an array of characters
 * @param {string[]} s - Array of characters
 * @returns {void} 
 * @time O(n)
 * @space O(1)
 */

function reverseString(s: string[]): void {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
}

export default reverseString;