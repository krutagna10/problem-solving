/**
 * Sorts the array in-place such that objects of same color are adjacent
 * @param {number[]} nums - Array of integers 0, 1 and 2, representing red, white and blue
 * @returns {void}
 * @time O(n)
 * @space O(1)
 */
function sortColors(nums: number[]): void {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;

  while (i <= right) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      i++;
      left++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
    }
  }
}

export default sortColors;
