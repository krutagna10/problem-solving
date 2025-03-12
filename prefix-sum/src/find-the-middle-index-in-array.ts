/**
 * Finds the leftmost middleIndex with sum on both its sides equal
 * @param {number[]} nums - Array of integers
 * @returns {number} - The leftmost middleIndex
 * @time O(n)
 * @space O(1)
 */
function findMiddleIndex(nums: number[]): number {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;  
};

export default findMiddleIndex;