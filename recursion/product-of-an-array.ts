function productofArray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productofArray(arr.slice(1));
}
