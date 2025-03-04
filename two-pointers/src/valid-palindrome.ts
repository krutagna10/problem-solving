/**
 * @param {string} str
 * @returns {boolean}
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

export default isPalindrome;  
