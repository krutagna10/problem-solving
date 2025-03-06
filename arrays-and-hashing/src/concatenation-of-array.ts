/**
 * @param {number[]} nums
 * @returns {number[]}
 * @time O(n)
 * @space O(n) 
 */
function getConcatenation(nums: number[]): number[] {
  let ans = [];
  for (let i = 0; i < nums.length * 2; i++) {
    ans.push(nums[i % nums.length]);
  }
  return ans;
}

export default getConcatenation;
