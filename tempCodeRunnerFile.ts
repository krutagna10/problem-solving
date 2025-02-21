function collatz(n: number) {
  console.log(n);
  if (n === 1) {
    return;
  }

  if (n % 2 === 0) {
    collatz(n / 2);
  } else {
    collatz(3 * n + 1);
  }
}

collatz(3);