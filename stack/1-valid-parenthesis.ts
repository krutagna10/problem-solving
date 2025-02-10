import Stack from "../data-structures/stack/stack";

function isValid(s: string): boolean {
  let matchingBrackets = new Map<string, string>();
  matchingBrackets.set(")", "(");
  matchingBrackets.set("]", "[");
  matchingBrackets.set("}", "{");

  let stack = new Stack();

  for (const char of s) {
    if (matchingBrackets.has(char)) {
      if (stack.size() > 0 && stack.peek() === matchingBrackets.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.isEmpty();
};
