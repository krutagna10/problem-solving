/**
 * Checks whether any value at least twice in the array
 * @param {number[]} nums - Array of integers
 * @returns {boolean} - `true` is any value appears twice in the array, `false` otherwise
 * @time O(n)
 * @space O(n)
 */
function containsDuplicate(nums: number[]): boolean {
  let set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}

export default containsDuplicate;