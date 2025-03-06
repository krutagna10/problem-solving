/**
 * Checks whether a string can be palindrome after deleting at most one character from it.
 * @param {string} s - String of lowercase english letters
 * @returns {boolean} - `true` if the string is palindrome, `false` otherwise
 * @time O(n)
 * @space O(1)
 */
function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

/**
 * Checks whether a string is palindrome
 * @param {string} s - String of lowercase english letters
 * @param {number} left - Starting index of substring
 * @param {number} right - Ending index of substring
 * @returns {boolean} - `true` is the string is palindrome, `false` otherwise
 * @time O(n)
 * @space O(1)
 */
function isPalindrome(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

export default validPalindrome;
