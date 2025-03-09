function getKey(str: string): string {
  let counts = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    counts[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return counts.join(",");
}

function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (const str of strs) {
    let key = getKey(str);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.set(key, [...map.get(key)!, str]);
  }

  return Array.from(map.values());
}
