/**
 * Rotates the array right by `k` steps
 * @param {number[]} nums - Array of integers
 * @param {number} k - Integer k
 * @returns {void}
 * @time O(n)
 * @space O(1)
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k , nums.length - 1)
};

/**
 * Reverses the array between two indices
 * @param {number[]} nums - The array to be reversed
 * @param {number} left - The left index
 * @param {number} right - The right index
 * @returns {void}
 * @time O(n)
 * @space O(1)
 */
function reverse(nums: number[], left: number, right: number): void {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

export default rotate;
