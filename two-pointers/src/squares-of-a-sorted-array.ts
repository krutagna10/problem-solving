/**
 * Calculates the squares of each number in a sorted array
 * @param {number[]} nums - Sorted array of numbers
 * @returns {number[]} - Array of square of each number sorted in non-decreasing order
 * @time O(n)
 * @space O(n)
 */
function sortedSquares(nums: number[]): number[] {
  const squaredNums = new Array(nums.length);
  let maxIndex = nums.length - 1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;
    if (leftSquare > rightSquare) {
      squaredNums[maxIndex] = leftSquare;
      left++;
    } else {
      squaredNums[maxIndex] = rightSquare;
      right--;
    }
    maxIndex--;
  }
  return squaredNums;
}

export default sortedSquares;
