function checkIfPangram(sentence: string): boolean {
  let alphabetsCount = new Map<string, number>();
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
   alphabetsCount.set(String.fromCharCode(i), 0) ;
  }

  for (const alphabet of sentence) {
    alphabetsCount.set(alphabet, (alphabetsCount.get(alphabet) || 0) + 1);
  }

  for (const [alphabet, count] of alphabetsCount) {
    if (count === 0) {
      return false;
    }
  }
  return true;
}