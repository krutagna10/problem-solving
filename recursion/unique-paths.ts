function uniquePaths(m:number, n: number): number {
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m, n - 1) + uniquePaths(m - 1, n);
}
