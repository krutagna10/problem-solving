function sumSquared(arr: any): number {
  let total = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      total += sumSquared(item);
    } else {
      total += item * item;
    }
  }
  return total;
}

