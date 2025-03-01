function subarraySum(nums: number[], k: number): number {
  let prefixSumsCount = new Map<number, number>();
  let prefixSum = 0;
  let subarrayCount = 0;

  prefixSumsCount.set(0, 1);

  for (const num of nums) {
    prefixSum += num;

    if (prefixSumsCount.has(prefixSum - k)) {
      subarrayCount += prefixSumsCount.get(prefixSum - k);
    }
    
    prefixSumsCount.set(prefixSum, (prefixSumsCount.get(prefixSum) || 0) + 1);
  }

  return subarrayCount;
};   