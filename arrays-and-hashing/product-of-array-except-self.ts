function productExceptSelf(nums: number[]): number[] {
  if (nums.length === 0) {
   return [];
  }

  const forwardArr = new Array(nums.length);
  const backwardArr = new Array(nums.length);
  const resultArr = new Array(nums.length);

  forwardArr[0] = 1;
  for (let i = 1; i < nums.length; i++) {
   forwardArr[i] = forwardArr[i - 1] * nums[i - 1];
  }

  backwardArr[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
   backwardArr[i] = backwardArr[i + 1] * nums[i + 1];
  }
 
  for (let i = 0; i < forwardArr.length; i++) {
   resultArr[i] = forwardArr[i] * backwardArr[i];
  }

  return resultArr;
}