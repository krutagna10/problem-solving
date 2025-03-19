/**
 * Calculates the minimal length of a subarray whose sum is greater than or equal to `target`
 * @param {number} target - The target sum
 * @param {number[]} nums - Array of integers
 * @returns {number} - The length of smallest subarray if it exists, otherwise 0
 * @time O(n)
 * @space O(1)
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let minSubarrayLen = Infinity;
  let currSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];
    while (currSum >= target) {
      minSubarrayLen = Math.min(minSubarrayLen, right - left + 1);
      currSum -= nums[left++];
    }
  }

  return minSubarrayLen === Infinity ? 0 : minSubarrayLen;
}

export default minSubArrayLen;
