function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  
  const fibNums = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
