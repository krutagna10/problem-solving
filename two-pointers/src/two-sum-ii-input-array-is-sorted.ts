/**
 * @param {number[]} nums
 * @param {number} target
 * @retuns {number[]}
 * @time O(n)
 * @space O(1)
 */
function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currSum = nums[left] + nums[right];
    if (currSum === target) {
      return [left + 1, right + 1];
    } else if (currSum > target) {
      right--;
    } else {
      left++;
    }
  }
}

export default twoSum;
