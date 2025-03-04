/**
 * @param {string} str
 * @returns {boolean}
 * @time O(n)
 * @space O(n)
 */
function isPalindrome(str: string): boolean {
  const lowercaseStr = str.toLowerCase();
  const alphanumericStr = calculateAlphanumericStr(lowercaseStr);

  let start = 0;
  let end = alphanumericStr.length - 1;

  while (start < end) {
    if (alphanumericStr[start] !== alphanumericStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

/**
 * @param {string} str
 * @returns {string}
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
