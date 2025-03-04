/**
 * @param {number[]} nums
 * @returns {number}
 * @time O(n)
 * @space O(1)
 */
function removeDuplicates(nums: number[]): number {
  let left = 0;
  
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
    console.log({ left, right});
  }

  return left + 1;
}

export default removeDuplicates;