function printGFG(num: number): void {
  if (num === 0) {
    return;
  }
  console.log("GFG");
  printGFG(num - 1);
}
