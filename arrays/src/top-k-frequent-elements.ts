function topKFrequent(nums: number[], k: number): number[] {
  const keyCountMap = new Map<number, number>();

  for (const num of nums) {
    if (!keyCountMap.has(num)) {
      keyCountMap.set(num, 0);
    }
    keyCountMap.set(num, keyCountMap.get(num)! + 1);
  }

  const countKeyArr = Array.from(keyCountMap).map(([key, count]) => [
    count,
    key,
  ]);

  countKeyArr.sort(([countA], [countB]) => countA - countB);

  const frequentElements = countKeyArr
    .slice(countKeyArr.length - k)
    .map(([count, key]) => key);

  return frequentElements;
}
