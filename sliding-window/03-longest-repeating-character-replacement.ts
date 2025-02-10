function characterReplacement(s: string, k: number): number {
  let map =  new Map();
  let l = 0;
  let longestSubstrLen = 0;
  let maxFreq = 0;

  for (let r = 0; r < s.length; r++) {
    if (!map.has(s[r])) {
      map.set(s[r], 0);
    }
    map.set(s[r], map.get(s[r]) + 1);

    maxFreq = Math.max(maxFreq, map.get(s[r]));

    if ((r - l + 1) - maxFreq > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }

    longestSubstrLen = Math.max(longestSubstrLen, r - l + 1);
  }

  return longestSubstrLen;
};