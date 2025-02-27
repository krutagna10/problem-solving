function calculatePower(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }
  return base * calculatePower(base, exponent - 1);
}
