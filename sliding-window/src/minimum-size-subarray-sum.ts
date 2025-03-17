/**
 * Calculates the minimal length of a subarray whose sum is greater than or equal to `target`
 * @param {number} target - The target sum
 * @param {number[]} nums - Array of integers
 * @returns {number} - The length of smallest subarray if it exists, otherwise 0
 * @time O(n)
 * @space O(1)
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let smallestSubarrayLen = Infinity;
  let currSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];
    while (currSum >= target) {
      smallestSubarrayLen = Math.min(smallestSubarrayLen, right - left + 1);
      currSum -= nums[left++];
    }
  }

  return smallestSubarrayLen === Infinity ? 0 : smallestSubarrayLen;
}

export default minSubArrayLen;
