function checkValidWindow(
  window: Map<string, number>,
  target: Map<string, number>,
): boolean {
  for (const [key, count] of target) {
    if (!(window.has(key) && window.get(key)! >= count)) {
      return false;
    }
  }
  return true;
}


function minWindow(s: string, t: string): string {
  let l = 0;
  let minSubstrLen = Infinity;
  let minSubstr = "";
  const target = new Map();
  const window = new Map();

  for (const char of t) {
    target.set(char, (target.get(char) || 0) + 1);
  }

  for (let r = 0; r < s.length; r++) {
    window.set(s[r], (window.get(s[r]) || 0) + 1);

    while (checkValidWindow(window, target)) {
      let currSubstrLen = r - l + 1;

      if (currSubstrLen < minSubstrLen) {
        minSubstrLen = currSubstrLen;
        minSubstr = s.slice(l, r + 1);
      }

      window.set(s[l], window.get(s[l]) - 1);
      l++;
    }
  }

  return minSubstr;
}