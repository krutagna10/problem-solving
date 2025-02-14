import Stack from "../data-structures/stack/stack";

function getArea(width: number, height: number) {
  return width * height;
}

function largestRectangleArea(heights: number[]): number {
  let stack = new Stack<number[]>();
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let pushbackIndex = i;
    while (stack.size() > 0 && stack.peek()[1] > heights[i]){
      const [index, height] = stack.pop();
      const currArea = getArea(i - index, height);
      maxArea = Math.max(maxArea, currArea);
      pushbackIndex = index;
    }
    stack.push([pushbackIndex, heights[i]]);
  }

  while (stack.size() > 0) {
    const [index, height] = stack.pop();
    const currArea = getArea(heights.length - index, height);
    maxArea = Math.max(maxArea, currArea);
  }

  return maxArea;
};

console.log(largestRectangleArea([1, 1]));