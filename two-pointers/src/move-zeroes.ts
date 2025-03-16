/**
 * Moves all 0's to the end of the array while maintaining the relative order
 * @param {number[]} nums - Array of integers
 * @returns {void}
 * @time O(n)
 * @space O(1)
 */
function moveZeroes(nums: number[]): void { 
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
};

export default moveZeroes;