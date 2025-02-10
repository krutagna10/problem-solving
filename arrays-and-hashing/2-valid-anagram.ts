function isAnagram(s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }

  let counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    counts[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (const count of counts) {
    if (count !== 0) {
      return false;
    }
  }
  return true;
}
