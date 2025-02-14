function checkEqualArray(arr1: number[], arr2: number[]): boolean {
  return arr1.join("") === arr2.join("");
}

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const count1 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const insertIndex = s1[i].charCodeAt(0) - "a".charCodeAt(0);
    count1[insertIndex]++;
  }

  const count2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const insertIndex = s2[i].charCodeAt(0) - "a".charCodeAt(0);
    count2[insertIndex]++;
  }

  if (checkEqualArray(count1, count2)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    const removeIndex = s2[i - s1.length].charCodeAt(0) - "a".charCodeAt(0);
    count2[removeIndex]--;

    const insertIndex = s2[i].charCodeAt(0) - "a".charCodeAt(0);
    count2[insertIndex]++;

    if (checkEqualArray(count1, count2)) {
      return true;
    }
  }

  return false;
};