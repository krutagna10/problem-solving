function printNTimes(num: number): void {
  if (num === 0) {
    return;
  }
  console.log(`Hello World`);;
  printNTimes(num - 1);
}
