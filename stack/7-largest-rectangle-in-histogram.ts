class Stack<Type> {
  items: Type[];
  
  constructor() {
    this.items = []
  }

  push(value: Type): void {
    this.items.push(value);
  }

  pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }

    return this.items.pop() as Type;
  }

  peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }

    return this.items[this.size() - 1];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.items.length;
  }
}

function largestRectangleArea(heights: number[]): number {
  let stack = new Stack<number[]>();
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let pushbackIndex = i;
    while (stack.size() > 0 && stack.peek()[1] > heights[i]){
      const [index, height] = stack.pop();
      const currArea = (i - index) * height;
      maxArea = Math.max(maxArea, currArea);
      pushbackIndex = index;
    }
    stack.push([pushbackIndex, heights[i]]);
  }

  const stackLen = stack.size();
  for (let i = 0; i < stackLen; i++) {
    const [index, height] = stack.pop();
    console.log({ index, height });
    const currArea = (heights.length - index) * height;
    maxArea = Math.max(maxArea, currArea);
  }

  return maxArea;
};

console.log(largestRectangleArea([1, 1]));