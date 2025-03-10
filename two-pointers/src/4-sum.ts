/**
 * Calculates all the unique quadruplets which sum to target
 * @param {number[]} nums - Array of integers
 * @param {number} target - The target integer
 * @returns {number[][]} - Array of unique quadruplets which sum to target
 * @time O(n^3)
 * @space O(n)
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const quadruplets = [];

  function kSUm(k: number, start: number, target: number) {
    if (k !== 2)  {
      
    }
  }
}



export default fourSum;
