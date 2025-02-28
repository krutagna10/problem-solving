function printTillN(limit: number): void {
  function printRecursive(current: number): void {
    if (current > limit) {
      return;
    }
    console.log(current);
    printRecursive(current + 1);
  }
  printRecursive(1);
}
