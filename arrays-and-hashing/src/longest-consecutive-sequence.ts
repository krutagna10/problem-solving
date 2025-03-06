function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longestSubLen = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currSubLen = 1;
      while (set.has(num + currSubLen)) {
        currSubLen++;
      } 
      longestSubLen = Math.max(longestSubLen, currSubLen);
    }
  }

  return longestSubLen;
}