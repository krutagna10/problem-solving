/**
 * Calculates the running sum of the array
 * @param {number[]} nums - Array of integers
 * @returns {number[]} - The running sum of the array
 * @time O(n)
 * @space O(n)
 */
function runningSum(nums: number[]): number[] {
  const prefixSum = [];
  let sum = 0;

  for (const num of nums) {
    sum += num;
    prefixSum.push(sum);
  }

  return prefixSum;
};

export default runningSum;

