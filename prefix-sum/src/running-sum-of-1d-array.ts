/**
 * Calculates the running sum of the array
 * @param {number[]} nums - Array of integers
 * @returns {number[]} - The running sum of the array
 * @time O(n)
 * @space O(n)
 */
function runningSum(nums: number[]): number[] {
  const prefix = new Array(nums.length);
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    prefix[i] = prefixSum;
  }

  return prefix;
};

export default runningSum;

