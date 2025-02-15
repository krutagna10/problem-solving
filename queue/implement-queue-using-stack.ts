import Stack from "../data-structures/stack/stack";

class TransferableStack extends Stack<number> {
   static transfer(
    sourceStack: Stack<number>,
    destinationStack: Stack<number>,
    length: number
  ) {
    while (sourceStack.size() > length) {
      destinationStack.push(sourceStack.pop());
    }
  }
}

class MyQueue {
  private stack1: TransferableStack;
  private stack2: TransferableStack;

  constructor() {
    this.stack1 = new TransferableStack();
    this.stack2 = new TransferableStack();
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    TransferableStack.transfer(this.stack1, this.stack2, 1);
    const removedElement = this.stack1.pop();
    TransferableStack.transfer(this.stack2, this.stack1, 0);
    return removedElement;
  }

  peek(): number {
    TransferableStack.transfer(this.stack1, this.stack2, 1);
    const peekElement = this.stack1.pop();
    this.stack2.push(peekElement);
    TransferableStack.transfer(this.stack2, this.stack1, 0);
    return peekElement;
  }

  empty(): boolean {
    return this.stack1.isEmpty();
  }
}
