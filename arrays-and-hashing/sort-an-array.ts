function merge(nums: number[], low: number, mid: number, high: number): void {
  let i = low;
  let j = mid + 1;
  let k = 0;
  const combinedNums = new Array(high - low + 1);

  while (i <= mid && j <= high) {
    if (nums[i] < nums[j]) {
      combinedNums[k++] = nums[i++];
    } else {
      combinedNums[k++] = nums[j++];
    }
  }

  while (i <= mid) {
    combinedNums[k++] = nums[i++];
  }

  while (j <= high) {
    combinedNums[k++] = nums[j++];
  }

  for (let i = low; i <= high; i++) {
    nums[i] = combinedNums[i - low];
  }
}

function mergeSort(nums: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const mid = Math.floor((low + high) / 2);
  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);
  merge(nums, low, mid, high);
}

function sortArray(nums: number[]): number[] {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}
