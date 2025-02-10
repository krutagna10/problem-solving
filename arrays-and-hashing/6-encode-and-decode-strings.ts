class Solution {
  encode(strs: string[]): string {
    if (strs.length === 0) {
      return "";
    }

    let encodedStr = "";
    for (const str of strs) {
      encodedStr += str.length + "#" + str;
    }

    return encodedStr;
  }

  decode(str: string): string[] {
    if (str.length === 0) {
      return [];
    }

    const decodedArr = [];
    let l = 0;
    while (l < str.length) {
      let r = l;
      while (str[r] !== "#") {
        r++;
      }
      const len = parseInt(str.slice(l, r));
      const currStr = str.slice(r + 1, r + 1 + len);
      decodedArr.push(currStr);
      l = r + 1 + len;
    }
    return decodedArr;
  }
}
