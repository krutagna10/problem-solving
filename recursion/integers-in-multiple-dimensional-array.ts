function totalIntegers(arr: any): number {
  if (arr.length === 0) {
    return 0;
  }

  let total = 0;
  const firstElement = arr.shift();
  if (Array.isArray(firstElement)) {
    total += totalIntegers(firstElement);
  } else {
    total++;
  }
  return total + totalIntegers(arr);
}
