/**
 * Checks if two strings are equal after simulating backscape operations
 * @param {string} s - String of lowercase and # characters
 * @param {string} t - String of lowercase and # characters
 * @returns {boolean} - `true` is the strings are equal, `false` otherwise
 * @time O(n)
 * @space O(n)
 */
function backspaceCompare(s: string, t: string): boolean {
  let indexS = s.length - 1;
  let indexT = t.length - 1;

  while (indexS >= 0 || indexT >= 0) {
    indexS = getNextValidIndex(s, indexS);
    indexT = getNextValidIndex(t, indexT);

    const charS = indexS >= 0 ? s[indexS] : "";
    const charT = indexT >= 0 ? t[indexT] : "";

    if (charS !== charT) {
      return false;
    }
    indexS--;
    indexT--;
  }
  return true;
};

/**
 * Calculates the next valid index after simulating backspace operations
 * @param {string} str - String of lowercase and # characters
 * @param {number} index - Current valid index
 * @returns {number} - The next valid index
 * @time O()
 * @space O()
 */
function getNextValidIndex(str: string, index: number): number {
  let backscapeCount = 0;
  while (index >= 0) {
    if (backscapeCount === 0 && str[index] !== "#") {
      break;
    } else if (str[index] ==="#") {
      backscapeCount++;
    } else {
      backscapeCount--;
    }
    index--;
  }
  return index;
}



export default backspaceCompare;