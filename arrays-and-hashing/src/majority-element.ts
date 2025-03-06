function majorityElement(nums: number[]): number {
  let majorityElement = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      majorityElement = num;
    }
    majorityElement === num ? count++ : count--;
  }
  
  return majorityElement;
}