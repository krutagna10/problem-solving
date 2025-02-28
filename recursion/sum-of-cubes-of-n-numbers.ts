function sumOfCubes(num: number): number {
  if (num === 1) {
    return 1;
  }
  return num ** 3 + sumOfCubes(num - 1);
}