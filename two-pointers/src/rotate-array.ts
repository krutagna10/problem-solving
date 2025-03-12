/**
 * Rotates the array right by `k` steps
 * @param {number[]} nums - Array of integers
 * @param {number} k - Integer k
 * @returns {void}
 * @time O()
 * @space O()
 */
function rotate(nums: number[], k: number): void {
  debugger;
  const copyNums = [...nums];
  for (let i = 0; i < nums.length; i++) {
    const shiftedIndex = i >= k ? i - k : copyNums.length - k + i;
    nums[i] = copyNums[shiftedIndex];
  }
};

export default rotate;