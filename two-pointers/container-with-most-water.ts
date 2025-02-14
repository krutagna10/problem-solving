function maxArea(height: number[]): number {
  let maxArea = Number.MIN_SAFE_INTEGER;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let length = r - l; 
    let breadth = Math.min(height[l], height[r]);
    let currArea = length * breadth;
    maxArea = Math.max(maxArea, currArea);
    height[l] > height[r] ? r-- : l++;
  }

  return maxArea;
};