/**
 * Calculates the maximum consecutive 1's in the array after flipping k 0's
 * @param {number[]} nums - Array of 0's and 1's
 * @param {number} k - The number of times we can flip 0's
 * @returns {number} - The maximum consecutive 1's in the array
 * @time O(n)
 * @space O(1)
 */
function longestOnes(nums: number[], k: number): number {
  let maxOnes = 0;
  let zeroesCount = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroesCount++;
    }
    while (zeroesCount > k) {
      if (nums[left] === 0) {
        zeroesCount--;
      }
      left++;
    }
    maxOnes = Math.max(maxOnes, right - left + 1);
  }

  return maxOnes;
};

export default longestOnes;