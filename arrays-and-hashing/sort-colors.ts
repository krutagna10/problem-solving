function swap(nums: number[], index1: number, index2: number): void {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}

function sortColors(nums: number[]): void {
  let index = 0;
  let left = 0;
  let right = nums.length - 1;

  while (index <= right) {
    if (nums[index] === 0) {
      swap(nums, index, left);
      left++;
      index++;
    } else if (nums[index] === 2) {
      swap(nums, index, right);
      right--;
    } else {
      index++;
    }
  }
}
