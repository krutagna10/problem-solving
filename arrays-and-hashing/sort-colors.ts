function sortColors(nums: number[]): void {
  const counts = new Array(3).fill(0);
  for (const num of nums) {
    counts[num]++;
  }

  let start = 0;
  for (let i = 0; i < counts.length; i++) {
    const newNums = new Array(counts[i]).fill(i);
    nums.splice(start, counts[i], ...newNums);
    start += counts[i];
  }
}