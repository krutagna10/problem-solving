class NumArray {
  nums: number[];
  prefixSum: number[];
  constructor(nums: number[]) {
    this.nums = nums;  
    this.prefixSum = this.calculatePrefixSum(nums);
  }

  calculatePrefixSum(nums: number[]): number[] {
    const prefixSum = []
    let currSum = 0;
    for (const num of nums) {
      currSum += num;
      prefixSum.push(num);
    }
    return prefixSum;
  }

  sumRange(left: number, right: number): number {
    if (left === 0 || left === right) {
      return this.prefixSum[right];
    } 
    return this.prefixSum[right] - this.prefixSum[left - 1];
  }
}




