function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < strs[i].length &&
      j < commonPrefix.length &&
      strs[i][j] === commonPrefix[j]
    ) {
      j++;
    }
    commonPrefix = commonPrefix.slice(0, j);
  }

  return commonPrefix;
}
