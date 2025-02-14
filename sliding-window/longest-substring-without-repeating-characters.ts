function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let longestSubstrLen = 0;
  let set: Set<string> = new Set();

  for (let r = 0; r < s.length; r++) {
    // Removing the element from set until there are no repetitions
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    const currSubstrLen = r - l + 1;
    longestSubstrLen = Math.max(longestSubstrLen, currSubstrLen);
  }

  return longestSubstrLen;
};