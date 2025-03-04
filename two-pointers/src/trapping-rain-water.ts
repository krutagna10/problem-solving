function getMaxLeft(height: number[]): number[] {
  const maxLeft = [0];
  let currMax = height[0];

  for (let i = 1; i < height.length; i++) {
    maxLeft.push(currMax);
    currMax = Math.max(currMax, height[i]);
  }

  return maxLeft;
}

function getMaxRight(height: number[]): number[] {
  const maxRight = [0];
  let currMax = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    maxRight.unshift(currMax);
    currMax = Math.max(currMax, height[i]);
  }

  return maxRight;
}

function getMinLeftRight(maxLeft: number[], maxRight: number[]): number[] {
  let minLeftRight = [];
  for (let i = 0; i < maxLeft.length; i++) {
    const currMin = Math.min(maxLeft[i], maxRight[i]);
    minLeftRight.push(currMin)
  }
  return minLeftRight;
}

function trap(height: number[]): number {
  const maxLeft = getMaxLeft(height);
  const maxRight = getMaxRight(height);
  const minLeftRight = getMinLeftRight(maxLeft, maxRight);

  let totalStoredWater = 0;
  for (let i = 0; i < height.length; i++) {
    let currStoredWater = minLeftRight[i] - height[i];
    if (currStoredWater > 0) {
      totalStoredWater += currStoredWater;
    }
  }

  return totalStoredWater;
};