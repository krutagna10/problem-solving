interface Item {
  index: number;
  temperature: number;
}
class Stack {
  items: Item[];

  constructor() {
    this.items = [];
  }

  push(index: number, temperature: number): void {
    this.items.push({ index, temperature });
  }

  pop(): Item {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.items.pop() as Item;
  }

  peek(): Item {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.items[this.size() - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

function dailyTemperatures(temperatures: number[]): number[] {
  const stack = new Stack();
  const answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.size() > 0 && stack.peek().temperature < temperatures[i]) {
      const { index } = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i, temperatures[i]);
  }

  return answer;
}
