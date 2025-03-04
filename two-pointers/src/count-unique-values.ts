/**
 * @param {number[]} nums
 * @returns {number}
 * @time O(n)
 * @space O(1)
 */
function countUniqueValues(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 1;
  let uniqueValues = 1;

  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      left = right;
      right = left + 1;
      uniqueValues++
    }
  }

  return uniqueValues;
}

export default countUniqueValues;