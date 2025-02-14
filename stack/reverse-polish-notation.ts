import Stack from "../data-structures/stack/stack";

function calculate(num1: number, num2: number, operand: string) {
  switch (operand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return Math.trunc(num1 / num2);
    default:
      throw new Error("Invalid Case");
  }
}

function evalRPN(tokens: string[]): number {
  let stack = new Stack<number>();

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      let result = calculate(num1, num2, token);
      stack.push(result);
    }
  }

  return stack.pop();
}

