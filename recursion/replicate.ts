function replicate(repetition: number, num: number): number[] {
  if (repetition <= 0) {
    return [];
  }
  return [num].concat(replicate(repetition - 1, num));
}
