/**
 * Checks if the string is palindrome after converting all uppercase letters to lowercase letters and remove all non-alphanumeric characters
 * @param {string} str - Input String
 * @returns {boolean} - `true` if the string is palindrome, `false` otherwise
 * @time O(n)
 * @space O(n)
 */
function isPalindrome(str: string): boolean {
  const lowercaseStr = str.toLowerCase();
  const alphanumericStr = calculateAlphanumericStr(lowercaseStr);

  let left = 0;
  let right = alphanumericStr.length - 1;

  while (left < right) {
    if (alphanumericStr[left] !== alphanumericStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/**
 * Creates a string that only consists of alphanumeric characters
 * @param {string} str - Input String
 * @returns {string} - String of alphanumeric characters
 * @time O(n)
 * @space O(n)
 */
function calculateAlphanumericStr(str: string): string {
  const regex = /[a-zA-Z0-9]/;
  return str
    .split("")
    .filter((char) => regex.test(char))
    .join("");
}

export default isPalindrome;  
